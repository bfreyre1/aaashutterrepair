import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CityAreaGroups } from "@/components/CityAreaGroups";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { HoursLine } from "@/components/HoursLine";
import { PhoneLink } from "@/components/PhoneLink";
import { QuoteForm } from "@/components/QuoteForm";
import { TextLink } from "@/components/TextLink";
import { LANDING_TRUST_CHIPS, TrustChips } from "@/components/TrustChips";
import { quoteIntentLabel, quoteJobFromParam } from "@/lib/quote";
import type { FaqItem } from "@/lib/schema";
import {
  ADDRESS_DISPLAY,
  PHONE_DISPLAY,
  SITE_NAME,
  absoluteUrl,
} from "@/lib/site";

const title = "Free estimate for shutter, blind, and shade repair";
const description =
  "Free estimate for shutter, blind, and shade repair in Los Angeles. Tell us the city and what broke. We text back to schedule an on-site look. Call or text 818-392-8584.";

const estimateFaq: FaqItem[] = [
  {
    question: "Do you need my street address before you can estimate?",
    answer:
      "No. The city and a short description are enough to start. We ask for the street address when we text to schedule the look. The estimate itself is made at the window, after we see the opening, not from the form alone.",
  },
  {
    question: "Why is there no price list on this page?",
    answer:
      "Jobs differ. A single split louver, a tilt rod that needs more than new staples, hinges on a heavy door-wall panel, a paint or stain that has to match, and the drive from Sherman Oaks are not the same visit. We do not publish a rate card. The free estimate is for your window.",
  },
  {
    question: "Can you lock a number from a photo without coming out?",
    answer:
      "A clear photo tells us whether the failure looks like a one-visit repair and what to bring on the truck. It does not lock a price. We still look at the window on site before we give the estimate.",
  },
  {
    question: "What if I do not know the brand or the part name?",
    answer:
      "You do not need a brand name to request an estimate. Say what stopped working: a louver that dropped, a hinge that pulled out, a shade that will not roll, or a remote that lights up and does nothing. If it is motorized, a photo of the remote or the motor head is enough. We repair Somfy and other motors on site.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/get-a-quote") },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: absoluteUrl("/get-a-quote"),
  },
};

