import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import type { CityContent } from "@/lib/cities";
import { cities } from "@/lib/cities";
import { serviceJsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export function cityMetadata(city: CityContent): Metadata {
  return {
    title: city.title,
    description: city.description,
    alternates: { canonical: absoluteUrl(city.slug) },
    openGraph: {
      title: `${city.title} | AAA Shutter Repair`,
      description: city.description,
      url: absoluteUrl(city.slug),
      type: "website",
    },
  };
}

export function CityPage({ city }: { city: CityContent }) {
  const others = cities.filter((item) => item.id !== city.id);

  return (
    <article className="page">
      <JsonLd
        data={serviceJsonLd({
          name: `Shutter repair in ${city.name}`,
          path: city.slug,
          description: city.description,
          serviceType: "Plantation shutter repair",
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Service areas", path: "/shutter-repair-los-angeles" },
          { name: city.name, path: city.slug },
        ]}
      />
      <header className="page-hero">
        <p className="eyebrow">On-site · {city.name}</p>
        <h1>{city.h1}</h1>
        <p className="lede">{city.lede}</p>
        <CtaButtons placement={`city-${city.id}`} />
      </header>

      <figure className="content-figure">
        <Image
          src="/images/plantation-shutters-window.webp"
          alt={`Window with shutters and interior blinds — typical of the ${city.name} jobs AAA Shutter Repair handles on site`}
          width={1600}
          height={1067}
          sizes="(max-width: 800px) 100vw, 760px"
        />
        <figcaption>
          Royalty-free photo of a shuttered window — not a client project.
        </figcaption>
      </figure>

      {city.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </section>
      ))}

      <section>
        <h2>Housing we see in {city.name}</h2>
        <p>{city.housing}</p>
        <p>{city.climate}</p>
        <p>Neighborhoods and areas we regularly hear from:</p>
        <ul>
          {city.neighborhoods.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Common {city.name} repair calls</h2>
        <ul>
          {city.issues.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Related services</h2>
        <p>
          Start with the job you actually have:{" "}
          <Link href="/plantation-shutter-repair">
            plantation shutter repair
          </Link>
          , <Link href="/blind-and-shade-repair">blind and shade repair</Link>,
          or{" "}
          <Link href="/motorized-shade-repair">
            motorized / Somfy shade repair
          </Link>
          . Ready to schedule?{" "}
          <Link href="/get-a-quote">Get a free estimate</Link> — we text back
          to set a time.
        </p>
        <p>Other cities we cover:</p>
        <ul className="link-columns">
          {others.map((item) => (
            <li key={item.id}>
              <Link href={item.slug}>Shutter repair in {item.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <FaqList items={city.faq} />
      <CtaButtons placement={`city-${city.id}-bottom`} />
    </article>
  );
}
