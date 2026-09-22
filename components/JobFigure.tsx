import Image from "next/image";
import { galleryByFilename } from "@/lib/gallery";

type JobFigureProps = {
  filename: string;
  priority?: boolean;
  sizes?: string;
};

export function JobFigure({
  filename,
  priority = false,
  sizes = "(max-width: 800px) 100vw, 720px",
}: JobFigureProps) {
  const image = galleryByFilename(filename);

  return (
    <figure className="content-figure">
      <Image
        src={image.src}
        alt={`${image.alt}. Real AAA Shutter Repair job photo.`}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
      />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}
