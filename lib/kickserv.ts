import { toTenDigitUsPhone, type QuoteFormValues } from "@/lib/quote";

export const KICKSERV_ACCOUNT_DEFAULT = "c56cad";
export const KICKSERV_WEBSITE_SOURCE_ID = "641638";
export const KICKSERV_SERVICE_ESTIMATE_JOB_TYPE_ID = "745511";

export class KickservError extends Error {
  status: number;

  constructor(message: string, status = 502) {
    super(message);
    this.name = "KickservError";
    this.status = status;
  }
}

type KickservConfig = {
  account: string;
  token: string;
};

export type QuoteLeadResult = {
  customerId: string;
  jobId: string;
  createdCustomer: boolean;
};

function kickservConfig(): KickservConfig {
  const token = process.env.KICKSERV_API_TOKEN?.trim() ?? "";
  if (!token) {
    throw new KickservError(
      "Quote submissions are temporarily unavailable. Please call 818-392-8584.",
      503,
    );
  }
  return {
    account: process.env.KICKSERV_ACCOUNT?.trim() || KICKSERV_ACCOUNT_DEFAULT,
    token,
  };
}

function xmlEscape(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function xmlTag(name: string, value: string): string {
  return `<${name}>${xmlEscape(value)}</${name}>`;
}

function firstTag(xml: string, names: string[]): string | null {
  for (const name of names) {
    const re = new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, "i");
    const match = xml.match(re);
    if (!match?.[1]) {
      continue;
    }
    const text = match[1].replace(/<[^>]+>/g, "").trim();
    if (text) {
      return text;
    }
  }
  return null;
}

function extractResourceIds(xml: string, resource: string): string[] {
  const re = new RegExp(
    `<${resource}(?:\\s[^>]*)?>([\\s\\S]*?)</${resource}>`,
    "gi",
  );
  const ids: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = re.exec(xml)) !== null) {
    const id = firstTag(match[1], ["id"]);
    if (id && /^\d+$/.test(id)) {
      ids.push(id);
    }
  }
  return ids;
}

function extractErrors(xml: string): string[] {
  const re = /<error(?:\s[^>]*)?>([\s\S]*?)<\/error>/gi;
  const errors: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = re.exec(xml)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "").trim();
    if (text) {
      errors.push(text);
    }
  }
  return errors;
}

