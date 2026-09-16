"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  configureGtag,
  GTAG_SCRIPT_SRC,
  subscribeGtagLoad,
} from "@/lib/analytics";

const INTERACTION_EVENTS = ["pointerdown", "keydown", "touchstart"] as const;

/**
 * Mount gtag.js only after idle or the first tap/key — not during hydration.
 * Next.js lazyOnload waits for window.load (every image). That is too late
 * for tel:/sms: clicks, so we gate the Script and then:
 * - lazyOnload when the page is already complete
 * - afterInteractive only after the gate, so it is not an early blocker
 * Phone/text/lead clicks inject the same src immediately (see requestGtagLoad).
 */
export function GtagDeferredLoader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    configureGtag();

    const enable = () => {
      setShouldLoad(true);
    };

    const unsubscribe = subscribeGtagLoad(enable);

    let idleId = 0;
    let timeoutId = 0;
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(enable, { timeout: 2500 });
    } else {
      timeoutId = window.setTimeout(enable, 2500);
    }

    for (const eventName of INTERACTION_EVENTS) {
      window.addEventListener(eventName, enable, { once: true, passive: true });
    }

    return () => {
      unsubscribe();
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      for (const eventName of INTERACTION_EVENTS) {
        window.removeEventListener(eventName, enable);
      }
    };
  }, []);

  if (!shouldLoad) {
    return null;
  }

  // Conversion clicks may have already injected this src.
  if (document.querySelector(`script[src="${GTAG_SCRIPT_SRC}"]`)) {
    return null;
  }

  const strategy =
    document.readyState === "complete" ? "lazyOnload" : "afterInteractive";

  return <Script src={GTAG_SCRIPT_SRC} strategy={strategy} />;
}
