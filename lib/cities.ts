import type { FaqItem } from "@/lib/schema";

export type CityId =
  | "van-nuys"
  | "sherman-oaks"
  | "los-angeles"
  | "pasadena"
  | "santa-monica"
  | "santa-clarita";

export type CityContent = {
  id: CityId;
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  neighborhoods: string[];
  housing: string;
  climate: string;
  issues: string[];
  sections: { heading: string; body: string }[];
  faq: FaqItem[];
};

export const cities: CityContent[] = [
  {
    id: "van-nuys",
    slug: "/shutter-repair-van-nuys",
    name: "Van Nuys",
    title: "Shutter Repair in Van Nuys | On-Site Plantation Shutter Fixes",
    description:
      "On-site plantation shutter repair in Van Nuys and the central San Fernando Valley. Staples, louvers, tilt rods, hinges, and magnets — call 818-392-8584.",
    h1: "Shutter repair in Van Nuys",
    lede:
      "Most Van Nuys shutter calls are the same story: a panel that used to close, a louver that dropped, or a magnet that no longer holds after years of Valley heat. AAA Shutter Repair comes to the house and fixes the wood — often the same visit.",
    neighborhoods: [
      "central Van Nuys",
      "Valley Glen",
      "Lake Balboa",
      "North Hills",
      "Van Nuys Boulevard corridor apartments",
    ],
    housing:
      "Van Nuys housing is a mix of postwar ranch homes, 1970s–1990s tract houses, and multi-unit buildings along the boulevard. A lot of those windows still have the original painted wood plantation shutters — the kind that were stapled and pinned when they were new, then left alone for two decades.",
    climate:
      "The central Valley gets hot, dry summers and large day-to-night temperature swings. Wood shrinks, staples loosen, and tilt-rod staples are usually the first thing to let go. South- and west-facing rooms take the worst of it.",
    issues: [
      "Louvers that will not stay open or closed",
      "Missing or popped tilt-rod staples",
      "Panels that sag on tired hinges",
      "Magnets that no longer catch in the frame",
      "Side pins that walked out of the stile",
    ],
    sections: [
      {
        heading: "On-site shutter repair for Van Nuys homes",
        body: "AAA Shutter Repair specializes in plantation wood shutter repair, and most jobs — about nine out of ten — are finished on site. That matters in Van Nuys because a full replacement quote for a whole house of shutters is often more than the windows are worth to replace. A dropped louver, a dead magnet, or a panel that will not latch is usually a parts-and-labor visit, not a new product order. We work on staples, louvers (also spelled louvres), tilt rods, hinges, magnets, and side pins. If a shop told you the set was “too old to fix,” that is the call we get most often from this part of the Valley.",
      },
      {
        heading: "What we see on Van Nuys windows",
        body: "Ranch-house living rooms with wide sliders are a common Van Nuys layout. The shutter panels are heavy, the center meeting stiles take daily use, and kids or pets catch louvers on the way through. In apartments and condos, we more often see a single broken panel that a building handyman could not match. We also repair blinds and shades on the same trip when those are the actual problem — roller shades that will not retract, horizontal blinds with a bad wand, or a magnet set that no longer holds a shade in place. Motorized and Somfy systems are a smaller share of Van Nuys calls than on the Westside, but we handle those too when a remote or motor has quit.",
      },
      {
        heading: "How a Van Nuys service call works",
        body: "Call 818-392-8584 or send the quote form. We follow up by text to confirm the address and a window to come out. There is no storefront visit required — the work happens at your window. Public reviews of the company keep coming back to the same points: a technician named Alex who shows up, repairs what other companies wanted to replace, and finishes without a multi-week product lead time when the parts are on the truck. If a louver or panel has to go back to a manufacturer, that is the exception, and it is explained before anyone orders anything.",
      },
      {
        heading: "Nearby Valley cities we also cover",
        body: "Van Nuys sits in the middle of the San Fernando Valley service area. The same on-site crew covers Sherman Oaks to the south, and we take calls from across greater Los Angeles — Pasadena, Santa Monica, Santa Clarita, and the city of Los Angeles. If you searched shutter repair near me from a Van Nuys ZIP, this is the local page; the service itself is the same repair-first work we do Valley-wide. Custom wood shutters, new shades, and new blinds are available when a window is truly beyond repair, but we do not lead with a catalog. Repair is the job.",
      },
    ],
    faq: [
      {
        question: "Do you come to Van Nuys for a single broken shutter?",
        answer:
          "Yes. A single dropped louver, dead magnet, or sagging panel is a typical Van Nuys call. You do not need a whole-house project.",
      },
      {
        question: "Can plantation shutters in a 1980s Van Nuys house still be repaired?",
        answer:
          "Usually yes. Age alone is not a reason to replace. Staples, pins, hinges, and magnets are replaceable on most wood plantation shutters.",
      },
    ],
  },
  {
    id: "sherman-oaks",
    slug: "/shutter-repair-sherman-oaks",
    name: "Sherman Oaks",
    title: "Shutter Repair in Sherman Oaks | Plantation Shutter Repair",
    description:
      "Plantation shutter repair in Sherman Oaks — on-site wood shutter, blind, and shade fixes along the Ventura Boulevard corridor. Call 818-392-8584.",
    h1: "Shutter repair in Sherman Oaks",
    lede:
      "Sherman Oaks shutters live a harder life than they look. Hillside sun, tight custom openings, and daily use on French doors add up. We repair the wood on site instead of selling you a new set first.",
    neighborhoods: [
      "Sherman Oaks flats",
      "the hills south of Ventura Boulevard",
      "Chandler / valley-adjacent streets",
      "homes near the 101 and 405",
    ],
    housing:
      "Sherman Oaks splits between the flats — larger lots, 1950s–1970s ranch and traditional homes — and the hills, where custom additions, French doors, and oversized living-room openings are common. Many of those windows were fitted with stained or painted wood plantation shutters as a finish upgrade, not a builder afterthought.",
    climate:
      "South-facing hillside rooms take afternoon sun most of the year. HVAC that cycles hard in summer dries the wood, then winter moisture swells it again. That movement is what walks staples out of tilt rods and loosens side pins in the stile.",
    issues: [
      "Heavy double-hung shutter panels that drop on worn hinges",
      "Louvers that no longer track with the tilt rod",
      "Door-wall magnets that no longer hold a panel shut",
      "Custom stained louvers that other shops would not match",
      "Shades on the same openings that need a separate repair",
    ],
    sections: [
      {
        heading: "Repair first on Sherman Oaks custom openings",
        body: "Homeowners in Sherman Oaks are often told a broken shutter means a full custom reorder — especially when the stain is not a stock white. AAA Shutter Repair is set up for the other outcome: on-site plantation wood shutter repair. About 90% of jobs stay at the house. We restaple tilt rods, reset or replace louvers, rebuild hinge side loads, replace magnets, and re-pin stiles. Public reviews of the company describe a technician named Alex who has repaired panels other companies called unfixable, including cases where a single shutter went back to a manufacturer instead of replacing every window in the room.",
      },
      {
        heading: "Hills vs. flats — why the failures differ",
        body: "In the flats, we see everyday wear: kids catching louvers, sliders that have been opened a thousand times, and magnets that finally quit. In the hills, the failures are more often sun and weight — tall panels, west light, and wood that has moved season after season. Neither is a reason to gut the room. A matched louver or a new hinge set is usually enough. If you also have motorized shades on a media room or a Somfy remote that died, that is a separate service we handle on the same trip when it makes sense. Blind and shade repair is the other common add-on in Sherman Oaks condos and guest rooms.",
      },
      {
        heading: "Scheduling a Sherman Oaks visit",
        body: "Call 818-392-8584 or use the estimate form. Follow-up is by text so you can confirm a window without sitting on hold. We serve Sherman Oaks as part of the San Fernando Valley and greater Los Angeles area. We do not publish a street address on this site because public listings disagree on the office location; the phone and email are the reliable way to reach us. There is no showroom appointment — the technician comes to the window that is broken.",
      },
      {
        heading: "From Sherman Oaks to the rest of the Valley",
        body: "If you are comparing this page to a Van Nuys or Los Angeles search, the work is the same: plantation shutter repair, then blinds, shades, and motorized systems. Sherman Oaks just tends to have more custom stain matches and heavier door walls. Nearby Van Nuys, the city of Los Angeles, Pasadena, Santa Monica, and Santa Clarita are all in the service area. New custom wood shutters, shades, and blinds are available when a unit is truly finished, but the first question we ask is whether the existing wood can be saved.",
      },
    ],
    faq: [
      {
        question: "Can you match stained plantation shutters in Sherman Oaks?",
        answer:
          "Matching stain and slat size is a regular part of the work when a single louver or panel is damaged. We do not default to replacing every shutter in the room.",
      },
      {
        question: "Do you repair shutters on French doors?",
        answer:
          "Yes. French-door and slider panels are a frequent Sherman Oaks job — hinges, magnets, and meeting stiles take the most wear.",
      },
    ],
  },
  {
    id: "los-angeles",
    slug: "/shutter-repair-los-angeles",
    name: "Los Angeles",
    title: "Shutter Repair in Los Angeles | Plantation Shutter Repair Near Me",
    description:
      "Plantation shutter repair in Los Angeles and the San Fernando Valley. On-site wood shutter, blind, shade, and Somfy repairs. Call 818-392-8584.",
    h1: "Shutter repair in Los Angeles",
    lede:
      "Los Angeles is a big city with the same small problem in a lot of windows: a plantation shutter that still looks fine except for the one thing that broke. We come to the house and repair that thing.",
    neighborhoods: [
      "the San Fernando Valley",
      "central and east Los Angeles",
      "the Westside when the job is a fit",
      "multi-family buildings and single-family homes",
    ],
    housing:
      "Los Angeles window stock is not one product. Craftsman cottages, mid-century boxes, 1980s condos, and newer infill all show up on the schedule. What they share is that replacement quotes in this market are expensive, and a lot of “replace the set” advice is really a shop that does not do repair.",
    climate:
      "From Valley heat to marine layer near the basin, wood and hardware fail in different ways. Heat dries staples out of tilt rods. Condensation and coastal air chew magnets and cheap pins. Neither climate is a reason to throw out a whole room of wood.",
    issues: [
      "Shutter repair near me searches that turn into replacement quotes",
      "One broken panel in a condo the HOA will not replace",
      "Louvers that dropped after years of use",
      "Blinds and shades that failed on the same walls",
      "Somfy or other motors that stopped responding",
    ],
    sections: [
      {
        heading: "A Los Angeles shutter repair company that actually repairs",
        body: "AAA Shutter Repair is a San Fernando Valley–based team that serves greater Los Angeles. The specialty is on-site plantation wood shutter repair — staples, louvers, tilt rods, hinges, magnets, and side pins — and roughly 90% of that work never leaves the house. The company comes from a family business founded in 2005. Customers who leave public reviews keep naming a technician, Alex: fast, on time, and willing to repair what other companies said needed a full replacement. That is the positioning on purpose. This is not a new-product catalog that happens to mention repair in the footer.",
      },
      {
        heading: "When “shutter repair near me” should not mean a new order",
        body: "A Los Angeles search for shutter repair near me often surfaces installers whose business is selling shutters. If your louvers still move, the frames are sound, and the finish is the one you wanted when you bought the house, repair is the cheaper and faster path. We also repair blinds and shades — magnets, side pins, and hardware on those products too — and we restore Somfy and other motorized shade systems when the motor, remote, or fabric train has failed. Custom wood shutters, new shades, and new blinds are a secondary offer for windows that are truly done.",
      },
      {
        heading: "How we work across the city",
        body: "There is no public street address on this site. Listings disagree on Van Nuys versus Sherman Oaks office pins, and we will not publish a fake storefront or embed a map that does not match. Reach us at 818-392-8584 or info@aaashutterrepair.com. After you call or send the form, we text to schedule. The technician comes to the property — house, condo, or small commercial space — and works at the window. If you are in Van Nuys, Sherman Oaks, Pasadena, Santa Monica, or Santa Clarita, those cities have their own pages with more local detail. The city of Los Angeles is the wider net for everyone else in the basin.",
      },
      {
        heading: "Repair, then product — not the other way around",
        body: "A full house of custom shutters in Los Angeles is a large ticket. Saving the existing wood is usually the responsible first step, and it is what most callers want once they hear that staples and pins are replaceable. We will tell you when a panel is not worth saving. We will not open with a generic window-treatment pitch. If you need a written estimate for a larger scope, use the quote page and include the city, the job type, and a short description of what failed. Phone is still the fastest path if a panel is off the window today.",
      },
    ],
    faq: [
      {
        question: "Do you serve all of Los Angeles?",
        answer:
          "We serve the San Fernando Valley and greater Los Angeles, including Van Nuys, Sherman Oaks, Pasadena, Santa Monica, Santa Clarita, and the city of Los Angeles. Call 818-392-8584 if you are unsure your neighborhood is in range.",
      },
      {
        question: "Is this only for plantation shutters?",
        answer:
          "Plantation wood shutter repair is the core job. We also repair blinds, shades, and Somfy / motorized shade systems, and we can discuss custom shutters or new product when repair is not enough.",
      },
    ],
  },
  {
    id: "pasadena",
    slug: "/shutter-repair-pasadena",
    name: "Pasadena",
    title: "Shutter Repair in Pasadena | Wood Plantation Shutter Repair",
    description:
      "On-site shutter repair in Pasadena for older wood plantation shutters, blinds, and shades. Staples, louvers, hinges, magnets. Call 818-392-8584.",
    h1: "Shutter repair in Pasadena",
    lede:
      "Pasadena windows are often older than the shutters on them — or the shutters are original to a remodel that is now twenty years on. We repair the wood in place so a historic or Craftsman interior does not have to start over.",
    neighborhoods: [
      "Bungalow Heaven",
      "the Playhouse District",
      "San Rafael and southwest Pasadena",
      "South Lake and Madison Heights",
    ],
    housing:
      "Pasadena’s housing stock is the reason this page exists as its own lander. Craftsman bungalows, period revival houses, and older apartments have window sizes that do not match a warehouse shutter SKU. Many interiors were fitted with real wood plantation shutters during remodels in the 1990s and 2000s. Those sets are worth repairing.",
    climate:
      "The west San Gabriel Valley is warmer and drier than the coast but less brutally hot than the deep Valley. The failure mode here is age and use more than sunbake: tired hinges on tall casements, staples that finally let go, and magnets that no longer hold a panel in an older, slightly out-of-square frame.",
    issues: [
      "Original or remodel-era wood shutters in Craftsman interiors",
      "Out-of-square older frames that still hold a repairable panel",
      "Louvers and tilt rods that no longer operate together",
      "Hardware that a replacement company would not service",
      "Blinds in sunrooms and sleeping porches that need a separate fix",
    ],
    sections: [
      {
        heading: "Wood shutter repair that respects older Pasadena homes",
        body: "A Pasadena homeowner who calls for shutter repair is rarely looking for a glossy catalog. They want the existing wood to work again. AAA Shutter Repair does on-site plantation shutter repair for that reason. Staples, louvers, tilt rods, hinges, magnets, and side pins are the everyday list. Most visits — about 90% — finish at the house. That is a better fit for bungalow and period interiors than a lead time on a new custom order that may not match the profile already in the room. If a single panel needs manufacturer work, that is discussed up front. It is not the default.",
      },
      {
        heading: "What fails on Pasadena shutters",
        body: "Casement and double-hung openings in older plaster walls are rarely perfectly square. Shutters still work in those openings for years, then a hinge screw lets go or a magnet no longer meets the strike. We reset hardware to the frame you have instead of insisting the only fix is a new unit. In 1990s–2000s remodels, the more common call is a tilt-rod staple failure or a louver that split. We also repair blinds and shades in the same houses — sleeping porches and sunrooms in this part of town often have a mix of treatments. Motorized and Somfy repairs show up in newer additions and media rooms.",
      },
      {
        heading: "Coming from the Valley to Pasadena",
        body: "The company is based in the San Fernando Valley and serves greater Los Angeles, including Pasadena. Call 818-392-8584 or request an estimate; we follow up by text to schedule. We do not list a street address here because public listings conflict. Phone and email are the contact of record. Public reviews repeatedly mention Alex — on time, able to repair what others wanted to replace, and careful in the house. That last point matters in older Pasadena interiors.",
      },
      {
        heading: "Pasadena, then the rest of the map",
        body: "If you are deciding between this page and the Los Angeles or Sherman Oaks landers, use this one when the house is in Pasadena and the job is wood shutter repair. The service area still includes Van Nuys, Sherman Oaks, Santa Monica, Santa Clarita, and the wider city of Los Angeles. Secondary work — custom wood shutters, new shades, new blinds — is available when a window is past repair. The first conversation is still whether the plantation shutters you already have can be saved.",
      },
    ],
    faq: [
      {
        question: "Can you repair shutters in an older Pasadena Craftsman?",
        answer:
          "Yes. Older, slightly out-of-square openings are common in Pasadena. We repair the existing wood and hardware rather than requiring a new custom order first.",
      },
      {
        question: "Do I need to take the shutters off the window?",
        answer:
          "No. Most plantation shutter repairs are done on site, on the window. You do not drop panels at a shop.",
      },
    ],
  },
  {
    id: "santa-monica",
    slug: "/shutter-repair-santa-monica",
    name: "Santa Monica",
    title: "Shutter Repair in Santa Monica | Shutters, Blinds & Motorized Shades",
    description:
      "Shutter, blind, and motorized shade repair in Santa Monica. On-site plantation shutter fixes plus Somfy shade repair. Call 818-392-8584.",
    h1: "Shutter repair in Santa Monica",
    lede:
      "Santa Monica window treatments fail the coastal way: salt air on magnets and hinges, moisture in wood, and a lot of motorized shades in condos that nobody local wants to touch. We repair shutters on site and restore Somfy and other motors when that is the actual job.",
    neighborhoods: [
      "north of Montana",
      "the Wilshire and Montana corridors",
      "Ocean Park",
      "condo buildings near downtown and the water",
    ],
    housing:
      "Santa Monica is condos, courtyard apartments, and single-family streets that change character every few blocks. Plantation shutters show up in houses and larger units. Blinds, roller shades, and motorized blackout systems are more common here than in a typical Valley ranch — especially in bedrooms that face the light and in units where HOAs limit exterior changes.",
    climate:
      "Marine air and salt are hard on ferrous hardware. Magnets lose bite, hinges stain and bind, and wood swells in ways Valley heat does not. A shutter that “just will not stay closed” on a Santa Monica evening is often a magnet and strike problem, not a ruined panel.",
    issues: [
      "Magnets and hinges corroded by coastal air",
      "Wood plantation shutters that swell and rub the frame",
      "Condo roller shades and blackout shades that will not lift",
      "Somfy remotes and motors that stopped pairing",
      "HOA units where replacement is a long approval, so repair is the path",
    ],
    sections: [
      {
        heading: "On-site shutter repair, plus the shade work Santa Monica actually needs",
        body: "AAA Shutter Repair’s core craft is plantation wood shutter repair — staples, louvers, tilt rods, hinges, magnets, and side pins — done on site about 90% of the time. In Santa Monica that list still applies, but the mix of calls is wider. Blind and shade repair is a first-class job here, not an afterthought. Motorized shade repair, including Somfy, is the other page we send Westside callers to when the remote is dead and the fabric will not move. We are a Valley-based team that serves greater Los Angeles, including Santa Monica. We will tell you if a coastal hardware set should be upgraded while we are already in the unit.",
      },
      {
        heading: "Condos, HOAs, and why repair wins on the Westside",
        body: "Replacing every window treatment in a Santa Monica condo can mean HOA rules, elevator reservations, and a product lead time. Repairing the failed magnet, pin, or motor is usually faster and stays inside the unit. Public reviews of AAA Shutter Repair describe a technician named Alex who has fabricated or matched parts so a shade or shutter did not have to be replaced, and who has shown people how to avoid the same failure. That is the working style we want on this coast: save the treatment, explain the wear, leave the unit working.",
      },
      {
        heading: "How to get a Santa Monica visit on the calendar",
        body: "Call 818-392-8584 or send the quote form with Santa Monica as the city and the job type — shutter, blind, shade, or motorized. We follow up by text to schedule. We do not publish a street address or a Google embed; listings disagree, and this site will not invent a pin. Email is info@aaashutterrepair.com. If your building requires a certificate of insurance for a vendor, say so in the description so we can talk through it before anyone is on the way.",
      },
      {
        heading: "Santa Monica and the rest of the service area",
        body: "This lander is for Santa Monica searches — shutter repair, blind repair, and motorized shade repair with a coastal angle. The same company covers Van Nuys, Sherman Oaks, Los Angeles, Pasadena, and Santa Clarita. Custom wood shutters, new shades, and new blinds remain a secondary offer. If you are choosing a Google Ads landing page, use this URL for Santa Monica geo campaigns and the dedicated motorized page when the keyword is Somfy or motorized shade repair.",
      },
    ],
    faq: [
      {
        question: "Do you repair motorized shades in Santa Monica condos?",
        answer:
          "Yes. Somfy and other motorized shade repairs are a regular Westside job, along with plantation shutter and blind repair.",
      },
      {
        question: "Why won’t my Santa Monica shutters stay closed?",
        answer:
          "Coastal air is hard on magnets and hinges. A magnet and strike repair on site is more common here than a full panel replacement.",
      },
    ],
  },
  {
    id: "santa-clarita",
    slug: "/shutter-repair-santa-clarita",
    name: "Santa Clarita",
    title: "Shutter Repair in Santa Clarita | Valencia & Canyon Country",
    description:
      "Plantation shutter repair in Santa Clarita, Valencia, and Canyon Country. On-site staples, louvers, hinges, and magnets. Call 818-392-8584.",
    h1: "Shutter repair in Santa Clarita",
    lede:
      "Santa Clarita shutters are often builder-grade wood that has lived in strong sun since the house was new. When a louver drops or a whole wall of panels will not tilt, we repair them on site instead of sending you back to the builder’s replacement price.",
    neighborhoods: [
      "Valencia",
      "Stevenson Ranch",
      "Canyon Country",
      "Saugus and Newhall",
    ],
    housing:
      "Santa Clarita’s newer tracts — Valencia, Stevenson Ranch, Canyon Country — put the same shutter package in house after house. That is good for repair: the slat sizes, staple patterns, and hinge types repeat. It is also why one failed tilt rod often means the neighboring panels are a season away from the same staple failure.",
    climate:
      "The Santa Clarita Valley runs hotter and sunnier than the basin. West-facing family rooms and two-story foyers cook the wood. UV and dryness make staples let go and painted louvers become brittle. That is a repair job, not an automatic whole-house reorder.",
    issues: [
      "Builder-grade plantation shutters with failed tilt-rod staples",
      "Louvers that dropped in a two-story or great-room opening",
      "Kids and pets catching slats on sliders to the yard",
      "HOA-standard whites that should be repaired, not redesigned",
      "Roller shades in media rooms that need a motor or clutch fix",
    ],
    sections: [
      {
        heading: "Builder-grade shutter repair in Santa Clarita tracts",
        body: "AAA Shutter Repair comes up from the San Fernando Valley to Santa Clarita for on-site plantation wood shutter repair. The typical call is a Valencia or Stevenson Ranch house where the original shutters still fit the HOA look, but the tilt rods have let go or a louver is on the floor. We restaple, re-pin, replace magnets, and reset hinges at the window. About 90% of jobs stay on site. That is the difference between a same-visit repair and a custom order that takes the room down for weeks. Public reviews of the company highlight Alex: next-day or fast scheduling, repairs other companies would not attempt, and a fair price for work that used to be called a full replacement.",
      },
      {
        heading: "Great rooms, sliders, and sun",
        body: "Santa Clarita floor plans push a lot of light through a back wall of sliders. Those shutter panels are wide, they get used every day, and the west sun hits them hard. Hinges loosen, meeting stiles drift, and magnets stop catching. None of that requires a new product if the frames are sound. We also repair blinds and shades in the same houses — bonus rooms and bedrooms often have a different treatment than the great room. Motorized and Somfy shade repair shows up in newer builds and media rooms more than it did a decade ago.",
      },
      {
        heading: "Scheduling from Santa Clarita",
        body: "Call 818-392-8584 or submit the quote form with your Santa Clarita neighborhood in the city field. We text to confirm the visit. We do not list a street address on this website; listings conflict, and the reliable NAP here is phone, email, and service area. If you are in an HOA and need the existing white shutters to stay, say so — that is exactly the kind of job we prefer to repair rather than redesign.",
      },
      {
        heading: "Santa Clarita and the greater Los Angeles area",
        body: "This page is the Santa Clarita geo lander for shutter repair near me, plantation shutter repair, and related blind or motorized work in Valencia, Canyon Country, and nearby communities. The same team covers Van Nuys, Sherman Oaks, Los Angeles, Pasadena, and Santa Monica. Custom wood shutters, new shades, and new blinds are available when a window is beyond repair. For paid search, use this URL for Santa Clarita campaigns and the plantation shutter repair page when the keyword has no city.",
      },
    ],
    faq: [
      {
        question: "Do you repair original builder shutters in Valencia?",
        answer:
          "Yes. Builder-grade plantation shutters in Valencia, Stevenson Ranch, and Canyon Country are a regular Santa Clarita job — especially failed staples and dropped louvers.",
      },
      {
        question: "Can you come to Santa Clarita for one room?",
        answer:
          "Yes. You do not need a whole-house project. Call 818-392-8584 or send the quote form and we will text to schedule.",
      },
    ],
  },
];

export function getCity(id: CityId): CityContent {
  const city = cities.find((item) => item.id === id);
  if (!city) {
    throw new Error(`Unknown city: ${id}`);
  }
  return city;
}
