/**
 * Sona (Quo AI agent) calls arrive as call.missed, not call.completed.
 *
 * When the call object includes the Calls API fields, fast-path to the
 * post-call relay only if the AI answered an incoming call of at least 10s:
 * - type === "call.missed"
 * - call object at data.object (legacy) or data.resource (2026-03-30)
 * - aiHandled === "ai-agent"   (null means a human or nobody)
 * - direction === "incoming"
 * - duration >= 10             (seconds)
 *
 * The published call.missed resource is often only id/createdAt/updatedAt.
 * That id-only shape fans out to both relays. The post-call routine looks the
 * call up and ignores anything Sona did not answer. Any of the three fields
 * being present, without a full match, stays on the missed-call relay.
 */

const MIN_SONA_DURATION_SECONDS = 10;

export type MissedCallRelayChoice = {
  /**
   * "post-call-sona-fastpath": post-call relay only.
   * "post-call-sona-fanout": missed-call relay, plus a second post-call forward.
   * "missed-call": missed-call relay only.
   */
  path: "post-call-sona-fastpath" | "post-call-sona-fanout" | "missed-call";
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

function hasCallSignal(call: object): boolean {
  return (
    Object.prototype.hasOwnProperty.call(call, "aiHandled") ||
    Object.prototype.hasOwnProperty.call(call, "direction") ||
    Object.prototype.hasOwnProperty.call(call, "duration")
  );
}

function inspectCall(call: CallFields): { match: true; durationSeconds: number } | { match: false; reason: string } {
  if (!hasCallSignal(call)) {
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

  const signaled = candidates.filter((call) => hasCallSignal(call));
  if (signaled.length === 0) {
    return {
      path: "post-call-sona-fanout",
      reason: "call.missed missing aiHandled direction duration",
    };
  }

  let fallbackReason = "missing-call-fields";
  for (const call of signaled) {
    const result = inspectCall(call);
    if (result.match) {
      return {
        path: "post-call-sona-fastpath",
        reason: `aiHandled=ai-agent direction=incoming duration=${result.durationSeconds}s`,
      };
    }
    if (fallbackReason === "missing-call-fields") {
      fallbackReason = result.reason;
    }
  }
  return { path: "missed-call", reason: fallbackReason };
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
  if (decision.path === "missed-call") {
    return decision;
  }

  const postUrl = env.POST_CALL_WEBHOOK_URL?.trim() ?? "";
  const postAuth = env.POST_CALL_WEBHOOK_AUTH?.trim() ?? "";
  if (!postUrl || !postAuth) {
    return {
      path: "missed-call",
      reason:
        decision.path === "post-call-sona-fanout"
          ? "id-only POST_CALL_WEBHOOK_URL or POST_CALL_WEBHOOK_AUTH unset"
          : "POST_CALL_WEBHOOK_URL or POST_CALL_WEBHOOK_AUTH unset",
    };
  }

  return decision;
}
