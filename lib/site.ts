export const SITE_NAME = "AAA Shutter Repair";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aaashutterrepair.com";

export const PHONE_DISPLAY = "818-392-8584";
export const PHONE_TEL = "+18183928584";
export const EMAIL = "info@aaashutterrepair.com";

/** Official business NAP — Sherman Oaks mailing / office unit only. */
export const ADDRESS = {
  street: "14120 Ventura Blvd",
  unit: "C502",
  city: "Sherman Oaks",
  region: "CA",
  postal: "91423",
  country: "US",
} as const;

/** Schema.org streetAddress: street + unit, no city. */
export const ADDRESS_STREET = `${ADDRESS.street} ${ADDRESS.unit}`;

/** Exact public NAP line: 14120 Ventura Blvd C502, Sherman Oaks, CA 91423 */
export const ADDRESS_DISPLAY = `${ADDRESS_STREET}, ${ADDRESS.city}, ${ADDRESS.region} ${ADDRESS.postal}`;

/** Existing Google Ads remarketing / config tag. Do not remove. */
export const AW_ID = process.env.NEXT_PUBLIC_AW_ID ?? "AW-11547263826";
export const AW_PHONE_LABEL = process.env.NEXT_PUBLIC_AW_PHONE_LABEL ?? "";

const DEFAULT_AW_LEAD_ID = "AW-16874362178";
const DEFAULT_AW_LEAD_SEND_TO = `${DEFAULT_AW_LEAD_ID}/mjU2CM-2qu8cEMKqqe4-`;

/**
 * Quote form conversion send_to from Google Ads
 * (action: "Quote form submit", PRIMARY, count One, value $0).
 * Prefer NEXT_PUBLIC_AW_LEAD_SEND_TO, or split ID + label.
 */
export const AW_LEAD_SEND_TO =
  process.env.NEXT_PUBLIC_AW_LEAD_SEND_TO ||
  (process.env.NEXT_PUBLIC_AW_LEAD_ID && process.env.NEXT_PUBLIC_AW_LEAD_LABEL
    ? `${process.env.NEXT_PUBLIC_AW_LEAD_ID}/${process.env.NEXT_PUBLIC_AW_LEAD_LABEL}`
    : DEFAULT_AW_LEAD_SEND_TO);

/** Conversion account configured alongside the remarketing tag. */
export const AW_LEAD_ID =
  process.env.NEXT_PUBLIC_AW_LEAD_ID ||
  AW_LEAD_SEND_TO.split("/")[0] ||
  DEFAULT_AW_LEAD_ID;

/** Optional split form of the quote conversion (suffix after AW-xxxxx/). */
export const AW_LEAD_LABEL =
  process.env.NEXT_PUBLIC_AW_LEAD_LABEL ||
  AW_LEAD_SEND_TO.split("/")[1] ||
  "";

/** GA4 web stream on property AAA Shutter Repair (properties/544939257). */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-Z405VVNDE8";
/** Same token as the live DNS TXT. Backup if GSC ever checks HTML. */
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  "BXqZURwP605mm2TKu4z7y5BMi8rVgYvKq5RB9cJywV8";
/** HTML-tag token for the info@ Search Console URL-prefix property. */
export const GOOGLE_SITE_VERIFICATION_INFO =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_INFO ??
  "tBt86v_ONfyMJKCFZ1kPPC5UVPk99LSHJOI34NZAPPs";

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
export type CityLink = NavLink & { blurb: string };

export const SERVICE_LINKS: NavLink[] = [
  { href: "/plantation-shutter-repair", label: "Plantation shutter repair" },
  { href: "/blind-and-shade-repair", label: "Blind and shade repair" },
  { href: "/motorized-shade-repair", label: "Motorized / Somfy repair" },
];

export const CITY_LINKS: CityLink[] = [
  {
    href: "/shutter-repair-van-nuys",
    label: "Van Nuys",
    blurb:
      "Central Valley ranch homes — staples and louvers that let go in the heat.",
  },
  {
    href: "/shutter-repair-sherman-oaks",
    label: "Sherman Oaks",
    blurb:
      "Ventura Boulevard and the hills — custom openings and heavy door-wall panels.",
  },
  {
    href: "/shutter-repair-los-angeles",
    label: "Los Angeles",
    blurb:
      "Citywide on-site repair when one panel failed, not a whole-house replacement.",
  },
  {
    href: "/shutter-repair-pasadena",
    label: "Pasadena",
    blurb:
      "Craftsman and remodel-era wood shutters, repaired in older openings.",
  },
  {
    href: "/shutter-repair-santa-monica",
    label: "Santa Monica",
    blurb:
      "Coastal magnets, condo shades, and Somfy motors on the Westside.",
  },
  {
    href: "/shutter-repair-santa-clarita",
    label: "Santa Clarita",
    blurb:
      "Valencia and Canyon Country builder shutters that have lived in strong sun.",
  },
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
