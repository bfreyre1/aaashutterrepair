import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { HoursLine } from "@/components/HoursLine";
import { JobFigure } from "@/components/JobFigure";
import { LANDING_TRUST_CHIPS, TrustChips } from "@/components/TrustChips";
import { TextLink } from "@/components/TextLink";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/schema";
import { PHONE_DISPLAY, absoluteUrl } from "@/lib/site";

const title = "Plantation Shutter Repair in Los Angeles";
const description =
  "Plantation shutter repair in Los Angeles and the San Fernando Valley. On-site staples, louvers, tilt rods, hinges, and magnets. Free estimate. About 90% of jobs finish at the house. Call 818-392-8584.";

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
    question: "Do you repair plantation shutters on site?",
    answer:
      "Yes. About 90% of plantation wood shutter jobs finish at the house — staples, louvers, tilt rods, hinges, magnets, and side pins.",
  },
  {
    question: "Can you replace one louver instead of the whole panel?",
    answer:
      "Often yes. A split or missing plantation louver can be matched so the rest of the panel stays. We say so when the stile or the whole panel is actually finished.",
  },
  {
    question: "Do you repair painted and stained plantation shutters?",
    answer:
      "Yes. Matching one slat or one panel — painted or stained — is regular work when the rest of the room is still good.",
  },
  {
    question: "Can I text a picture of the broken plantation shutter?",
    answer:
      "Yes. Text a photo of the louver, tilt rod, hinge, or magnet to 818-392-8584. We look at it and text back to schedule. After-hours messages are fine — live help is daily 10am–7pm.",
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
          { name: "Shutter repair", path: "/shutter-repair" },
          {
            name: "Plantation shutter repair",
            path: "/plantation-shutter-repair",
          },
        ]}
      />
      <header className="page-hero">
        <p className="eyebrow">Wood plantation shutters · On-site</p>
        <h1>Plantation shutter repair</h1>
        <p className="lede">
          Tilt rod loose, a louver split, or a plantation panel that will not
          stay shut? We repair it at the house in Los Angeles and the San
          Fernando Valley. Free estimate. Call or text {PHONE_DISPLAY}.
        </p>
        <TrustChips items={LANDING_TRUST_CHIPS} />
        <CtaButtons
          placement="plantation-hero"
          quoteHref="/get-a-quote?job=plantation"
        />
        <HoursLine />
      </header>

      <JobFigure
        filename="white-plantation-shutters-living-room.jpg"
        sizes="(max-width: 800px) 100vw, 760px"
        priority
      />

      <section>
        <h2>Plantation shutter repair at the window</h2>
        <p>
          Plantation shutters fail in a familiar way: wide louvers stop moving
          together, a staple walks out of the tilt rod, or a heavy panel sags
          off a slider or door-wall. That is a repair, not a reason to replace
          every window in the room. We do this work on site across the San
          Fernando Valley and greater Los Angeles.
        </p>
        <p>
          If you searched plantation shutter repair, plantation shutters, or
          wood plantation shutter repair near you, you are on the page for
          that job. For a broader shutter search — cafe shutters, tier-on-tier,
          or “shutter repair near me” — use{" "}
          <Link href="/shutter-repair">shutter repair</Link>. Same crew.
        </p>
      </section>

      <section>
        <h2>What fails on plantation shutters</h2>
        <ul>
          <li>
            <strong>Tilt-rod staples.</strong> The signature plantation
            failure. Louvers hang at different angles when the staples pull
            out of the rod.
          </li>
          <li>
            <strong>Wide louvers.</strong> A split, cracked, or missing slat
            can often be matched. The rest of the panel stays.
          </li>
          <li>
            <strong>Door-wall and slider panels.</strong> Heavy plantation
            panels drop when hinge screws let go or a pin walks out.
          </li>
          <li>
            <strong>Magnets and strikes.</strong> A panel that swings open is
            usually the catch, not a ruined shutter.
          </li>
        </ul>
      </section>

      <section className="text-photo">
        <h2>Text a photo of the plantation shutter</h2>
        <p>
          Snap the loose tilt rod, the split louver, or the panel that will
          not close and text it to {PHONE_DISPLAY}. We reply with next steps
          and a time to come out. After hours is fine — we schedule daily
          10am–7pm.
        </p>
        <div className="cta-row">
          <TextLink
            placement="plantation-photo-text"
            className="btn btn-text"
            aria-label={`Text a photo to ${PHONE_DISPLAY}`}
          >
            Text a photo
          </TextLink>
          <a
            href="/get-a-quote?job=plantation"
            className="btn btn-secondary"
          >
            Get a free estimate
          </a>
        </div>
      </section>

      <section>
        <h2>Repair before a new set</h2>
        <p>
          Custom plantation shutters are a secondary offer. If rot, a broken
          stile, or an opening that was never the right size makes repair a
          waste, we will say so. We will not open the visit by selling a
          whole-house package.
        </p>
        <p>
          The same crew also repairs{" "}
          <Link href="/blind-and-shade-repair">blinds and shades</Link> and{" "}
          <Link href="/motorized-shade-repair">
            motorized / Somfy shades
          </Link>{" "}
          when that is the window next to the shutters.
        </p>
      </section>

      <section>
        <h2>Los Angeles and Valley cities</h2>
        <p>
          Van Nuys, Sherman Oaks, Los Angeles, Pasadena, Santa Monica, and
          Santa Clarita each have a city page. Use one if you searched with a
          city name. This page is for the product — plantation shutters.
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
      <CtaButtons
        placement="plantation-bottom"
        quoteHref="/get-a-quote?job=plantation"
      />
    </article>
  );
}
