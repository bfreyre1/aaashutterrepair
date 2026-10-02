import { chooseMissedCallPath } from "@/lib/quo-sona-fastpath";
import { relayQuoWebhook, type QuoWebhookRelayConfig } from "@/lib/quo-webhook-relay";

export const runtime = "nodejs";

function missedCallRelay(): QuoWebhookRelayConfig {
  return {
    url: process.env.MISSED_CALL_WEBHOOK_URL,
    auth: process.env.MISSED_CALL_WEBHOOK_AUTH,
    urlEnv: "MISSED_CALL_WEBHOOK_URL",
    authEnv: "MISSED_CALL_WEBHOOK_AUTH",
    name: "missed-call",
  };
}

function postCallSonaRelay(): QuoWebhookRelayConfig {
  return {
    url: process.env.POST_CALL_WEBHOOK_URL,
    auth: process.env.POST_CALL_WEBHOOK_AUTH,
    urlEnv: "POST_CALL_WEBHOOK_URL",
    authEnv: "POST_CALL_WEBHOOK_AUTH",
    name: "post-call-sona-fastpath",
  };
}

export async function GET() {
  return Response.json({ ok: true, service: "quo-missed-call-relay" });
}

export async function POST(request: Request) {
  const choice = await chooseMissedCallPath(request, process.env);
  console.log(`Quo missed-call relay path=${choice.path} reason=${choice.reason}`);
  return relayQuoWebhook(
    request,
    choice.path === "post-call-sona-fastpath" ? postCallSonaRelay() : missedCallRelay(),
  );
}
