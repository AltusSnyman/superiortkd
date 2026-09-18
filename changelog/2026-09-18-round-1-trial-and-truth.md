# 2026-09-18 — Round 1: trial and truth

Branch: `growth/trial-and-truth-2026-09-18` · Plan: `plan.md` (round 1) · Not deployed. No push made; the owner must ask for one.

## Why

Search Console shows 151 clicks / 20,338 impressions over 28 days at 0.74% CTR and position 8.5, with impressions inflated by two global informational posts. The money term "taekwondo auckland" (425 impressions, position 9.6) went 4 clicks → 0 last month, and the page Google shows for it was a thin doorway. Meanwhile nothing on the site could actually capture a lead: the contact form was a `mailto:` link, no page showed class times, and the only CTA on the money pages was "Join Now" into paid GymDesk signup.

Layered on top of that, the site was making claims that are no longer true — three venues when there is one, prices in schema that disagreed with the price table, a minimum age stated as both 4 and 5, review cards styled as Google reviews with "Local Guide" badges and no link to a real profile.

Round 1 fixes the conversion path and the truth problem together, because ranking a page that lies is worse than not ranking it.

## What changed

### Conversion
- **/contact/ now has a real form.** The broken `mailto:` React form was replaced with the owner's GoHighLevel embed (form id `L3HyiQ9aU9bX3S5fOq2k`) in a `#trial` section with a fixed min-height container so the iframe renders before the GHL script resizes it. H1 is now "Book a free trial class". A `tel:`/`mailto:` fallback line sits under the form. The GHL loader script is inlined on /contact/ only.
  *Note: the previous state of this file was broken — the form referenced `handleSubmit`/`formState`/`handleChange` after the mailto handler had been removed, so the site did not build.*
- **"Book a free trial" → `/contact/#trial` is now the primary CTA** on the home hero, pricing cards, all five class pages, all location pages, the locations and classes hubs, the navbar and ReadyToTrain. GymDesk "Join now" is everywhere demoted to secondary, and every GymDesk link is on **https** (they were all `http://`, including the Astro `/schedule` redirect).
- **Class times are on the site.** New `src/data/schedule.ts` holds the real GymDesk timetable (week of 14–20 Sep 2026) verbatim. `ScheduleGrid.astro` — which existed but was imported nowhere and contained an invented timetable — was rewritten to render from that data, with an optional `filter` prop. It now appears on the homepage (`#schedule`), the new /classes/ hub, and each class page filtered to its own classes. Every grid carries "Timetable current as of 18 Sep 2026; book on GymDesk".
- Hero: H1 "Unleash Your Potential" → "Taekwondo for kids, teens and adults, coached by an Olympian", with a sub-line naming the dojang, the coach and the free trial. The `<video src="/videos/hero.mp4">` element was removed — that file does not exist in `public/`, so it 404'd in production; the poster image stays as a CSS background.

### Truth
- **One dojang, not three.** Every "Three Locations. One Standard." / "access to all locations (Kaukapakapa, Helensville, Waimauku)" / "our Helensville, Kaukapakapa and Waimauku dojangs" claim is gone, across about, pricing, contact, gallery, grading, the blog posts, the class pages, the location pages and the FAQ schemas. Kaukapakapa and Waimauku survive as **catchment** pages (people who travel from there), never as venues.
- **Prices in schema now match the price table.** The pricing FAQ said $39 / $285 / $350 / $265 where the table says $40 / $300 / $400 / $285. Fixed. The legacy `"price": "27.00"` Service offers on /poomsae/ and /competition/ were removed.
- **Tiny Tigers is from age 4** everywhere (it was 4 in two places and 5 in two others).
- **Reviews are honest.** The fake "Local Guide · N reviews · N photos" badges are gone, replaced by one line — "5.0 from 23 reviews on Google" — linking to the real Google Business Profile. Still no `aggregateRating` markup, which would be self-serving.
- **"Auckland's Top Competition Club"** (no source) → **"Olympian-coached competition team"**, in TrustBar and Olympian.
- Competition copy claimed training at "Kaukapakapa Hall" on days that don't match GymDesk; it now names 94 Mill Road, Helensville and the real squad times.
- Andrea's Oceania Olympic Qualifier gold was dated 2007 in one place and 2008 in two. The year was removed from the 2007 bullet rather than guessing (see owner flags).