async function kickservRequest(
  config: KickservConfig,
  method: "GET" | "POST",
  path: string,
  body?: string,
): Promise<{ status: number; xml: string }> {
  const url = `https://app.kickserv.com/${config.account}${path}`;
  const headers: Record<string, string> = {
    Authorization: `Basic ${Buffer.from(`${config.token}:${config.token}`).toString("base64")}`,
    Accept: "application/xml",
  };
  if (body !== undefined) {
    headers["Content-Type"] = "application/xml";
  }

  let response: Response;
  try {
    response = await fetch(url, {
      method,
      headers,
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
  } catch (error) {
    const timedOut = error instanceof Error && error.name === "TimeoutError";
    throw new KickservError(
      timedOut
        ? "The shop system timed out. Please call 818-392-8584 or try again."
        : "We could not reach the shop system. Please call 818-392-8584 or try again.",
      502,
    );
  }

  const xml = await response.text();
  return { status: response.status, xml };
}

function failFromKickserv(status: number, xml: string, action: string): never {
  if (status === 401 || status === 403) {
    throw new KickservError(
      "Quote submissions are temporarily unavailable. Please call 818-392-8584.",
      502,
    );
  }
  const details = extractErrors(xml);
  if (details.length > 0) {
    console.error(`Kickserv ${action} failed (${status}):`, details.join("; "));
  } else {
    console.error(
      `Kickserv ${action} failed (${status}):`,
      xml.slice(0, 500) || "(empty body)",
    );
  }
  throw new KickservError(
    "We could not create your estimate in the shop system. Please call 818-392-8584 or try again.",
    502,
  );
}

async function searchCustomers(
  config: KickservConfig,
  query: Record<string, string>,
): Promise<string[]> {
  const params = new URLSearchParams(query);
  const { status, xml } = await kickservRequest(
    config,
    "GET",
    `/customers.xml?${params.toString()}`,
  );
  if (status === 404) {
    return [];
  }
  if (!status.toString().startsWith("2")) {
    failFromKickserv(status, xml, "customer search");
  }
  return extractResourceIds(xml, "customer");
}

async function findCustomerId(
  config: KickservConfig,
  values: QuoteFormValues,
  phone: string,
): Promise<string | null> {
  const byPhone = await searchCustomers(config, { phone_number: phone });
  if (byPhone.length > 0) {
    return byPhone[0];
  }

  const byEmail = await searchCustomers(config, { email: values.email });
  if (byEmail.length > 0) {
    return byEmail[0];
  }

  const byName = await searchCustomers(config, { name: values.name });
  if (byName.length === 1) {
    return byName[0];
  }

  return null;
}

function customerXml(values: QuoteFormValues, phone: string): string {
  const notes = [
    `Website quote form — ${values.jobType} in ${values.city}`,
    values.description,
  ].join("\n\n");

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<customer>`,
    xmlTag("name", values.name),
    xmlTag("phone_number", phone),
    xmlTag("mobile", phone),
    xmlTag("email", values.email),
    xmlTag("city", values.city),
    xmlTag("service_city", values.city),
    xmlTag("customer_source_id", KICKSERV_WEBSITE_SOURCE_ID),
    xmlTag("origin", "Website quote form"),
    xmlTag("notes", notes),
    `</customer>`,
  ].join("");
}

function jobXml(values: QuoteFormValues, customerId: string): string {
  const name = `Website estimate: ${values.jobType} in ${values.city}`;
  const description = [
    `City: ${values.city}`,
    `Job type: ${values.jobType}`,
    "",
    values.description,
  ].join("\n");
  const notes = [
    "Website quote form",
    `City: ${values.city}`,
    `Job type: ${values.jobType}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    "",
    values.description,
  ].join("\n");

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<job>`,
    xmlTag("customer_id", customerId),
    xmlTag("job_type_id", KICKSERV_SERVICE_ESTIMATE_JOB_TYPE_ID),
    xmlTag("estimate", "true"),
    xmlTag("name", name),
    xmlTag("description", description),
    xmlTag("notes", notes),
    `</job>`,
  ].join("");
}

async function createCustomer(
  config: KickservConfig,
  values: QuoteFormValues,
  phone: string,
): Promise<string> {
  const { status, xml } = await kickservRequest(
    config,
    "POST",
    "/customers.xml",
    customerXml(values, phone),
  );
  if (!status.toString().startsWith("2")) {
    failFromKickserv(status, xml, "customer create");
  }
  const id = extractResourceIds(xml, "customer")[0] ?? firstTag(xml, ["id"]);
  if (!id || !/^\d+$/.test(id)) {
    console.error("Kickserv customer create returned no id:", xml.slice(0, 500));
    throw new KickservError(
      "We could not create your estimate in the shop system. Please call 818-392-8584 or try again.",
      502,
    );
  }
  return id;
}

async function createEstimateJob(
  config: KickservConfig,
  values: QuoteFormValues,
  customerId: string,
): Promise<string> {
  const body = jobXml(values, customerId);
  const nested = await kickservRequest(
    config,
    "POST",
    `/customers/${customerId}/jobs.xml`,
    body,
  );

  let status = nested.status;
  let xml = nested.xml;

  if (status === 404 || status === 405) {
    const fallback = await kickservRequest(config, "POST", "/jobs.xml", body);
    status = fallback.status;
    xml = fallback.xml;
  }

  if (!status.toString().startsWith("2")) {
    failFromKickserv(status, xml, "estimate job create");
  }

  const id = extractResourceIds(xml, "job")[0] ?? firstTag(xml, ["id"]);
  if (!id || !/^\d+$/.test(id)) {
    console.error("Kickserv job create returned no id:", xml.slice(0, 500));
    throw new KickservError(
      "We could not create your estimate in the shop system. Please call 818-392-8584 or try again.",
      502,
    );
  }
  return id;
}

export async function createQuoteLead(
  values: QuoteFormValues,
): Promise<QuoteLeadResult> {
  const config = kickservConfig();
  const phone = toTenDigitUsPhone(values.phone);
  if (!phone) {
    throw new KickservError("Enter a 10-digit phone number so we can text you.", 400);
  }

  const existingId = await findCustomerId(config, values, phone);
  const customerId = existingId ?? (await createCustomer(config, values, phone));
  const jobId = await createEstimateJob(config, values, customerId);

  return {
    customerId,
    jobId,
    createdCustomer: !existingId,
  };
}
