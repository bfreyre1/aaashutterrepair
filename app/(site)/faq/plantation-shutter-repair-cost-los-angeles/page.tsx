import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { HoursLine } from "@/components/HoursLine";
import { JobFigure } from "@/components/JobFigure";
import { plantationCostPageFaq } from "@/lib/faq";
import {
  ADDRESS_DISPLAY,
  PHONE_DISPLAY,
  PHONE_TEL,
  absoluteUrl,
} from "@/lib/site";

const title = "Plantation shutter repair cost in Los Angeles";
const description =
  "What drives plantation shutter repair cost in Los Angeles: louvers, tilt rods, hinges, paint match, and travel. No flat price. Most jobs one visit. Call or text 818-392-8584.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl("/faq/plantation-shutter-repair-cost-los-angeles"),
  },
  openGraph: {
    title: `${title} | AAA Shutter Repair`,
    description,
    url: absoluteUrl("/faq/plantation-shutter-repair-cost-los-angeles"),
  },
};

export default function PlantationShutterRepairCostPage() {
  return (
    <article className="page">
      <Breadcrumbs
        items={[
          { name: "FAQ", path: "/faq" },
          {
            name: "Plantation shutter repair cost",
            path: "/faq/plantation-shutter-repair-cost-los-angeles",
          },
        ]}
      />
      <header className="page-hero">
        <p className="eyebrow">Los Angeles · San Fernando Valley</p>
        <h1>Plantation shutter repair cost in Los Angeles</h1>
        <p className="lede">
          Repair is usually far less than replacing the set. The price still
          depends on the window — louvers, tilt rod, hinges, finish, and the
          drive. Call or text {PHONE_DISPLAY} for a free estimate.
        </p>
        <CtaButtons
          placement="faq-cost-hero"
          quoteHref="/get-a-quote?job=plantation"
        />
      </header>

      <JobFigure
        filename="white-plantation-shutters-living-room.jpg"
        sizes="(max-width: 800px) 100vw, 720px"
      />

      <section>
        <h2>Why there is no dollar menu</h2>
        <p>
          We do not publish a price list for plantation shutter repair in Los
          Angeles. A louver that dropped in Sherman Oaks and a louver that
          dropped in Santa Monica can be the same part and a different job
          once we see the wood, the finish, and how the panel hangs. The
          honest number comes from the window in front of us.
        </p>
        <p>
          What we can say before the visit: repair is usually far less than
          full replacement, and most plantation shutter jobs finish in one visit at
          the house. About 90% of plantation wood shutter jobs never leave the
          opening. Call{" "}
          <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> or text the same
          number, or use the{" "}
          <Link href="/get-a-quote?job=plantation">estimate form</Link>.
        </p>
      </section>

      <section>
        <h2>What changes the cost</h2>
        <ul>
          <li>
            <strong>Louver count.</strong> One split slat is a smaller job
            than a panel of wide louvers that all need to be matched.
          </li>
          <li>
            <strong>Tilt rod.</strong> Staples that walked out of the rod are
            the usual plantation shutter failure. A rod that itself is broken is a
            different repair.
          </li>
          <li>
            <strong>Hinges, magnets, and side pins.</strong> Heavy door-wall
            and slider panels drop when hinge screws let go or a pin walks
            out. A panel that swings open is often the catch.
          </li>
          <li>
            <strong>Paint or stain match.</strong> Matching one slat so it
            sits with the rest of the room takes more care than a white
            louver that already matches the truck stock.
          </li>
          <li>
            <strong>Travel.</strong> The office is {ADDRESS_DISPLAY}. The
            work is still at your window. A central Valley house is a shorter
            trip than Pasadena, Santa Monica, or Santa Clarita, and we will
            say if the drive is reasonable.
          </li>
          <li>
            <strong>How many openings share the failure.</strong> One panel
            is the usual call. A whole room of the same broken staple is more
            time, and it is still a repair.
          </li>
        </ul>
      </section>

      <section>
        <h2>Repair before a new plantation shutter set</h2>
        <p>
          Custom plantation shutters are a secondary offer. If rot, a broken
          stile, or an opening that was never the right size makes repair a
          waste, we will say so. We will not open the visit by selling a
          whole-house package.
        </p>
        <p>
          The product page is{" "}
          <Link href="/plantation-shutter-repair">plantation shutter repair</Link>
          . Other wood shutter questions — cafe shutters, tier-on-tier, or a
          search for shutter repair near you — are on{" "}
          <Link href="/shutter-repair">shutter repair</Link>. The short
          answers for the rest of the company are on the{" "}
          <Link href="/faq">FAQ</Link>.
        </p>
      </section>

      <section>
        <h2>What the visit is like</h2>
        <p>
          We come to the house and look at the window before any work starts.
          The parts list is specific: staples, louvers, tilt rods, hinges,
          magnets, and side pins. Most of those jobs finish in that visit. If
          a part has to be matched or ordered, we say so before we leave and
          come back when it is in.
        </p>
        <p>
          Text a photo of the louver, tilt rod, hinge, or magnet to{" "}
          {PHONE_DISPLAY} before we drive. After-hours messages are fine. Live
          help is daily 10am–7pm. We do not promise a same-day visit.
        </p>
        <HoursLine />
      </section>

      <FaqList items={plantationCostPageFaq} />
      <CtaButtons
        placement="faq-cost-bottom"
        quoteHref="/get-a-quote?job=plantation"
      />
    </article>
  );
}
