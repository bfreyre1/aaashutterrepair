import { CITY_LINKS, EMAIL, JOB_TYPES } from "@/lib/site";

export type QuoteFormValues = {
  name: string;
  phone: string;
  email: string;
  city: string;
  jobType: string;
  description: string;
};

export type QuoteFormErrors = Partial<Record<keyof QuoteFormValues, string>>;

const OTHER_CITY = "Other San Fernando Valley / LA";

export const QUOTE_CITIES = [
  ...CITY_LINKS.map((city) => city.label),
  OTHER_CITY,
] as const;

const CITY_SET = new Set<string>(QUOTE_CITIES);
const JOB_SET = new Set<string>(JOB_TYPES);

export function emptyQuoteForm(): QuoteFormValues {
  return {
    name: "",
    phone: "",
    email: "",
    city: "",
    jobType: "",
    description: "",
  };
}

/** 10-digit US number. Strips +1 / non-digits. Kickserv search fails on E.164. */
export function toTenDigitUsPhone(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    return digits.slice(1);
  }
  if (digits.length === 10) {
    return digits;
  }
  return null;
}

export function validateQuoteForm(values: QuoteFormValues): QuoteFormErrors {
  const errors: QuoteFormErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }
  if (!toTenDigitUsPhone(values.phone)) {
    errors.phone = "Enter a 10-digit phone number so we can text you.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.city || !CITY_SET.has(values.city)) {
    errors.city = "Choose your city.";
  }
  if (!values.jobType || !JOB_SET.has(values.jobType)) {
    errors.jobType = "Choose the type of job.";
  }
  if (values.description.trim().length < 10) {
    errors.description = "Describe what is broken (at least a sentence).";
  }
  return errors;
}

export function normalizeQuoteForm(values: QuoteFormValues): QuoteFormValues {
  return {
    name: values.name.trim(),
    phone: values.phone.trim(),
    email: values.email.trim(),
    city: values.city.trim(),
    jobType: values.jobType.trim(),
    description: values.description.trim(),
  };
}

export function readQuoteFormBody(body: unknown): QuoteFormValues | null {
  if (!body || typeof body !== "object") {
    return null;
  }
  const record = body as Record<string, unknown>;
  const read = (key: keyof QuoteFormValues): string =>
    typeof record[key] === "string" ? record[key] : "";
  return {
    name: read("name"),
    phone: read("phone"),
    email: read("email"),
    city: read("city"),
    jobType: read("jobType"),
    description: read("description"),
  };
}

export function quoteMailtoHref(values: QuoteFormValues): string {
  const subject = encodeURIComponent(
    `Estimate request: ${values.jobType} in ${values.city}`,
  );
  const body = encodeURIComponent(
    [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `City: ${values.city}`,
      `Job type: ${values.jobType}`,
      "",
      values.description,
    ].join("\n"),
  );
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}