### SEO / technical
- New **`/classes/`** hub (it was linked from every class-page breadcrumb and 404'd) and new **`/locations/`** hub.
- New **`/locations/kumeu/`** — "taekwondo kumeu" is an open SERP and the URL previously 404'd.
- `/locations/auckland/` (5,524 impressions, 0.29% CTR, ranking for bare "taekwondo") rewritten honestly: it now says we are *not* in the central city and names the drive.
- `/locations/rodney-north-west/` and `/locations/auckland-north-west/` deleted and **301'd to `/locations/auckland/`** — ~440 words of duplicated template copy each, 2 and 0 clicks in 90 days. Redirects live in both `netlify.toml` (repo root) and `public/_redirects`.
- **13 blog posts each emitted two `BreadcrumbList` blocks.** The inline duplicates are gone; the Layout emits the only one. Same for the five class pages and the location template.
- Location pages emitted a second `MartialArtsSchool` block on top of the global one. Removed.
- Trailing slashes normalised on `mainEntityOfPage.@id`, Offer `url`, breadcrumb self-URLs and internal links. The Layout now forces a trailing slash on every breadcrumb item so pages can't drift again.
- `/pricing/` had no H1; it now has exactly one ("Memberships and pricing"), with the old top heading demoted.
- `/blog/history-of-taekwondo/` (23k impressions, 0.26% CTR, position 5.4 for "when was taekwondo invented") restructured: question-matched title and H1, a quick-answer first paragraph, five question H2s, an FAQPage block whose answers appear on the page, and a soft CTA into /classes/.
- Home and Tiny Tigers titles/metas rewritten to the plan's copy; meta lengths trimmed site-wide to ≤155 and titles to ≤65.
- **`netlify.toml` created at the repository root** with the build command, the two 301s, the www→apex rule, immutable caching for `/_astro/` and `/fonts/`, and baseline security headers. Sitemap now excludes `/404` and the off-site `/schedule` stub.
- `public/llms.txt` added. Homepage "Latest Insights" cards were showing another post's image; fixed.
- Layout schema: postcode `0800` → `0875`, `hasMap` → the Google Business Profile, and `openingHoursSpecification` replaced with the real six-day timetable (it claimed Mon/Wed/Fri 17:30–20:00 and Sat 09:00–12:00).

## Adversarial QA round

Two independent read-only verifiers went over the build against the plan. Nine defects were confirmed and all nine were fixed before commit:

- The navbar and footer still linked to `/locations/rodney-north-west/` and `/locations/auckland-north-west/` — the two pages we deleted. Every page on the site carried two dead links. Removed.
- `/pricing/` emitted a second top-level `MartialArtsSchool` node. Both it and the global one now share `@id` `https://superiortkd.co.nz/#organization`, so Google reads one entity instead of two.
- The `/classes/` hub intro had dropped "sparring" from the approved copy. Restored.
- The `/locations/` hub was missing its schedule grid. Added.
- The visible breadcrumb on four class pages pointed "Classes" at `/classes/general/` while the JSON-LD pointed at `/classes/`. Both now point at `/classes/`.
- `/blog/world-taekwondo/` referenced `/images/kukkiwon.jpg`, which does not exist anywhere in the repo. The broken image was removed rather than substituted, since we have no Kukkiwon photo and labelling another photo as one would be a lie.
- `/pricing/` rendered its H1 as a small eyebrow above a much larger H2 — technically an H1, visually not the page heading. Hierarchy corrected.
- Three shortened meta descriptions had each dropped the "Olympian-led" differentiator. Restored within the 155-character limit.
- Internal links were inconsistent about trailing slashes across the nav, footer and article bodies. Normalised site-wide, including the generated `/blog/<slug>` links in `RelatedContent.astro`.

Final build state: 39 pages, 122 JSON-LD blocks all parsing, no page with duplicate BreadcrumbList, every breadcrumb item URL ending in a slash, every internal link resolving, no internal link missing a trailing slash, every title ≤65 and every meta ≤155 characters.

## Files touched

Created: `netlify.toml`, `public/llms.txt`, `src/data/schedule.ts`, `src/pages/classes/index.astro`, `src/pages/locations/index.astro`, this changelog.
Deleted (as data): `rodney-north-west` and `auckland-north-west` entries in `src/lib/locationData.ts`.
Modified: `astro.config.mjs`, `CLAUDE.md`, `public/_redirects`, `src/layouts/Layout.astro`, `src/lib/locationData.ts`, `src/pages/locations/[slug].astro`, `src/pages/{index,contact,pricing,about,gallery,grading,poomsae,competition}.astro`, all five `src/pages/classes/*.astro`, all 14 `src/pages/blog/*.astro`, and `src/components/{Hero,Navbar,Footer,ReadyToTrain,TrustBar,Olympian,Reviews,ScheduleGrid,RelatedContent,LatestNews}.astro`, `src/components/{ContactSection,PricingSection,CompetitionSection}.tsx`.

## Owner flags — please confirm

1. **Postcode 0875.** The site said 0800 (Helensville's NZ Post code); your Google profile and GymDesk say 0875. We used **0875** so the site matches Google, because NAP consistency is what local ranking keys on. Say the word if you want 0800 back.
2. **Tiny Tigers ages: GymDesk says 2–5, you said 4.** The timetable grid shows the GymDesk class name verbatim ("Little Superior Legends (ages 2–5)") because that is what people will see when they click through to book. All our own prose says "from age 4". If the real minimum is 2, we should change the GymDesk class name or the site copy so they agree — right now a parent of a 3-year-old gets two different answers.
3. **Andrea's Oceania Olympic Qualifier gold year.** The site said 2007 in one place and 2008 in two. Rather than guess we removed the year from the 2007 bullet. Tell us the right year and we'll put it back.
4. **Social URLs are still unverified.** Schema `sameAs` points at facebook.com/superiortkd and instagram.com/superiortkd; your Google profile shows the Facebook page as "Superior Taekwondo Academy NZ" (Parakai), and SERP research also turned up facebook.com/superiorfitnessnz. We left `sameAs` unchanged. Send the real Facebook, Instagram and TikTok URLs and we'll fix them.
5. **Extras: "$10 per poomsae session" and "$20 per tournament class".** We left them in body copy and kept them out of schema. Confirm whether they are real, and what the grading fee is.
6. **Timetable is a snapshot.** `src/data/schedule.ts` is the GymDesk week of 14–20 Sep 2026. If the timetable changes, that one file needs updating — tell us and it is a two-minute change.
7. **CLAUDE.md correction.** The repo rule said redirects go in `public/netlify.toml`. Netlify does not read that path; it reads `netlify.toml` at the repository root. Corrected in CLAUDE.md, and the file is now in the right place.

## Metric targets — re-check 2026-10-16

| Metric | Baseline (28d to 2026-09-18) | Target |
|---|---|---|
| Free-trial requests captured | 0 (form didn't submit) | ≥ 10 in 28 days (GoHighLevel) |
| "taekwondo auckland" clicks, 28d | 0 | ≥ 5 |
| /locations/auckland/ CTR | 0.29% | ≥ 1% |
| /pricing/ CTR | 1.3% | ≥ 3% |
| /blog/history-of-taekwondo/ CTR | 0.26% | ≥ 0.8% |
| /locations/kumeu/ | did not exist (404) | indexed, ≥ 20 impressions |
| Rich results | pass | pass, no duplicate-breadcrumb warnings |
| GEO score, home | 58 | ≥ 70 |

Site baseline for the round: 151 clicks / 20,338 impressions / 0.74% CTR / position 8.5 (28d); 462 clicks (90d); mobile 70%.

## Next round (deferred from plan §7)

Location-page depth (venue photos, coach block, age tiers), ActiveActivities / Auckland for Kids / TNZ listings (owner action), GBP posts cadence, replacing the three.js background with CSS (257 KB gzipped on 8 pages), RSS, and moving the blog to content collections.

## Lead verification (Fable, after orchestrator hand-off)
- Rebuilt: 39 pages, green. All eleven "must be 0" dist greps at zero; contact page carries the GoHighLevel form; /pricing/ has one H1; /classes/, /locations/, /locations/kumeu/ built; the two redirected location pages are gone and their 301s sit in both netlify.toml and _redirects; sitemap 36 URLs, no /404.
- Mobile (375px) review of /, /contact/, /classes/, /locations/kumeu/, /locations/huapai/ found three gaps the verifiers missed, fixed in commit 5796445: the shared location hero still said "Start Training / Contact Us" (now "Book a free trial / See class times"); the contact H1 was hidden behind a JS text-reveal and the form sat below the details card (now plain H1, form first); the chat bubble covered the hero's second button on load (loader now injected 8 s after load).
- Owner note: the GoHighLevel form's phone field shows a US placeholder "+1 (555) 000-0000"; set the form's default country to New Zealand in GoHighLevel.
