/** First-party ad click ids. Empty values never replace a stored value. */
export const ATTR_COOKIE = "aaa_attr";
export const ATTR_MAX_AGE_SECONDS = 60 * 60 * 24 * 90;

export const ATTRIBUTION_FIELDS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "landing_page",
] as const;

const PARAM_FIELDS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type AttributionField = (typeof ATTRIBUTION_FIELDS)[number];
export type AttributionFields = Record<AttributionField, string>;

export type Attribution = AttributionFields & {
  first_seen_ts: string;
};

export const CLICK_ACTIONS = ["call", "text", "form"] as const;
export type ClickAction = (typeof CLICK_ACTIONS)[number];

export type ClickLogRecord = Attribution & {
  event_id: string;
  event: ClickAction;
  action: ClickAction;
  click_ts: string;
  click_time: string;
  page: string;
  href: string;
  user_agent: string;
  lead_phone: string;
  received_ts: string;
  ip_country: string;
};

export const CSV_COLUMNS = [
  "event_id",
  "gclid",
  "gbraid",
  "wbraid",
  "click_time",
  "click_ts",
  "received_ts",
  "action",
  "page",
  "lead_phone",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "landing_page",
] as const;

export const MAX_CLICK_BODY_BYTES = 2048;

const LA_TIME_ZONE = "America/Los_Angeles";

export function emptyAttributionFields(): AttributionFields {
  return {
    gclid: "",
    gbraid: "",
    wbraid: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    landing_page: "",
  };
}

export function emptyAttribution(): Attribution {
  return {
    ...emptyAttributionFields(),
    first_seen_ts: "",
  };
}

export function cleanToken(value: unknown, max: number): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, max);
}

/** Path only. Query strings stay out of landing_page. */
export function cleanPath(value: string): string {
  if (!value.startsWith("/") || value.startsWith("//")) {
    return "";
  }
  if (/[?#\\\s]/.test(value) || /[\u0000-\u001F]/.test(value)) {
    return "";
  }
  return value.slice(0, 300);
}

export function cleanFullUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > 500) {
    return "";
  }
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return "";
    }
    if (url.username || url.password) {
      return "";
    }
    return `${url.origin}${url.pathname}${url.search}`;
  } catch {
    return "";
  }
}

export function cleanIso(value: unknown): string {
  if (typeof value !== "string" || value.length > 40) {
    return "";
  }
  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) {
    return "";
  }
  return new Date(parsed).toISOString();
}

/** Digits only, US numbers as +1XXXXXXXXXX. Anything else becomes empty. */
export function normalizeLeadPhone(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) {
    return `+1${digits}`;
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }
  return "";
}

export function isIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

/**
 * America/Los_Angeles local time with the real offset for that instant.
 * Example: 2026-10-18 17:00:00-07:00
 */
export function formatClickTime(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: LA_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "longOffset",
  }).formatToParts(date);
  const pick = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";
  let hour = pick("hour");
  if (hour === "24") {
    hour = "00";
  }
  return `${pick("year")}-${pick("month")}-${pick("day")} ${hour}:${pick("minute")}:${pick("second")}${normalizeOffset(pick("timeZoneName"))}`;
}

function normalizeOffset(raw: string): string {
  const match = raw.match(/([+-])(\d{1,2})(?::(\d{2}))?/);
  if (!match) {
    return "-08:00";
  }
  return `${match[1]}${match[2].padStart(2, "0")}:${match[3] ?? "00"}`;
}

export function attributionFromUnknown(value: unknown): Attribution | null {
  if (!value || typeof value !== "object") {
    return null;
  }
  const record = value as Record<string, unknown>;
  const next = emptyAttribution();
  let any = false;
  for (const key of PARAM_FIELDS) {
    const clean = cleanToken(record[key], 180);
    if (clean) {
      next[key] = clean;
      any = true;
    }
  }
  const landing = cleanPath(cleanToken(record.landing_page, 300));
  if (landing) {
    next.landing_page = landing;
    any = true;
  }
  const firstSeen = cleanIso(record.first_seen_ts);
  if (firstSeen) {
    next.first_seen_ts = firstSeen;
    any = true;
  }
  return any ? next : null;
}

export function attributionFieldsFromUnknown(value: unknown): AttributionFields {
  const parsed = attributionFromUnknown(value);
  return {
    ...emptyAttributionFields(),
    gclid: parsed?.gclid ?? "",
    gbraid: parsed?.gbraid ?? "",
    wbraid: parsed?.wbraid ?? "",
    utm_source: parsed?.utm_source ?? "",
    utm_medium: parsed?.utm_medium ?? "",
    utm_campaign: parsed?.utm_campaign ?? "",
    utm_term: parsed?.utm_term ?? "",
    utm_content: parsed?.utm_content ?? "",
    landing_page: parsed?.landing_page ?? "",
  };
}

/** Last non-empty click id / utm wins. Landing page and first_seen stay first-touch. */
export function mergeAttribution(
  base: Attribution,
  overlay: Attribution | null,
): Attribution {
  if (!overlay) {
    return base;
  }
  const next = { ...base };
  for (const key of PARAM_FIELDS) {
    if (overlay[key]) {
      next[key] = overlay[key];
    }
  }
  if (!next.landing_page && overlay.landing_page) {
    next.landing_page = overlay.landing_page;
  }
  if (
    overlay.first_seen_ts &&
    (!next.first_seen_ts || overlay.first_seen_ts < next.first_seen_ts)
  ) {
    next.first_seen_ts = overlay.first_seen_ts;
  }
  return next;
}

