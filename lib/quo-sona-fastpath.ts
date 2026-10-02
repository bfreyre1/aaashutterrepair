/**
 * Sona (Quo AI agent) calls arrive as call.missed, not call.completed.
 * Fast-path those to the post-call relay when the call object shows the AI
 * answered an incoming call that lasted at least 10 seconds.
 *
 * Field names, from the Calls API and the legacy webhook envelope
 * (data.object) plus the 2026-03-30 envelope (data.resource):
 * - type === "call.missed"
 * - aiHandled === "ai-agent"   (Calls API; null means a human or nobody)
 * - direction === "incoming"
 * - duration >= 10             (seconds)
 *
 * The official call.missed resource is only id/createdAt/updatedAt. Missing
 * fields fail closed so the event stays on the missed-call relay.
 */

const MIN_SONA_DURATION_SECONDS = 10;

export type MissedCallRelayChoice = {
  /** Relay name. "post-call-sona-fastpath" or "missed-call". */
  path: "post-call-sona-fastpath" | "missed-call";
  /** Safe to log: no phone numbers and no auth values. */
  reason: string;
};

type CallFields = {
  aiHandled?: unknown;
  direction?: unknown;
  duration?: unknown;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function inspectCall(call: CallFields): { match: true; durationSeconds: number } | { match: false; reason: string } {
  const hasSignal =
    Object.prototype.hasOwnProperty.call(call, "aiHandled") ||
    Object.prototype.hasOwnProperty.call(call, "direction") ||
    Object.prototype.hasOwnProperty.call(call, "duration");
  if (!hasSignal) {
    return { match: false, reason: "missing-call-fields" };
  }
  if (call.aiHandled !== "ai-agent") {
    return { match: false, reason: "not-ai-agent" };
  }
  if (call.direction !== "incoming") {
    return { match: false, reason: "direction-not-incoming" };
  }
  if (typeof call.duration !== "number" || !Number.isFinite(call.duration)) {
    return { match: false, reason: "duration-missing" };
  }
  if (call.duration < MIN_SONA_DURATION_SECONDS) {
    return { match: false, reason: "duration-below-10" };
  }
  return { match: true, durationSeconds: call.duration };
}

export function classifySonaMissedCall(body: unknown): MissedCallRelayChoice {
  if (!isRecord(body) || body.type !== "call.missed") {
    return { path: "missed-call", reason: "not-call-missed" };
  }

  const data = isRecord(body.data) ? body.data : null;
  const candidates = [data?.object, data?.resource].filter(isRecord);
  if (candidates.length === 0) {
    return { path: "missed-call", reason: "missing-call-object" };
  }

  let fallback: MissedCallRelayChoice = {
    path: "missed-call",
    reason: "missing-call-fields",
  };
  for (const call of candidates) {
    const result = inspectCall(call);
    if (result.match) {
      return {
        path: "post-call-sona-fastpath",
        reason: `aiHandled=ai-agent direction=incoming duration=${result.durationSeconds}s`,
      };
    }
    if (fallback.reason === "missing-call-fields") {
      fallback = { path: "missed-call", reason: result.reason };
    }
  }
  return fallback;
}

/**
 * Decide which relay a missed-call webhook should use.
 * Reads a clone of the body so the caller can still forward the original bytes.
 */
export async function chooseMissedCallPath(
  request: Request,
  env: NodeJS.ProcessEnv,
): Promise<MissedCallRelayChoice> {
  if (env.QUO_SONA_FASTPATH?.trim() === "off") {
    return { path: "missed-call", reason: "QUO_SONA_FASTPATH=off" };
  }

  let body: unknown;
  try {
    body = await request.clone().json();
  } catch {
    return { path: "missed-call", reason: "invalid-json" };
  }

  const decision = classifySonaMissedCall(body);
  if (decision.path !== "post-call-sona-fastpath") {
    return decision;
  }

  const postUrl = env.POST_CALL_WEBHOOK_URL?.trim() ?? "";
  const postAuth = env.POST_CALL_WEBHOOK_AUTH?.trim() ?? "";
  if (!postUrl || !postAuth) {
    return {
      path: "missed-call",
      reason: "POST_CALL_WEBHOOK_URL or POST_CALL_WEBHOOK_AUTH unset",
    };
  }

  return decision;
}
