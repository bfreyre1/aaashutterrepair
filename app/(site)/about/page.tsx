import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import {
  ADDRESS_DISPLAY,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  absoluteUrl,
} from "@/lib/site";

const title = "About the company";
const description =
  "AAA Shutter Repair is a San Fernando Valley team — derived from a family business founded in 2005 — specializing in on-site plantation shutter repair across greater Los Angeles.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: `${title} | AAA Shutter Repair`,
    description,
    url: absoluteUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <article className="page">
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
      <header className="page-hero">
        <p className="eyebrow">San Fernando Valley · Since family roots in 2005</p>
        <h1>About AAA Shutter Repair</h1>
        <p className="lede">
          A close, niche team that repairs wood shutters, blinds, and
          motorized shades on site — instead of talking you into a catalog.
        </p>
        <CtaButtons placement="about-hero" />
      </header>

      <figure className="content-figure">
        <Image
          src="/images/wood-shutters-detail.webp"
          alt="Weathered wooden louvered shutters and metal hinges in sunlight"
          width={1400}
          height={1298}
          sizes="(max-width: 800px) 100vw, 720px"
        />
        <figcaption>
          Royalty-free Unsplash photo — not a staff or customer portrait.
        </figcaption>
      </figure>

      <section>
        <h2>Family-business roots, repair-first work</h2>
        <p>
          The current company is derived from a family business founded in
          2005. The public site and listings describe a small, multicultural
          team based in the San Fernando Valley, working across the diverse
          neighborhoods of greater Los Angeles. The office is {ADDRESS_DISPLAY}.
          Repair still happens at your window — there is no showroom drop-off.
        </p>
        <p>
          The specialty is on-site plantation wood shutter repair. About 90%
          of those jobs never leave the house. The parts list is specific:
          staples, louvers, tilt rods, hinges, magnets, and side pins. Blind
          repair, shade repair, and Somfy / motorized shade repair sit
          alongside that work. Custom wood shutters, new shades, and new
          blinds are available when a window is truly beyond repair.
        </p>
      </section>

      <section>
        <h2>The technician customers mention</h2>
        <p>
          Public reviews repeatedly name Alex: on time, fast, knowledgeable,
          and willing to repair what other companies called a full replacement.
          We are not inventing a headcount, a star rating, or a biography
          beyond what those public comments already say. If you want the
          themes in one place, see the <Link href="/reviews">reviews</Link>{" "}
          page.
        </p>
      </section>

      <section>
        <h2>Where we work</h2>
        <p>
          Van Nuys, Sherman Oaks, Los Angeles, Pasadena, Santa Monica, Santa
          Clarita, and the rest of the San Fernando Valley / greater Los
          Angeles area we can reasonably reach. City landers and service pages
          are linked from the home page so search and ads can use real URLs,
          not hash links.
        </p>
      </section>

      <section>
        <h2>How to reach us</h2>
        <p>
          Call <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> or email{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. The office is{" "}
          {ADDRESS_DISPLAY}. The <Link href="/get-a-quote">estimate form</Link>{" "}
          is built so we can text you back to schedule. Submissions create an
          estimate request in our shop system.
        </p>
      </section>
    </article>
  );
}
