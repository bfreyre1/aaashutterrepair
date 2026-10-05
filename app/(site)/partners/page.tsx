import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { JsonLd } from "@/components/JsonLd";
import { PhoneLink } from "@/components/PhoneLink";
import { TextLink } from "@/components/TextLink";
import { serviceJsonLd } from "@/lib/schema";
import {
  ADDRESS_DISPLAY,
  HOURS_DISPLAY,
  PHONE_DISPLAY,
  SHARE_IMAGE,
  SITE_NAME,
  absoluteUrl,
} from "@/lib/site";

const title = "Somfy shade repair and brands we repair";
const description =
  "AAA Shutter Repair fixes Somfy and motorized shade systems on site in Los Angeles, plus plantation shutters, blinds, and shades. A repair shop, not a dealer.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/partners") },
  openGraph: {
    images: [SHARE_IMAGE],
    title: `${title} | ${SITE_NAME}`,
    description,
    url: absoluteUrl("/partners"),
  },
};

export default function PartnersPage() {
  return (
    <article className="page">
      <JsonLd
        data={serviceJsonLd({
          name: "Brands and systems we repair",
          path: "/partners",
          description:
            "On-site repair of Somfy and other motorized shade systems, plantation shutters, blinds, and shades across the San Fernando Valley and greater Los Angeles. AAA Shutter Repair is a repair shop, not an authorized dealer or factory partner.",
          serviceType: "Window treatment repair",
        })}
      />
      <Breadcrumbs items={[{ name: "Partners", path: "/partners" }]} />
      <header className="page-hero">
        <p className="eyebrow">Somfy shade repair</p>
        <h1>Brands and systems we repair</h1>
        <p className="lede">
          We repair Somfy and other motorized shade systems: motors, remotes,
          pairing, limits, and shade travel. A dead remote is not automatically
          a new shade.{" "}
          <Link href="/motorized-shade-repair">Motorized / Somfy repair</Link>{" "}
          is the page for that visit.
        </p>
        <p>
          AAA Shutter Repair fixes plantation shutters, blinds, shades, and
          motorized shade systems on site across the San Fernando Valley and
          greater Los Angeles. This page lists makers and systems we commonly
          work on. We are a repair shop, not a showroom dealer. Unless it says
          otherwise below, we are not an authorized dealer or factory partner
          for any brand.
        </p>
        <CtaButtons placement="partners-hero" />
      </header>

      <section>
        <h2>Motorized shade systems</h2>
        <p>
          A stopped shade is often the motor, the remote, pairing, the limits,
          or the travel. The fabric is frequently still usable. We look at
          that at the window, then say whether a repair will hold. The visit
          itself is written up on{" "}
          <Link href="/motorized-shade-repair">Motorized / Somfy repair</Link>.
        </p>
      </section>

      <section>
        <h2>Somfy shade repair</h2>
        <p>
          Somfy is the motorized system we are asked to repair most often. We
          repair the motor, the remote, pairing, limits, and shade travel. We
          do not run a Somfy showroom, and this page does not make us an
          authorized dealer or factory partner.
        </p>
        <p>
          Shorter answers on remotes and limits are in the{" "}
          <Link href="/faq">FAQ</Link>, including the Somfy repair questions.
        </p>
      </section>

      <section>
        <h2>Plantation shutters, blinds, and shades</h2>
        <p>
          The rest of what we commonly work on is the system in the opening,
          not a brand wall. Plantation wood shutters are still the main job:
          staples, louvers, tilt rods, hinges, magnets, and side pins, repaired
          on site. That work is{" "}
          <Link href="/plantation-shutter-repair">plantation shutter repair</Link>
          .
        </p>
        <p>
          Manual blinds and shades are a different repair from motors. See{" "}
          <Link href="/blind-and-shade-repair">blind and shade repair</Link>.
        </p>
      </section>

      <section>
        <h2>Call, text, or request an estimate</h2>
        <p>
          Call <PhoneLink placement="partners-cta">{PHONE_DISPLAY}</PhoneLink>{" "}
          or <TextLink placement="partners-cta">text {PHONE_DISPLAY}</TextLink>
          , or <Link href="/get-a-quote">get a free estimate</Link>. More about
          the shop is on the <Link href="/about">about</Link> page.
        </p>
        <p>
          {SITE_NAME}
          <br />
          {ADDRESS_DISPLAY}
          <br />
          <PhoneLink placement="partners-nap">{PHONE_DISPLAY}</PhoneLink>
          <br />
          {HOURS_DISPLAY}
        </p>
      </section>
    </article>
  );
}
