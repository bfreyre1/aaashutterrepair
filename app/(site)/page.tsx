/* eslint-disable @next/next/no-img-element --
   Homepage hero and job strip must use the same static JPEG src on
   desktop and mobile. next/image srcset was leaving the beige box. */
import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/schema";
import { absoluteUrl, CITY_LINKS, PHONE_DISPLAY } from "@/lib/site";

const title = "Plantation Shutter Repair in Los Angeles";
const description =
  "On-site plantation shutter repair in Los Angeles and the San Fernando Valley. Staples, louvers, tilt rods, hinges, magnets, plus blinds and Somfy shades. Call 818-392-8584.";

export const metadata: Metadata = {
  title: { absolute: `${title} | AAA Shutter Repair` },
  description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: `${title} | AAA Shutter Repair`,
    description,
    url: absoluteUrl("/"),
  },
};

const homeFaq = [
  {
    question: "Do you repair plantation shutters on site?",
    answer:
      "Yes. About 90% of plantation wood shutter jobs are finished at the house — staples, louvers, tilt rods, hinges, magnets, and side pins.",
  },
  {
    question: "Do you only work on shutters?",
    answer:
      "Shutters are the core job. We also repair blinds and shades, including Somfy and other motorized shade systems. New custom shutters, shades, and blinds are a secondary offer when repair is not enough.",
  },
  {
    question: "Which cities do you serve?",
    answer:
      "The San Fernando Valley and greater Los Angeles, including Van Nuys, Sherman Oaks, Los Angeles, Pasadena, Santa Monica, and Santa Clarita.",
  },
  {
    question: "How do I schedule?",
    answer:
      "Call 818-392-8584 or send the estimate form. We follow up by text to confirm and schedule.",
  },
];

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href="/images/hero-on-site-repair.jpg" />
      <JsonLd
        data={serviceJsonLd({
          name: "Plantation shutter repair in Los Angeles",
          path: "/",
          description,
          serviceType: "Plantation shutter repair",
        })}
      />

      <section className="hero">
        <figure className="hero__media">
          <img
            className="hero__photo"
            src="/images/hero-on-site-repair.jpg"
            alt="On-site plantation shutter repair in a Los Angeles home"
            width={1168}
            height={784}
            fetchPriority="high"
            decoding="async"
          />
        </figure>
        <div className="hero__copy">
          <p className="eyebrow">San Fernando Valley · Greater Los Angeles</p>
          <h1>Plantation shutter repair in Los Angeles</h1>
          <p className="hero__human">
            Your local experts in restoring the beauty, security, and function
            of the shutters you already own.
          </p>
          <p className="lede">
            On-site wood shutter repair — the job other companies try to turn
            into a full replacement. Staples, louvers, tilt rods, hinges,
            magnets, and side pins. Blinds, shades, and Somfy motors too.
          </p>
          <CtaButtons placement="home-hero" />
          <p>
            Or call <strong>{PHONE_DISPLAY}</strong> — we text back to set a
            time.
          </p>
        </div>
      </section>

      <div className="wrap">
        <section className="trust" aria-label="Why callers book AAA">
          <div>
            <strong>On-site about 90% of the time</strong>
            Plantation wood shutter repair at the window, not a shop drop-off.
          </div>
          <div>
            <strong>Repair before replacement</strong>
            Public reviews keep saying the same thing: a tech named Alex fixed
            what others wanted to replace.
          </div>
          <div>
            <strong>Family-business roots</strong>
            Derived from a family business founded in 2005. Valley-based,
            greater Los Angeles service area.
          </div>
        </section>

        <section className="job-strip" aria-label="Recent on-site work">
          <h2>Recent on-site work</h2>
          <div className="job-strip__grid">
            <figure className="job-card">
              <img
                src="/images/gallery/bedroom-shutters.jpg"
                alt="White plantation shutters on a bedroom window"
                width={1000}
                height={750}
              />
              <figcaption>Panel saved on site.</figcaption>
            </figure>
            <figure className="job-card">
              <img
                src="/images/gallery/house-shutters.jpg"
                alt="Stacked white shutter panels"
                width={1067}
                height={800}
              />
              <figcaption>Matched slat.</figcaption>
            </figure>
            <figure className="job-card">
              <img
                src="/images/gallery/house-window.jpg"
                alt="Finished interior shutters on a house window"
                width={1920}
                height={2560}
              />
              <figcaption>Finished room.</figcaption>
            </figure>
          </div>
          <p>
            <Link href="/gallery">See the gallery →</Link>
          </p>
        </section>

        <section>
          <h2>What we actually repair</h2>
          <p>
            If you searched plantation shutter repair, shutter repair near me,
            blind repair, or motorized shade repair, you are in the right
            place. This is not a generic window-treatment catalog.
          </p>
          <div className="card-grid">
            <Link href="/plantation-shutter-repair" className="card">
              <h3>Plantation shutter repair</h3>
              <p>
                Wood shutters: staples, louvers / louvres, tilt rods, hinges,
                magnets, side pins. Most jobs stay on site.
              </p>
            </Link>
            <Link href="/blind-and-shade-repair" className="card">
              <h3>Blind and shade repair</h3>
              <p>
                Horizontal blinds, roller shades, and hardware — including the
                magnets and pins other shops will not touch.
              </p>
            </Link>
            <Link href="/motorized-shade-repair" className="card">
              <h3>Motorized / Somfy repair</h3>
              <p>
                Somfy and other motorized shade systems restored so the remote
                and the fabric move again.
              </p>
            </Link>
          </div>
        </section>

        <section>
          <h2>How a repair visit works</h2>
          <ol className="steps">
            <li>
              <strong>Call or send the form.</strong> Phone is fastest for paid
              search. The form is for a free estimate — we follow up by text.
            </li>
            <li>
              <strong>We come to the window.</strong> No storefront appointment.
              About nine out of ten plantation shutter jobs finish on site.
            </li>
            <li>
              <strong>Repair first.</strong> If a panel truly cannot be saved,
              we say so. Custom shutters, shades, and blinds are secondary —
              not the opening pitch.
            </li>
          </ol>
        </section>

        <section>
          <h2>Cities we cover</h2>
          <p>
            San Fernando Valley and greater Los Angeles. Use a city page if you
            searched with a city name; use the service pages as Google Ads
            final URLs.
          </p>
          <div className="city-grid">
            {CITY_LINKS.map((city) => (
              <Link key={city.href} href={city.href} className="city-card">
                <h3>Shutter repair in {city.label}</h3>
                <p>On-site plantation shutter repair and related fixes.</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2>What customers keep repeating</h2>
          <p className="prose-note">
            Themes from public reviews — paraphrased, no star counts, no copied
            reviewer names.
          </p>
          <div className="review-themes">
            <article>
              <h3>Fast and on site</h3>
              <p>
                Callers mention next-day or prompt visits and repairs that
                finished in a single trip — sometimes in minutes when the part
                was on the truck.
              </p>
            </article>
            <article>
              <h3>Saved the shutters</h3>
              <p>
                The story we hear most: another company quoted a full
                replacement. Alex repaired the broken panel, matched a slat, or
                sent one piece to a manufacturer instead of replacing the room.
              </p>
            </article>
            <article>
              <h3>Respectful and clear</h3>
              <p>
                On time, careful in the house, explains the wear, and sometimes
                leaves tips so the same failure does not come back next season.
              </p>
            </article>
          </div>
          <p>
            More on the <Link href="/reviews">reviews</Link> and{" "}
            <Link href="/about">about</Link> pages.
          </p>
        </section>

        <div className="split-cta">
          <h2>Need the panel working again?</h2>
          <p>
            Call now for the fastest path, or request a free estimate. We text
            you to schedule — no fake online booking calendar.
          </p>
          <CtaButtons placement="home-bottom" />
        </div>

        <FaqList items={homeFaq} />
      </div>
    </>
  );
}
