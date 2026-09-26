import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CityAreaGroups } from "@/components/CityAreaGroups";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { HoursLine } from "@/components/HoursLine";
import { JsonLd } from "@/components/JsonLd";
import {
  faqCostItems,
  faqHubItems,
  faqServiceItems,
  faqShadeItems,
  faqShutterItems,
} from "@/lib/faq";
import { faqJsonLd } from "@/lib/schema";
import {
  ADDRESS_DISPLAY,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  absoluteUrl,
} from "@/lib/site";

const title = "Repair questions";
const description =
  "Answers on plantation shutter repair cost, on-site visits, Somfy shades, hours, and free estimates in Los Angeles and the San Fernando Valley. Call or text 818-392-8584.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/faq") },
  openGraph: {
    title: `${title} | AAA Shutter Repair`,
    description,
    url: absoluteUrl("/faq"),
  },
};

export default function FaqPage() {
  return (
    <article className="page">
      <JsonLd data={faqJsonLd(faqHubItems)} />
      <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
      <header className="page-hero">
        <p className="eyebrow">Cost · Visits · Hours</p>
        <h1>Questions before a repair visit</h1>
        <p className="lede">
          Plantation shutter repair, blinds, shades, and Somfy motors — what
          the visit is like, and how to get a free estimate. Call or text{" "}
          {PHONE_DISPLAY}.
        </p>
        <CtaButtons placement="faq-hero" />
      </header>

      <section>
        <h2>How estimates work</h2>
        <p>
          Repair is usually far less than full replacement, and most plantation
          shutter jobs finish in one visit at the house. We do not publish dollar
          prices here. The number depends on the window. Longer answers live
          on{" "}
          <Link href="/faq/plantation-shutter-repair-cost-los-angeles">
            plantation shutter repair cost in Los Angeles
          </Link>{" "}
          and{" "}
          <Link href="/faq/somfy-motorized-shade-repair">
            Somfy and motorized shade repair
          </Link>
          .
        </p>
        <p>
          The service pages are{" "}
          <Link href="/plantation-shutter-repair">plantation shutter repair</Link>
          ,{" "}
          <Link href="/motorized-shade-repair">motorized shade repair</Link>,{" "}
          <Link href="/shutter-repair">shutter repair</Link>, and{" "}
          <Link href="/blind-and-shade-repair">blind and shade repair</Link>.
          The <Link href="/get-a-quote">estimate form</Link> is the same crew.
        </p>
      </section>

      <FaqList
        heading="Cost and process"
        headingId="faq-cost"
        items={faqCostItems}
        jsonLd={false}
      />
      <FaqList
        heading="Shutters"
        headingId="faq-shutters"
        items={faqShutterItems}
        jsonLd={false}
      />
      <FaqList
        heading="Blinds, shades, and Somfy"
        headingId="faq-shades"
        items={faqShadeItems}
        jsonLd={false}
      />

      <section>
        <h2>Where we work</h2>
        <p>
          The office is {ADDRESS_DISPLAY}. That is a mailbox and office unit.
          Repair still happens at your window — there is no showroom drop-off.
          City pages are grouped the same way as the footer.
        </p>
        <CityAreaGroups />
      </section>

      <FaqList
        heading="Service area, hours, and booking"
        headingId="faq-service"
        items={faqServiceItems}
        jsonLd={false}
      />

      <section>
        <h2>How to reach us</h2>
        <p>
          Call <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> or text the
          same number. Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> if that
          is easier. The <Link href="/get-a-quote">estimate form</Link> is
          built so we can text you back to schedule.
        </p>
        <HoursLine />
      </section>

      <CtaButtons placement="faq-bottom" />
    </article>
  );
}
