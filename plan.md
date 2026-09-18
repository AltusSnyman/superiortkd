# Growth plan — Superior Taekwondo, round 1

Date: 2026-09-18 · Planner: Fable 5.1 · Orchestrator: Opus 5 · Builders: Sonnet 5 · Mechanical: Haiku 4.5
Job type: A (optimise existing site). Repo = origin `AltusSnyman/superiortkd` main, Netlify. Branch: `growth/trial-and-truth-2026-09-18`. No push without the owner's word.
Sources: Search Console (`gsc` MCP), five Sonnet reports (repo context, technical, CRO, SERP, local), geo-optimizer audits (home 58, history post 61).

---

## 1. What the data says

| Signal | Value | Read |
|---|---|---|
| Site, 28d | 151 clicks / 20,338 imp / 0.74% CTR / pos 8.5 | Impressions are inflated by two global informational posts |
| Brand "superior taekwondo" | 120 of 462 clicks (90d), pos 2.0 | Brand searchers are evaluating; trust and clarity on the homepage matter most |
| "taekwondo auckland" | 425 imp, pos 9.6, clicks 4 → 0 last month | The money term is slipping; the page Google shows for it is a doorway |
| "taekwondo west auckland" | pos 3.2 | Best local position; protect |
| "taekwondo kumeu" / "huapai" | open SERP, no /locations/kumeu/ page (404) | Cheapest new local win |
| /locations/huapai/ | 22 clicks, 3.5% CTR | Best converter of local intent; template for the rest |
| /locations/auckland/ | 5,524 imp, 0.29% CTR, ranks for bare "taekwondo" | Honest rewrite, not deletion |
| /blog/history-of-taekwondo/ | 23k imp, 0.26% CTR; "when was taekwondo invented" pos 5.4 | Title is not question-matched; cheap CTR fix, low commercial value |
| Mobile | 70% of clicks | Every conversion change judged at phone width |

## 2. What is broken (evidence in the reports under tools/*/reports and the context file)

**Conversion**
- The contact form is a `mailto:` link, not a form. Nothing is captured; phones without a mail app lose the message.
- No page shows class times. `ScheduleGrid.astro` exists and is imported nowhere. Every "Schedule" link leaves the site to GymDesk over plain http.
- "Book a free trial" exists only on /about and five blog posts. Home, pricing, classes and locations offer only "Join now" into paid signup.
- Hero H1 "Unleash Your Potential" carries no service, place or differentiator.

**Truth**
- Pricing FAQ schema quotes $39 / $285 / $350 / $265 where the table says $40 / $300 / $400 / $285. Legacy $27/wk on /poomsae and /competition; "$10/session" and "$20/class" extras elsewhere.
- Tiny Tigers minimum age is 4 in two places and 5 in two others.
- Andrea's Oceania qualifier gold: 2007 in one place, 2008 in two.
- Six review cards styled as Google reviews with "Local Guide" badges; two carry the developer's surname; no link to a real profile.
- "Auckland's Top Competition Club" badge has no source.
- Hero video `/videos/hero.mp4` 404s in production.

**Technical**
- /pricing/ has no H1. Home meta description 180 chars; Tiny Tigers title 69, description 190.
- 13 blog posts emit two BreadcrumbLists each; every BlogPosting `@id`, class and blog breadcrumb self-URL and Offer `url` lacks the trailing slash the canonical has.
- Class-page breadcrumbs link to /classes/, which 404s.
- Location pages emit a second MartialArtsSchool block.
- No netlify.toml; only a www rule in `_redirects`. Sitemap was never submitted (done today). No llms.txt.
- Homepage "Latest Insights" cards show another post's image.
- Redirects (http, www, trailing slash) are correct; the stale URLs in Search Console are index lag.

## 2b. Confirmed facts from the owner and Google (2026-09-18) — these override every default and every mention of "three venues" below

