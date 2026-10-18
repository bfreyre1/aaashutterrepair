import { createHash, timingSafeEqual } from "node:crypto";
import {
  MAX_CLICK_BODY_BYTES,
  buildClickRecord,
  clicksToCsv,
  isIsoDate,
} from "@/lib/attribution";
import {
  blobConfigured,
  readClickRecords,
  writeClickRecord,
} from "@/lib/click-log-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WINDOW_MS = 60_000;
const MAX_HITS = 40;
const hits = new Map<string, number[]>();

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for") ?? "";
  const ip =
    forwarded.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  return createHash("sha256").update(ip).digest("hex").slice(0, 20);
}

function rateLimited(request: Request): boolean {
  const key = clientKey(request);
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((stamp) => now - stamp < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    hits.clear();
    hits.set(key, recent);
  }
  return false;
}

function ipCountry(request: Request): string {
  const value = (request.headers.get("x-vercel-ip-country") ?? "").toUpperCase();
  return /^[A-Z]{2}$/.test(value) ? value : "";
}

function keysMatch(provided: string, expected: string): boolean {
  if (!provided || !expected) {
    return false;
  }
  const left = createHash("sha256").update(provided).digest();
  const right = createHash("sha256").update(expected).digest();
  return timingSafeEqual(left, right);
}

export async function POST(request: Request) {
  if (rateLimited(request)) {
    return Response.json({ error: "Too many clicks." }, { status: 429 });
  }

  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > MAX_CLICK_BODY_BYTES) {
    return Response.json({ error: "Payload too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return Response.json({ error: "Send JSON." }, { status: 400 });
  }

  const built = buildClickRecord(body, {
    now: new Date(),
    userAgent: request.headers.get("user-agent") ?? "",
    ipCountry: ipCountry(request),
  });
  if (!built.ok) {
    return Response.json({ error: built.error }, { status: 400 });
  }

  await writeClickRecord(built.record);
  return new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } });
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const expected = process.env.CLICK_LOG_KEY?.trim() ?? "";
  const provided = url.searchParams.get("key") ?? "";
  if (!keysMatch(provided, expected)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const date = url.searchParams.get("date") ?? "";
  if (!isIsoDate(date)) {
    return Response.json({ error: "Pass date=YYYY-MM-DD." }, { status: 400 });
  }

  if (!blobConfigured()) {
    return Response.json(
      {
        error:
          "No blob store is configured. Click lines are in runtime logs, prefixed CLICKLOG.",
      },
      { status: 503 },
    );
  }

  try {
    const records = await readClickRecords(date);
    const headers = { "Cache-Control": "private, no-store" };
    if (url.searchParams.get("format") === "csv") {
      return new Response(clicksToCsv(records), {
        headers: {
          ...headers,
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="click-log-${date}.csv"`,
        },
      });
    }
    return Response.json(records, { headers });
  } catch {
    console.error("click-log read failed");
    return Response.json({ error: "Could not read the click log." }, { status: 500 });
  }
}
