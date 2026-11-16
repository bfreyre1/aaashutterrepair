import Image from "next/image";
import { galleryByFilename } from "@/lib/gallery";

export type PhotoRowItem = {
  filename: string;
  alt: string;
  caption?: string;
};

type PhotoRowProps = {
  photos: PhotoRowItem[];
  label: string;
};

export function PhotoRow({ photos, label }: PhotoRowProps) {
  return (
    <div className="photo-row" role="group" aria-label={label}>
      {photos.map((photo, index) => {
        const image = galleryByFilename(photo.filename);
        return (
          <figure className="photo-row__item" key={image.src}>
            <div className="photo-row__frame">
              <Image
                src={image.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
                priority={index === 0}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
          </figure>
        );
      })}
    </div>
  );
}
