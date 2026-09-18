import { toE164UsPhone, type QuoteFormValues } from "@/lib/quote";

export type SoftIntakeWakeBody = {
  source: "website_form";
  text: string;
  from: string;
  name: string;
  email: string;
  city: string;
  address: string;
  jobType: string;
  description: string;
  customerId: string;
  jobId: string;
  missing_fields: string[];
  next_field: string;
};

export type SoftIntakeLeadIds = {
  customerId: string;
  jobId: string;
};

/**
 * Soft-intake is read-first: never re-ask known fields.
 * Address now comes from the website form; the usual next ask is
 * schedule window (day/DATE + time A/B/C on the Quo side).
 */
export function softIntakeMissingFields(address: string): {
  missing_fields: string[];
  next_field: string;
} {
  const missing_fields: string[] = [];
  if (!address.trim()) {
    missing_fields.push("address");
  }
  missing_fields.push("window");
  return {
    missing_fields,
    next_field: missing_fields[0] ?? "window",
  };
}

export function buildSoftIntakeWakeBody(
  values: QuoteFormValues,
  ids: SoftIntakeLeadIds,
): SoftIntakeWakeBody | null {
  const from = toE164UsPhone(values.phone);
  if (!from) {
    return null;
  }

  const { missing_fields, next_field } = softIntakeMissingFields(values.address);
  return {
    source: "website_form",
    text: "Website quote submitted",
    from,
    name: values.name,
    email: values.email,
    city: values.city,
    address: values.address,
    jobType: values.jobType,
    description: values.description,
    customerId: ids.customerId,
    jobId: ids.jobId,
    missing_fields,
    next_field,
  };
}

/**
 * Fire-and-forget wake of Quo MAIN soft-intake (Zapier → Cursor webhook).
 * Never throws — callers must still return the user-facing quote success.
 */
export async function wakeSoftIntake(body: SoftIntakeWakeBody): Promise<void> {
  const url = process.env.SOFT_INTAKE_WEBHOOK_URL?.trim();
  if (!url) {
    console.warn("Soft-intake wake skipped: SOFT_INTAKE_WEBHOOK_URL is not set.");
    return;
  }

  const auth = process.env.SOFT_INTAKE_WEBHOOK_AUTH?.trim();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (auth) {
    headers.Authorization = auth;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error(
        `Soft-intake wake failed (${response.status}):`,
        text.slice(0, 500) || "(empty body)",
      );
    }
  } catch (error) {
    console.error("Soft-intake wake error:", error);
  }
}
