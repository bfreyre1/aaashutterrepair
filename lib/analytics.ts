import {
  AW_ID,
  AW_LEAD_ID,
  AW_LEAD_SEND_TO,
  AW_PHONE_SEND_TO,
  AW_TEXT_SEND_TO,
  GA_MEASUREMENT_ID,
} from "@/lib/site";

export const GTAG_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${AW_ID}`;

let gtagConfigured = false;
const gtagLoadListeners = new Set<() => void>();
let gtagLoadRequested = false;

function injectGtagScript(): void {
  if (typeof document === "undefined") {
    return;
  }
  if (document.querySelector(`script[src="${GTAG_SCRIPT_SRC}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.src = GTAG_SCRIPT_SRC;
  script.async = true;
  document.head.appendChild(script);
}

/** Ask the deferred loader to mount gtag.js (idle, tap, or conversion). */
export function requestGtagLoad(): void {
  configureGtag();
  injectGtagScript();
  if (gtagLoadRequested) {
    return;
  }
  gtagLoadRequested = true;
  gtagLoadListeners.forEach((listener) => {
    listener();
  });
}

export function subscribeGtagLoad(listener: () => void): () => void {
  gtagLoadListeners.add(listener);
  if (gtagLoadRequested) {
    listener();
  }
  return () => {
    gtagLoadListeners.delete(listener);
  };
}

/** Official dataLayer stub so clicks can queue before gtag.js arrives. */
export function ensureGtagStub(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === "function") {
    return;
  }

  window.gtag = function gtag() {
    // gtag.js reads the Arguments object from the official snippet.
    // eslint-disable-next-line prefer-rest-params -- must match Google's stub
    window.dataLayer!.push(arguments);
  };
}

/** Queue Ads + GA4 config once. IDs stay in lib/site.ts. */
export function configureGtag(): void {
  ensureGtagStub();
  if (typeof window === "undefined" || gtagConfigured) {
    return;
  }

  gtagConfigured = true;
  window.gtag!("js", new Date());
  window.gtag!("config", AW_ID);
  if (AW_LEAD_ID && AW_LEAD_ID !== AW_ID) {
    window.gtag!("config", AW_LEAD_ID);
  }
  if (GA_MEASUREMENT_ID) {
    window.gtag!("config", GA_MEASUREMENT_ID);
  }
}

function trackEngagement(
  eventName: string,
  placement: string,
  adsSendTo?: string,
): void {
  if (typeof window === "undefined") {
    return;
  }

  requestGtagLoad();

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    event_category: "engagement",
    event_label: placement,
  });

  if (adsSendTo) {
    window.gtag("event", "conversion", {
      send_to: adsSendTo,
    });
  }
}

export function trackPhoneClick(placement: string): void {
  trackEngagement("phone_call_click", placement, AW_PHONE_SEND_TO || undefined);
}

export function trackTextClick(placement: string): void {
  trackEngagement("text_click", placement, AW_TEXT_SEND_TO || undefined);
}

export function trackGenerateLead(): void {
  if (typeof window === "undefined") {
    return;
  }

  requestGtagLoad();

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "generate_lead", {
    currency: "USD",
  });

  if (AW_LEAD_SEND_TO) {
    window.gtag("event", "conversion", {
      send_to: AW_LEAD_SEND_TO,
    });
  }
}

ensureGtagStub();
