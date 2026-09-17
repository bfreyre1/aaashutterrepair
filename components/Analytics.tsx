import { GtagDeferredLoader } from "@/components/GtagDeferredLoader";

/**
 * Do not load gtag.js with afterInteractive — it contends with LCP.
 * The dataLayer stub lives in lib/analytics.ts so phone/text/lead events
 * queue until the deferred gtag.js (idle / first interaction) is ready.
 * IDs stay AW-11547263826, AW-16874362178, G-Z405VVNDE8 via lib/site.ts.
 */
export function Analytics() {
  return <GtagDeferredLoader />;
}
