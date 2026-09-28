import { relayQuoWebhook } from "@/lib/quo-webhook-relay";

export const runtime = "nodejs";

export async function GET() {
  return Response.json({ ok: true, service: "quo-missed-call-relay" });
}

export async function POST(request: Request) {
  return relayQuoWebhook(request, {
    url: process.env.MISSED_CALL_WEBHOOK_URL,
    auth: process.env.MISSED_CALL_WEBHOOK_AUTH,
    urlEnv: "MISSED_CALL_WEBHOOK_URL",
    authEnv: "MISSED_CALL_WEBHOOK_AUTH",
    name: "missed-call",
  });
}
