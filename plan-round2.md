# Growth plan — Superior Taekwondo, round 2 ("depth and proof")

Date: 2026-09-19 · Planner: Fable 5.1 · Orchestrator: Opus 5 · Builders: Sonnet 5 · Mechanical: Haiku 4.5
Approved by the owner 2026-09-19 ("build out the rest"). Branch: `growth/depth-and-proof-2026-09-19` from `main` (11d27d6 + docs). No push without the owner's word.
Round 1 facts still apply (plan.md §2b): one dojang at 94 Mill Road, Helensville 0875; timetable in `src/data/schedule.ts`; Tiny Tigers from age 4; GBP 5.0 from 23 reviews; phone 027 520 1613.

## Assets supplied by the owner (already in the repo)
- Real photos, converted to WebP at 480/960/1600 px in `public/images/dojang/`: `dojang-exterior-*.webp` (portrait, the building and signage on Mill Road), `dojang-interior-1-*.webp` and `dojang-interior-2-*.webp` (landscape, the training floor). Originals in `src/assets/dojang/*.jpg` for `astro:assets`. Use real photos wherever the subject is the dojang.
- Reviews widget (GoHighLevel Reputation): `<script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script><iframe class='lc_reviews_widget' src='https://reputationhub.site/reputation/widgets/review_widget/R0FTW4WZOG3VrfVu0487?widgetId=6aadb7b387cf13a945b152ef' frameborder='0' scrolling='no' style='min-width: 100%; width: 100%;'></iframe>`
- Generated images: Higgsfield CLI (`higgsfield generate create nano_banana_pro --prompt "..." --aspect_ratio 16:9 --resolution 2k --wait --json`, 2 credits each; result is `result_url` PNG ~2752×1536). Rules: **no people** (no invented students or coaches), no text/logos, editorial-realistic, NZ-neutral. Convert with sharp to WebP 1600/800 px, quality 82, into `public/images/blog/` or `public/images/illustrations/`. Never present a generated image as the real dojang; generated images are for blog heroes and abstract section art only. Alt text describes the scene honestly.

## Tasks

