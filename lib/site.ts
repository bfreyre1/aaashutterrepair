export const SITE_NAME = "AAA Shutter Repair";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aaashutterrepair.com";

export const PHONE_DISPLAY = "818-392-8584";
export const PHONE_TEL = "+18183928584";
export const EMAIL = "info@aaashutterrepair.com";

/** Google Ads account. */
export const AW_ID = process.env.NEXT_PUBLIC_AW_ID ?? "AW-11547263826";
export const AW_PHONE_LABEL = process.env.NEXT_PUBLIC_AW_PHONE_LABEL ?? "";
export const AW_LEAD_LABEL = process.env.NEXT_PUBLIC_AW_LEAD_LABEL ?? "";
/** GA4 web stream on property AAA Shutter Repair (properties/544939257). */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-Z405VVNDE8";
/** Same token as the live DNS TXT. Backup if GSC ever checks HTML. */
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  "BXqZURwP605mm2TKu4z7y5BMi8rVgYvKq5RB9cJywV8";

export const SERVICE_TYPES = [
  "Plantation shutter repair",
  "Wood shutter repair",
  "Blind repair",
  "Shade repair",
  "Motorized shade repair",
  "Somfy shade repair",
] as const;

export const JOB_TYPES = [
  "Plantation shutter repair",
  "Blind repair",
  "Shade repair",
  "Motorized / Somfy shade repair",
  "Custom shutters or new product",
  "Other window treatment repair",
] as const;

export type NavLink = { href: string; label: string };

export const SERVICE_LINKS: NavLink[] = [
  { href: "/plantation-shutter-repair", label: "Plantation shutter repair" },
  { href: "/blind-and-shade-repair", label: "Blind and shade repair" },
  { href: "/motorized-shade-repair", label: "Motorized / Somfy repair" },
];

export const CITY_LINKS: NavLink[] = [
  { href: "/shutter-repair-van-nuys", label: "Van Nuys" },
  { href: "/shutter-repair-sherman-oaks", label: "Sherman Oaks" },
  { href: "/shutter-repair-los-angeles", label: "Los Angeles" },
  { href: "/shutter-repair-pasadena", label: "Pasadena" },
  { href: "/shutter-repair-santa-monica", label: "Santa Monica" },
  { href: "/shutter-repair-santa-clarita", label: "Santa Clarita" },
];

export const AREA_SERVED = [
  "San Fernando Valley",
  "Los Angeles",
  "Van Nuys",
  "Sherman Oaks",
  "Santa Clarita",
  "Pasadena",
  "Santa Monica",
] as const;

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function pageTitle(title: string): string {
  return `${title} | ${SITE_NAME}`;
}
