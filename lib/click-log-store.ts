import { get, list, put } from "@vercel/blob";
import type { ClickLogRecord } from "@/lib/attribution";

const PREFIX = "click-log";

export function blobConfigured(): boolean {
  return Boolean(
    process.env.BLOB_READ_WRITE_TOKEN?.trim() || process.env.BLOB_STORE_ID?.trim(),
  );
}

/** Folder date is the America/Los_Angeles calendar date of click_time. */
export function clickLogFolder(record: ClickLogRecord): string {
  return record.click_time.slice(0, 10);
}

export async function writeClickRecord(
  record: ClickLogRecord,
): Promise<"blob" | "log"> {
  const line = JSON.stringify(record);
  if (!blobConfigured()) {
    console.log(`CLICKLOG ${line}`);
    return "log";
  }

  const stamp = record.click_ts.replace(/[:.]/g, "-");
  const rand = Math.random().toString(16).slice(2, 10);
  const pathname = `${PREFIX}/${clickLogFolder(record)}/${stamp}-${rand}.json`;

  try {
    await put(pathname, line, {
      access: "private",
      contentType: "application/json",
      addRandomSuffix: false,
      cacheControlMaxAge: 60 * 60 * 24 * 90,
    });
    return "blob";
  } catch (error) {
    console.error("click-log blob write failed:", safeError(error));
    console.log(`CLICKLOG ${line}`);
    return "log";
  }
}

export async function readClickRecords(date: string): Promise<ClickLogRecord[]> {
  const records: ClickLogRecord[] = [];
  let cursor: string | undefined;

  do {
    const page = await list({
      prefix: `${PREFIX}/${date}/`,
      cursor,
      limit: 1000,
    });
    for (const blob of page.blobs) {
      const file = await get(blob.pathname, { access: "private", useCache: false });
      if (!file || file.statusCode !== 200) {
        continue;
      }
      const text = await new Response(file.stream).text();
      try {
        const parsed = JSON.parse(text) as ClickLogRecord;
        if (parsed && typeof parsed === "object") {
          records.push(parsed);
        }
      } catch {
        // Skip a corrupt object rather than failing the whole day.
      }
    }
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);

  records.sort((a, b) => a.click_ts.localeCompare(b.click_ts));
  return records;
}

function safeError(error: unknown): string {
  const message = error instanceof Error ? error.message : "unknown";
  return message.replace(/vercel_blob_\w+/g, "[redacted]").slice(0, 180);
}
