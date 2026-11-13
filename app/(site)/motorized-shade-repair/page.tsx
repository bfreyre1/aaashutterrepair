import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CityAreaGroups } from "@/components/CityAreaGroups";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { HoursLine } from "@/components/HoursLine";
import { JobFigure } from "@/components/JobFigure";
import { LANDING_TRUST_CHIPS, TrustChips } from "@/components/TrustChips";
import { JsonLd } from "@/components/JsonLd";
import { TextLink } from "@/components/TextLink";
import { serviceJsonLd, type FaqItem } from "@/lib/schema";
import {
  ADDRESS_DISPLAY,
  PHONE_DISPLAY,
  SHARE_IMAGE,
  SITE_NAME,
  absoluteUrl,
} from "@/lib/site";

const title = "Motorized Shade and Somfy Repair in Los Angeles";
const description =
  "Somfy and motorized shade repair in Los Angeles and the San Fernando Valley. We fix motors that will not respond, lost remotes or programming, shades stuck partway, noisy motors, and power issues. On-site diagnosis, then a free estimate. Call 818-392-8584.";

const quoteHref = "/get-a-quote?job=motorized";

const faq: FaqItem[] = [
  {
    question: "Do you repair Somfy shades in Los Angeles, or only replace them?",
    answer: `${SITE_NAME} repairs Somfy and other motorized shade systems on site. We are a repair shop, not a Somfy dealer and not an authorized dealer or factory partner. A stopped motor, a remote that lost pairing, a dead battery wand, or limits the shade no longer remembers are repair calls. We say when the fabric or the motor is actually finished.`,
  },
  {
    question: "The remote lights up and the shade does nothing. What do you check?",
    answer:
      "We check the handset first, including a spare if one is in a drawer, then whether the motor still answers. A light on the remote and a silent shade is a different job from a motor that hums and will not travel. Pairing, the selected channel, and power come before any talk of a new shade.",
  },
  {
    question: "Can a humming motor be repaired without replacing the shade?",
    answer:
      "Often yes. A hum with no travel can be a motor trying to turn against a bind, a drive that is slipping inside the tube, or a motor that has failed while the fabric is still sound. We watch the shade at the window and say whether the repair is the motor, the path the fabric travels, or both.",
  },
  {
    question:
      "The shade is stuck partway, runs uneven, or the motor is noisy. Can you repair that?",
    answer:
      "Those are common repair calls. A shade that stops halfway often has limits that drifted, or fabric catching at one end. A shade that tilts or walks to one side is usually a hem, a tube, or a track issue, not a reason to replace the whole treatment. A noisy motor can be a failing drive, a dry or binding path, or a motor that is working harder than it should. We diagnose that at the window, then say whether a repair will hold.",
  },
  {
    question: "When is a new motorized shade the honest call?",
    answer:
      "Replacement makes more sense when the motor is discontinued and nothing compatible will fit the tube, when the fabric is torn or sun-rotted, or when the shade was never the right size for the opening. A dead remote, a battery wand, or limits that drifted are usually repairs. There is no published price. The estimate is for the shade we are looking at.",
  },
  {
    question: "Which cities do you cover for motorized shade repair?",
    answer: `We repair motorized shades on site across the San Fernando Valley and greater Los Angeles, including Sherman Oaks, Van Nuys, Encino, Studio City, Burbank, Glendale, Woodland Hills, Los Angeles, Pasadena, Santa Monica, and Santa Clarita. The office mailbox is ${ADDRESS_DISPLAY}. The repair happens at your window. If your city is nearby and not named, call or text ${PHONE_DISPLAY} and we will say whether the drive is reasonable.`,
  },
  {
    question: "What should I send before the motorized shade estimate?",
    answer: `Text ${PHONE_DISPLAY} a photo of the shade in the opening, the remote (brand mark visible if you can), and the headrail or battery wand if you can reach it safely. Say the city and whether the shade hums, jerks, or stays dead. The street address can wait until we text to schedule. Live help is every day from 10 AM to 7 PM. A text after those hours still gets a reply so we can set a time.`,
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/motorized-shade-repair") },
  openGraph: {
    images: [SHARE_IMAGE],
    title: `${title} | ${SITE_NAME}`,
    description,
    url: absoluteUrl("/motorized-shade-repair"),
  },
};

export default function MotorizedShadeRepairPage() {
  return (
    <article className="page">
      <JsonLd
        data={serviceJsonLd({
          name: "Motorized shade repair",
          path: "/motorized-shade-repair",
          description,
          serviceType: "Motorized shade repair",
        })}
      />
      <Breadcrumbs
        items={[
          {
            name: "Motorized shade repair",
            path: "/motorized-shade-repair",
          },
        ]}
      />
      <header className="page-hero">
        <p className="eyebrow">Somfy · Motors · Remotes</p>
        <h1>Motorized shade repair</h1>
        <p className="lede">
          A shade that will not go up or down is often the motor, the remote,
          the programming, or the stops it is supposed to remember. We repair
          Somfy and other motorized shades on site in Los Angeles and the San
          Fernando Valley, from our Sherman Oaks base. Free estimate. Call or
          text {PHONE_DISPLAY}.
        </p>
        <TrustChips items={LANDING_TRUST_CHIPS} />
        <CtaButtons placement="motorized-hero" quoteHref={quoteHref} />
        <HoursLine />
      </header>

      <JobFigure
        filename="motorized-black-roller-shade-repair.jpg"
        sizes="(max-width: 800px) 100vw, 720px"
        priority
      />

      <section aria-labelledby="motorized-at-the-window">
        <h2 id="motorized-at-the-window">
          Motorized shade repair at the window
        </h2>
        <p>
          Motorized shades fail in ways a fabric shop often will not diagnose.
          The motor stops. The remote loses its pairing. A battery wand dies
          in the headrail. Fabric binds at one end of a wide opening and the
          motor keeps trying. {SITE_NAME} treats that as its own service. If
          you searched for motorized shade repair, Somfy shade repair, or
          electric blinds repair in Los Angeles, this is the page for that
          visit.
        </p>
        <p>
          We still lead with repair. A control that does nothing is not
          automatically a new shade. Public reviews of the company describe
          shades that would not lift until a part was ordered or matched,
          including cases where the technician built a matching piece from
          truck stock so the treatment did not have to be replaced.
        </p>
        <p>
          Makers and systems we repair, and the note that we are a repair shop
          rather than a dealer, are on{" "}
          <Link href="/partners">brands and systems we repair</Link>. Manual
          blinds and roller shades with no motor are on{" "}
          <Link href="/blind-and-shade-repair">blind and shade repair</Link>.
          Wood shutter work is on{" "}
          <Link href="/shutter-repair">shutter repair</Link>. Longer answers
          about remotes and limits are on{" "}
          <Link href="/faq/somfy-motorized-shade-repair">
            Somfy motorized shade repair
          </Link>
          .
        </p>
      </section>

      <section aria-labelledby="motor-brands">
        <h2 id="motor-brands">Somfy and other motor brands we repair</h2>
        <p>
          Somfy is the motorized system Los Angeles homeowners ask us to repair
          most often. It shows up in newer condos, remodels, and media rooms,
          on both hardwired shades and battery shades. We repair the motor,
          the remote, the pairing, the limits, and the way the shade travels.
          The fabric is frequently still the right shade for the room.
        </p>
        <p>
          We also repair most major motor brands used in motorized roller
          shades, solar screens, Roman shades, and electric blinds. If the
          motor sits in the tube or the headrail, and the handset or wall
          control has quit, that is a repair visit for us. You do not need
          the model number before we come. Tell us the name on the back of
          the remote if you can read it. If you are not sure of the brand, we
          can usually tell from the motor, the remote, or the battery wand
          once we are at the window.
        </p>
        <p>
          {SITE_NAME} is a repair shop. We are not a Somfy dealer, and we are
          not an authorized dealer or factory partner for any motor brand.
          Naming Somfy, or asking you for the brand, tells you we can look at
          the system. It is not a badge and it is not a showroom claim. The
          same disclaimer, and a shorter list of makers, is on{" "}
          <Link href="/partners">brands and systems we repair</Link>.
        </p>
      </section>

      <section aria-labelledby="common-symptoms">
        <h2 id="common-symptoms">
          Common motorized shade problems we see
        </h2>
        <p>
          Most calls start with one of the problems below. Two shades can show
          the same symptom and still need different repairs, so this list is a
          starting point, not a diagnosis you have to make yourself. Tell us
          what the shade does, and we will sort it at the house.
        </p>
        <div className="card-grid card-grid--pairs">
          <article className="card card--note">
            <h3>The motor will not respond</h3>
            <p>
              You press the remote or the wall switch and nothing happens. No
              hum, no twitch, no travel. That can be power, a dead battery
              pack, a handset that is no longer paired, or a motor that has
              failed inside the tube. We test the remote, the power, and the
              motor before anyone talks about a new shade.
            </p>
          </article>
          <article className="card card--note">
            <h3>The remote or the programming is lost</h3>
            <p>
              A remote that used to run the shade may have a dead cell, the
              wrong channel selected, or a pairing the motor no longer
              recognizes. A new handset that was never programmed, or a
              second remote that only works on some shades in the room, is
              the same kind of visit. We reprogram remotes and channels at
              the window when the motor still answers.
            </p>
          </article>
          <article className="card card--note">
            <h3>The shade is stuck partway</h3>
            <p>
              The shade starts, then stops in the middle of the glass, or it
              will go down but will not come back up. Limits that drifted are
              a common cause. So is fabric catching at one end, a hem bar
              that is not level, or a motor that is cutting out under load.
              We watch a full up and down before we name the repair.
            </p>
          </article>
          <article className="card card--note">
            <h3>The shade runs uneven or tilts</h3>
            <p>
              One end drops faster than the other, the hem walks toward a
              jamb, or the fabric telescopes on the tube. That is often a
              mechanical problem, not a dead motor: a hem that bent, a
              bracket that shifted, or cloth that has crept off the roll. We
              correct the path when the fabric is still sound, then reset
              travel so both ends stop together.
            </p>
          </article>
          <article className="card card--note">
            <h3>The motor is noisy</h3>
            <p>
              A motor that used to be quiet and now grinds, clicks, or
              rattles is telling you something has changed. It may be a drive
              that is wearing out, a tube that is no longer turning true, or
              the shade binding in a track or against a stop. We listen at
              the window and say whether the noise is the motor itself or
              the path it is trying to move.
            </p>
          </article>
          <article className="card card--note">
            <h3>Limits have drifted, or power is the issue</h3>
            <p>
              Limits are the top and bottom stops the motor is supposed to
              remember. When they drift, the shade may climb into the
              cassette, stop short of the sill, or refuse to cover the
              opening. Battery shades have a different first check: a wand,
              a cassette pack, or a charger that is no longer doing its job.
              Hardwired shades can have a loose connection or a supply that
              has quit. We test power before we replace a motor.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="what-we-fix">
        <h2 id="what-we-fix">What we fix on motorized shades</h2>
        <p>
          Most calls are one failed piece inside a shade that still looks fine
          from the sofa. We look at the motor, the control, the power, and the
          path the fabric travels before anyone talks about a new treatment.
          Tell us the brand if you know it. Somfy is common in newer Los
          Angeles condos and remodels. Other tube-motor brands show up in the
          same openings, and we repair those too.
        </p>
        <div className="card-grid card-grid--pairs">
          <article className="card card--note">
            <h3>Motors that stop, hum, or jerk</h3>
            <p>
              A silent motor, a motor that hums and will not travel, and a
              motor that jerks partway down are three different jobs. Silence
              often starts with power or the remote. A hum with no movement
              can be a motor turning against a bind, or a motor that has failed
              inside the tube. A jerk usually means the shade is catching, the
              limits are wrong, or the drive is slipping. We listen at the
              window before we name the repair.
            </p>
          </article>
          <article className="card card--note">
            <h3>Remotes and pairing</h3>
            <p>
              A handset that does nothing is a frequent first call, and the
              fabric is often fine. The remote may have a dead cell, the wrong
              channel selected, or a pairing the motor no longer recognizes. A
              spare in a kitchen drawer can be the one that still works. A
              remote that lights up while the motor stays silent is a different
              visit from a motor that answers and then stalls. Both are repair
              calls.
            </p>
          </article>
          <article className="card card--note">
            <h3>Battery wands and charging</h3>
            <p>
              Battery shades often hide the pack in a wand, a cassette, or a
              small panel at one end of the headrail. A shade that worked
              yesterday and is dead today is sometimes only that pack, or a
              charger that is no longer keeping it up. If you know the shade
              is battery powered, say so when you call. If you do not, we can
              usually tell from the headrail on site. We do not ask you to
              take the shade down to find the wand.
            </p>
          </article>
          <article className="card card--note">
            <h3>Tube motors</h3>
            <p>
              On most roller shades, solar screens, and some Roman shades, the
              motor sits inside the tube. When it fails, the fabric can stay
              usable and the tube can often stay. The work is matching a motor
              that will drive that tube and those brackets, then setting travel
              so the shade stops where it used to. If nothing compatible will
              fit, we say that after we see the shade, not from a photo of the
              fabric alone.
            </p>
          </article>
          <article className="card card--note">
            <h3>Limit settings</h3>
            <p>
              Limits are the top and bottom stops the motor is supposed to
              remember. When they are lost, the shade may stop halfway, climb
              into the cassette, or refuse to cover the opening. If the motor
              still runs, those stops can often be set again at the house. If
              the motor is silent, limits are not the first problem. Power, the
              remote, or the motor itself comes first. We do not publish a
              button sequence. Motors do not all use the same steps, and a
              wrong sequence can send a working shade the wrong direction.
            </p>
          </article>
          <article className="card card--note">
            <h3>Fabric, hems, and tracks that stall a motor</h3>
            <p>
              Sometimes the motor is fine and the shade is fighting itself. A
              bent hem bar, a Roman shade that stacks to one side, or fabric
              that has walked off the tube will stall a healthy motor. Side
              tracks on a blackout shade can pinch. We free that bind when the
              fabric is still sound. Torn or sun-rotted cloth is a different
              conversation, and we will say so before any repair starts.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="how-the-visit-works">
        <h2 id="how-the-visit-works">
          How a motorized shade repair visit works
        </h2>
        <p>
          The visit starts at the window. We come to the house, diagnose the
          shade where it hangs, and test the motor, the remote, and the power
          before we name a repair. You get an estimate for the shade in front
          of us. Work starts after you approve that estimate. There is no
          published price for a motor, a remote, or a limit reset, because two
          shades with the same symptom can be different jobs.
        </p>
        <ol className="steps">
          <li>
            <strong>You reach us with the city and what the shade does.</strong>{" "}
            Call or text {PHONE_DISPLAY}, or send the{" "}
            <Link href={quoteHref}>free estimate form</Link> and choose
            motorized / Somfy shade repair. Say whether the remote lights up,
            and whether the shade hums, jerks, stalls partway, or stays dead.
            Brand helps if you know it. You do not need a part number. Live
            help is every day from 10 AM to 7 PM. A text after hours still
            gets a reply so we can set a time.
          </li>
          <li>
            <strong>We diagnose the shade on site and test it.</strong> A photo
            helps us schedule and decide what to put on the truck. It does not
            replace standing under the opening. We test the motor, the remote,
            and the power, and we watch how the shade travels. We note whether
            the shade is a roller, a Roman, a solar screen, or a panel in side
            channels, and whether one shade failed or a whole bank of them.
            Houses with wood shutters in one room and a motor in another can
            put both on the same visit. Shutter work is on{" "}
            <Link href="/shutter-repair">shutter repair</Link> and{" "}
            <Link href="/plantation-shutter-repair">
              plantation shutter repair
            </Link>
            .
          </li>
          <li>
            <strong>The estimate comes before any repair.</strong> After we see
            the failure, we tell you what it is and whether a repair will hold.
            Looking at the shade is the estimate. We do not order a motor, pull
            the shade down, or start the repair until you want that work. If
            the fabric or the motor is truly finished, we say that on the
            visit.
          </li>
          <li>
            <strong>We reprogram, repair, or replace the failed part.</strong>{" "}
            Many remote, pairing, battery, and limit problems can be finished
            on the first visit: we reprogram remotes and limits at the window,
            or we repair or replace the part if it is already on the truck. If
            a motor or a remote has to be matched or ordered, we say that
            before we leave and come back when it is in. We do not promise
            that every opening will be done the day you call.
          </li>
          <li>
            <strong>We test the shade before we leave.</strong> When the work
            is done, we run the shade through its travel, confirm the top and
            bottom stops, and make sure the remote or wall control does what
            it is supposed to do. You should see the shade work the way it is
            meant to work before the visit ends. If a part is on order, we
            test again on the return trip.
          </li>
        </ol>
      </section>

      <section className="text-photo" aria-labelledby="what-to-photograph">
        <h2 id="what-to-photograph">What to photograph before we come</h2>
        <p>
          Text {PHONE_DISPLAY} if you want us to see the shade before the
          drive. A useful set is short. You do not need to take the shade down,
          and you should not pull a stuck hem bar if the motor may still be
          powered.
        </p>
        <ul className="estimate-points">
          <li>The shade in the opening, including where it stops if it stalls partway.</li>
          <li>The remote in your hand, close enough to read a brand mark.</li>
          <li>The headrail, cassette, or battery wand, if you can reach it safely.</li>
          <li>Daylight, not a dark flash. We need to see the hem and the fabric edge.</li>
        </ul>
        <p>
          We reply with next steps and a time to come out. After hours is fine.
          We schedule every day from 10 AM to 7 PM. The same request can go
          through the estimate form if you would rather type the city and what
          broke.
        </p>
        <div className="cta-row">
          <TextLink
            placement="motorized-photo-text"
            className="btn btn-text"
            aria-label={`Text a photo to ${PHONE_DISPLAY}`}
          >
            Text a photo
          </TextLink>
          <a href={quoteHref} className="btn btn-secondary">
            Get a free estimate
          </a>
        </div>
      </section>

      <section aria-labelledby="somfy-repair">
        <h2 id="somfy-repair">Somfy shade repair, from a repair shop</h2>
        <p>
          The Somfy failures we see most often are the ones already listed:
          a remote that lost pairing, a battery wand that died, limits the
          motor no longer remembers, or a motor that stopped inside the tube.
          We repair that operation at the window. The fabric is frequently
          still the right shade for the room. The not-a-dealer note, and the
          other motors we repair, are in the brands section above and on{" "}
          <Link href="/partners">brands and systems we repair</Link>.
        </p>
        <p>
          Hardwired Somfy shades and battery Somfy shades both come through
          this page. So do mixed houses where one room is still a manual roller
          and the next room has a motor. The manual opening belongs on{" "}
          <Link href="/blind-and-shade-repair">blind and shade repair</Link>.
          If you want the longer explanation of remotes, limits, and when a new
          shade is the honest call, read{" "}
          <Link href="/faq/somfy-motorized-shade-repair">
            Somfy motorized shade repair
          </Link>
          . This page is the service: diagnosis, estimate, and repair.
        </p>
      </section>

      <section aria-labelledby="repair-or-replace">
        <h2 id="repair-or-replace">When we repair, and when we do not</h2>
        <p>
          Repair is the right call when the remote, the pairing, the battery,
          the limits, or a motor that can be matched is the failure, and the
          fabric still covers the opening cleanly. A hem or a track that is
          blocking an otherwise healthy motor belongs in that same group. We
          fix the obstruction and leave the shade.
        </p>
        <p>
          Replacement makes more sense when the motor is discontinued and
          nothing compatible will fit the tube, when the fabric is torn or
          sun-rotted, or when the shade was never the right size for the
          opening. We will not open the visit by selling a house full of new
          shades. If repair is a waste, we say so after we see the shade, and
          we say it before any work starts. Request a{" "}
          <Link href={quoteHref}>free estimate</Link> and describe what the
          shade does now. We follow up by text to schedule.
        </p>
      </section>

      <section aria-labelledby="motorized-service-area">
        <h2 id="motorized-service-area">
          Motorized shade repair across the Valley and Los Angeles
        </h2>
        <p>
          We work from a Sherman Oaks base and repair motorized shades on
          site across the San Fernando Valley and greater Los Angeles. Central
          Valley calls are often a condo or a remodel along Ventura Boulevard,
          where a bedroom or a great room got a motorized roller. Wider Valley
          houses mix those shades with older wood shutters. Santa Monica
          condos and newer Santa Clarita builds see more motorized systems
          than a typical ranch, and we still make the trip when the drive is
          reasonable.
        </p>
        <p>
          If you searched with a city name, start with the city page for{" "}
          <Link href="/shutter-repair-sherman-oaks">Sherman Oaks</Link>,{" "}
          <Link href="/shutter-repair-van-nuys">Van Nuys</Link>,{" "}
          <Link href="/shutter-repair-los-angeles">Los Angeles</Link>, or{" "}
          <Link href="/shutter-repair-santa-monica">Santa Monica</Link>. This
          page is for the type of repair, motorized shades and Somfy shade
          repair. The cities below are the same coverage list used on our
          other service pages: central Valley first, then the wider Valley,
          then greater Los Angeles. If your city is nearby and not named, call
          or text {PHONE_DISPLAY} and we will say whether the drive is
          reasonable.
        </p>
        <CityAreaGroups />
        <p>
          The office mailbox is {ADDRESS_DISPLAY}. That is mail and an office
          unit. There is no showroom, and there is nothing to drop off. Do not
          bring a shade to Ventura Boulevard for the estimate. We come to the
          house. Call {PHONE_DISPLAY} or{" "}
          <Link href={quoteHref}>request a free estimate</Link>. We follow up
          by text.
        </p>
      </section>

      <FaqList
        heading="Questions about motorized shade repair"
        headingId="motorized-faq"
        items={faq}
      />

      <div className="split-cta">
        <h2>Call, text, or request the estimate</h2>
        <p>
          {PHONE_DISPLAY} is the same number for a call or a text. Live help
          is every day from 10 AM to 7 PM. After hours, text and we reply to
          schedule. The estimate form is the same request if you would rather
          type the city and what the shade is doing.
        </p>
        <CtaButtons placement="motorized-bottom" quoteHref={quoteHref} />
      </div>
    </article>
  );
}
