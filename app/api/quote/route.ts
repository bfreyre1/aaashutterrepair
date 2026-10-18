import { after } from "next/server";
import {
  attributionFieldsFromUnknown,
  attributionFromUnknown,
  buildClickRecord,
  cleanFullUrl,
  type AttributionFields,
} from "@/lib/attribution";
import { writeClickRecord } from "@/lib/click-log-store";
import { KickservError, createQuoteLead } from "@/lib/kickserv";
import {
  normalizeQuoteForm,
  readQuoteFormBody,
  validateQuoteForm,
} from "@/lib/quote";
import { SITE_URL } from "@/lib/site";
import { wakeSoftIntake } from "@/lib/soft-intake";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Send the quote form as JSON." }, { status: 400 });
  }

  const raw = readQuoteFormBody(body);
  if (!raw) {
    return Response.json({ error: "Send the quote form as JSON." }, { status: 400 });
  }

  const values = normalizeQuoteForm(raw);
  const errors = validateQuoteForm(values);
  if (Object.keys(errors).length > 0) {
    return Response.json(
      { error: "Check the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const attribution = attributionFieldsFromUnknown(body);
  const firstSeen = attributionFromUnknown(body)?.first_seen_ts ?? "";

  try {
    const lead = await createQuoteLead(values, attribution);
    after(() =>
      wakeSoftIntake({
        values,
        attribution,
        customerId: lead.customerId,
        jobId: lead.jobId,
      }),
    );
    await logQuoteClick(request, values.phone, attribution, firstSeen, body);
    return Response.json({
      ok: true,
      customerId: lead.customerId,
      jobId: lead.jobId,
    });
  } catch (error) {
    if (error instanceof KickservError) {
      return Response.json({ error: error.message }, { status: error.status });
    }
    console.error("Unexpected quote submit error:", error);
    return Response.json(
      {
        error:
          "We could not create your estimate in the shop system. Please call 818-392-8584 or try again.",
      },
      { status: 502 },
    );
  }
}

function quotePage(request: Request, body: unknown): string {
  const record =
    body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  const fromBody = typeof record.page === "string" ? cleanFullUrl(record.page) : "";
  if (fromBody) {
    return fromBody;
  }
  const referer = request.headers.get("referer");
  const fromReferer = referer ? cleanFullUrl(referer) : "";
  if (fromReferer) {
    return fromReferer;
  }
  return `${SITE_URL}/get-a-quote`;
}

function ipCountry(request: Request): string {
  const value = (request.headers.get("x-vercel-ip-country") ?? "").toUpperCase();
  return /^[A-Z]{2}$/.test(value) ? value : "";
}

async function logQuoteClick(
  request: Request,
  phone: string,
  attribution: AttributionFields,
  firstSeen: string,
  body: unknown,
): Promise<void> {
  try {
    const now = new Date();
    const built = buildClickRecord(
      {
        action: "form",
        event: "form",
        click_ts: now.toISOString(),
        page: quotePage(request, body),
        href: "",
        lead_phone: phone,
        ...attribution,
        first_seen_ts: firstSeen,
        user_agent: request.headers.get("user-agent") ?? "",
      },
      {
        now,
        userAgent: request.headers.get("user-agent") ?? "",
        ipCountry: ipCountry(request),
      },
    );
    if (!built.ok) {
      console.error("quote click log skipped:", built.error);
      return;
    }
    await writeClickRecord(built.record);
  } catch {
    console.error("quote click log failed");
  }
}
