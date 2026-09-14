import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { TrustChips } from "@/components/TrustChips";
import { JsonLd } from "@/components/JsonLd";
import { TextLink } from "@/components/TextLink";
import { serviceJsonLd } from "@/lib/schema";
import { PHONE_DISPLAY, absoluteUrl } from "@/lib/site";

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

const blindsChips = [
  "Fix the part — not the whole window",
  "Wands · rollers · magnets · clutches",
  "Text a photo — we text back",
] as const;

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
  {
    question: "Can I text a picture first?",
    answer:
      "Yes. Text a photo of the broken wand, roller, magnet, or clutch to 818-392-8584. We look at it and text back to schedule. After-hours messages are fine — live help is daily 10am–7pm.",
  },
  {
    question: "Do you only repair shutters?",
    answer:
      "No. This page is for blind and shade repair — wands, rollers, magnets, pins, cords, and clutches. The same crew also repairs plantation shutters when that is the job.",
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
          Broken wand, stuck roller, or blinds that won’t tilt? We repair on
          site across the Valley and LA — usually without replacing the whole
          treatment. Call or text {PHONE_DISPLAY}.
        </p>
        <TrustChips items={blindsChips} />
        <CtaButtons placement="blinds-hero" />
        <p className="hours-line">
          After hours? Text anytime — we schedule daily 10am–7pm.
        </p>
      </header>

      <figure className="content-figure">
        <Image
          src="/images/plantation-shutters-window.webp"
          alt="Interior wood blinds visible through a multi-pane window next to exterior shutters"
          width={1600}
          height={1067}
          sizes="(max-width: 800px) 100vw, 760px"
        />
      </figure>

      <section>
        <h2>Blind and shade repair at the window</h2>
        <p>
          Broken wands, stuck rollers, magnets that let go, and clutches that
          will not lift — that is the work on this page. We repair horizontal
          blinds and roller shades on site across the San Fernando Valley and
          Los Angeles when the job allows. The goal is to fix the part and keep
          the treatment you already have.
        </p>
        <p>
          The same crew also repairs plantation shutters when that is what
          failed. If the window is wood shutters, start on{" "}
          <Link href="/plantation-shutter-repair">
            plantation shutter repair
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>What we fix</h2>
        <ul>
          <li>
            <strong>Wands and tilters.</strong> A wand that spins or slats that
            will not tilt together is usually a tilter or wand repair — not a
            new blind.
          </li>
          <li>
            <strong>Roller stuck halfway.</strong> Roller shades that retract
            halfway or will not come down are typically clutch and hardware
            work, not a new fabric order first.
          </li>
          <li>
            <strong>Magnets and pins.</strong> Magnets and side pins that no
            longer hold a shade, valance, or panel closed are a small-part
            visit.
          </li>
          <li>
            <strong>Cord or clutch on a blackout shade.</strong> A failed cord
            or clutch should not mean replacing the whole blackout treatment.
          </li>
        </ul>
        <p>
          If the treatment is motorized, go to{" "}
          <Link href="/motorized-shade-repair">
            motorized / Somfy shade repair
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
          are there if you searched with a city name. This page is for the
          type of repair — blinds and shades.
        </p>
      </section>

      <section aria-label="Recent blind and shade repairs">
        <h2>Recent repairs, paraphrased</h2>
        <p className="prose-note">
          Themes from public reviews — no star counts, no reviewer names.
        </p>
        <div className="review-themes">
          <article>
            <h3>Next-day large blind</h3>
            <p>
              A large, older blind that other shops wanted to replace was
              repaired on a next-day visit. The treatment stayed. The failed
              part did not.
            </p>
          </article>
          <article>
            <h3>Kitchen blinds that would not close</h3>
            <p>
              Kitchen blinds stuck open were diagnosed and repaired on site
              instead of becoming a new product order.
            </p>
          </article>
          <article>
            <h3>Blackout shade cord</h3>
            <p>
              A blackout shade with a failed cord was restored so the room
              could go dark again — clutch and lift hardware, not a new shade.
            </p>
          </article>
        </div>
      </section>

      <section className="text-photo">
        <h2>Text a photo — we text back</h2>
        <p>
          Snap the wand, the roller, the magnet, or the clutch and text it to{" "}
          {PHONE_DISPLAY}. We reply with next steps and a time to come out.
          After hours is fine — we schedule daily 10am–7pm.
        </p>
        <div className="cta-row">
          <TextLink
            placement="blinds-photo-text"
            className="btn btn-text"
            aria-label={`Text a photo to ${PHONE_DISPLAY}`}
          >
            Text a photo
          </TextLink>
          <a href="/get-a-quote" className="btn btn-secondary">
            Get a free estimate
          </a>
        </div>
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
