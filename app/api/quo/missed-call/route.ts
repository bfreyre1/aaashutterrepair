import { after } from "next/server";
import { chooseMissedCallPath } from "@/lib/quo-sona-fastpath";
import { relayQuoWebhook, type QuoWebhookRelayConfig } from "@/lib/quo-webhook-relay";

export const runtime = "nodejs";

/** Id-only fanout must finish or abort within 5s and must not change Quo's response. */
const SONA_FANOUT_TIMEOUT_MS = 5_000;

function missedCallRelay(): QuoWebhookRelayConfig {
  return {
    url: process.env.MISSED_CALL_WEBHOOK_URL,
    auth: process.env.MISSED_CALL_WEBHOOK_AUTH,
    urlEnv: "MISSED_CALL_WEBHOOK_URL",
    authEnv: "MISSED_CALL_WEBHOOK_AUTH",
    name: "missed-call",
  };
}

function postCallRelay(name: string, timeoutMs?: number): QuoWebhookRelayConfig {
  return {
    url: process.env.POST_CALL_WEBHOOK_URL,
    auth: process.env.POST_CALL_WEBHOOK_AUTH,
    urlEnv: "POST_CALL_WEBHOOK_URL",
    authEnv: "POST_CALL_WEBHOOK_AUTH",
    name,
    timeoutMs,
  };
}

export async function GET() {
  return Response.json({ ok: true, service: "quo-missed-call-relay" });
}

export async function POST(request: Request) {
  const choice = await chooseMissedCallPath(request, process.env);
  const loggedPath =
    choice.path === "post-call-sona-fanout" ? "missed-call+post-call-sona-fanout" : choice.path;
  console.log(`Quo missed-call relay path=${loggedPath} reason=${choice.reason}`);

  if (choice.path === "post-call-sona-fastpath") {
    return relayQuoWebhook(request, postCallRelay("post-call-sona-fastpath"));
  }

  if (choice.path === "post-call-sona-fanout") {
    // Clone before the missed-call relay reads the body. after() keeps this
    // invocation alive until the callback settles, without using its result.
    const postRequest = request.clone();
    after(async () => {
      try {
        await relayQuoWebhook(
          postRequest,
          postCallRelay("post-call-sona-fanout", SONA_FANOUT_TIMEOUT_MS),
        );
      } catch (error) {
        const name = error instanceof Error ? error.name : "Error";
        console.error(`Quo post-call-sona-fanout relay failed (${name}).`);
      }
    });
    return relayQuoWebhook(request, missedCallRelay());
  }

  return relayQuoWebhook(request, missedCallRelay());
}
