import type { AttributionFields } from "@/lib/attribution";
import { toE164UsPhone, type QuoteFormValues } from "@/lib/quote";

export const SOFT_INTAKE_MISSING_FIELDS = ["address", "window"] as const;
export const SOFT_INTAKE_NEXT_FIELD = "address";

export type SoftIntakeWakeInput = {
  values: QuoteFormValues;
  attribution: AttributionFields;
  customerId: string;
  jobId: string;
};

export type SoftIntakePayload = {
  source: "website_form";
  text: "Website quote submitted";
  from: string;
  name: string;
  email: string;
  city: string;
  jobType: string;
  description: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  landing_page: string;
  customerId: string;
  jobId: string;
  missing_fields: string[];
  next_field: string;
};

export function buildSoftIntakePayload(
  input: SoftIntakeWakeInput,
): SoftIntakePayload | null {
  const from = toE164UsPhone(input.values.phone);
  if (!from) {
    return null;
  }

  return {
    source: "website_form",
    text: "Website quote submitted",
    from,
    name: input.values.name,
    email: input.values.email,
    city: input.values.city,
    jobType: input.values.jobType,
    description: input.values.description,
    gclid: input.attribution.gclid,
    gbraid: input.attribution.gbraid,
    wbraid: input.attribution.wbraid,
    utm_source: input.attribution.utm_source,
    utm_medium: input.attribution.utm_medium,
    utm_campaign: input.attribution.utm_campaign,
    utm_term: input.attribution.utm_term,
    utm_content: input.attribution.utm_content,
    landing_page: input.attribution.landing_page,
    customerId: input.customerId,
    jobId: input.jobId,
    missing_fields: [...SOFT_INTAKE_MISSING_FIELDS],
    next_field: SOFT_INTAKE_NEXT_FIELD,
  };
}

/**
 * Wake AAA soft-intake after a Kickserv quote. Failures are logged only —
 * the website quote is already in Kickserv.
 */
export async function wakeSoftIntake(input: SoftIntakeWakeInput): Promise<void> {
  const url = process.env.SOFT_INTAKE_WEBHOOK_URL?.trim() ?? "";
  const auth = process.env.SOFT_INTAKE_WEBHOOK_AUTH?.trim() ?? "";

  if (!url || !auth) {
    console.error(
      "Soft-intake wake skipped: set SOFT_INTAKE_WEBHOOK_URL and SOFT_INTAKE_WEBHOOK_AUTH.",
    );
    return;
  }

  const payload = buildSoftIntakePayload(input);
  if (!payload) {
    console.error("Soft-intake wake skipped: could not normalize phone to E.164.");
    return;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      console.error(
        `Soft-intake wake failed (${response.status}):`,
        body.slice(0, 500) || "(empty body)",
      );
    }
  } catch (error) {
    console.error("Soft-intake wake failed:", error);
  }
}
