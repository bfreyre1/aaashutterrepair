import { relayQuoWebhook } from "@/lib/quo-webhook-relay";

export const runtime = "nodejs";

export async function GET() {
  return Response.json({ ok: true, service: "quo-post-call-relay" });
}

export async function POST(request: Request) {
  return relayQuoWebhook(request, {
    url: process.env.POST_CALL_WEBHOOK_URL,
    auth: process.env.POST_CALL_WEBHOOK_AUTH,
    urlEnv: "POST_CALL_WEBHOOK_URL",
    authEnv: "POST_CALL_WEBHOOK_AUTH",
    name: "post-call",
  });
}
