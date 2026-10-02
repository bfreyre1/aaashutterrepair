/**
 * Quo (OpenPhone) cannot send a custom Authorization header. Grok Bot
 * automation webhooks require one. These relays accept the Quo payload and
 * forward the raw body with a server-only bearer token, same as soft-intake.
 * Bytes are not re-serialized so signature headers still match the payload.
 */

const QUO_SIGNATURE_HEADERS = [
  "openphone-signature",
  "openphone-timestamp",
  "quo-signature",
  "quo-timestamp",
  "webhook-id",
  "webhook-timestamp",
  "webhook-signature",
  "svix-id",
  "svix-timestamp",
  "svix-signature",
] as const;

const DEFAULT_RELAY_TIMEOUT_MS = 10_000;

export type QuoWebhookRelayConfig = {
  url: string | undefined;
  auth: string | undefined;
  urlEnv: string;
  authEnv: string;
  /** Short name used in logs, e.g. "missed-call". */
  name: string;
  /**
   * Abort the upstream fetch after this many milliseconds.
   * Defaults to 10s. The Sona id-only fanout uses 5s.
   */
  timeoutMs?: number;
};

export async function relayQuoWebhook(
  request: Request,
  config: QuoWebhookRelayConfig,
): Promise<Response> {
  const url = config.url?.trim() ?? "";
  const auth = config.auth?.trim() ?? "";

  if (!url || !auth) {
    console.error(
      `Quo ${config.name} relay unavailable: set ${config.urlEnv} and ${config.authEnv}.`,
    );
    return Response.json(
      { error: `Quo ${config.name} relay is not configured.` },
      { status: 503 },
    );
  }

  const headers = new Headers({
    Authorization: auth,
    "Content-Type": "application/json",
  });

  for (const headerName of QUO_SIGNATURE_HEADERS) {
    const value = request.headers.get(headerName);
    if (value) {
      headers.set(headerName, value);
    }
  }

  let body: ArrayBuffer;
  try {
    body = await request.arrayBuffer();
  } catch (error) {
    console.error(`Quo ${config.name} relay could not read the request body:`, error);
    return Response.json({ error: "Could not read the webhook body." }, { status: 400 });
  }

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers,
      body,
      cache: "no-store",
      // Do not follow redirects; the bearer token must stay on this host.
      redirect: "manual",
      signal: AbortSignal.timeout(config.timeoutMs ?? DEFAULT_RELAY_TIMEOUT_MS),
    });

    const upstreamBody = await upstream.arrayBuffer();
    if (!upstream.ok) {
      const preview = new TextDecoder().decode(upstreamBody).slice(0, 500);
      console.error(
        `Quo ${config.name} relay failed (${upstream.status}):`,
        preview || "(empty body)",
      );
    }

    if (upstreamBody.byteLength === 0) {
      if (upstream.status >= 200 && upstream.status < 300) {
        return Response.json({ ok: true }, { status: 200 });
      }
      return Response.json(
        { error: "Upstream webhook failed." },
        { status: upstream.status || 502 },
      );
    }

    return new Response(upstreamBody, {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("content-type") ?? "application/json",
      },
    });
  } catch (error) {
    console.error(`Quo ${config.name} relay failed:`, error);
    return Response.json(
      { error: "Could not reach the upstream webhook." },
      { status: 502 },
    );
  }
}
