import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { absoluteUrl } from "@/lib/site";

const title = "AAA Shutter Repair Review Themes";
const description =
  "What public reviews of AAA Shutter Repair keep repeating: on-site speed, repairs instead of replacement, and a technician named Alex. No star counts on this page.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/reviews") },
  openGraph: {
    title: `${title} | AAA Shutter Repair`,
    description,
    url: absoluteUrl("/reviews"),
  },
};

export default function ReviewsPage() {
  return (
    <article className="page">
      <Breadcrumbs items={[{ name: "Reviews", path: "/reviews" }]} />
      <header className="page-hero">
        <p className="eyebrow">Public review themes · No fake ratings</p>
        <h1>What callers say about the work</h1>
        <p className="lede">
          This page paraphrases themes from public reviews. It does not invent
          star counts, aggregate ratings, or reviewer names.
        </p>
        <CtaButtons placement="reviews-hero" />
      </header>

      <p className="prose-note">
        We are not embedding review widgets or schema ratings. If you want the
        original comments, look up the business on the review sites you already
        trust.
      </p>

      <section className="review-themes">
        <article>
          <h2>They came to the house and finished</h2>
          <p>
            Reviewers describe prompt scheduling — sometimes the next day —
            and work that ended in one visit. A few mention a shutter or blind
            repaired in minutes when the part was already on the truck. Others
            mention a return trip after a manufacturer part arrived, still
            faster than a full custom reorder.
          </p>
        </article>
        <article>
          <h2>Repair instead of replacement</h2>
          <p>
            The strongest theme: another company said the shutters or shades
            could not be saved. AAA repaired the broken panel, matched a slat,
            or sent a single piece out instead of replacing every window. One
            public thread describes building a matching shade part from other
            hardware on the truck so the customer did not have to replace the
            shade.
          </p>
        </article>
        <article>
          <h2>Alex, by name</h2>
          <p>
            A technician named Alex appears over and over in public comments:
            on time, confirms ETA, knowledgeable, friendly, careful in the
            home. People mention tips on how to avoid the same failure, and
            they mention communication — calls returned, process explained,
            price described as fair. We are not adding a last name, photo, or
            invented bio.
          </p>
        </article>
        <article>
          <h2>Not only shutters</h2>
          <p>
            Alongside plantation shutter stories are blinds that would not
            close, retracting shades that needed a part, and blackout shades
            with a bad cord. The company&apos;s listed mix — shutters first,
            then blinds, shades, and motors — matches what people say they
            booked.
          </p>
        </article>
      </section>

      <p>
        If that is the visit you want,{" "}
        <Link href="/get-a-quote">request a free estimate</Link> or call. Read
        more about the team on the <Link href="/about">about</Link> page.
      </p>
    </article>
  );
}
