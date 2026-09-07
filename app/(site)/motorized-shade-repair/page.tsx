import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

const title = "Somfy and Motorized Shade Repair in Los Angeles";
const description =
  "Somfy and motorized shade repair in Los Angeles and the San Fernando Valley. Motors, remotes, and shade trains restored on site when possible. Call 818-392-8584.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/motorized-shade-repair") },
  openGraph: {
    title: `${title} | AAA Shutter Repair`,
    description,
    url: absoluteUrl("/motorized-shade-repair"),
  },
};

const faq = [
  {
    question: "Do you repair Somfy shades?",
    answer:
      "Yes. Somfy and other motorized shade systems are a listed service — motors, remotes, and shade operation.",
  },
  {
    question: "Can a dead remote be fixed without replacing the shade?",
    answer:
      "Often the remote, pairing, or motor is the failure, not the fabric. We diagnose that before anyone talks about a new shade.",
  },
  {
    question: "Do you also repair the shutter next to a motorized shade?",
    answer:
      "Yes. Many houses have shutters in one room and motors in another. We can look at both on the same visit.",
  },
];

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
          When the remote does nothing and the fabric will not move, the shade
          is usually still worth saving. We repair Somfy and other motorized
          systems.
        </p>
        <CtaButtons placement="motorized-hero" />
      </header>

      <figure className="content-figure">
        <Image
          src="/images/wood-shutters-detail.webp"
          alt="Close-up of wooden louvered shutters and metal hinges on a sunlit wall"
          width={1400}
          height={1298}
          sizes="(max-width: 800px) 100vw, 720px"
        />
        <figcaption>
          Royalty-free Unsplash photo of window hardware — not a client motor
          install.
        </figcaption>
      </figure>

      <section>
        <h2>Somfy and motorized shade systems, restored</h2>
        <p>
          Motorized shades fail in ways a fabric shop does not want to
          diagnose: a Somfy motor that stopped, a remote that lost pairing, a
          battery wand that died, or a train that binds at one end of a wide
          opening. AAA Shutter Repair treats that as its own service, not a
          footnote under new product. If you searched motorized shade repair or
          Somfy shade repair in Los Angeles, this is the final URL to use.
        </p>
        <p>
          We still lead with repair. A dead control is not automatically a new
          shade. Public reviews of the company describe shades that would not
          lift until a part was ordered or matched — including cases where the
          technician built a matching piece from truck stock so the treatment
          did not have to be replaced.
        </p>
      </section>

      <section>
        <h2>What to tell us when you call</h2>
        <ul>
          <li>Brand if you know it (Somfy or other)</li>
          <li>Whether the remote lights up or does nothing</li>
          <li>Whether the shade hums, jerks, or stays dead</li>
          <li>Hardwired vs. battery, if you know</li>
          <li>City — Santa Monica and newer Santa Clarita builds see more of these than a typical Valley ranch</li>
        </ul>
        <p>
          Manual{" "}
          <Link href="/blind-and-shade-repair">blind and shade repair</Link>{" "}
          is a different page. Wood shutters are on{" "}
          <Link href="/plantation-shutter-repair">
            plantation shutter repair
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Service area</h2>
        <p>
          San Fernando Valley and greater Los Angeles:{" "}
          <Link href="/shutter-repair-van-nuys">Van Nuys</Link>,{" "}
          <Link href="/shutter-repair-sherman-oaks">Sherman Oaks</Link>,{" "}
          <Link href="/shutter-repair-los-angeles">Los Angeles</Link>,{" "}
          <Link href="/shutter-repair-pasadena">Pasadena</Link>,{" "}
          <Link href="/shutter-repair-santa-monica">Santa Monica</Link>, and{" "}
          <Link href="/shutter-repair-santa-clarita">Santa Clarita</Link>.
          Call 818-392-8584 or{" "}
          <Link href="/get-a-quote">request a free estimate</Link>. We follow
          up by text.
        </p>
      </section>

      <FaqList items={faq} />
    </article>
  );
}
