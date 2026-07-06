# Superior Taekwondo — SEO Audit & Update (July 2026)

Site: https://superiortkd.co.nz · Astro 5 static site on Netlify · 35 indexable pages

## Executive summary

The site started from a strong SEO base: valid sitemap, robots.txt, self-referencing canonicals, rich JSON-LD (MartialArtsSchool, FAQPage, BlogPosting, BreadcrumbList), self-hosted fonts, WebP images, and a genuinely good content moat (14 blog guides + 7 local landing pages + 5 class pages). The audit found no indexation blockers, but several defects that silently undermined it — most notably a missing OG image referenced on every page, duplicate canonical tags on two pages, and an invalid breadcrumb schema on all location pages. All were fixed in this update.

## Issues found and fixed

| # | Issue | Impact | Fix |
|---|-------|--------|-----|
| 1 | Default social image `/images/og-image.jpg` referenced on every page but the file did not exist (404) — social shares rendered with no image | High (CTR from social/messaging) | Generated 1200×630 `public/images/og-image.jpg` from the hero poster |
| 2 | `/poomsae` and `/competition` shipped **two conflicting canonical tags** (Layout always emitted a self-canonical alongside the injected override) — Google may ignore both | High | Added a `canonical` prop to `Layout.astro`; pages now emit exactly one canonical to `/classes/poomsae/` and `/classes/competition/` (trailing slash matched to sitemap) |
| 3 | Location pages' BreadcrumbList schema referenced `location.name`, a field that doesn't exist → nameless ListItem (invalid), and linked to `/locations/`, a page that doesn't exist | High (rich results eligibility on 7 pages) | Rebuilt breadcrumb as Home → named location page using the location title |
| 4 | Non-canonical duplicates `/poomsae` and `/competition` were in the sitemap, and the main nav linked to them instead of the canonical `/classes/*` pages | Medium | Sitemap filter excludes both; navbar now links to `/classes/poomsae` and `/classes/competition` |
| 5 | Canonical class pages (Tiny Tigers, General, Fitness) were only reachable via footer links | Medium (crawl depth / PageRank flow to money pages) | Added all five class pages to the main nav "Student Info" dropdown |
| 6 | No 404 page (Netlify default page, no nav, no recovery links) | Medium | Added branded `src/pages/404.astro` with links to key conversion pages |
| 7 | Homepage H1 "Unleash Your Potential" contained zero keywords | Medium | Appended sr-only "— Taekwondo Classes in North West Auckland" (no visual change) |
| 8 | 10 page titles were 70–90 chars (truncated in SERPs) | Medium | Trimmed to ≤65 chars, keywords kept at front (e.g. "Adult Taekwondo Classes Auckland \| Superior Taekwondo") |
| 9 | Blog posts used `og:type=website` and the generic OG image | Low-Med | Layout auto-sets `og:type=article` for `/blog/*`; each of the 14 posts now passes its own hero image as `og:image` |
| 10 | Hero poster preloaded on **every** page though only the homepage uses it (wasted LCP bandwidth on 34 pages) | Low-Med (Core Web Vitals) | Preload now renders only on `/` |
| 11 | Footer "Privacy Policy" / "Terms of Service" links were dead (`href="#"`) | Low (trust/UX) | Replaced with real Facebook/Instagram profile links (matching schema `sameAs`) |
| 12 | Missing `og:site_name`, `og:locale`, `og:image` dimensions; Twitter tags used `property=` instead of `name=`; `lang="en"` not region-specific | Low | Added `og:site_name`, `og:locale=en_NZ`, image width/height/alt for the default image; Twitter tags use `name=`; `lang="en-NZ"` |
| 13 | Decorative Wall-of-Fame background had `alt="Medals"` | Low | Set `alt=""` + `role="presentation"` (correct for decorative images) |
| 14 | Gallery page had thin, keyword-free meta | Low | Rewrote title/description with location + activity keywords |

## Keyword map (page → primary keyword)

**Money pages**
- `/` — taekwondo north west auckland · martial arts auckland (brand)
- `/classes/tiny-tigers` — kids taekwondo classes helensville · kids martial arts auckland
- `/classes/general` — adult taekwondo classes auckland · teen martial arts
- `/classes/fitness` — martial arts fitness classes auckland
- `/classes/poomsae` — poomsae classes helensville
- `/classes/competition` — competition taekwondo training auckland
- `/pricing` — taekwondo class prices auckland
- `/contact` — taekwondo near me (conversion)

**Local landing pages** (each targets "taekwondo/martial arts + suburb")
Helensville, Kaukapakapa, Waimauku, Huapai, Rodney, Auckland North West, Auckland

**Blog (informational cluster)**
- what-is-taekwondo — what is taekwondo
- taekwondo-for-beginners — taekwondo for beginners
- first-taekwondo-class — first taekwondo class what to expect
- how-to-choose-a-taekwondo-club — taekwondo club auckland
- self-defence-auckland — self defence classes auckland
- adult-taekwondo-fitness — adult taekwondo / martial arts fitness
- taekwondo-grading-system + preparing-for-belt-test — taekwondo belt system/grading
- wt-vs-itf-taekwondo — wt vs itf
- olympic-taekwondo / world-taekwondo / history-of-taekwondo / taekwondo-in-new-zealand / competition-rules — supporting topical authority

Coverage is good with no significant cannibalisation (the `/poomsae` + `/competition` overlap is resolved via canonicals). Gap opportunities: "after school activities kumeu/westgate", "birthday parties" (if offered), "womens self defence auckland".

## Remaining recommendations (not code)

1. **Google Business Profile** — the single highest-leverage local SEO action; ensure NAP matches "94 Mill Road, Helensville 0800" exactly and link the site. Get reviews there (the site's Reviews section supports this).
2. **Search Console** — verify property, submit `sitemap-index.xml`, monitor Core Web Vitals.
3. **Verify social handles** — footer/schema link to facebook.com/superiortkd and instagram.com/superiortkd; confirm these are the real handles.
4. **Privacy Policy & Terms pages** — the footer links were removed because they were dead; real legal pages are a trust/E-E-A-T signal worth adding with business-approved text.
5. **Local citations/backlinks** — Taekwondo NZ club directory, Auckland activity directories (ActiveActivities, Localist), Helensville community pages, school newsletters.
6. **Keep blog dates honest** — several posts carry `dateModified` values; update them only when content actually changes.
7. **Consider a `/locations/` index page** — 7 location pages exist with no hub; a short hub page would strengthen the cluster.

## Verification

`npm run build` passes (38 routes). Confirmed in `dist/`: single correct canonical on every page (trailing-slash consistent), sitemap contains exactly 35 canonical URLs, `og:type=article` + per-post OG images on blog posts, valid 2-item breadcrumb JSON-LD on location pages, hero preload only on homepage, 404 page rendered.
