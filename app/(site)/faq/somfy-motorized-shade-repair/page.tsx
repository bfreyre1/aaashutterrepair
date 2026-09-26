import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { HoursLine } from "@/components/HoursLine";
import { JobFigure } from "@/components/JobFigure";
import { somfyPageFaq } from "@/lib/faq";
import { PHONE_DISPLAY, PHONE_TEL, absoluteUrl } from "@/lib/site";

const title = "Somfy motorized shade repair in Los Angeles";
const description =
  "Somfy and motorized shade repair in Los Angeles: remotes, motors, and lost limits, and when a new shade is the honest call. Free estimate. Call or text 818-392-8584.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl("/faq/somfy-motorized-shade-repair"),
  },
  openGraph: {
    title: `${title} | AAA Shutter Repair`,
    description,
    url: absoluteUrl("/faq/somfy-motorized-shade-repair"),
  },
};

export default function SomfyMotorizedShadeRepairFaqPage() {
  return (
    <article className="page">
      <Breadcrumbs
        items={[
          { name: "FAQ", path: "/faq" },
          {
            name: "Somfy shade repair",
            path: "/faq/somfy-motorized-shade-repair",
          },
        ]}
      />
      <header className="page-hero">
        <p className="eyebrow">Somfy · Motors · Remotes · Limits</p>
        <h1>Somfy and motorized shade repair</h1>
        <p className="lede">
          A shade that will not go up or down is often a remote, a set of
          limits, or a motor — not a reason to replace the fabric. We look at
          it on site in Los Angeles and the San Fernando Valley. Call or text{" "}
          {PHONE_DISPLAY}.
        </p>
        <CtaButtons
          placement="faq-somfy-hero"
          quoteHref="/get-a-quote?job=motorized"
        />
      </header>

      <JobFigure
        filename="roman-shade-mount.jpg"
        sizes="(max-width: 800px) 100vw, 720px"
      />

      <section>
        <h2>What we check first</h2>
        <p>
          Motorized shades fail in a short list of ways: a Somfy remote that
          lost pairing, a battery wand that died, upper and lower limits that
          the motor no longer remembers, or a motor that stopped. AAA Shutter
          Repair treats that as its own service. The service page is{" "}
          <Link href="/motorized-shade-repair">motorized shade repair</Link>.
          This page is the longer answer.
        </p>
        <p>
          Tell us the brand if you know it, whether the remote lights up,
          whether the shade hums, jerks, or stays dead, and whether it is
          hardwired or battery if you know. Santa Monica condos and newer
          Santa Clarita builds see more of these systems than a typical Valley
          ranch. We still make the trip when the drive is reasonable.
        </p>
      </section>

      <section>
        <h2>Remotes and pairing</h2>
        <p>
          A remote that does nothing is not automatically a new shade. Often
          the handset, the channel, or the pairing is the failure, and the
          fabric is fine. We look at the remote you have — and a spare, if
          one is in a drawer — before we talk about the motor.
        </p>
        <p>
          A remote that lights up and a motor that stays silent are different
          from a motor that hums and will not travel. Those are both repair
          calls. Manual{" "}
          <Link href="/blind-and-shade-repair">blind and shade repair</Link>{" "}
          is a separate page when there is no motor in the headrail.
        </p>
      </section>

      <section>
        <h2>Limits</h2>
        <p>
          Limits are the top and bottom stops the motor is supposed to
          remember. When they are lost, the shade may stop halfway, climb
          into the cassette, or refuse to move through the opening. If the
          motor still runs, those stops can often be set again at the house.
        </p>
        <p>
          We set them on site when the motor supports it. This page does not
          walk through a programming sequence. Somfy motors do not all use the
          same buttons, and a wrong sequence can send a working shade the
          wrong direction. If the motor is silent, limits are not the first
          problem. Power, the remote, or the motor itself comes first.
        </p>
      </section>

      <section>
        <h2>When a new shade is the honest call</h2>
        <p>
          Replacement makes more sense when the motor is discontinued and
          nothing compatible will fit the tube, when the fabric is torn or
          sun-rotted, or when the shade was never the right size for the
          opening. A dead control is not that list. We say which one you have
          after we see the shade, before anyone orders a new one.
        </p>
        <p>
          New shades are available when repair is a waste. We still lead with
          the repair. Plantation shutters in the next room can be looked at
          on the same visit — that work is on{" "}
          <Link href="/plantation-shutter-repair">
            plantation shutter repair
          </Link>{" "}
          and the shorter answers are on the <Link href="/faq">FAQ</Link>.
        </p>
      </section>

      <section>
        <h2>How to ask for a look</h2>
        <p>
          Call <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> or text a
          photo of the shade and the remote to the same number. The{" "}
          <Link href="/get-a-quote?job=motorized">estimate form</Link> can be
          marked motorized / Somfy, and we text back to schedule. There is no
          published price for a motor, a remote, or a limit reset. The
          estimate is for the shade we are looking at.
        </p>
        <HoursLine />
      </section>

      <FaqList items={somfyPageFaq} />
      <CtaButtons
        placement="faq-somfy-bottom"
        quoteHref="/get-a-quote?job=motorized"
      />
    </article>
  );
}
