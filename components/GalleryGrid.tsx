import Image from "next/image";
import { GALLERY_CAPTION, type GalleryImage } from "@/lib/gallery";

type GalleryGridProps = {
  images: GalleryImage[];
  columns?: "tease" | "full";
};

export function GalleryGrid({ images, columns = "full" }: GalleryGridProps) {
  return (
    <ul className={`gallery-grid gallery-grid--${columns}`}>
      {images.map((image) => (
        <li key={image.src} className="gallery-card">
          <figure>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={
                columns === "tease"
                  ? "(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  : "(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              }
            />
            <figcaption>{GALLERY_CAPTION}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