| # | Task | Files | Owner |
|---|---|---|---|
| R1 | **"Which class for my child" table** component: age → class (GymDesk name) → days/times → what happens in class → price line. Data from `src/data/schedule.ts` plus a small `src/data/ageTiers.ts`. Rendered on /classes/tiny-tigers/, /classes/, every location page and the homepage under the schedule. | `src/data/ageTiers.ts` (new), `src/components/ClassFinder.astro` (new), `src/pages/classes/tiny-tigers.astro`, `src/pages/classes/index.astro`, `src/pages/index.astro` (insert only) | builder 1 |
| R2 | **Reviews**: replace the six hard-coded cards in `Reviews.astro` with the owner's Reputation widget, loaded when the section scrolls into view (IntersectionObserver injects the script; iframe present in HTML with `loading="lazy"`). Keep the heading and the "5.0 from 23 reviews on Google" line + profile link above the widget. | `src/components/Reviews.astro` | builder 2 |
| R3 | **Location pages made real**: each of auckland, helensville, huapai, kaukapakapa, kumeu, waimauku gets: drive time and route from that place to 94 Mill Road (use the ranges in §Copy; no invented minutes beyond them), the exterior photo (with `astro:assets`, real alt), "classes that suit families from [place]" (weekday 4:00pm kids' blocks, Sat morning), the ClassFinder table, three local parent FAQs (from §Copy), the interior photo lower down. Remove remaining template filler ("City of Sails", weather-impact paragraphs, boardrooms). Target 700–900 genuine words per page. | `src/lib/locationData.ts`, `src/pages/locations/[slug].astro`, `src/pages/locations/index.astro` (add exterior photo + ClassFinder) | builder 3 |
| R4 | **Local content cluster**, three new posts (drafted by Sonnet from the briefs in §Copy, facts only from this plan and round-1 plan, 900–1,200 words each, question H2s, FAQ schema, BlogPosting schema with correct trailing-slash @id, one soft CTA to /contact/#trial and one link to /classes/): `/blog/after-school-activities-kumeu/`, `/blog/kids-martial-arts-west-auckland/`, `/blog/womens-self-defence-classes-auckland/`. Each gets a Higgsfield hero (prompts in §Images). Add all three to `src/pages/blog/index.astro` listing and `LatestNews.astro` (replace the three current cards). | `src/pages/blog/*.astro` (3 new), `src/pages/blog/index.astro`, `src/components/LatestNews.astro`, `public/images/blog/` | builder 4 (posts), builder 5 (images) |
| R5 | **Performance**: delete the three.js background (`LazyThreeBackground.jsx`, `ThreeBackground.jsx`, the `client:only` usages in `Hero.astro` and `LocationHero.astro`), replace with a CSS radial-gradient + subtle animated glow (pure CSS, `prefers-reduced-motion` respected). Remove `three`, `@react-three/fiber`, `@react-three/drei` from package.json (`npm uninstall`). Change `client:load` to `client:visible` on GallerySection, GuidelinesSection, TournamentsSection, GradingSection, PoomsaeSection, CompetitionSection; keep PricingSection and ContactSection on `client:load` (above the fold). | `src/components/Hero.astro`, `LocationHero.astro`, delete the two three files, `package.json`, the six page files | builder 6 |
| R6 | **Timetable automation**: `scripts/fetch-schedule.mjs` that fetches https://superior-taekwondo.gymdesk.com/schedule, parses the class blocks (name, day, start, end, instructor) exactly as the current `schedule.ts` shape, and rewrites `src/data/schedule.ts` with a header comment "generated <date> from GymDesk". Add `"prebuild": "node scripts/fetch-schedule.mjs || echo 'schedule fetch failed, keeping snapshot'"` to package.json so a fetch failure never breaks the build. Verify the generated file equals the round-1 snapshot for the same week. | `scripts/fetch-schedule.mjs` (new), `package.json`, `src/data/schedule.ts` | builder 7 |
| R7 | **Measurement**: GA4 events without new libraries: `gtag('event','free_trial_click')` on every /contact/#trial link, `gtag('event','gymdesk_click')` on GymDesk links, `gtag('event','phone_click')` on tel: links, via one small inline delegated click listener in Layout.astro (`is:inline`, no framework). Document the three event names in the changelog for the October check. | `src/layouts/Layout.astro` | builder 8 |
| R8 | Haiku pass after build: titles ≤65, metas ≤155, every new image has alt text, every new internal link resolves, llms.txt updated with the three posts and the class finder. | — | haiku |

## Copy (Lead-written; paste verbatim)

**ClassFinder rows (age → GymDesk class → days → price line):**
- `4–5 years` → `Little Superior Legends` → `Mon, Tue, Wed 4:00–4:40pm` → `40 minutes of games, balance and listening skills. From $30 a week.`
- `6–11 years` → `Youth Superior Legends (all belts)` → `Mon–Thu 4:45–5:30pm; sparring Thu 4:00–4:45pm` → `Technique, fitness and confidence. From $30 a week, unlimited $40.`
- `12 years and up` → `Cadets, Juniors and Seniors (all belts)` → `Tue and Thu 5:30–6:30pm; sparring Thu 6:30–8:00pm` → `Teens train together on the full WT syllabus. Unlimited $40 a week.`
- `Adults` → `Adults Taekwondo Class` → `Tue 9:00–10:00am; plus any 12+ class` → `Fitness, self-defence and belts at your pace. From $30 a week.`
- `Whole family` → `Superior Family Class` → `Fri 4:30–5:30pm` → `Parents and kids on the mat together, all ages and belts.`
- `Want to compete?` → `Superior Performance Pathway, Development Squad` → `Mon 5:30–7:30pm, Wed 6:00–8:00pm, Sat 10:15am–12:45pm` → `By invitation after your first term. Ask Andrea.`
ClassFinder heading: `Which class is right for you?` · sub-line: `Every class runs at 94 Mill Road, Helensville. Your first one is free.`

**Drive-time lines (use these ranges, nothing more precise):**
- Kumeū / Huapai: `about 20 minutes up SH16`
- Waimauku: `about 10 minutes up SH16`
- Kaukapakapa: `about 15 minutes down the Kaipara Coast Highway`
- Helensville: `in town, a few minutes from Commercial Road`
- Auckland (city/west): `35 to 55 minutes north-west of the city on SH16, depending on where you start`

**Location-page parent FAQs (same three on every location page, place name substituted):**
- `How far is the dojang from [place]?` → `[drive-time line]. We're at 94 Mill Road, Helensville, with parking at the door.`
- `Which class should my child start in?` → `Ages 4 to 5 start in Little Superior Legends, 6 to 11 in Youth Superior Legends, and 12 and up train with the Cadets, Juniors and Seniors. The first class is free, so come and try.`
- `Do we have to buy a uniform before the trial?` → `No. Comfortable sports clothes and a water bottle are all you need for the first class. Uniforms are arranged after you join.`

**Reviews section heading:** `What families say` · line under it: `5.0 from 23 reviews on Google` (linked to the profile).

**Blog briefs (Sonnet drafts; facts only from this document; NZ English; no invented statistics, no named children):**
1. `/blog/after-school-activities-kumeu/` · Title `After-School Activities in Kumeū: Is Taekwondo Right for Your Child?` · Meta `Weighing after-school options in Kumeū and Huapai? What Taekwondo gives kids from age 4, what a week looks like, and how the Helensville dojang fits a school run.` · H2s: What parents in Kumeū are usually looking for · What a Taekwondo class actually does for a 6-year-old · A typical week for a Kumeū family (use the 4:00pm and 4:45pm weekday blocks, ~20 min drive) · What it costs (from the price table) · How to try it for free · FAQ (3).
2. `/blog/kids-martial-arts-west-auckland/` · Title `Kids' Martial Arts in West Auckland: How to Choose a Club` · Meta `Karate, Taekwondo or MMA for your child in West Auckland? A parent's guide to what each teaches, what to look for in a coach, and questions to ask before you join.` · H2s: The three main options and what they teach · What to look for in the coach (credentials, WT affiliation, Olympic experience as one example, not a claim about others) · Class sizes, ages and belts · Costs and trial policies to compare · Questions to ask on your first visit · FAQ (3). Mention Superior Taekwondo once as the Helensville option; do not disparage named clubs.
3. `/blog/womens-self-defence-classes-auckland/` · Title `Women's Self-Defence Classes in Auckland: What Actually Works` · Meta `Looking for women's self-defence in Auckland? Why regular training beats a one-off workshop, what Taekwondo teaches that transfers, and how to start at any fitness level.` · H2s: One-off workshop or regular training? · What transfers from Taekwondo to real situations (distance, kicks, awareness; no fear-mongering) · Starting at any fitness level (Adults class Tue 9am, 12+ evening classes) · Training with other women and families · Your first class is free · FAQ (3).

## Images (Higgsfield, builder 5; 6 credits total)
- after-school post hero: `Photo of a quiet suburban New Zealand street at 3:30pm, school bags on a porch bench, afternoon light, no people, no text. Editorial, realistic.` (16:9)
- kids martial arts post hero: `Close-up photo of a row of coloured martial-arts belts, white to black, folded on a wooden bench in a bright training hall, no people, no text. Editorial, realistic.` (16:9)
- women's self-defence post hero: `Photo of a pair of red kick pads and a water bottle on a blue mat at the edge of an empty training hall, morning light, no people, no text. Editorial, realistic.` (16:9)
Each: download `result_url`, sharp → `public/images/blog/<slug>-hero-1600.webp` and `-800.webp` (quality 82). Alt text = a plain description of the scene.

## Success metrics (add to the 2026-10-16 check)
Free-trial clicks and phone clicks in GA4 (new events); /locations/kumeu/ and the three posts indexed with impressions; /locations/auckland/ CTR ≥1%; homepage LCP/CLS in Search Console Core Web Vitals report improving after the three.js removal; GEO home ≥72.