function firstParam(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function GetAQuotePage(
  props: PageProps<"/get-a-quote">,
) {
  const searchParams = await props.searchParams;
  const jobParam = firstParam(searchParams.job);
  const initialJobType = quoteJobFromParam(jobParam);
  const intentLabel = quoteIntentLabel(jobParam);
  const lede = intentLabel
    ? `Free estimate for ${intentLabel.toLowerCase()} in Los Angeles and the San Fernando Valley. After you call, text, or send the form, we text back to schedule. A technician looks at the window on site before any work starts.`
    : "After you call, text, or send the form, we text back to schedule. A technician looks at the window on site before any work starts. Tell us the city and what broke, or skip the form and call now.";

  return (
    <div className="page page--wide">
      <Breadcrumbs
        items={[{ name: "Get a free estimate", path: "/get-a-quote" }]}
      />
      <header className="page-hero">
        <p className="eyebrow">
          {intentLabel
            ? `${intentLabel} · Free estimate`
            : "Free estimate · We text to schedule"}
        </p>
        <h1>Get a free estimate</h1>
        <p className="lede">{lede}</p>
        <p>
          <a href="#estimate-form">Use the estimate form</a> if you would
          rather we text you a time. Call or text {PHONE_DISPLAY} if you want
          to talk now. Live help is daily 10am–7pm.
        </p>
        <TrustChips items={LANDING_TRUST_CHIPS} />
        <CtaButtons placement="quote-hero" showQuote={false} />
        <HoursLine />
      </header>

      <section aria-labelledby="what-to-tell">
        <h2 id="what-to-tell">What to tell us</h2>
        <p>
          A sentence is enough to open the request. The details below are what
          we actually use to plan the drive and the truck. Put them in the
          form, in a text to {PHONE_DISPLAY}, or say them on the phone. You do
          not need all three channels.
        </p>
        <div className="card-grid">
          <article className="card card--note">
            <h3>City</h3>
            <p>
              Name the city so we know the drive from the Sherman Oaks office.
              A ZIP helps. The street address can wait until we text to
              schedule. If your city is not in the form list, choose Other San
              Fernando Valley / LA and name it in the note.
            </p>
          </article>
          <article className="card card--note">
            <h3>What broke</h3>
            <p>
              Name the part if you can. The calls we schedule most often are a
              louver, a tilt rod, a hinge, a magnet, a shade remote, or a Somfy
              motor. If you are not sure of the name, say what the window used
              to do and what it does now. One room or the whole house both
              start the same way.
            </p>
          </article>
          <article className="card card--note">
            <h3>A clear photo of the failed part</h3>
            <p>
              Text a photo to {PHONE_DISPLAY}, or describe it in the form and
              send the picture when we reply. A useful photo is:
            </p>
            <ul className="estimate-points">
              <li>Close enough to see the break, the loose staple, or the motor label.</li>
              <li>Wide enough to show the panel, the shade, or the remote in your hand.</li>
              <li>Taken in daylight. A dark flash hides the stain and the crack.</li>
              <li>Of the failed part, not only a shot of the whole room.</li>
            </ul>
          </article>
        </div>
      </section>

      <div className="quote-layout">
        <aside className="phone-panel">
          <h2>Prefer to talk now?</h2>
          <p>
            Call or text when you want an answer now. Same crew that reads the
            form. You do not need to finish it. If you text, include the city
            and what broke. A photo of the failed part is the fastest way for
            us to know what we are walking into.
          </p>
          <HoursLine />
          <div className="phone-panel__actions">
            <PhoneLink placement="quote-sidebar" className="btn btn-primary">
              Call {PHONE_DISPLAY}
            </PhoneLink>
            <TextLink
              placement="quote-sidebar"
              className="btn btn-text"
              aria-label={`Text ${PHONE_DISPLAY}`}
            >
              Text us
            </TextLink>
          </div>
          <ul>
            <li>City, and what broke</li>
            <li>A photo of the failed part, if you have one</li>
            <li>We text back to set a time</li>
            <li>We look at the window before any work</li>
          </ul>
        </aside>
        <div id="estimate-form">
          <QuoteForm
            key={initialJobType || "quote"}
            initialJobType={initialJobType}
          />
        </div>
      </div>

      <section aria-labelledby="how-estimate-works">
        <h2 id="how-estimate-works">How the estimate works</h2>
        <p>
          The estimate is free. We do not publish flat prices, because two
          windows with the same symptom can still be different jobs. Nothing
          on this page is a rate card.
        </p>
        <ol className="steps">
          <li>
            <strong>You reach us.</strong> Call or text {PHONE_DISPLAY}, or
            send the form on this page. We text back to schedule. Live help is
            daily 10am–7pm. A text after hours still gets a reply so we can
            set a time when we are back.
          </li>
          <li>
            <strong>We look at the window on site.</strong> The number is for
            the opening in front of us. A dropped louver and a heavy door-wall
            hinge are not the same job, which is why there is no flat published
            price. The office is not a place to drop a panel off for a quote.
          </li>
          <li>
            <strong>Repair comes before replacement.</strong> Repair is usually
            less than full replacement. About 90% of plantation shutter jobs
            finish at the house. If a part has to be matched or ordered, we say
            so before we leave and come back when it is in.
          </li>
          <li>
            <strong>Nothing starts until you agree.</strong> Looking at the
            window is the estimate. We do not take the panel apart, order a
            part, or start the repair until you want that work. If the wood or
            the shade is truly finished, we say that on the visit.
          </li>
        </ol>
      </section>

      <section aria-labelledby="what-we-repair">
        <h2 id="what-we-repair">What we repair</h2>
        <p>
          Use the form for any of these. The links are the longer repair pages,
          so this estimate page can stay about how the visit is booked. We
          start with repair. New product is only mentioned when the opening
          cannot be saved.
        </p>
        <div className="card-grid card-grid--pairs">
          <Link href="/shutter-repair" className="card">
            <h3>Shutter repair</h3>
            <p>
              Tell us if a tilt rod is loose, a louver split, or a hinge pulled
              out of the stile. The estimate is for that repair at the window,
              not a new set for the room.
            </p>
          </Link>
          <Link href="/plantation-shutter-repair" className="card">
            <h3>Plantation shutter repair</h3>
            <p>
              Painted or stained plantation panels that still belong in the
              opening. On the visit we look at staples, louvers, tilt rods,
              hinges, magnets, and side pins, and we say which of those failed.
            </p>
          </Link>
          <Link href="/blind-and-shade-repair" className="card">
            <h3>Blind and shade repair</h3>
            <p>
              A roller that will not retract, a wand that spins, or a magnet
              that let go of the shade. Same free estimate and the same on-site
              look as a shutter.
            </p>
          </Link>
          <Link href="/motorized-shade-repair" className="card">
            <h3>Motorized shade repair</h3>
            <p>
              A Somfy motor that hums, a remote that lights up and does
              nothing, or a shade that stops short of the sill. We diagnose the
              shade before anyone talks about replacing the fabric.
            </p>
          </Link>
        </div>
        <p>
          Somfy is the motor we are asked to look at most often. A short
          overview of that system, written as repair work rather than a
          showroom list, is on{" "}
          <Link href="/partners">Somfy and systems we repair</Link>.
        </p>
      </section>

      <section aria-labelledby="estimate-area">
        <h2 id="estimate-area">Where we come for the estimate</h2>
        <p>
          The estimate happens at your window. We cover the San Fernando Valley
          and greater Los Angeles, listed the same way as the rest of this
          site: central Valley first, then the wider Valley, then greater Los
          Angeles. If your city is nearby and not named, call or text{" "}
          {PHONE_DISPLAY} and we will say whether the drive is reasonable.
        </p>
        <CityAreaGroups
          linkText={(label) => `Shutter repair in ${label}`}
        />
        <p>
          The office mailbox is {ADDRESS_DISPLAY}. That is mail and an office
          unit in Sherman Oaks. There is no showroom and nothing to drop off.
          Do not bring a panel or a shade to Ventura Boulevard for the
          estimate. We come to the house.
        </p>
      </section>

      <FaqList
        heading="Questions about the estimate"
        headingId="estimate-faq"
        items={estimateFaq}
      />

      <section aria-labelledby="estimate-more">
        <h2 id="estimate-more">More on cost and visits</h2>
        <p>
          The questions above are only about how an estimate starts. The{" "}
          <Link href="/faq">repair FAQ</Link> goes further on visits, hours,
          and the service area. Why two plantation shutter jobs are not the
          same visit, still with no rate card, is on{" "}
          <Link href="/faq/plantation-shutter-repair-cost-los-angeles">
            plantation shutter repair cost in Los Angeles
          </Link>
          . Remotes, limits, and motors are on{" "}
          <Link href="/faq/somfy-motorized-shade-repair">
            Somfy and motorized shade repair
          </Link>
          .
        </p>
      </section>

      <div className="split-cta">
        <h2>Call, text, or send the form</h2>
        <p>
          {PHONE_DISPLAY} is the same number for a call or a text. Live help
          daily 10am–7pm. After hours, text and we reply to schedule. The form
          higher on this page is the same request if you would rather type the
          city and what broke.
        </p>
        <CtaButtons placement="quote-bottom" showQuote={false} />
      </div>
    </div>
  );
}
