import {
  AW_ID,
  AW_LEAD_SEND_TO,
  AW_PHONE_LABEL,
  AW_TEXT_LABEL,
} from "@/lib/site";

function trackEngagement(
  eventName: string,
  placement: string,
  adsLabel?: string,
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    event_category: "engagement",
    event_label: placement,
  });

  if (adsLabel) {
    window.gtag("event", "conversion", {
      send_to: `${AW_ID}/${adsLabel}`,
    });
  }
}

export function trackPhoneClick(placement: string): void {
  trackEngagement("phone_call_click", placement, AW_PHONE_LABEL || undefined);
}

export function trackTextClick(placement: string): void {
  trackEngagement("text_click", placement, AW_TEXT_LABEL || undefined);
}

export function trackGenerateLead(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
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