- **One venue only now:** 94 Mill Road, Helensville. Postcode: the owner uses **0875** on Google and GymDesk; the site says 0800 (Helensville's NZ Post code). Use **0875** on the site to match the Google profile, and flag the choice in the changelog. Every "three locations / Kaukapakapa / Waimauku venue" claim on the site (about page "Three Locations. One Standard.", pricing "access to all locations", contact "our Helensville, Kaukapakapa and Waimauku dojangs", location pages, schema areaServed wording) becomes: one dojang in Helensville serving North West Auckland. Kaukapakapa and Waimauku stay as *catchment* pages (people who live there), not venues.
- **Timetable = GymDesk** (https://superior-taekwondo.gymdesk.com/schedule). Week of 14–20 Sep 2026, instructor Andrea throughout; use these class names verbatim in the schedule grid:
  - Mon 4:00–4:40pm Little Superior Legends (ages 2–5) · 4:45–5:30pm Youth Superior Legends (ages 6–11, all belts) · 5:30–7:30pm Superior Performance Pathway, Development Squad
  - Tue 9:00–10:00am Adults Taekwondo Class · 4:00–4:40pm Little Superior Legends (2–5) · 4:45–5:30pm Youth Superior Legends (6–11) · 5:30–6:30pm Cadets, Juniors, Senior Superior Legends (12+, all belts) · 6:30–7:00pm Poomsae Class · 7:00–8:15pm Superior PSS Electronic Sparring Class (Daedo Gen 3)
  - Wed 4:00–4:40pm Little Superior Legends (2–5) · 4:45–5:30pm Youth Superior Legends (6–11) · 5:30–6:00pm Superior Fitness Kids/Teens Class · 6:00–8:00pm Superior Performance Pathway, Development Squad
  - Thu 4:00–4:45pm Sparring Class, Youth Superior Legends (ages 5–11) · 4:45–5:30pm Youth Superior Legends (6–11) · 5:30–6:30pm Cadets, Juniors, Senior Superior Legends (12+) · 6:30–8:00pm Superior Sparring Class (12+, all belts)
  - Fri 4:30–5:30pm Superior Family Class (all ages and belts) · 5:30–6:30pm Superior Poomsae/Sparring Classes (all ages) · 6:30–8:00pm Superior PSS Electronic Sparring Class (Daedo Gen 3)
  - Sat 9:15–10:00am Superior Fitness Circuit Class · 10:15am–12:45pm Superior Performance Pathway, Development Squad
  - Sun 10:00am–4:00pm Private Coaching Sessions (four 90-minute slots, bookable)
  - Non-member casual class $30 (GymDesk). Schema `openingHoursSpecification` becomes: Mon 16:00–19:30, Tue 09:00–10:00 and 16:00–20:15, Wed 16:00–20:00, Thu 16:00–20:00, Fri 16:30–20:00, Sat 09:15–12:45, Sun 10:00–16:00.
- **Tiny Tigers starts at age 4** (owner). GymDesk calls the class "Little Superior Legends, ages 2–5". Site copy: "Tiny Tigers (Little Superior Legends on the timetable), from age 4". Flag the 2–5 vs 4 difference to the owner in the changelog; do not print "2" anywhere on the site.
- **Google Business Profile:** name "Superior Taekwondo", 5.0 from **23 Google reviews**, category Martial arts club, phone 027 520 1613, address 94 Mill Road Helensville 0875, active posts, profiles Instagram/Facebook/TikTok. Link: https://share.google/PTOQRY4CylXyyIwDT. So: keep the review cards but replace the fake "Local Guide · N reviews" badge styling with one honest line and link: "5.0 from 23 reviews on Google" → the profile link. Add `hasMap` = profile link. Still no `aggregateRating` markup (self-serving).
- **Contact form = GoHighLevel embed** (replaces the Netlify Forms idea in A1). Use exactly, inside a container div with a fixed min-height (e.g. 720px) so the iframe renders before its script resizes it:
  `<iframe src="https://api.leadconnectorhq.com/widget/form/L3HyiQ9aU9bX3S5fOq2k" style="width:100%;height:100%;border:none;border-radius:8px" id="inline-L3HyiQ9aU9bX3S5fOq2k" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="QUESTION" data-height="undefined" data-layout-iframe-id="inline-L3HyiQ9aU9bX3S5fOq2k" data-form-id="L3HyiQ9aU9bX3S5fOq2k" data-cookie-consent="true" data-cookie-consent-provider="auto" title="Free trial and enquiry form"></iframe>` followed by `<script src="https://link.msgsndr.com/js/form_embed.js"></script>` (loaded once, on /contact/ only; `is:inline`). Give the section `id="trial"`. Keep a visible tel: link and email under it as a fallback. No /contact/thanks/ page is needed (GHL handles confirmation).
- Facebook page on Google appears as "Superior Taekwondo Academy NZ" (Parakai). Exact URLs still unverified; leave `sameAs` unchanged.

## 3. Owner questions (batched; defaults apply if unanswered) — Q1, Q2, Q3, Q5, Q8 are answered in §2b

| # | Question | Default |
|---|---|---|
| Q1 | The real weekly timetable per venue. Is the GymDesk schedule page the source of truth? | Builder scrapes the public GymDesk schedule into `src/data/schedule.ts`; owner reviews before push |
| Q2 | Street addresses for the Kaukapakapa and Waimauku venues (Kaukapakapa Hall? which Waimauku venue?) | Show Helensville address; list the other two by venue name only, no address, no map |
| Q3 | Tiny Tigers minimum age: 4 or 5? | 5 (the class page's own claim) |
| Q4 | Which extras are real: $10 poomsae session, $20 tournament class, grading fee amount? | Remove the $27/wk legacy prices; keep the extras as written but out of schema |
| Q5 | Google Business Profile link, rating, review count; one profile or one per venue? | Keep review cards, drop the "Local Guide" badge styling, add nothing; no aggregateRating |
| Q6 | Real Facebook / Instagram URLs (superiortkd vs superiorfitnessnz)? | Keep schema `sameAs` as is; footer unchanged |
| Q7 | Oceania Olympic Qualifier gold: 2007 or 2008? | Remove the year from the bullet that says 2007; keep "Oceania Olympic Qualifier gold medallist (2016)" plus the earlier one without a year |
| Q8 | Which email should receive free-trial requests? | Netlify Forms captures everything in the Netlify dashboard; notification email set there by the owner |
| Q9 | Source for "6x South Island Champion" and "Auckland's Top Competition Club"? | Keep the first (personal record), replace the badge with "Olympian-coached competition team" |

## 4. Page map and keyword → URL

Titles ≤60 chars where possible; Layout does not append a suffix, so titles are complete as written.

| URL | Primary keyword | Intent | New `<title>` | New H1 |
|---|---|---|---|---|
| / | taekwondo north west auckland | Brand + local | `Taekwondo Classes North West Auckland \| Superior Taekwondo` | `Taekwondo for kids, teens and adults, coached by an Olympian` |
| /classes/tiny-tigers/ | kids taekwondo classes auckland | Local | `Kids Taekwondo Classes North West Auckland \| Superior Taekwondo` | keep "Tiny Tigers" with sub-line "Kids' Taekwondo from age 4" |
| /classes/general/ | adult taekwondo classes auckland | Local | keep | keep |
| /pricing/ | taekwondo class prices auckland | Commercial | keep | `Memberships and pricing` (new H1; current H2 stays as H2) |
| /locations/auckland/ | taekwondo auckland | Local | `Taekwondo Classes in Auckland's North West \| Superior Taekwondo` | `Taekwondo in Auckland: our dojang in the north-west` |
| /locations/kumeu/ (new) | taekwondo kumeu | Local | `Taekwondo Classes near Kumeū \| Superior Taekwondo` | `Taekwondo classes for Kumeū families` |
| /locations/huapai/ | taekwondo huapai | Local | keep | keep |
| /locations/ (new hub) | — | Nav | `Our Taekwondo Venues, North West Auckland` | `Where we train` |
| /classes/ (new hub) | taekwondo classes | Nav | `Taekwondo Classes: Kids, Teens, Adults, Competition` | `Our classes` |
| /blog/history-of-taekwondo/ | when was taekwondo invented | Informational | `When Was Taekwondo Invented? A Short History \| Superior Taekwondo` | `When was Taekwondo invented? A short history` |
| /contact/ | taekwondo near me | Transactional | keep | `Book a free trial class` |

Cannibalisation: /locations/rodney-north-west/ and /locations/auckland-north-west/ overlap /locations/auckland/ and each other with ~440 words of template copy. **301 both to /locations/auckland/** (2 and 0 clicks in 90 days), in `netlify.toml` and `_redirects` in the same commit.

## 5. Internal links

| From | To | Anchor |
|---|---|---|
| Home hero | /contact/#trial | "Book a free trial" |
| Home hero (secondary) | #schedule | "See class times" |
| Every location page | /contact/#trial ; /classes/ ; /pricing/ | "Book a free trial" ; "Classes" ; "Prices" |
| /classes/* | /contact/#trial ; /pricing/ ; nearest venue page | "Book a free trial" ; "See prices" |
| /pricing/ cards | /contact/#trial (primary) ; GymDesk signup (secondary) | "Book a free trial first" ; "Join now" |
| History post (after quick answer) | /classes/ | "our classes in North West Auckland" |
| Navbar | /classes/, /locations/, /pricing/, /contact/#trial | "Classes", "Venues", "Pricing", "Free trial" |

## 6. Schema plan

| Page | Change |
|---|---|
| Layout (global) | Keep MartialArtsSchool; add `hasMap` once Q5 known; keep no ratings. Add `<link rel="alternate" application/rss+xml>` only if an RSS feed is added (deferred) |
| Location pages | Remove the page-level duplicate MartialArtsSchool; keep FAQPage + BreadcrumbList; fix `url` trailing slash |
| Blog posts (13) | Remove the inline BreadcrumbList script; keep the Layout one; fix `mainEntityOfPage.@id` trailing slash |
| Class pages (5) | Breadcrumb "Classes" → /classes/ (now exists); self-URL trailing slash |
| /pricing/ | FAQ answers equal the table; Offer `url` with trailing slash |
| /blog/history-of-taekwondo/ | FAQPage with the question H2s below; `dateModified` = ship date |
| /poomsae, /competition (legacy) | Remove Service price $27 |

## 7. Priority order

**This build (quick wins + plumbing):**
1. A1 Free-trial form on /contact/: the GoHighLevel embed from §2b replaces the mailto React island (ContactSection.tsx form part). Section id="trial". Fallback phone/email line. H1 per §8.
2. A2 "Book a free trial" as the primary CTA on home hero, pricing cards, all class pages, all location pages, navbar; "Join now" (GymDesk, https) secondary.
3. A3 Schedule on-site: `src/data/schedule.ts` typed from §2b verbatim, `ScheduleGrid` rendered on /classes/ hub, each class page (filtered to relevant classes), homepage section `#schedule`, and the /locations/ hub. Add a line "Timetable current as of 18 Sep 2026; live bookings on GymDesk" with the https link.
4. B1 Truth fixes: pricing FAQ numbers; Tiny Tigers age (Q3); Oceania year (Q7); badge reword (Q9); review cards de-Googled (Q5); legacy $27 removed; hero video element removed (poster stays); https on all GymDesk links.
5. C1 /pricing/ H1; home + Tiny Tigers title/meta; history post title, H1, quick answer, question H2s, FAQ sync.
6. C2 Schema cleanup per §6; /classes/ and /locations/ hubs; class breadcrumb fix.
7. C3 /locations/auckland/ honest rewrite; new /locations/kumeu/; 301s for the two overlap pages; single-venue block (94 Mill Road, Helensville 0875, Google map embed via `https://www.google.com/maps?q=Superior+Taekwondo,+94+Mill+Road,+Helensville&output=embed`, GymDesk directions text) on every location page; remove every "three locations / Kaukapakapa venue / Waimauku venue" claim site-wide (about, pricing, contact, location pages, FAQ schemas).
8. C4 `netlify.toml` (build, redirects mirrored from `_redirects`, cache/security headers), `llms.txt`, LatestNews thumbnails fixed.

**Next build:** location-page content depth (venue photos, coach block, age tiers per the SERP research), ActiveActivities / Auckland for Kids / TNZ listings (owner), GBP per venue, three.js background replaced with CSS (257 KB gz on 8 pages), RSS, content collections for blog.

## 8. Final copy (Lead-written; paste verbatim)

**Home title:** `Taekwondo Classes North West Auckland | Superior Taekwondo` (58)
**Home meta:** `Olympian-coached Taekwondo for kids from 4, teens and adults at our Helensville dojang, North West Auckland. Free trial class. Memberships from $30 a week.` (154)
**Home H1:** `Taekwondo for kids, teens and adults, coached by an Olympian`
**Home hero sub-line:** `One dojang at 94 Mill Road, Helensville, serving families across North West Auckland. Head coach Andrea Kilday competed at Rio 2016. Your first class is free.`
**Home hero buttons:** `Book a free trial` → /contact/#trial · `See class times` → #schedule
**Trust bar badge replacement:** `Olympian-coached competition team` (replaces "Auckland's Top Competition Club")

**Tiny Tigers title:** `Kids Taekwondo Classes North West Auckland | Superior Taekwondo` (63)
**Tiny Tigers meta:** `Tiny Tigers: kids' Taekwondo from age 4 at our Helensville dojang, North West Auckland. Focus, confidence and fitness with an Olympian-led team. Free first class.` (155)

**/pricing/ H1:** `Memberships and pricing`
**/pricing/ FAQ (replace the four wrong answers):** "Unlimited training is $40 a week plus a $25 sign-up fee." · "One session a week is $300 for a 10-week term." · "Unlimited sessions are $400 for a 10-week term." · "A 10-session concession card is $285 and lasts five months."

**/contact/ H1:** `Book a free trial class`
**Form intro:** `Tell us who the class is for and when suits, and we'll be in touch to book your free first session.`
**Form:** the GoHighLevel embed from §2b (fields are managed in GoHighLevel). Below it: `Prefer to talk? Call or text 027 520 1613, or email superiorfitnessnz@gmail.com.`

**/locations/auckland/ title:** `Taekwondo Classes in Auckland's North West | Superior Taekwondo` (63)
**/locations/auckland/ meta:** `Looking for Taekwondo in Auckland? Our dojang is in Helensville, north-west of the city on SH16, serving Kumeū, Huapai, Waimauku and beyond. Olympian coaching, free trial.` (155)
**/locations/auckland/ H1:** `Taekwondo in Auckland: our dojang in the north-west`
**/locations/auckland/ opening paragraph:** `We're not in the central city. Superior Taekwondo trains at one dojang at 94 Mill Road, Helensville, in Auckland's north-west up State Highway 16. Families come from Kumeū, Huapai, Waimauku, Kaukapakapa, Riverhead, Westgate and the Kaipara coast. Classes run for kids from age 4, teens and adults, six days a week, and every student is coached by a team led by 2016 Olympian Andrea Kilday. Your first class is free.`

**/locations/kumeu/ title:** `Taekwondo Classes near Kumeū | Superior Taekwondo` (50)
**/locations/kumeu/ meta:** `Taekwondo for Kumeū and Huapai families: kids from age 4, teens and adults. Our Helensville dojang is up SH16, with an Olympian-led team and a free trial class.` (152)
**/locations/kumeu/ H1:** `Taekwondo classes for Kumeū families`
**/locations/kumeu/ body (≈220 words):**
`Kumeū doesn't have its own dojang, but ours is a straightforward drive up State Highway 16 at 94 Mill Road, Helensville, with parking at the door. Kids' classes start at 4pm on weekdays, so families from Kumeū and Huapai can make it after school.`
`Superior Taekwondo is a World Taekwondo club led by Andrea Kilday, who represented New Zealand at the Rio 2016 Olympics. Kids start in Tiny Tigers from age 4, where the focus is listening, balance, confidence and having fun in a structured class. Teens and adults train in the General class, which mixes fitness, technique and self-defence, and students who want to compete can move into the Performance Pathway squad.`
`Memberships start at $30 a week for one class, or $40 a week for unlimited training, with sibling discounts for families. Your first class is free: come along, meet the coaches, and see if it fits.`
**/locations/kumeu/ FAQ:** `Where is the nearest class to Kumeū?` → `Our dojang is at 94 Mill Road, Helensville, up SH16 from Kumeū.` · `What age can my child start?` → `Tiny Tigers takes children from age 4. Teens and adults join the General class.` · `Do I need any gear for the free trial?` → `No. Wear comfortable sports clothes and bring water. Uniforms are arranged after you join.`

**/locations/ hub H1:** `Where we train, and who we serve` · intro: `One dojang at 94 Mill Road, Helensville. Families train with us from across North West Auckland; find your area below for drive times and class suggestions.`
**/classes/ hub H1:** `Our classes` · intro: `Kids from age 4, teens, adults, fitness, poomsae, sparring and a performance pathway squad. Your first class at any of them is free.`

**History post title:** `When Was Taekwondo Invented? A Short History | Superior Taekwondo` (65)
**History post H1:** `When was Taekwondo invented? A short history`
**Quick answer (first paragraph under the H1):** `Taekwondo got its name on 11 April 1955, when the heads of Korea's martial-arts schools agreed on a single name for the art they had been developing since the first kwans opened in Seoul in 1945. It became a full Olympic medal sport at Sydney 2000.`
**Question H2s, in order (existing content folded under them):** When was Taekwondo invented? · Where did Taekwondo come from? · Why was Taekwondo created? · When did Taekwondo join the Olympics? · How is Taekwondo different from karate?
**Soft CTA after the second H2:** `Curious to try it? Superior Taekwondo runs classes for kids, teens and adults in North West Auckland, and the first one is free. [See our classes](/classes/)`

**llms.txt:** builder generates from the sitemap, then the Lead edits before commit (venues, prices, programmes, Andrea's record, contact).

## 9. Effort and sequence

| Step | Owner | Model | Files | Parallel |
|---|---|---|---|---|
| A1 GHL form embed | builder 1 | sonnet | src/pages/contact.astro, src/components/ContactSection.tsx (form part only; keep the info/map block) | yes |
| A2 CTAs + navbar + https links | builder 2 | sonnet | Hero.astro, Navbar.astro, Footer.astro, ReadyToTrain.astro, PricingSection.tsx (buttons only), classes/*.astro (CTA blocks only), locations/[slug].astro (CTA block only) | yes |
| A3 schedule data + grid | builder 3 | sonnet | src/data/schedule.ts (new, from §2b), ScheduleGrid.astro, src/pages/classes/index.astro (new), index.astro (#schedule section), Layout.astro openingHoursSpecification | yes |
| B1 truth fixes | builder 4 | sonnet | pricing.astro (FAQ + schema + 'all locations' line), about.astro (three-locations section → one dojang; medal year), index.astro FAQ (age 4, one venue), classes/tiny-tigers.astro (age lines), Olympian.astro, TrustBar.astro, Reviews.astro (honest Google line + link), poomsae.astro, competition.astro, contact copy 'three dojangs' → one, Hero.astro (video element only; sequenced after A2), Layout.astro address/postcode 0875 + hasMap | after A2 on Hero.astro |
| C1 titles/metas/H1s + history post | builder 5 | sonnet | index.astro (title/meta), classes/tiny-tigers.astro (title/meta), PricingSection.tsx (H1), blog/history-of-taekwondo.astro | yes |
| C2 schema cleanup + hubs | builder 6 | sonnet | Layout.astro (breadcrumb only), 13 blog posts (schema blocks only), classes/*.astro (breadcrumb only), locations/[slug].astro (schema only), src/pages/locations/index.astro (new) | yes |
| C3 location content | builder 7 | sonnet | src/lib/locationData.ts (auckland rewrite, kumeu new), locations/[slug].astro (venue block) | after C2 on [slug].astro |
| C4 netlify.toml, llms.txt draft, LatestNews | Haiku | haiku | netlify.toml (new), public/llms.txt, LatestNews.astro | yes |
| Build, dist greps, two verifiers, changelog, commit | orchestrator | opus | — | last |

Cost shape: 1 Opus, up to 7 Sonnet builders + 2 Sonnet verifiers, 1 Haiku pass. Files are disjoint except Hero.astro and locations/[slug].astro, which are sequenced.

## 10. Success metrics (re-check 2026-10-16)

| Metric | Now | Target |
|---|---|---|
| Free-trial requests captured (Netlify Forms) | 0 (form doesn't submit) | ≥ 10 in 28 days |
| "taekwondo auckland" clicks, 28d | 0 | ≥ 5 |
| /locations/auckland/ CTR | 0.29% | ≥ 1% |
| /pricing/ CTR | 1.3% | ≥ 3% |
| /blog/history-of-taekwondo/ CTR | 0.26% | ≥ 0.8% |
| /locations/kumeu/ | none | indexed, ≥ 20 impressions |
| Rich results | pass | pass, no duplicate breadcrumb warnings |
| GEO score home | 58 | ≥ 70 |
