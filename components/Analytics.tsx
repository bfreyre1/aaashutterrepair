import Script from "next/script";
import { AW_ID, AW_LEAD_ID, GA_MEASUREMENT_ID } from "@/lib/site";

export function Analytics() {
  const ga4Line = GA_MEASUREMENT_ID
    ? `gtag('config', '${GA_MEASUREMENT_ID}');`
    : "/* GA4 measurement ID missing */";
  // Form / call / text conversions share this account when it is not
  // the remarketing tag (AW-11547263826 vs AW-16874362178).
  const leadConfigLine =
    AW_LEAD_ID && AW_LEAD_ID !== AW_ID
      ? `gtag('config', '${AW_LEAD_ID}');`
      : "";

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${AW_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${AW_ID}');
          ${leadConfigLine}
          ${ga4Line}
        `}
      </Script>
    </>
  );
}
