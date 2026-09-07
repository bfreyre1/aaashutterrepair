import { KickservError, createQuoteLead } from "@/lib/kickserv";
import {
  normalizeQuoteForm,
  readQuoteFormBody,
  validateQuoteForm,
} from "@/lib/quote";

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

  try {
    const lead = await createQuoteLead(values);
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
