# Product Marketing Context — Superior Taekwondo

Client: Superior Taekwondo (superiortkd.co.nz). Single client; no other client's facts or copy may be used here.
Created 2026-09-18 from repo facts, live site, Search Console. Items marked **UNVERIFIED** must be confirmed by the owner before they ship.

## Business
- Trading name: Superior Taekwondo (schema alternateName "Superior Taekwondo Club"). Slogan: "Constructing Champions".
- Head coach / founder: Andrea Kilday. 3rd Dan, WT Level 2 coach, 2016 Rio Olympian (-49kg), Pacific Games gold 2015, Oceania Championships gold 2006/2012/2014. Verified via sameAs links (olympic.org.nz, taekwondodata.com, Wikipedia). **UNVERIFIED: Oceania Olympic Qualifier gold year, site says 2007 in one place and 2008 in two others.** Club founded 2016 (schema).
- Affiliation: World Taekwondo (WT); site claims Taekwondo New Zealand (TNZ) affiliation. **UNVERIFIED: TNZ club listing.**
- Venues: site says "Three locations": Helensville, Kaukapakapa, Waimauku. Only one street address anywhere: 94 Mill Road, Helensville 0800 (schema geo -36.6782, 174.4491). Competition team copy says "Kaukapakapa Hall". **UNVERIFIED: street addresses and days for Kaukapakapa and Waimauku venues.**
- Phone 027 520 1613 (+64275201613). Email superiorfitnessnz@gmail.com. Phone answered Mon–Fri 9–5 (contact FAQ).
- Class hours in schema: Mon/Wed/Fri 17:30–20:00, Sat 09:00–12:00. Unused ScheduleGrid component says Mon–Fri 16:00–19:45 age-banded, Sat 16:45–18:45. Competition copy says Wed 18:00–20:30 and Sat 09:30–11:30 at Kaukapakapa Hall. **UNVERIFIED: the real weekly timetable per venue.** Live schedule lives on GymDesk.
- Booking: GymDesk (superior-taekwondo.gymdesk.com) for signup/schedule/login. "Book a free trial" CTAs go to /contact, whose form is a mailto: link (no backend). LeadConnector chat widget site-wide. Google Analytics G-R20DXRB33V.
- Social: facebook.com/superiortkd, instagram.com/superiortkd in schema; SERP research also found facebook.com/superiorfitnessnz. **UNVERIFIED: real handles.**
- Google Business Profile: **UNVERIFIED everything** (name, rating, review count, categories, service area, one profile or three).

## Programmes and prices (from /pricing table, canonical)
| Plan | Price |
|---|---|
| 1 session/week | $30/wk + $25 signup |
| Unlimited | $40/wk + $25 signup |
| Siblings 2/3/4 | $55 / $70 / $80 / $90 per week tiers |
| Term (10 wk) 1 session/wk | $300 |
| Term unlimited | $400 |
| Concession card (10 sessions, 5 months) | $285 |
All plans: access to all locations. Programmes: Tiny Tigers (kids), General (teens/adults), Fitness, Poomsae, Competition Team; plus Grading, Guidelines, Tournaments pages.
Known contradictions to fix, not repeat: pricing FAQ schema says $39 / $285 / $350 / $265 where the table says $40 / $300 / $400 / $285; stray $27/wk on legacy /poomsae and /competition pages; "$10/session" on Poomsae section and "$20/class" on Tournaments section. **UNVERIFIED which extras are real.** Tiny Tigers minimum age: 4 (about, pricing schema) vs 5 (home FAQ, class page). **UNVERIFIED.**

## Service area
Location pages: helensville, kaukapakapa, waimauku (venues) + auckland, huapai, rodney-north-west, auckland-north-west (catchment pages, ~400–520 words each, all carrying the Helensville address). No /locations/ hub, no /locations/kumeu/ page although "taekwondo kumeu" is an open SERP. areaServed in schema: Helensville, Kaukapakapa, Waimauku, Huapai, Kumeu, Muriwai, Riverhead, Westgate, North West Auckland, Rodney.

## Ideal customer
Parents in North West Auckland / Rodney (Kumeū, Huapai, Helensville, Waimauku, Westgate, Massey) looking for a kids' martial-arts class with a credible coach, clear times, ages and prices; secondary: teens and adults wanting fitness or competition. 70% of search clicks are mobile.

## Positioning
"Train with an Olympian." Performance-driven WT club with Olympic-level coaching, three rural/NW venues, family pricing. Voice: confident, aspirational ("Unleash your potential", "Constructing champions"), story-led around Andrea's setback-to-Rio journey. Avoid unverifiable superlatives ("Auckland's top competition club" has no source).

## Proof
- Verifiable: Andrea's Olympic and Oceania record (sameAs links). 61 real gallery photos. Wall of Fame results (2025 Kukkiwon Cup gold, 10x TNZ national champion, "6x South Island champion") **UNVERIFIED sources**.
- Reviews: six hard-coded cards styled like Google reviews with "Local Guide" badges; two carry the developer's surname (Altus Snyman, Connor Snyman). No aggregateRating in schema (good). No link to the real Google profile. **Owner must supply the real GBP rating/count or these should be relabelled.**
- Hero video /videos/hero.mp4 is referenced but absent from public/ (404; poster shows instead).

## Primary conversion action
For cold local search: a free trial request (form or call). Currently the money pages only offer "Join Now" → GymDesk paid signup; free-trial CTAs exist only on /about and five blog posts; the contact form does not submit (mailto). Secondary: view schedule (off-site, http GymDesk link).

## Tech
Astro 5.18 static, React 19 islands (client:load on contact, pricing, gallery, grading, guidelines, tournaments), Tailwind 4, @astrojs/sitemap (35 URLs, excludes legacy /poomsae, /competition), Netlify (public/_redirects only: www→apex; no netlify.toml). three.js background lazy-loaded after 8 s on desktop (home + 7 location heroes). framer-motion in several islands. Redirects: http→https and slash normalisation work (301). Sitemap submitted to GSC 2026-09-18 (none before). No llms.txt.

## Search Console baseline (sc-domain:superiortkd.co.nz)
28 days to 2026-09-18: 151 clicks / 20,338 impressions / 0.74% CTR / pos 8.5. 90 days: 462 clicks; mobile 70%. Brand "superior taekwondo" 120 clicks pos 2.0. Money terms: "taekwondo auckland" 425 imp pos 9.6 (clicks 4→0 last month), "taekwondo near me" 52 imp pos 12.7, "taekwondo west auckland" pos 3.2, "adult taekwondo" pos 7.7, "andrea kilday" 52 imp. Informational: /blog/history-of-taekwondo/ 23k imp 0.26% CTR (mostly Indonesian and generic "when was taekwondo invented" pos 5.4); /blog/olympic-taekwondo/ 14k imp; /locations/auckland/ 5.5k imp 0.29% CTR (ranks for bare "taekwondo"). Best local page: /locations/huapai/ 22 clicks 3.5% CTR. /pricing/ pos 5.3. GEO scores: home 58, history post 61.
