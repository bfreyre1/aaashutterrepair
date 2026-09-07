import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ADDRESS_DISPLAY, EMAIL, PHONE_DISPLAY, absoluteUrl } from "@/lib/site";

const title = "Privacy Policy";
const description =
  "Privacy practices for the AAA Shutter Repair website, including quote-form fields, shop estimate requests, and Google Ads conversion tagging.";

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
          This site collects what you type into the estimate form and what
          advertising tags measure so we can schedule repair work.
        </p>
      </header>

      <section>
        <h2>Who we are</h2>
        <p>
          AAA Shutter Repair can be reached at {PHONE_DISPLAY} or {EMAIL}. The
          office is {ADDRESS_DISPLAY}.
        </p>
      </section>

      <section>
        <h2>Information you provide</h2>
        <p>
          The quote form asks for name, phone, email, city, job type, and a
          description. We send those details to our shop system (Kickserv) so
          we can find or create your customer record and open a service
          estimate, then text you back. A <code>generate_lead</code> event is
          sent to Google Ads if the tag is loaded and the request succeeds.
          There is no account login or payment form on this site. If the shop
          connection fails, you can email the same details to {EMAIL} or call.
        </p>
      </section>

      <section>
        <h2>Advertising and analytics cookies</h2>
        <p>
          Google Ads gtag (account {`AW-11547263826`} by default, overridable
          with <code>NEXT_PUBLIC_AW_ID</code>) and Google Analytics 4 (
          {`G-Z405VVNDE8`}, overridable with{" "}
          <code>NEXT_PUBLIC_GA_MEASUREMENT_ID</code>) load on every page so
          call clicks, quote submits, and site traffic can be measured. Google
          may set cookies for conversion and analytics measurement. See
          Google&apos;s own policies for how those tags process data.
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
          this site&apos;s data practices.
        </p>
      </section>
    </article>
  );
}
