export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  filename: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    filename: "bedroom-shutters.webp",
    src: "/images/gallery/bedroom-shutters.webp",
    alt: "White plantation shutters on a bedroom window",
    width: 1000,
    height: 750,
  },
  {
    filename: "house-shutters.webp",
    src: "/images/gallery/house-shutters.webp",
    alt: "Wood plantation shutter panels ready for on-site repair",
    width: 1067,
    height: 800,
  },
  {
    filename: "house-window.webp",
    src: "/images/gallery/house-window.webp",
    alt: "House window with plantation-style shutters",
    width: 1200,
    height: 1600,
  },
];

export const HOME_GALLERY_IMAGES = GALLERY_IMAGES;
