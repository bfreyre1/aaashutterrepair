import { AW_ID, AW_LEAD_LABEL, AW_PHONE_LABEL } from "@/lib/site";

export function trackPhoneClick(placement: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "phone_call_click", {
    event_category: "engagement",
    event_label: placement,
  });

  if (AW_PHONE_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${AW_ID}/${AW_PHONE_LABEL}`,
    });
  }
}

export function trackGenerateLead(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const payload: Record<string, string | number> = {
    currency: "USD",
  };

  if (AW_LEAD_LABEL) {
    payload.send_to = `${AW_ID}/${AW_LEAD_LABEL}`;
  }

  window.gtag("event", "generate_lead", payload);
}
