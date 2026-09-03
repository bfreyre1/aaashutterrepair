export const GALLERY_CAPTION =
  "Generated illustrative photo — not a specific customer or job.";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  filename: string;
};

const SIZE = { width: 1152, height: 864 } as const;

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    filename: "tech-adjusting-plantation-shutter-louvers.jpg",
    src: "/images/gallery/tech-adjusting-plantation-shutter-louvers.jpg",
    alt: "Technician in a work polo adjusting white plantation shutter louvers at a living-room window",
    ...SIZE,
  },
  {
    filename: "homeowner-in-valley-living-room-shutters.jpg",
    src: "/images/gallery/homeowner-in-valley-living-room-shutters.jpg",
    alt: "Person standing at stained-wood plantation shutters in a Valley-style living room",
    ...SIZE,
  },
  {
    filename: "tech-repairing-horizontal-blinds-kitchen.jpg",
    src: "/images/gallery/tech-repairing-horizontal-blinds-kitchen.jpg",
    alt: "Technician on a step stool repairing white horizontal blinds over a kitchen sink",
    ...SIZE,
  },
  {
    filename: "shade-repair-at-picture-window.jpg",
    src: "/images/gallery/shade-repair-at-picture-window.jpg",
    alt: "Technician working a roller shade at a picture window while another person watches from a few feet away",
    ...SIZE,
  },
  {
    filename: "on-site-shutter-pin-repair-dining-room.jpg",
    src: "/images/gallery/on-site-shutter-pin-repair-dining-room.jpg",
    alt: "On-site shutter hardware repair at French doors in a dining room",
    ...SIZE,
  },
  {
    filename: "plantation-shutter-louvers-closeup.jpg",
    src: "/images/gallery/plantation-shutter-louvers-closeup.jpg",
    alt: "Close-up of painted plantation shutter louvers showing wear along a slat edge",
    ...SIZE,
  },
  {
    filename: "shutter-tilt-rod-staples-closeup.jpg",
    src: "/images/gallery/shutter-tilt-rod-staples-closeup.jpg",
    alt: "Close-up of a plantation shutter tilt rod and the staples that connect it to the louvers",
    ...SIZE,
  },
  {
    filename: "shutter-hinge-hardware-closeup.jpg",
    src: "/images/gallery/shutter-hinge-hardware-closeup.jpg",
    alt: "Close-up of a plantation shutter hinge and screws on a painted wood stile",
    ...SIZE,
  },
  {
    filename: "shutter-magnet-and-side-pin-closeup.jpg",
    src: "/images/gallery/shutter-magnet-and-side-pin-closeup.jpg",
    alt: "Close-up of a recessed shutter magnet and a side pin on a painted panel edge",
    ...SIZE,
  },
  {
    filename: "motorized-shade-cassette-bedroom.jpg",
    src: "/images/gallery/motorized-shade-cassette-bedroom.jpg",
    alt: "Partly lowered roller shade and cassette at a bedroom window",
    ...SIZE,
  },
];

/** Six-frame homepage tease: people stills plus hardware close-ups. */
export const HOME_GALLERY_IMAGES = GALLERY_IMAGES.filter((image) =>
  [
    "tech-adjusting-plantation-shutter-louvers.jpg",
    "homeowner-in-valley-living-room-shutters.jpg",
    "tech-repairing-horizontal-blinds-kitchen.jpg",
    "plantation-shutter-louvers-closeup.jpg",
    "shutter-tilt-rod-staples-closeup.jpg",
    "shutter-hinge-hardware-closeup.jpg",
  ].includes(image.filename),
);
