import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { HoursLine } from "@/components/HoursLine";
import { PhoneLink } from "@/components/PhoneLink";
import { QuoteForm } from "@/components/QuoteForm";
import { TextLink } from "@/components/TextLink";
import { LANDING_TRUST_CHIPS, TrustChips } from "@/components/TrustChips";
import { quoteIntentLabel, quoteJobFromParam } from "@/lib/quote";
import { PHONE_DISPLAY, absoluteUrl } from "@/lib/site";

const title = "Get a Free Estimate";
const description =
  "Request a free shutter, plantation shutter, blind, or motorized shade repair estimate in Los Angeles. Call or text 818-392-8584 — or send the form and we text back to schedule.";

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

function firstParam(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function GetAQuotePage(
  props: PageProps<"/get-a-quote">,
) {
  const searchParams = await props.searchParams;
  const jobParam = firstParam(searchParams.job);
  const initialJobType = quoteJobFromParam(jobParam);
  const intentLabel = quoteIntentLabel(jobParam);
  const lede = intentLabel
    ? `Free estimate for ${intentLabel.toLowerCase()} in Los Angeles and the San Fernando Valley. Tell us the city and what broke — or call or text and skip the form.`
    : "Tell us the city and what broke. We text back to schedule. Call or text if you want an answer now — the form is optional.";

  return (
    <div className="page page--wide">
      <Breadcrumbs items={[{ name: "Get a free estimate", path: "/get-a-quote" }]} />
      <header className="page-hero">
        <p className="eyebrow">
          {intentLabel
            ? `${intentLabel} · Free estimate`
            : "Free estimate · We text to schedule"}
        </p>
        <h1>Get a free estimate</h1>
        <p className="lede">{lede}</p>
        <TrustChips items={LANDING_TRUST_CHIPS} />
        <CtaButtons placement="quote-hero" showQuote={false} />
        <HoursLine />
      </header>

      <div className="quote-layout">
        <aside className="phone-panel">
          <h2>Prefer to talk now?</h2>
          <p>
            Call or text when you want an answer now. Same team. Same on-site
            repair work. You do not need to finish the form.
          </p>
          <HoursLine />
          <div className="phone-panel__actions">
            <PhoneLink placement="quote-sidebar" className="btn btn-primary">
              Call {PHONE_DISPLAY}
            </PhoneLink>
            <TextLink
              placement="quote-sidebar"
              className="btn btn-text"
              aria-label={`Text ${PHONE_DISPLAY}`}
            >
              Text us
            </TextLink>
          </div>
          <ul>
            <li>Plantation shutter repair</li>
            <li>Shutter repair</li>
            <li>Blind and shade repair</li>
            <li>Somfy / motorized shade repair</li>
            <li>Van Nuys, Sherman Oaks, LA, Pasadena, Santa Monica, Santa Clarita</li>
          </ul>
        </aside>
        <QuoteForm key={initialJobType || "quote"} initialJobType={initialJobType} />
      </div>
    </div>
  );
}
