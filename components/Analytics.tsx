import Script from "next/script";
import { AW_ID, GA_MEASUREMENT_ID } from "@/lib/site";

export function Analytics() {
  const ga4Line = GA_MEASUREMENT_ID
    ? `gtag('config', '${GA_MEASUREMENT_ID}');`
    : "/* GA4 measurement ID missing */";

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
          ${ga4Line}
        `}
      </Script>
    </>
  );
}
