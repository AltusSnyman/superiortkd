# 2026-09-19 — Round 2: depth and proof

Branch `growth/depth-and-proof-2026-09-19` · Plan: `plan-round2.md` · Team: Fable planner → Opus orchestrator (lost to a network error at the last step; lead finished) → 8 Sonnet builders → Haiku pass → 2 Sonnet verifiers. Not pushed at time of writing.

## What changed
- **Class finder** (`src/components/ClassFinder.astro`, `src/data/ageTiers.ts`): age → GymDesk class → days/times → price line, on the homepage, /classes/, /classes/tiny-tigers/ and every location page.
- **Reviews**: the six hard-coded cards are gone; the owner's Reputation widget (`lc_reviews_widget`) loads when scrolled into view, under "What families say" and the "5.0 from 23 reviews on Google" link.
- **Location pages** (`src/lib/locationData.ts`, `locations/[slug].astro`, `locations/index.astro`): drive-time line per place, the real exterior and interior photos (WebP, responsive), classes that suit that catchment, three parent FAQs, template filler removed.
- **Three local posts**: /blog/after-school-activities-kumeu/, /blog/kids-martial-arts-west-auckland/, /blog/womens-self-defence-classes-auckland/ (900–950 words each, FAQ + BlogPosting schema, visible FAQ, one free-trial CTA). Heroes generated with Higgsfield (nano_banana_pro, no people, no text; the belts image was regenerated once), converted to WebP 1600/800. `BlogHero.astro` gained an `alt` prop. Blog index and homepage "Latest Insights" now show these three.
- **Performance**: three.js / react-three removed (packages uninstalled, `LazyThreeBackground.jsx` and `ThreeBackground.jsx` deleted, CSS glow with `prefers-reduced-motion`); gallery, guidelines, tournaments, grading, poomsae, competition islands hydrate on `client:visible`. JS in `dist/_astro`: ~1.29 MB before → 396 KB after; homepage and location pages load no island JS at all.
- **Timetable automation**: `scripts/fetch-schedule.mjs` reads GymDesk's schedule JSON, applies a documented DISPLAY_MAP / INSTRUCTOR_MAP and merges Sunday private slots; `src/data/schedule.ts` is now generated (19 Sep 2026). **Refresh is manual and deliberate:** `npm run schedule:fetch`; `npm run schedule:check` reports drift. No prebuild hook.
- **Measurement**: GA4 events via one inline delegated listener in `Layout.astro`: `free_trial_click`, `gymdesk_click`, `phone_click` (params link_url, link_text).
- Haiku pass: after-school post title/description trimmed (lead re-worded the title to "…Is Taekwondo a Good Fit?"); llms.txt gained a Guides section and the class-finder line.

## QA
- Lead dist checks: no react-three chunk; class finder on all target pages; widget present and "Snyman" absent; three posts + heroes + sitemap; every location page has the address, exterior photo and FAQs; no "City of Sails"/weather filler; GA4 events; all JSON-LD parses. Build 42 pages.
- Verifier 1 (copy/facts): all plan copy verbatim; prices/ages/times/drive-times trace to the plans. It flagged Andrea's 3rd Dan / WT Level 2 / 2015 Pacific Games / -49kg / founded 2016 as "not in the plan": these come from the client context file and the site's about page (sourced via Olympic NZ / taekwondodata links), so no change.
- Verifier 2 (build): 3,499 internal links and 125 image refs resolve; schema valid; sitemap 39 URLs; widget lazy-loads via IntersectionObserver; schedule:check clean.

## Owner notes / follow-ups
- `/blog/wt-vs-itf-taekwondo/` has no BlogPosting schema (pre-existing; next round).
- Higgsfield credits used this round: 8 (1 test, 3 heroes, 1 regeneration ×2 credits).
- Directory listings (ActiveActivities, Auckland for Kids, Taekwondo NZ) and the GymDesk "ages 2–5" vs "from age 4" wording remain owner tasks.

## Re-check 2026-10-16
GA4: free_trial_click / gymdesk_click / phone_click counts. GSC: /locations/kumeu/ and the three posts indexed; /locations/auckland/ CTR ≥1%; Core Web Vitals after the three.js removal. GEO home ≥72.
