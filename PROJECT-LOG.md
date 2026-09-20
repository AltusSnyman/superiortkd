# Superior Taekwondo — project log

Live: https://superiortkd.co.nz · Repo that deploys: github.com/AltusSnyman/superiortkd `main` (Netlify; pushable with the `gh` login) · Local folder: /Volumes/KINGSTON/projects/superiortkd-upgrade.
Owner facts: one dojang, 94 Mill Road, Helensville 0875 · 027 520 1613 · timetable = GymDesk (superior-taekwondo.gymdesk.com/schedule) · Tiny Tigers from age 4 (GymDesk still says "ages 2–5", unresolved) · Google "Superior Taekwondo" 5.0 from 23 reviews · contact form = GoHighLevel embed · reviews = Reputation widget.

## Done
| Date | Round | What | Result |
|---|---|---|---|
| 2026-09-18 | Tooling | Same kit as Hair By Melissa (`tools/`, `.claude/`, `.mcp.json`, `CLAUDE.md` rules, `changelog/`), agent prompts scoped to this client | |
| 2026-09-19 | Round 1 "trial and truth" | GoHighLevel free-trial form replaces a mailto form; "Book a free trial" primary everywhere; real timetable on site; one-venue truth (pricing FAQ, ages, postcode, hours, reviews line, badge); pricing H1; honest Auckland page; new Kumeū page, /classes/ and /locations/ hubs; duplicate schema removed; netlify.toml; llms.txt; two overlap pages 301'd | Live as 11d27d6 · GEO home 58 → 68 |
| 2026-09-19 | Round 2 "depth and proof" | Class finder by age; Reputation reviews widget; location pages with real photos, drive times, FAQs; three local posts with Higgsfield heroes; three.js removed (JS 1.29 MB → 396 KB, home/location pages ship no island JS); `npm run schedule:fetch` / `schedule:check`; GA4 events free_trial_click / gymdesk_click / phone_click | Live as af7464f · GEO home 68, Kumeū 64 |
| 2026-09-18 | Search Console | sitemap-index.xml submitted (never had been) | |
| Keywords + CTR (2026-09-21) | DataForSEO skill vendored; keyword report `tools/dataforseo/reports/2026-09-21-tkd-keywords.md`; Auckland page title/description + PAA FAQs (best age, TKD vs karate) on home and Auckland; four post titles + contact title tightened | Branch growth/keywords-2026-09-21, awaiting push |

## Where things are
- Plans: `plan.md` (round 1, §2b = confirmed facts), `plan-round2.md`; client facts `.agents/product-marketing-context.md`; `changelog/` entries; reports in `tools/geo-optimizer/reports/`, `tools/claude-seo/reports/`.
- Data: `src/data/schedule.ts` (generated from GymDesk; refresh with `npm run schedule:fetch`), `src/data/ageTiers.ts` (class finder rows), `src/lib/locationData.ts` (location pages).
- Photos: `public/images/dojang/` (WebP 480/960/1600) and `src/assets/dojang/` originals. Generated blog heroes: `public/images/blog/*-hero-*.webp` (Higgsfield, no people, no text).
- Redirects: root `netlify.toml` and `public/_redirects` (keep both in sync).
- Preview: `.claude/launch.json` (port 4323).

## Baseline to beat (Search Console, 28 days to 2026-09-18)
151 clicks · 20,338 impressions · 0.74% CTR · position 8.5 · "taekwondo auckland" position 9.6 with 0 clicks last month · /locations/auckland/ CTR 0.29% · /pricing/ CTR 1.3%. Most impressions are global informational (history post); the money is local.

## To do later
- **Owner:** claim ActiveActivities (Auckland taekwondo page and Kumeū sports page), Auckland for Kids, Taekwondo NZ club list; set the GoHighLevel form's default country to NZ; resolve "ages 2–5" vs "from age 4" at source; confirm Facebook/Instagram URLs and the Oceania qualifier gold year.
- **Next build:** BlogPosting schema on /blog/wt-vs-itf-taekwondo/; definition-style opening paragraphs on home and location pages (GEO); RSS; blog to content collections; refresh the timetable each term with `npm run schedule:fetch`.
- **Re-check 2026-10-16:** GA4 event counts (trial requests are the metric), Search Console vs baseline, Core Web Vitals after the three.js removal, GEO re-audit.
