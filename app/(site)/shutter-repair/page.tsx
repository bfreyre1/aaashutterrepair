import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CityAreaGroups } from "@/components/CityAreaGroups";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { HoursLine } from "@/components/HoursLine";
import { JobFigure } from "@/components/JobFigure";
import { LANDING_TRUST_CHIPS, TrustChips } from "@/components/TrustChips";
import { TextLink } from "@/components/TextLink";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/schema";
import { PHONE_DISPLAY, absoluteUrl } from "@/lib/site";

const title = "Shutter Repair in Los Angeles";
const description =
  "Shutter repair near you in Los Angeles and the San Fernando Valley. On-site wood shutters — staples, louvers, tilt rods, hinges, magnets, and side pins. Free estimate. Call 818-392-8584.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/shutter-repair") },
  openGraph: {
    title: `${title} | AAA Shutter Repair`,
    description,
    url: absoluteUrl("/shutter-repair"),
  },
};

const faq = [
  {
    question: "What parts of a shutter can you repair?",
    answer:
      "Staples, louvers (louvres), tilt rods, hinges, magnets, and side pins. Most wood shutter jobs can be repaired on site.",
  },
  {
    question: "Will I have to replace the whole set?",
    answer:
      "Usually no. A dropped louver or dead magnet is a repair. We only talk about new custom shutters when the wood is truly finished.",
  },
  {
    question: "Do you repair stained as well as painted shutters?",
    answer:
      "Yes. Matching a single slat or panel is a regular part of the work when the rest of the room is still good.",
  },
  {
    question: "Can I text a picture first?",
    answer:
      "Yes. Text a photo of the broken louver, tilt rod, hinge, or magnet to 818-392-8584. We look at it and text back to schedule. After-hours messages are fine — live help is daily 10am–7pm.",
  },
  {
    question: "Are these plantation shutters?",
    answer:
      "Many Los Angeles wood shutters are plantation shutters. If you know that is what you have, the plantation shutter repair page is the closer match. The same crew does both.",
  },
];

export default function ShutterRepairPage() {
  return (
    <article className="page">
      <JsonLd
        data={serviceJsonLd({
          name: "Shutter repair",
          path: "/shutter-repair",
          description,
          serviceType: "Shutter repair",
        })}
      />
      <Breadcrumbs
        items={[
          {
            name: "Shutter repair",
            path: "/shutter-repair",
          },
        ]}
      />
      <header className="page-hero">
        <p className="eyebrow">On-site wood shutter repair</p>
        <h1>Shutter repair</h1>
        <p className="lede">
          Louver on the floor, or shutters that will not tilt? We repair wood
          shutters on site across Los Angeles and the San Fernando Valley —
          usually without replacing the whole set. Call or text {PHONE_DISPLAY}.
        </p>
        <TrustChips items={LANDING_TRUST_CHIPS} />
        <CtaButtons
          placement="shutter-hero"
          quoteHref="/get-a-quote?job=shutter"
        />
        <HoursLine />
      </header>

      <JobFigure
        filename="white-plantation-shutter-louver.jpg"
        sizes="(max-width: 800px) 100vw, 640px"
        priority
      />

      <section>
        <h2>Shutter repair near you</h2>
        <p>
          If you searched shutter repair or shutter repair near me, this is the
          page for that job. We come to the house in the San Fernando Valley
          and greater Los Angeles with the hardware that actually fails:
          tilt-rod staples, side pins, magnets, hinges, and replacement
          louvers. About 90% of wood shutter jobs finish at the window.
        </p>
        <p>
          Plantation shutters are the set we see most often. If you already
          know that is what is on the window, start on{" "}
          <Link href="/plantation-shutter-repair">
            plantation shutter repair
          </Link>
          . Cafe shutters, tier-on-tier panels, and other wood shutters are
          the same visit — say what the window looks like when you call or
          text.
        </p>
        <p>
          Public reviews of the company keep describing the same visit: a
          technician named Alex shows up, repairs the broken panel, and leaves
          the rest of the set in place. Other companies had already quoted a
          full replacement. That is the gap we fill.
        </p>
      </section>

      <section>
        <h2>What we fix</h2>
        <ul>
          <li>
            <strong>Staples and tilt rods.</strong> The most common Valley
            failure. Louvers stop moving together when staples walk out of the
            rod.
          </li>
          <li>
            <strong>Louvers / louvres.</strong> Split, missing, or warped slats
            can often be matched instead of replacing the panel.
          </li>
          <li>
            <strong>Hinges.</strong> Heavy door-wall and slider panels drop
            when hinge screws let go.
          </li>
          <li>
            <strong>Magnets.</strong> A panel that will not stay closed is
            usually a magnet and strike, not a ruined shutter.
          </li>
          <li>
            <strong>Side pins.</strong> Pins that walked out of the stile leave
            a louver hanging or on the floor.
          </li>
        </ul>
      </section>

      <section className="text-photo">
        <h2>Text a photo — we text back</h2>
        <p>
          Snap the louver, the tilt rod, the hinge, or the magnet and text it
          to {PHONE_DISPLAY}. We reply with next steps and a time to come out.
          After hours is fine — we schedule daily 10am–7pm.
        </p>
        <div className="cta-row">
          <TextLink
            placement="shutter-photo-text"
            className="btn btn-text"
            aria-label={`Text a photo to ${PHONE_DISPLAY}`}
          >
            Text a photo
          </TextLink>
          <a href="/get-a-quote?job=shutter" className="btn btn-secondary">
            Get a free estimate
          </a>
        </div>
      </section>

      <section>
        <h2>When we talk about new shutters</h2>
        <p>
          Custom wood shutters are a secondary offer. If rot, a broken stile,
          or a size that was never right makes repair a waste, we will say so.
          We will not open the visit by selling a whole-house package. New
          shades and blinds are in the same category: available, not the lead.
        </p>
        <p>
          Related work has its own pages:{" "}
          <Link href="/blind-and-shade-repair">blind and shade repair</Link>{" "}
          and{" "}
          <Link href="/motorized-shade-repair">motorized shade repair</Link>.
        </p>
      </section>

      <section>
        <h2>Where we do this work</h2>
        <p>
          Each city we cover has its own page, grouped from Sherman Oaks
          outward through the Valley and then greater Los Angeles. Start here
          if you are looking up plantation shutter repair itself; use a city
          page if you searched with a city name.
        </p>
        <CityAreaGroups />
      </section>

      <FaqList items={faq} />
      <CtaButtons
        placement="shutter-bottom"
        quoteHref="/get-a-quote?job=shutter"
      />
    </article>
  );
}
