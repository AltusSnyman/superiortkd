# 2026-09-21 — Keyword research (DataForSEO + Search Console) and CTR fixes

**What:** Vendored the DataForSEO skill project-locally (`.claude/skills/dataforseo`, client patched to read `.env`, outputs in `tools/dataforseo/outputs/`, gitignored). Sonnet analyst pulled 90-day Search Console data (query, page, query+page), NZ volumes for 130 taekwondo/martial-arts × place terms, 300 keyword ideas, ranked keywords for superiortkd.co.nz and three competing clubs, six Auckland SERPs with People Also Ask, map packs at Helensville / Kumeū / Hobsonville, and 12-month Trends. Cost US$0.24. Report: `tools/dataforseo/reports/2026-09-21-tkd-keywords.md`.

**Findings:** "taekwondo" 3,600/mo NZ, "taekwondo near me" 390, "taekwondo auckland" 260, "martial arts auckland" 210; every town-level term is 0. No undiscovered taekwondo-Auckland keywords. The Auckland location page: 5,572 impressions / 15 clicks (0.27% CTR) at position 8.5, the one commercial page leaking clicks. Map pack: 1st–2nd in Helensville, absent in Kumeū and Hobsonville (GBP/citations, not content). PAA unanswered on-site: "what age is best to start taekwondo?", "taekwondo vs karate". February is the enrolment window.

**Built (Sonnet + Haiku):** new title and description on `/locations/auckland/`, FAQ (visible + FAQPage) for the two PAA questions on the Auckland page and the home page, tightened titles on four informational posts and the contact page, `dateModified` refreshed.

**Not built, on purpose:** no Hobsonville or further location pages (zero volume, no map-pack presence, repeats the doorway pattern removed in round 1).

**Owner / Altus:** Google Business Profile service area and categories to cover Kumeū and Hobsonville; ask Kumeū families for reviews; two citations (Localist, Neighbourly).

**Targets:** `/locations/auckland/` CTR from 0.27% toward 1%+ at the same position; the two FAQ questions appearing as PAA/snippet results. **Re-check:** 2026-10-16 (existing date) and 2026-10-21 for this entry.
