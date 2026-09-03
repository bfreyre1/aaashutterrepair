# AAA Shutter Repair — sample marketing site

Next.js (App Router) sample site for **AAA Shutter Repair**. It is built to rank for repair-intent local searches and to convert Google Ads clicks to phone calls and estimate requests.

This is a **sample**. It is **not yet pointed at the live domain**. The live Duda site remains at [https://www.aaashutterrepair.com/](https://www.aaashutterrepair.com/) until someone deploys this project and updates DNS. Canonical tags already use the `https://www.aaashutterrepair.com` origin so they are ready when the domain is switched.

Do not treat this as a clone of the current Duda layout. Copy is repair-first. There is **no street address** on the site (listings disagree on Van Nuys vs Sherman Oaks vs a third map pin). Contact is phone + email + service area only. There is no fake Google Business Profile embed and no fabricated review stars.

## Local run

```bash
npm install
cp .env.example .env.local   # optional; defaults already match the Ads account
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

`npm run build` must succeed before you deploy.

Node 20+ is expected (the Cloud Agent image used Node 22).

## What this site is for

| Goal | How the site supports it |
| --- | --- |
| Local SEO | Unique indexable routes, one H1 per page, unique title + meta description, `https` canonicals, `sitemap.xml`, `robots.txt`, internal links home → services → cities → quote, breadcrumbs |
| Paid search | Real paths as final URLs (no hashes). Sticky mobile call bar. Call now / Get a free estimate CTAs. `generate_lead` on quote submit. `tel:` clicks tracked |
| Trust | Original red chevron logo, burgundy on cream, real house / shutter photos, large tap targets |

## Pages, keywords, and recommended Ads final URLs

Use these **https** paths as Google Ads final URLs. Do not point campaigns at hash URLs or `http`.

| Campaign / keyword theme | Final URL | H1 |
| --- | --- | --- |
| Branded + “shutter repair near me” / LA head terms | `/` | Plantation shutter repair in Los Angeles |
| Plantation shutter repair, wood shutter repair, staples / louvers / tilt rods | `/plantation-shutter-repair` | Plantation shutter repair |
| Blind repair, shade repair | `/blind-and-shade-repair` | Blind and shade repair |
| Motorized shade repair, Somfy shade repair | `/motorized-shade-repair` | Motorized shade repair |
| Van Nuys geo | `/shutter-repair-van-nuys` | Shutter repair in Van Nuys |
| Sherman Oaks geo | `/shutter-repair-sherman-oaks` | Shutter repair in Sherman Oaks |
| Los Angeles geo | `/shutter-repair-los-angeles` | Shutter repair in Los Angeles |
| Pasadena geo | `/shutter-repair-pasadena` | Shutter repair in Pasadena |
| Santa Monica geo | `/shutter-repair-santa-monica` | Shutter repair in Santa Monica |
| Santa Clarita / Valencia geo | `/shutter-repair-santa-clarita` | Shutter repair in Santa Clarita |
| Lead form / sitelink | `/get-a-quote` | Get a free estimate |

Supporting URLs (usually sitelinks or organic only): `/about`, `/reviews`, `/privacy`. Unknown paths render the branded 404. `/404` exists as a real route for leftover inbound links.

Sitelink ideas: Get a free estimate, Plantation shutter repair, Blind and shade repair, Motorized / Somfy repair, plus the city that matches the campaign geo.

Callout extensions and the sticky bar should all use `tel:+18183928584` (display **818-392-8584**).

## Conversions (Google Ads)

The site loads gtag for **`AW-11547263826`** unless you override `NEXT_PUBLIC_AW_ID`.

| Event | When it fires | How to finish setup in Google Ads |
| --- | --- | --- |
| `generate_lead` | Valid quote form submit | Create a conversion action that imports the `generate_lead` event, or set `NEXT_PUBLIC_AW_LEAD_LABEL` to the label Google gives you (`AW-11547263826/XXXX`) |
| `phone_call_click` | Any `tel:` link (header, sticky bar, quote sidebar, CTAs) | In Google Ads, either import that custom event or create a call conversion and put the label in `NEXT_PUBLIC_AW_PHONE_LABEL`. You can also use Google’s official website-call conversion against the same number |

Until those labels exist, the events still fire and can be used as custom conversions. Do not invent conversion labels.

The quote form does **not** post to a CRM. After validation it shows a success state (and offers a `mailto:` copy to `info@aaashutterrepair.com`). Copy on the page says follow-up is by **text** to schedule.

## How to add GA4

There is **no GA4 `G-` ID** in this repo on purpose. Do not invent one.

1. Create a GA4 property in Google Analytics.
2. Copy the measurement ID (`G-XXXXXXXXXX`).
3. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local` and in Vercel.
4. Redeploy. `components/Analytics.tsx` will call `gtag('config', thatId)` only when the variable is non-empty.

## SEO implementation notes

- `HomeAndConstructionBusiness` JSON-LD on every page (`telephone`, `url`, `areaServed`, `serviceType`). **No `streetAddress`.** No `aggregateRating`.
- `Service` JSON-LD on home, service, and city pages. `FAQPage` where there is a FAQ. `BreadcrumbList` on inner pages.
- Canonicals are absolute `https` URLs from `NEXT_PUBLIC_SITE_URL`.
- `app/sitemap.ts` → `/sitemap.xml`. `app/robots.ts` → `/robots.txt`.
- One H1 per page. Images use `next/image` and descriptive alts. Photos are the company’s own house / shutter shots — no stock-photo disclaimers.

## Design and accessibility

- Mobile-first, sticky **Call 818-392-8584** bar under the `md` breakpoint.
- Primary CTAs: **Call now** / **Get a free estimate**.
- Brand palette: burgundy `#8B1E1E` on cream `#FAF7F2`, navy only for small eyebrows. 44–48px tap targets, visible `:focus-visible` rings, labeled form fields, skip link.

## Deploy on Vercel

1. Push this repo (or this branch) to GitHub.
2. In [Vercel](https://vercel.com), **Add New Project** and import the repository. Framework preset: Next.js. Build command: `npm run build`. Output: default `.next`.
3. Environment variables (Production):
   - `NEXT_PUBLIC_SITE_URL=https://www.aaashutterrepair.com` (or the Vercel URL until DNS is ready)
   - `NEXT_PUBLIC_AW_ID=AW-11547263826`
   - Optional: `NEXT_PUBLIC_AW_PHONE_LABEL`, `NEXT_PUBLIC_AW_LEAD_LABEL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`
4. Deploy. Confirm `/sitemap.xml` and `/robots.txt`.
5. When you are ready to replace the live Duda site, point the `aaashutterrepair.com` DNS to Vercel and keep the https canonicals. Until then, this remains a sample.

If you deploy to a Vercel preview URL first, set `NEXT_PUBLIC_SITE_URL` to that preview origin **or** leave production canonicals aimed at the real domain and expect Search Console to see the domain only after cutover.

## Stack

- Next.js App Router, TypeScript, Tailwind CSS v4
- Static generation per city/service page
- Google Ads gtag via `next/script`

## Contact used on the site (do not invent the rest)

- Name: AAA Shutter Repair
- Phone: 818-392-8584
- Email: info@aaashutterrepair.com
- Area: San Fernando Valley / greater Los Angeles
