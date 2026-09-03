import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

const title = "Plantation Shutter Repair Near Me";
const description =
  "On-site plantation wood shutter repair in Los Angeles: staples, louvers, tilt rods, hinges, magnets, and side pins. About 90% of jobs finish at the house. Call 818-392-8584.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/plantation-shutter-repair") },
  openGraph: {
    title: `${title} | AAA Shutter Repair`,
    description,
    url: absoluteUrl("/plantation-shutter-repair"),
  },
};

const faq = [
  {
    question: "What parts of a plantation shutter can you repair?",
    answer:
      "Staples, louvers (louvres), tilt rods, hinges, magnets, and side pins. Most wood plantation shutters can be repaired on site.",
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
];

export default function PlantationShutterRepairPage() {
  return (
    <article className="page">
      <JsonLd
        data={serviceJsonLd({
          name: "Plantation shutter repair",
          path: "/plantation-shutter-repair",
          description,
          serviceType: "Plantation shutter repair",
        })}
      />
      <Breadcrumbs
        items={[
          {
            name: "Plantation shutter repair",
            path: "/plantation-shutter-repair",
          },
        ]}
      />
      <header className="page-hero">
        <p className="eyebrow">Primary service · Google Ads final URL</p>
        <h1>Plantation shutter repair</h1>
        <p className="lede">
          Wood plantation shutters are built to be serviced. A loose staple or
          a louver on the floor is not a reason to replace every window in the
          room.
        </p>
        <CtaButtons placement="plantation-hero" />
      </header>

      <figure className="content-figure">
        <Image
          src="/images/white-window-shutters.webp"
          alt="Tan louvered shutters on a cream stucco wall, showing hinges and slats"
          width={1400}
          height={2100}
          sizes="(max-width: 800px) 100vw, 640px"
        />
        <figcaption>
          Royalty-free Unsplash photo of louvered shutters — not a client job.
        </figcaption>
      </figure>

      <section>
        <h2>On-site wood shutter repair</h2>
        <p>
          AAA Shutter Repair specializes in plantation wood shutter repair, and
          about 90% of those jobs stay on site. We come to the house in the San
          Fernando Valley and greater Los Angeles with the hardware that
          actually fails: tilt-rod staples, side pins, magnets, hinges, and
          replacement louvers. If you searched plantation shutter repair or
          shutter repair near me, this is the page meant to answer that query
          — not a generic “quality window solutions” pitch.
        </p>
        <p>
          Public reviews of the company keep describing the same visit: a
          technician named Alex shows up, repairs the broken panel, and leaves
          the rest of the set in place. Other companies had already quoted a
          full replacement. That is the gap we fill.
        </p>
      </section>

      <section>
        <h2>What we fix on plantation shutters</h2>
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

      <section>
        <h2>When we talk about new shutters</h2>
        <p>
          Custom wood shutters are a secondary offer. If rot, a broken stile,
          or a size that was never right makes repair a waste, we will say so.
          We will not open the visit by selling a whole-house package. New
          shades and blinds are in the same category: available, not the lead.
        </p>
        <p>
          Related work lives on its own URLs so they can be Ads final URLs:{" "}
          <Link href="/blind-and-shade-repair">blind and shade repair</Link>{" "}
          and{" "}
          <Link href="/motorized-shade-repair">motorized shade repair</Link>.
        </p>
      </section>

      <section>
        <h2>Where we do this work</h2>
        <p>
          Van Nuys, Sherman Oaks, Los Angeles, Pasadena, Santa Monica, and
          Santa Clarita each have a city page with local copy. Start here if
          your keyword has no city; start on a city lander if it does.
        </p>
        <ul className="link-columns">
          <li>
            <Link href="/shutter-repair-van-nuys">Van Nuys</Link>
          </li>
          <li>
            <Link href="/shutter-repair-sherman-oaks">Sherman Oaks</Link>
          </li>
          <li>
            <Link href="/shutter-repair-los-angeles">Los Angeles</Link>
          </li>
          <li>
            <Link href="/shutter-repair-pasadena">Pasadena</Link>
          </li>
          <li>
            <Link href="/shutter-repair-santa-monica">Santa Monica</Link>
          </li>
          <li>
            <Link href="/shutter-repair-santa-clarita">Santa Clarita</Link>
          </li>
        </ul>
      </section>

      <FaqList items={faq} />
      <p>
        Ready to schedule? <Link href="/get-a-quote">Get a free estimate</Link>
        . We follow up by text.
      </p>
    </article>
  );
}
