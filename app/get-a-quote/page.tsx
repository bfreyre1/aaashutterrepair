import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { QuoteForm } from "@/components/QuoteForm";
import { PHONE_DISPLAY, absoluteUrl } from "@/lib/site";

const title = "Get a Free Estimate";
const description =
  "Request a free shutter, blind, or motorized shade repair estimate in Los Angeles. We follow up by text to schedule. Or call 818-392-8584 now.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/get-a-quote") },
  openGraph: {
    title: `${title} | AAA Shutter Repair`,
    description,
    url: absoluteUrl("/get-a-quote"),
  },
};

export default function GetAQuotePage() {
  return (
    <div className="page page--wide">
      <Breadcrumbs items={[{ name: "Get a free estimate", path: "/get-a-quote" }]} />
      <header className="page-hero">
        <p className="eyebrow">Free estimate · We text to schedule</p>
        <h1>Get a free estimate</h1>
        <p className="lede">
          Tell us the city and what broke. We follow up by text to confirm the
          request and schedule the visit. If you need someone today, call —
          that is the fastest conversion path from an ad.
        </p>
      </header>

      <div className="quote-layout">
        <aside className="phone-panel">
          <h2>Prefer to talk now?</h2>
          <p>
            Paid-search callers usually get a faster answer on the phone than
            on a form. Same team. Same on-site repair work.
          </p>
          <PhoneLink placement="quote-sidebar" className="btn btn-primary">
            Call {PHONE_DISPLAY}
          </PhoneLink>
          <ul>
            <li>Plantation shutter repair</li>
            <li>Blind and shade repair</li>
            <li>Somfy / motorized shade repair</li>
            <li>Van Nuys, Sherman Oaks, LA, Pasadena, Santa Monica, Santa Clarita</li>
          </ul>
        </aside>
        <QuoteForm />
      </div>
    </div>
  );
}
