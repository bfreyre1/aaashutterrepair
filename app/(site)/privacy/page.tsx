import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ADDRESS_DISPLAY, EMAIL, PHONE_DISPLAY, absoluteUrl } from "@/lib/site";

const title = "Privacy Policy";
const description =
  "Privacy practices for the AAA Shutter Repair website, including the estimate form and how we measure calls and site visits.";

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
          This site collects what you type into the estimate form, and uses
          standard advertising and analytics tools so we can schedule repair
          work and see what helps people find us.
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
          estimate, then text you back. There is no account login or payment form on this
          site. If the shop connection fails, you can email the same details
          to {EMAIL} or call.
        </p>
      </section>

      <section>
        <h2>Advertising and analytics cookies</h2>
        <p>
          Google advertising and analytics tags load on this site so we can
          measure call clicks, text clicks, estimate requests, and traffic.
          Those tools may
          set cookies. See Google&apos;s own policies for how they process
          data.
        </p>
      </section>

      <section>
        <h2>Phone calls</h2>
        <p>
          Tapping a phone link opens your phone app. We record that the call
          button was used so we can see what helps people reach us. We do not
          receive the contents of the call through this website.
        </p>
      </section>

      <section>
        <h2>Text messages</h2>
        <p>
          Tapping a text link opens your messaging app to {PHONE_DISPLAY}. We
          record that the text button was used so we can see what helps people
          reach us. We do not receive the contents of the text through this
          website.
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
