export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  filename: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    filename: "bedroom-shutters.jpg",
    src: "/images/gallery/bedroom-shutters.jpg",
    alt: "White plantation shutters on a bedroom window",
    width: 1000,
    height: 750,
  },
  {
    filename: "house-shutters.jpg",
    src: "/images/gallery/house-shutters.jpg",
    alt: "Wood plantation shutter panels ready for on-site repair",
    width: 1067,
    height: 800,
  },
  {
    filename: "house-window.jpg",
    src: "/images/gallery/house-window.jpg",
    alt: "House window with plantation-style shutters",
    width: 1920,
    height: 2560,
  },
];

export const HOME_GALLERY_IMAGES = GALLERY_IMAGES;