export function readCookieAttribution(cookieHeader: string): Attribution | null {
  const parts = cookieHeader.split(";");
  for (const part of parts) {
    const trimmed = part.trim();
    const prefix = `${ATTR_COOKIE}=`;
    if (!trimmed.startsWith(prefix)) {
      continue;
    }
    try {
      return attributionFromUnknown(
        JSON.parse(safeDecode(trimmed.slice(prefix.length))),
      );
    } catch {
      return null;
    }
  }
  return null;
}

function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/** Read the cookie and localStorage copy. Safe to call in the browser only. */
export function readStoredAttribution(): Attribution {
  if (typeof window === "undefined") {
    return emptyAttribution();
  }
  let merged = emptyAttribution();
  try {
    const raw = window.localStorage.getItem(ATTR_COOKIE);
    if (raw) {
      merged = mergeAttribution(merged, attributionFromUnknown(JSON.parse(raw)));
    }
  } catch {
    // Private mode or a broken value should not break the form.
  }
  return mergeAttribution(merged, readCookieAttribution(document.cookie));
}

export function attributionNoteLines(fields: AttributionFields): string[] {
  return ATTRIBUTION_FIELDS.flatMap((key) => {
    const value = fields[key]?.trim();
    return value ? [`${key}: ${value}`] : [];
  });
}

type ServerClickContext = {
  now: Date;
  userAgent: string;
  ipCountry: string;
};

export function buildClickRecord(
  body: unknown,
  server: ServerClickContext,
): { ok: true; record: ClickLogRecord } | { ok: false; error: string } {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: "Send a click object." };
  }
  const record = body as Record<string, unknown>;
  const action = resolveAction(record.action, record.event);
  if (!action) {
    return { ok: false, error: "action must be call, text, or form." };
  }

  const clickDate = resolveClickDate(record.click_ts, server.now);
  const page = cleanClickPage(
    action,
    typeof record.page === "string" ? record.page : "",
  );
  if (!page) {
    return { ok: false, error: "page is invalid." };
  }
  const href = cleanHref(action, typeof record.href === "string" ? record.href : "");
  if (href === null) {
    return { ok: false, error: "href is invalid." };
  }

  const attr = attributionFromUnknown(record) ?? emptyAttribution();
  const userAgent =
    cleanToken(record.user_agent, 300) || cleanToken(server.userAgent, 300);
  const country = /^[A-Z]{2}$/.test(server.ipCountry) ? server.ipCountry : "";

  return {
    ok: true,
    record: {
      event_id: resolveEventId(record.event_id),
      event: action,
      action,
      click_ts: clickDate.toISOString(),
      click_time: formatClickTime(clickDate),
      page,
      href,
      gclid: attr.gclid,
      gbraid: attr.gbraid,
      wbraid: attr.wbraid,
      utm_source: attr.utm_source,
      utm_medium: attr.utm_medium,
      utm_campaign: attr.utm_campaign,
      utm_term: attr.utm_term,
      utm_content: attr.utm_content,
      landing_page: attr.landing_page,
      first_seen_ts: attr.first_seen_ts,
      user_agent: userAgent,
      lead_phone: action === "form" ? normalizeLeadPhone(record.lead_phone) : "",
      received_ts: server.now.toISOString(),
      ip_country: country,
    },
  };
}

const EVENT_ID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function resolveEventId(value: unknown): string {
  if (typeof value === "string" && EVENT_ID_RE.test(value.trim())) {
    return value.trim().toLowerCase();
  }
  return crypto.randomUUID();
}

function resolveAction(action: unknown, event: unknown): ClickAction | null {
  const parsedAction = parseAction(action);
  const parsedEvent = parseAction(event);
  if (parsedAction && parsedEvent && parsedAction !== parsedEvent) {
    return null;
  }
  return parsedAction ?? parsedEvent;
}

function parseAction(value: unknown): ClickAction | null {
  return value === "call" || value === "text" || value === "form" ? value : null;
}

function resolveClickDate(value: unknown, now: Date): Date {
  if (typeof value === "string") {
    const parsed = Date.parse(value);
    if (!Number.isNaN(parsed)) {
      const delta = parsed - now.getTime();
      if (delta < 10 * 60 * 1000 && delta > -2 * 24 * 60 * 60 * 1000) {
        return new Date(parsed);
      }
    }
  }
  return now;
}

function cleanClickPage(action: ClickAction, page: string): string {
  if (action === "form") {
    return cleanFullUrl(page);
  }
  return cleanPath(page.trim());
}

function cleanHref(action: ClickAction, href: string): string | null {
  if (action === "form") {
    return "";
  }
  const value = href.trim();
  if (!value || value.length > 300 || /[\u0000-\u001F\s]/.test(value)) {
    return null;
  }
  const lower = value.toLowerCase();
  if (action === "call" && !lower.startsWith("tel:")) {
    return null;
  }
  if (action === "text" && !lower.startsWith("sms:")) {
    return null;
  }
  return value;
}

function csvCell(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replaceAll('"', '""')}"`;
  }
  return value;
}

export function clicksToCsv(rows: ClickLogRecord[]): string {
  const header = CSV_COLUMNS.join(",");
  const lines = rows.map((row) =>
    CSV_COLUMNS.map((column) => csvCell(row[column] ?? "")).join(","),
  );
  return [header, ...lines].join("\n") + "\n";
}
