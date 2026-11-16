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

const title = "Hunter Douglas PowerView Shade Repair in Los Angeles";
const description =
  "Hunter Douglas PowerView motorized shade repair in Los Angeles and the San Fernando Valley. Programming and re-pairing, battery wand and pack changes, remotes that do not work, motors that will not respond, and shades that are out of sync. Independent repair, not an authorized Hunter Douglas service center. Call 818-392-8584.";

const path = "/hunter-douglas-motorized-shade-repair";
const quoteHref = "/get-a-quote?job=motorized";

const independentDisclaimer = `${SITE_NAME} is an independent repair business, not an authorized Hunter Douglas service center. Hunter Douglas and PowerView are trademarks of their respective owner.`;

const faq: FaqItem[] = [
  {
    question:
      "Do you repair Hunter Douglas PowerView shades, or only replace them?",
    answer: `${SITE_NAME} repairs Hunter Douglas PowerView motorized shades on site in Los Angeles and the San Fernando Valley. We are an independent repair business, not an authorized Hunter Douglas service center. Lost programming, a dead battery pack, a remote or motor that will not respond, or shades that no longer travel together are repair calls. We say when the fabric or the motor is actually finished.`,
  },
  {
    question:
      "The PowerView remote or the app does nothing. What do you check first?",
    answer:
      "We start with the control in your hand, then whether the motor still answers. A Pebble or Surface remote can have a dead cell, the wrong shade selected, or a pairing the shade no longer recognizes. The PowerView app can be signed in and still fail to reach a hub or gateway that has dropped off the network. We sort that at the window before anyone talks about a new shade.",
  },
  {
    question:
      "Can you reprogram or re-pair PowerView, including the hub, the gateway, the app, and Pebble or Surface remotes?",
    answer:
      "Often yes, when the motor still answers. After a power cut, a phone change, a new remote, or a hub that was unplugged, the shade, the remote, the hub or gateway, and the app can lose their link. We re-pair Pebble and Surface remotes, reconnect a hub or gateway when it is present, and get the app talking to the shade again when the hardware still works. We do not publish a button sequence, because a wrong step can send a working shade the wrong direction.",
  },
  {
    question:
      "The battery wand or the battery pack is dead. Can you change it at the house?",
    answer:
      "Yes, when we can reach the wand or the pack safely in the opening. Many PowerView shades hide power in a wand, a cassette pack, or a small panel at one end of the headrail. A shade that worked yesterday and is dead today is sometimes only that pack. We change it on site when a replacement will fit, then we test travel and programming so the shade stops where it used to. You do not need to take the shade down to find the pack.",
  },
  {
    question:
      "Two PowerView shades in the same room are out of sync. Can that be repaired?",
    answer:
      "Often yes. Shades that used to travel together can drift after a battery change, a lost limit, a missed command, or a group that lost its programming. One shade may lag, stop short, or ignore the remote while its neighbor still runs. We watch both openings, check power and pairing on each shade, and reset the group or the stops when the motors still respond. If one motor has failed and the other is healthy, we say which shade needs the repair.",
  },
  {
    question:
      "Which cities do you cover for Hunter Douglas PowerView shade repair?",
    answer: `We repair PowerView and other Hunter Douglas motorized shades on site across the San Fernando Valley and greater Los Angeles. The office mailbox is ${ADDRESS_DISPLAY}. The repair happens at your window. If your city is nearby and not named, call or text ${PHONE_DISPLAY} and we will say whether the drive is reasonable.`,
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl(path) },
  openGraph: {
    images: [SHARE_IMAGE],
    title: `${title} | ${SITE_NAME}`,
    description,
    url: absoluteUrl(path),
  },
};

function Disclaimer() {
  return (
    <p className="prose-note" role="note">
      {independentDisclaimer}
    </p>
  );
}

