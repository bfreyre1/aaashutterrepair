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
| Trust | Live red chevron logo, real shop photos in the hero and gallery, large tap targets, sticky mobile call bar |

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

Supporting URLs (usually sitelinks or organic only): `/about`, `/reviews`, `/gallery`, `/privacy`. Unknown paths render the branded 404. `/404` exists as a real route for leftover inbound links.

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

## Analytics and ownership

`components/Analytics.tsx` loads Google Ads **`AW-11547263826`** and GA4 **`G-Z405VVNDE8`** (property `AAA Shutter Repair`, stream on `https://www.aaashutterrepair.com`). Override with `NEXT_PUBLIC_AW_ID` / `NEXT_PUBLIC_GA_MEASUREMENT_ID` if those IDs change.

Search Console ownership on the Next site (leave Duda alone):

- HTML meta: `google-site-verification=BXqZURwP605mm2TKu4z7y5BMi8rVgYvKq5RB9cJywV8` (same token as the live DNS TXT)
- HTML meta: `google-site-verification=tBt86v_ONfyMJKCFZ1kPPC5UVPk99LSHJOI34NZAPPs` (info@ Search Console URL-prefix property)
- HTML file: `/google53928a8ada018672.html`
- DNS TXT on Tailor Brands / GoDaddy — do not delete it. That is the Domain-property path and survives the host change.

After DNS points at Vercel, hit **Verify** in Search Console, then finish the Ryze GSC picker. Do not invent conversion labels — `NEXT_PUBLIC_AW_PHONE_LABEL` and `NEXT_PUBLIC_AW_LEAD_LABEL` stay empty until Ads provides them.

## SEO implementation notes

- `HomeAndConstructionBusiness` JSON-LD on every page (`telephone`, `url`, `areaServed`, `serviceType`). **No `streetAddress`.** No `aggregateRating`.
- `Service` JSON-LD on home, service, and city pages. `FAQPage` where there is a FAQ. `BreadcrumbList` on inner pages.
- Canonicals are absolute `https` URLs from `NEXT_PUBLIC_SITE_URL`.
- `app/sitemap.ts` → `/sitemap.xml`. `app/robots.ts` → `/robots.txt`.
- One H1 per page. Images use `next/image` and descriptive alts. The homepage hero and `/gallery` use the shop’s own bedroom / shutter / window photos. No stock-photo disclaimers.

## Shop photos

`/public/images/gallery/` holds the live-site shop photos (bedroom shutters, wood panels, house window). Do not add generated people frames or “not a client project” captions.

## Design and accessibility

- Mobile-first, sticky **Call 818-392-8584** bar under the `md` breakpoint.
- Primary CTAs: **Call now** / **Get a free estimate**.
- Contrast-first palette mapped from the live Duda site (`#414345` body text, `#bb2029` / `#e51723` brand red, `#f2f2f2` cream, Raleway + Montserrat). Official AAA logo from the live CDN is saved at `/public/aaa-shutter-repair-logo.svg` (fill `#bb2029`). 44–48px tap targets, visible `:focus-visible` rings, labeled form fields, skip link.

## Deploy on Vercel

1. Push this repo (or this branch) to GitHub.
2. In [Vercel](https://vercel.com), **Add New Project** and import the repository. Framework preset: Next.js. Build command: `npm run build`. Output: default `.next`.
3. Environment variables (Production):
   - `NEXT_PUBLIC_SITE_URL=https://www.aaashutterrepair.com` (or the Vercel URL until DNS is ready)
   - `NEXT_PUBLIC_AW_ID=AW-11547263826`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-Z405VVNDE8` (defaults in code if unset)
   - Optional: `NEXT_PUBLIC_AW_PHONE_LABEL`, `NEXT_PUBLIC_AW_LEAD_LABEL`
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
