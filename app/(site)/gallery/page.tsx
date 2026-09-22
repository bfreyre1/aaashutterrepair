import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { GalleryGrid } from "@/components/GalleryGrid";
import { GALLERY_IMAGES } from "@/lib/gallery";
import { absoluteUrl } from "@/lib/site";

const title = "Repair Gallery";
const description =
  "Real AAA Shutter Repair job photos — plantation shutters, blinds, and shades from on-site work in the San Fernando Valley and greater Los Angeles.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/gallery") },
  openGraph: {
    title: `${title} | AAA Shutter Repair`,
    description,
    url: absoluteUrl("/gallery"),
  },
};

export default function GalleryPage() {
  return (
    <article className="page page--wide">
      <Breadcrumbs items={[{ name: "Gallery", path: "/gallery" }]} />
      <header className="page-hero">
        <p className="eyebrow">San Fernando Valley · Greater Los Angeles</p>
        <h1>Repair gallery</h1>
        <p className="lede">
          Real job photos from AAA Shutter Repair — plantation shutters, blinds,
          and shades worked on in Los Angeles homes.
        </p>
        <CtaButtons placement="gallery-hero" />
      </header>

      <GalleryGrid images={GALLERY_IMAGES} columns="full" />
    </article>
  );
}
