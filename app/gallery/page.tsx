import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { GalleryGrid } from "@/components/GalleryGrid";
import { GALLERY_IMAGES } from "@/lib/gallery";
import { absoluteUrl } from "@/lib/site";

const title = "Illustrative Repair Gallery";
const description =
  "Generated illustrative photos of on-site plantation shutter, blind, and shade repair in Los Angeles interiors. Not photos of specific customers or jobs.";

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
        <p className="eyebrow">Illustrative stills · Not client photos</p>
        <h1>Illustrative repair gallery</h1>
        <p className="lede">
          Generated production stills of typical plantation shutter, blind, and
          shade work in Los Angeles–looking interiors. They are not photos of a
          specific customer, technician, or job.
        </p>
        <CtaButtons placement="gallery-hero" />
      </header>

      <p className="prose-note">
        Every frame is a generated illustrative photo. Faces are not real
        customers. These images are not paired with reviews, names, or star
        ratings.
      </p>

      <GalleryGrid images={GALLERY_IMAGES} columns="full" />
    </article>
  );
}
