import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EMAIL, PHONE_DISPLAY, absoluteUrl } from "@/lib/site";

const title = "Privacy Policy";
const description =
  "Privacy practices for the AAA Shutter Repair sample website, including quote-form fields and Google Ads conversion tagging.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/privacy") },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="page">
      <Breadcrumbs items={[{ name: "Privacy", path: "/privacy" }]} />
      <header className="page-hero">
        <h1>Privacy policy</h1>
        <p className="lede">
          This is a sample marketing site. It collects only what you type into
          the estimate form in your browser and what advertising tags measure.
        </p>
      </header>

      <section>
        <h2>Who we are</h2>
        <p>
          AAA Shutter Repair can be reached at {PHONE_DISPLAY} or {EMAIL}. This
          website does not publish a street address.
        </p>
      </section>

      <section>
        <h2>Information you provide</h2>
        <p>
          The quote form asks for name, phone, email, city, job type, and a
          description. On this sample, those values stay in your browser after
          you submit. A <code>generate_lead</code> event is sent to Google Ads
          if the tag is loaded. You may also choose to email the same details
          to {EMAIL} via a mailto link. There is no CRM, account system, or
          payment form on this site.
        </p>
      </section>

      <section>
        <h2>Advertising and analytics cookies</h2>
        <p>
          Google Ads gtag (account {`AW-11547263826`} by default, overridable
          with <code>NEXT_PUBLIC_AW_ID</code>) loads on every page so call
          clicks and quote submits can be measured. A GA4 measurement ID is
          not set on this sample. If you later add{" "}
          <code>NEXT_PUBLIC_GA_MEASUREMENT_ID</code>, that tag will also load.
          Google may set cookies for conversion measurement. See Google&apos;s
          own policies for how those tags process data.
        </p>
      </section>

      <section>
        <h2>Phone calls</h2>
        <p>
          Tapping a tel: link opens your phone app. We record a{" "}
          <code>phone_call_click</code> event in gtag when that happens. We do
          not receive the contents of the call through this website.
        </p>
      </section>

      <section>
        <h2>Contact about privacy</h2>
        <p>
          Email {EMAIL} or call {PHONE_DISPLAY} if you have a question about
          this sample site&apos;s data practices.
        </p>
      </section>
    </article>
  );
}