export default function HunterDouglasMotorizedShadeRepairPage() {
  return (
    <article className="page">
      <JsonLd
        data={serviceJsonLd({
          name: "Hunter Douglas PowerView shade repair",
          path,
          description,
          serviceType: "Motorized shade repair",
        })}
      />
      <Breadcrumbs
        items={[
          {
            name: "Hunter Douglas PowerView shade repair",
            path,
          },
        ]}
      />
      <header className="page-hero">
        <p className="eyebrow">Independent repair · PowerView</p>
        <h1>Hunter Douglas PowerView shade repair</h1>
        <p className="lede">
          A Hunter Douglas PowerView shade that will not go up or down is
          the remote, the programming, a battery wand, or a
          motor that has stopped answering. We repair PowerView motorized
          shades on site in Los Angeles and the San Fernando Valley. We
          are an independent repair business, not an authorized Hunter
          Douglas service center. Free estimate. Call or text{" "}
          {PHONE_DISPLAY}.
        </p>
        <Disclaimer />
        <TrustChips items={LANDING_TRUST_CHIPS} />
        <CtaButtons placement="hunter-douglas-hero" quoteHref={quoteHref} />
        <HoursLine />
      </header>

      <JobFigure
        filename="motorized-black-roller-shade-repair.jpg"
        sizes="(max-width: 800px) 100vw, 720px"
        priority
      />

      <section aria-labelledby="hd-at-the-window">
        <h2 id="hd-at-the-window">
          Hunter Douglas PowerView repair at the window
        </h2>
        <p>
          PowerView shades fail in ways a fabric shop often will not
          diagnose: a motor that stops answering, a Pebble or Surface
          remote that loses its pairing, an app that cannot reach the hub
          or gateway, a dead battery wand, or two shades that no longer
          stop together. {SITE_NAME} treats that as its own repair visit
          in Los Angeles and the San Fernando Valley.
        </p>
        <p>
          We still lead with repair. A control that does nothing is not
          automatically a new shade. We test the remote, the power, the
          programming, and the motor at the opening you already have.
          Naming Hunter Douglas or PowerView tells you we can look at the
          system. It is not a badge, not a certification, and not a
          showroom claim.
        </p>
        <p>
          Somfy and other motorized shade repair is on{" "}
          <Link href="/motorized-shade-repair">motorized shade repair</Link>.
          Longer Somfy answers are on{" "}
          <Link href="/faq/somfy-motorized-shade-repair">
            Somfy motorized shade repair
          </Link>
          . Manual blinds and roller shades with no motor are on{" "}
          <Link href="/blind-and-shade-repair">blind and shade repair</Link>
          . Wood shutter work is on{" "}
          <Link href="/shutter-repair">shutter repair</Link>. A shorter
          list of makers is on{" "}
          <Link href="/partners">brands and systems we repair</Link>.
        </p>
      </section>

      <section aria-labelledby="powerview-programming">
        <h2 id="powerview-programming">
          PowerView programming and re-pairing
        </h2>
        <p>
          PowerView programming is how a shade, a Pebble or Surface remote,
          a hub or gateway, and the app stay linked. That link often breaks
          after a hub is unplugged, a phone is replaced, a new remote is
          never paired, or a power cut clears a setting. On site we test
          the remote, including a spare if one is in a drawer, check
          whether a hub or gateway still has power, and see whether the
          app can reach the shade. Then we re-pair the controls that
          belong to that opening and run a full up and down. We do not
          walk you through a published sequence over the phone, because a
          wrong step can send a working shade the wrong direction.
        </p>
      </section>

      <section aria-labelledby="hd-common-symptoms">
        <h2 id="hd-common-symptoms">Common PowerView problems we see</h2>
        <p>
          Most calls start with one of the problems below. Tell us what
          the shade does, and we will sort it at the house.
        </p>
        <div className="card-grid card-grid--pairs">
          <article className="card card--note">
            <h3>The remote is not working</h3>
            <p>
              You press a Pebble or Surface remote and the shade does
              nothing. The handset may have a dead cell, the wrong shade
              selected, or a pairing the motor no longer recognizes. We
              test the handset you use every day, and a spare if you have
              one, before we blame the motor.
            </p>
          </article>
          <article className="card card--note">
            <h3>The motor will not respond</h3>
            <p>
              There is no hum, no twitch, and no travel, even from more
              than one control. That can be a dead battery pack, a supply
              that has quit, a shade that dropped off the hub, or a motor
              that has failed inside the tube or the headrail. We test
              power and the motor at the opening first.
            </p>
          </article>
          <article className="card card--note">
            <h3>Programming or re-pairing is lost</h3>
            <p>
              The app opens, the hub or gateway looks like it is on, and
              the shade still ignores the command. After a move, a Wi-Fi
              change, or a power cut, PowerView programming is often the
              missing piece. We re-pair the remote, the hub or gateway,
              and the app when the motor still answers.
            </p>
          </article>
          <article className="card card--note">
            <h3>The battery wand or pack is dead</h3>
            <p>
              A shade that ran yesterday and is silent today is sometimes
              only the wand or the pack in the headrail. We change it on
              site when a replacement will fit, then we confirm the shade
              still has its stops and its pairing. You do not need to take
              the shade down to show us the pack.
            </p>
          </article>
          <article className="card card--note">
            <h3>Shades are out of sync</h3>
            <p>
              Two or more shades in the same room no longer travel
              together. One lags, one stops short, or one ignores the
              group command. We watch both openings, check each shade on
              its own, and reset the group or the limits when the motors
              still respond.
            </p>
          </article>
          <article className="card card--note">
            <h3>The shade is stuck partway</h3>
            <p>
              The shade starts, then stops in the middle of the glass, or
              it climbs too far into the cassette. Limits that drifted are
              a common cause, as is fabric catching at one end. We watch
              a full up and down, then we say whether the repair is the
              programming, the path the fabric travels, or the motor.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="hd-what-we-fix">
        <h2 id="hd-what-we-fix">What we fix on PowerView shades</h2>
        <p>
          Most calls are one failed piece inside a shade that still looks
          fine from the sofa. We look at Pebble and Surface remotes, the
          PowerView hub or gateway and the app, battery wands and packs,
          motors that stop, hum, or jerk, and groups of shades that no
          longer travel together. We also free a hem, a tube, or a side
          channel that is stalling a healthy motor, when the fabric is
          still sound. If you are not sure of the brand, we can usually
          tell from the remote, the hub, or the battery wand once we are
          at the window.
        </p>
      </section>

      <section aria-labelledby="hd-visit">
        <h2 id="hd-visit">How a PowerView repair visit works</h2>
        <p>
          The visit starts at the window. We diagnose the shade where it
          hangs, then you get an estimate for the opening in front of us.
          Work starts after you approve that estimate.
        </p>
        <ol className="steps">
          <li>
            <strong>
              You reach us with the city and what the shade does.
            </strong>{" "}
            Call or text {PHONE_DISPLAY}, or send the{" "}
            <Link href={quoteHref}>free estimate form</Link> and choose
            motorized / Somfy shade repair. Say if it is a Hunter Douglas
            or PowerView shade, whether the remote lights up, whether the
            app or the hub is involved, and whether the shade hums, jerks,
            stalls, or stays dead. Live help is every day from 10 AM to 7
            PM.
          </li>
          <li>
            <strong>We diagnose the shade on site and test it.</strong> A
            photo helps us schedule. It does not replace standing under
            the opening. We test the remote, the hub or gateway and the
            app when they are part of the setup, the battery wand or pack,
            and the motor. Houses with wood shutters in one room and a
            PowerView shade in another can put both on the same visit.
            Shutter work is on{" "}
            <Link href="/shutter-repair">shutter repair</Link> and{" "}
            <Link href="/plantation-shutter-repair">
              plantation shutter repair
            </Link>
            .
          </li>
          <li>
            <strong>The estimate comes before any repair.</strong> After we
            see the failure, we tell you what it is and whether a repair
            will hold. We do not order a motor, pull the shade down, or
            start the work until you want that repair. If the fabric or
            the motor is truly finished, we say that on the visit.
          </li>
          <li>
            <strong>
              We reprogram, change a pack, repair, or replace the failed
              part.
            </strong>{" "}
            Many remote, programming, battery, and sync problems can be
            finished on the first visit. If a motor or a remote has to be
            matched or ordered, we say that before we leave and come back
            when it is in. We do not promise that every opening will be
            done the day you call.
          </li>
          <li>
            <strong>We test the shade before we leave.</strong> We run the
            shade through its travel, confirm the top and bottom stops,
            and make sure the remote, the app, and any group of shades do
            what they are supposed to do. If a part is on order, we test
            again on the return trip.
          </li>
        </ol>
      </section>

      <section className="text-photo" aria-labelledby="hd-photograph">
        <h2 id="hd-photograph">What to photograph before we come</h2>
        <p>
          Text {PHONE_DISPLAY} if you want us to see the shade before the
          drive. You do not need to take the shade down, and you should
          not pull a stuck hem bar if the motor may still be powered.
        </p>
        <ul className="estimate-points">
          <li>
            The shade in the opening, including where it stops if it
            stalls, or if two shades no longer line up.
          </li>
          <li>
            The Pebble or Surface remote, close enough to read a mark on
            the back.
          </li>
          <li>
            The hub or gateway, a screenshot of the app if you use them,
            and the headrail or battery wand if you can reach it safely.
          </li>
        </ul>
        <p>
          We reply with next steps and a time to come out. After hours is
          fine. We schedule every day from 10 AM to 7 PM.
        </p>
        <div className="cta-row">
          <TextLink
            placement="hunter-douglas-photo-text"
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

      <section aria-labelledby="hd-repair-or-not">
        <h2 id="hd-repair-or-not">When we repair, and when we do not</h2>
        <p>
          Repair is the right call when the remote, the PowerView
          programming, the battery wand or pack, the group sync, or a
          motor that can be matched is the failure, and the fabric still
          covers the opening cleanly. A new shade makes more sense when
          the motor cannot be matched, when the fabric is torn or
          sun-rotted, or when the shade was never the right size for the
          opening. We will not open the visit by selling a house full of
          new shades. If repair is a waste, we say so after we see the
          shade. Request a <Link href={quoteHref}>free estimate</Link> and
          describe what the shade does now.
        </p>
      </section>

      <section aria-labelledby="hd-service-area">
        <h2 id="hd-service-area">
          PowerView shade repair across the Valley and Los Angeles
        </h2>
        <p>
          We work from a Sherman Oaks base and repair Hunter Douglas
          PowerView shades on site across the San Fernando Valley and
          greater Los Angeles, including{" "}
          <Link href="/shutter-repair-sherman-oaks">Sherman Oaks</Link>,{" "}
          <Link href="/shutter-repair-van-nuys">Van Nuys</Link>,{" "}
          <Link href="/shutter-repair-los-angeles">Los Angeles</Link>, and{" "}
          <Link href="/shutter-repair-santa-monica">Santa Monica</Link>.
          The cities below are the same coverage list used on our other
          service pages. If your city is nearby and not named, call or
          text {PHONE_DISPLAY} and we will say whether the drive is
          reasonable.
        </p>
        <CityAreaGroups />
        <p>
          The office mailbox is {ADDRESS_DISPLAY}. There is no showroom,
          and there is nothing to drop off. We come to the house. Call{" "}
          {PHONE_DISPLAY} or{" "}
          <Link href={quoteHref}>request a free estimate</Link>.
        </p>
      </section>

      <Disclaimer />

      <FaqList
        heading="Questions about Hunter Douglas PowerView repair"
        headingId="hunter-douglas-faq"
        items={faq}
      />

      <div className="split-cta">
        <h2>Call, text, or request the estimate</h2>
        <p>
          {PHONE_DISPLAY} is the same number for a call or a text. Live
          help is every day from 10 AM to 7 PM. After hours, text and we
          reply to schedule.
        </p>
        <Disclaimer />
        <CtaButtons
          placement="hunter-douglas-bottom"
          quoteHref={quoteHref}
        />
      </div>
    </article>
  );
}
