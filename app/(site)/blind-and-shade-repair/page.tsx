import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

const title = "Blind Repair and Shade Repair in Los Angeles";
const description =
  "Blind repair and shade repair in the San Fernando Valley and Los Angeles. Magnets, pins, wands, clutches, and roller shades — on-site when the job allows. Call 818-392-8584.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/blind-and-shade-repair") },
  openGraph: {
    title: `${title} | AAA Shutter Repair`,
    description,
    url: absoluteUrl("/blind-and-shade-repair"),
  },
};

const faq = [
  {
    question: "Can you repair blinds without replacing the whole window?",
    answer:
      "Often yes. Wands, tilters, slats, magnets, and lift problems are usually a repair, not a new product order.",
  },
  {
    question: "Do you repair roller shades?",
    answer:
      "Yes. Clutches, fabric that will not retract, and hardware that no longer holds are typical shade calls.",
  },
  {
    question: "What if the shade is motorized?",
    answer:
      "Use the motorized shade repair page for Somfy and other motors. We handle those as their own service.",
  },
];

export default function BlindAndShadeRepairPage() {
  return (
    <article className="page">
      <JsonLd
        data={serviceJsonLd({
          name: "Blind and shade repair",
          path: "/blind-and-shade-repair",
          description,
          serviceType: "Blind repair",
        })}
      />
      <Breadcrumbs
        items={[
          {
            name: "Blind and shade repair",
            path: "/blind-and-shade-repair",
          },
        ]}
      />
      <header className="page-hero">
        <p className="eyebrow">Blinds · Shades · On-site when possible</p>
        <h1>Blind and shade repair</h1>
        <p className="lede">
          A wand that spins, a shade that will not come down, or a magnet that
          no longer holds does not have to become a whole-room replacement.
        </p>
        <CtaButtons placement="blinds-hero" />
      </header>

      <figure className="content-figure">
        <Image
          src="/images/plantation-shutters-window.webp"
          alt="Interior wood blinds visible through a multi-pane window next to exterior shutters"
          width={1600}
          height={1067}
          sizes="(max-width: 800px) 100vw, 760px"
        />
        <figcaption>
          Royalty-free photo showing interior blinds — not a customer home.
        </figcaption>
      </figure>

      <section>
        <h2>Blind repair that stays at the window</h2>
        <p>
          AAA Shutter Repair is known first for plantation shutters, but a
          large share of calls are blinds and shades — especially in condos and
          rooms that never had wood shutters. We repair horizontal blinds,
          roller shades, and the small parts that fail: magnets, side pins,
          slats, wands, and lift hardware. The goal is the same as the shutter
          work: fix what is broken, keep what still works.
        </p>
        <p>
          Public reviews mention old, large blinds repaired on a next-day
          visit, kitchen blinds that would not close, and blackout shades with
          a bad cord. The pattern is not “we installed a new collection.” It is
          a technician — often named Alex in those reviews — who diagnosed the
          part and finished the job.
        </p>
      </section>

      <section>
        <h2>Typical blind and shade failures</h2>
        <ul>
          <li>Slats that flipped and will not tilt together</li>
          <li>Wands or tilters that spin without moving the slats</li>
          <li>Roller shades that retract halfway or not at all</li>
          <li>Magnets and pins that no longer hold a shade or valance</li>
          <li>Cords or clutches that failed on a blackout shade</li>
        </ul>
        <p>
          If the treatment is motorized, go to{" "}
          <Link href="/motorized-shade-repair">
            motorized / Somfy shade repair
          </Link>
          . If the window has wood plantation shutters, use{" "}
          <Link href="/plantation-shutter-repair">
            plantation shutter repair
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Los Angeles rooms we see this in</h2>
        <p>
          Valley ranch houses often have blinds in secondary bedrooms and
          shutters in the living room. Westside condos lean harder on roller
          shades. Pasadena sunrooms mix both. We serve Van Nuys, Sherman Oaks,
          Los Angeles, Pasadena, Santa Monica, and Santa Clarita. City pages
          exist if you want a geo landing page; this URL is the service final
          URL for blind repair and shade repair campaigns.
        </p>
      </section>

      <FaqList items={faq} />
      <p>
        Describe the window on the{" "}
        <Link href="/get-a-quote">free estimate form</Link>. We follow up by
        text to schedule.
      </p>
    </article>
  );
}
