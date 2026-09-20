# Superior Taekwondo — keyword & opportunity report

Date: 2026-09-21 · Researcher: Sonnet 5 · Read-only pass (site source untouched; outputs under `tools/dataforseo/`)

## Budget

DataForSEO spend: **$0.238 of $3.00 cap** (search volume $0.090, keyword ideas $0.048, 4× labs_ranked_keywords $0.056, 6× serp_google_organic $0.021, 6× serp_google_maps $0.012, google_trends $0.011). No calls failed. Well under budget — nothing was skipped for cost.

## A note before the data: a prompt-injection probe in the GSC export

One row in the 90-day query export (`sc-domain:superiortkd.co.nz`, dimension `query`) is not a real search — it's a block of text formatted as an AI "system role" instruction (0 clicks, 1 impression), clearly aimed at any automated tool that ingests Search Console data. It has been excluded from every count below and no instruction in it was followed. Flagging it here as a data-integrity note, not a task.

---

## 1. GSC summary (source of truth)

**90 days (23 Jun–21 Sep 2026), 500-row query cap hit:** 170 clicks / 11,440 impressions across the sampled queries; the `page` dimension (66 rows, not capped) shows true totals of **≈416 clicks / ~54,000 impressions** site-wide — most of the impression mass is two informational posts, not commercial demand.
**28 days (24 Aug–21 Sep):** 53 clicks / 8,810 impressions (sampled) — a steep pullback in both queries and clicks vs. the 90-day average, consistent with the seasonal Trends dip after an August spike (see §7).

### Query buckets (90d, 500-row sample, n=500 after removing the injection row)

| Bucket | Queries | Clicks | Impressions | Read |
|---|---:|---:|---:|---|
| Brand (superior taekwondo, andrea kilday, superior tkd) | 5 | 123 | 306 | Healthy: pos ~2, dominant CTR. Not a growth lever, just protect it. |
| NZ local/commercial (auckland, west auckland, near me, kumeū, huapai, etc.) | 40 | 10 | 693 | Thin. Real demand exists but volume per term is tiny (see §2) and Superior sits pos 8–25 on most of it. |
| Named competitors appearing as queries (elite taekwondo, king tiger, hart tkd, howick taekwondo, nz taekwondo federation) | 10 | 0 | 302 | Zero clicks — Google is showing Superior's pages for competitor-name searches with no real chance of a click. Not worth chasing. |
| Informational (history, olympic, belts, grading, WT vs ITF, weight classes, origin, "is taekwondo a sport" etc.) | 204 | 23 | 4,025 | This is where almost all the impression volume lives. Low intent-to-click on most of it. |
| Foreign-language noise (Indonesian "sejarah/asal/berasal…", Spanish "cuándo se creó…", Korean, plus the injection row) | 39 | 2 | 468 | Exclude from any targeting decision — global search demand landing on the two big posts, no NZ commercial value. |
| Everything else (mostly long-tail generic "taekwondo" fragments, single words, other foreign noise the pattern match missed) | 202 | 12 | 5,646 | Long tail of the same two global posts. Not actionable individually. |

**Reading:** the site's impression volume is inflated by `history-of-taekwondo` and `olympic-taekwondo`, which rank respectably (pos 7.6–8.8) for a worldwide audience asking generic questions, most of whom were never going to click through to a Helensville dojang. The real commercial opportunity — NZ local/commercial queries — is a much smaller pool (693 impressions/90d) where Superior is competitive but not winning.

### Pages: most impressions (90d) and CTR

| Page | Impr | Clicks | CTR | Pos | Read |
|---|---:|---:|---:|---:|---|
| /blog/history-of-taekwondo/ | 23,389 | 60 | 0.26% | 8.8 | Rewrite candidate — but see caveat below |
| /blog/olympic-taekwondo/ | 13,753 | 24 | 0.17% | 7.6 | Rewrite candidate |
| /locations/auckland/ | 5,572 | 15 | 0.27% | 8.5 | **Rewrite candidate — this is the money page** |
| / (https) | 3,234 | 153 | 4.73% | 10.1 | Fine — brand-driven |
| /blog/what-is-taekwondo/ | 2,372 | 5 | 0.21% | 7.6 | Rewrite candidate |
| /blog/taekwondo-in-new-zealand/ | 1,372 | 6 | 0.44% | 7.9 | Rewrite candidate |
| /blog/preparing-for-belt-test/ | 750 | 14 | 1.87% | 7.2 | OK |
| /blog/taekwondo-grading-system/ | 701 | 8 | 1.14% | 9.6 | OK, borderline |
| /pricing/ | 617 | 8 | 1.30% | 5.3 | OK |
| /locations/huapai/ | 611 | 23 | 3.76% | 8.5 | Healthy — model for other location pages |
| /blog/world-taekwondo | (no slash) 574 | 0 | 0.00% | 9.4 | **Not a rewrite candidate — it's a duplicate/indexing bug** (see §8) |
| /contact/ | 461 | 2 | 0.43% | 10.0 | Rewrite candidate |
| /blog/wt-vs-itf-taekwondo/ | 410 | 4 | 0.98% | 4.7 | Borderline |

**Caveat on the two big informational posts:** their true CTR ceiling is well below what a commercial page could hit — most of their impressions come from the informational/foreign-noise buckets above, where many searchers get answered by a featured snippet or PAA box and never see a blue link. Tightening titles helps at the margin; it won't turn these into conversion pages. `/locations/auckland/` is the one high-impression page where a CTR fix is a real revenue lever — every one of its 5,572 impressions is a person specifically searching for taekwondo *in Auckland*.

---

## 2. DataForSEO keyword volume (New Zealand, English)

Ran `keywords_search_volume` on a 130-keyword set (base terms × places), broader than the ~80 specified because it was one batched call at $0.09 total regardless of count — full CSV: `tools/dataforseo/outputs/dfs-search-volume.csv`.

| Keyword | Volume/mo (NZ) | GSC position (if ranked) |
|---|---:|---|
| taekwondo | 3,600 | 17 |
| tae kwon do | 3,600 | not ranked in labs sample |
| martial arts | 1,600 | not ranked |
| karate | 1,600 | not ranked (not our sport) |
| kickboxing | 1,600 | not ranked (not our sport) |
| karate auckland | 590 | not ranked |
| taekwondo near me | 390 | 18 (organic pos 8 live SERP) |
| kickboxing auckland | 390 | not ranked (not our sport) |
| taekwondo auckland | 260 | 8 (live SERP; GSC shows 9.5) |
| tae kwon do auckland | 260 | not ranked |
| taekwondo belts | 260 | not ranked directly |
| martial arts auckland | 210 | 27 |
| self defence | 140 | not ranked |
| taekwondo classes | 140 | 13 |
| martial arts classes | 140 | not ranked |
| kickboxing west auckland | 50 | n/a |
| martial arts west auckland | 30 | not ranked (organic pos not in top 20) |
| karate west auckland | 30 | n/a |
| taekwondo west auckland | 20 | not ranked |
| taekwondo classes auckland | 20 | 11 (live SERP) |
| adult taekwondo | 10 | not ranked |
| self defence auckland | 10 | not ranked |
| taekwondo grading / history of taekwondo / when was taekwondo invented / is taekwondo an olympic sport / wt vs itf taekwondo / taekwondo weight classes / how much are taekwondo classes | 10 each | ranked, various |

**Every place-specific combination below "west auckland"** — Helensville, Kumeū, Huapai, Waimauku, Hobsonville, Riverhead, Kaukapakapa, Parakai, Rodney, crossed with any of the 13 base terms — returned **0 volume**. This is a genuine "no data," not a gap in the pull: Google Ads doesn't have enough query volume in these small towns to report a number. It does **not** mean there's no demand (see the Maps evidence in §5, where Kumeū clearly has active searchers), only that keyword-volume tools can't see it at this granularity. Treat local pages as playing for map-pack and long-tail/informational traffic, not for measurable keyword volume.

### Keyword ideas (seeded taekwondo / martial arts classes / self defence classes / kids martial arts, NZ, ≥30 volume)

65 of 300 ideas cleared the 30-volume floor (`tools/dataforseo/outputs/dfs-keyword-ideas.csv`). The pattern is consistent: **almost none of the volume is taekwondo-specific or Auckland-specific.** Top volume terms are other disciplines (muay thai classes 1,000; tai chi classes 720; jiu-jitsu classes 720) or other cities (muay thai christchurch 880, karate christchurch 390, karate wellington 110). Of the handful that are both NZ-local and on-topic: `karate classes auckland` (50, wrong sport), `muay thai classes auckland` (40, wrong sport), `taekwondo classes for beginners` (30, generic, already covered by /classes/). **Conclusion: there is no undiscovered taekwondo-Auckland keyword pool sitting in Keyword Planner data.** The opportunity is in intent capture (near me, informational, comparison) and map-pack visibility, not in volume mining.

---

## 3. Keyword → URL map (primary/secondary; matches plan.md §4's existing map, confirmed by this pull)

| URL | Primary (confirmed live SERP + GSC) | Secondary | Status |
|---|---|---|---|
| / | superior taekwondo (brand, pos 2) | taekwondo, taekwondo north west auckland | Healthy |
| /locations/auckland/ | taekwondo auckland (pos 8 live / 8.5 GSC 90d) | auckland taekwondo, taekwondo classes auckland (pos 11), taekwondo near me (pos 8) | **Priority CTR fix** — see §8 |
| /locations/huapai/ | taekwondo huapai | — | Healthy model (3.76% CTR) |
| /locations/kumeu/ | taekwondo kumeu | — | 0 volume in Ads data; real demand exists per Maps (see §5) but page isn't converting it into map presence |
| /pricing/ | taekwondo class prices auckland | — | OK |
| /classes/tiny-tigers/ | kids taekwondo classes auckland | — | Low impressions, no volume evidence to prioritise further work here this round |
| /blog/history-of-taekwondo/ | when was taekwondo invented | history of taekwondo | High impression, low click-value ceiling (see §1 caveat) |
| /blog/olympic-taekwondo/ | is taekwondo an olympic sport | olympic taekwondo | Same caveat |
| /contact/ | taekwondo near me | — | Low CTR (0.43%) at pos 10 for a transactional query — worth a title/meta check |

No new pages are justified by volume this round (see §2). The one structural gap found (Kumeū/Hobsonville map-pack absence) is a GBP/citations problem, not a content problem — see §9.

---

## 4. Competitor ranked-keyword gap (labs_ranked_keywords, NZ)

Picked the three `.co.nz`/`.com` **taekwondo clubs** that actually out-rank Superior on the two seed SERPs: **harttkd.com**, **vanroonmartialarts.com**, **sejongtkd.com** (all three appear in organic top 10 and/or the local pack for "taekwondo auckland"; Superior does not appear in that local pack). Raw data: `tools/dataforseo/outputs/ranked_kw_clean.json` equivalent captured in `/tmp` (see note below on re-running if needed).

- **superiortkd.co.nz** ranks for only **19 tracked keywords** in Labs' NZ index — a small footprint. Its best positions: taekwondo auckland (8), auckland taekwondo (9), hart taekwondo (8, i.e. Google shows Superior's homepage when people search a rival's name), taekwondo class (10).
- **harttkd.com**: only 5 tracked keywords, but wins head-to-head on the two terms that matter most — taekwondo auckland (pos 6 vs Superior's 8) and auckland taekwondo (pos 7 vs 9). This is the one direct competitor worth beating specifically.
- **vanroonmartialarts.com**: broadest footprint (23 keywords), but most of its volume is MMA/kickboxing/Muay Thai (auckland mma 1,300 vol pos 4, kickboxing auckland 390 pos 6) — a different offering, not a real content gap for a taekwondo-only club. On the shared terms it also beats Superior: taekwondo auckland (pos 5), martial arts auckland (pos 4).
- **sejongtkd.com**: 18 keywords, wins taekwondo near me (pos 6 vs Superior 18) and ties/beats on taekwondo auckland-family terms; also picks up regional brand searches (taekwondo wellington, taekwondo hastings, taekwondo christchurch) that are irrelevant to Superior.

**No genuine "content gap" keyword emerged** — the competitors aren't ranking for taekwondo-relevant terms Superior is missing entirely; they're simply out-ranking Superior on the same handful of shared money terms, mostly because they're geographically closer to central Auckland search volume. The lever here is position improvement on existing targets (title/meta, internal linking, GBP/map signals), not new content.

---

## 5. SERP notes & People Also Ask (Auckland, depth 20)

| Query | Superior organic rank | Local pack (top 3) | PAA |
|---|---|---|---|
| taekwondo auckland | 9 | Auckland City Kyokushin, Sejong Taekwondo, Van Roon Martial Arts | best age to start; Taekwondo vs karate; is it expensive; what martial arts in Auckland |
| taekwondo classes auckland | 11 | Auckland City Kyokushin, Van Roon, Sejong | best age; Taekwondo vs karate; martial arts in Auckland; too old at 30? |
| kids martial arts west auckland | 17 (the round-2 blog post, not a location page) | Kings Academy, The Combat Centre, Van Roon | — |
| self defence classes auckland | 22 (the round-2 blog post) | Krav Fighter, Xtra Edge, Auckland City Kyokushin | worth it?; best course; expensive? |
| taekwondo near me | 8 | Auckland City Kyokushin, Van Roon, Sejong | best age; Taekwondo vs karate; kids in South Auckland; is it expensive |
| martial arts west auckland | 18 | not captured in this pull's local pack | is 40 too late; is 30 too old; best beginner martial art |

Two blog posts from the round-2 content cluster (`kids-martial-arts-west-auckland`, `self-defence-classes-auckland` → actually `womens-self-defence-classes-auckland`) are **already ranking** (pos 17 and 22) for their target commercial queries within ~2 days of the plan-round2 build — early positive signal, worth re-checking at the 2026-10-16 recheck date already set in the round-1 changelog.

Recurring PAA across every query: "What is the best age to start Taekwondo?" and "Is Taekwondo/karate better?" — neither is directly answered on-page anywhere on superiortkd.co.nz. An FAQ block answering "what age" (answer: from age 4, per Tiny Tigers) on `/locations/auckland/` and `/` would be a low-effort snippet-capture play.

---

## 6. Map-pack ranks (serp_google_maps, 13z)

| Coordinate | "taekwondo" | "martial arts" |
|---|---|---|
| Helensville (-36.6770,174.4500) | **#1 Superior Taekwondo** (5.0★, 22 reviews) | **#2 Superior Taekwondo** (behind Okinawa Shorin Ryu) |
| Kumeū (-36.7730,174.5560) | Not in top 6 (Phenix Academy, The Combat Centre, Global Martialarts Taekwondo, Active Taekwondo Academy rank instead) | Not in top 10 |
| Hobsonville (-36.7930,174.6580) | Not in top 10 (Kumgang, Jungshin, Global Martialarts, ANK, Koryo, Pacific Sun) | Not in top 10 |

**This is the clearest actionable finding in the whole pull.** Superior dominates its own home turf but has **zero Google Maps visibility in Kumeū, despite having a dedicated `/locations/kumeu/` page**, and none in Hobsonville. Map-pack ranking is driven by GBP proximity, category strength, and review volume/recency — not by website content — so a Kumeū content rewrite will not move this number. Do **not** build a Hobsonville location page to chase this (see §9) — it would be a doorway page for a market the club isn't realistically winning on Maps, and conflicts with the round-1 policy against doorway pages 25+ minutes from the dojang.

---

## 7. Seasonality (Google Trends, NZ, 12 months)

"taekwondo" interest averaged 11–18 (index) monthly Sep 2025–Jul 2026, then **spiked to 30.2 in August 2026** — roughly double the yearly baseline. "martial arts" interest is comparatively flat (20–27) with a mild peak in February 2026 (24.8→27.0), consistent with NZ's school-year-start enrollment window. Two takeaways: (1) the August 2026 spike is worth investigating for cause (major event/news) before assuming it repeats — flag for the owner rather than planning around it blind; (2) **February is the safe, repeatable seasonal push** for "after-school activity" and enrollment-angle content and CTAs, timed 2–3 weeks ahead of the school year.

---

## 8. Technical note found in passing (not requested, flagging only)

The `page` dimension pull shows `/blog/world-taekwondo` (no trailing slash) getting 574 impressions / 0 clicks at position 9.4, while `/blog/world-taekwondo/` (with slash) separately gets 87 impressions. Several other pages show the same http/https and slash/no-slash duplication (e.g. `/` vs `http://…/`, `/classes/tiny-tigers` vs `/classes/tiny-tigers/`). This is a canonicalization issue, not a content/CTR issue — a title rewrite on the no-slash variant won't fix it. Left for the owner/build team to confirm the redirect rules in `netlify.toml`/`_redirects` are actually catching every internal link variant; out of scope for this read-only research pass.

---

## 9. Recommendations, prioritised

1. **Rewrite title + meta for `/locations/auckland/`.** This is the only high-impression (5,572/90d) low-CTR (0.27%) page that is pure commercial intent. Current title already says `Taekwondo Classes in Auckland's North West | Superior Taekwondo` (57 chars) — test a version that front-loads the query match and adds a trust/price hook, e.g. `Taekwondo Auckland: Olympian-Coached Classes | Superior Taekwondo` (66 chars — trim to fit ≤60: `Taekwondo Auckland | Olympian Coach, Free Trial` (48 chars)). Pair with an FAQ block answering "what age is best to start Taekwondo?" to contest the recurring PAA.
2. **Add the "best age to start" and "Taekwondo vs karate" answers as visible FAQ/snippet content** on `/locations/auckland/` and `/` — same PAA repeats across every relevant SERP pulled and is currently unanswered on-site.
3. **Do not invest further in `/locations/kumeu/` content** to fix its map-pack absence — that's a GBP/citations problem (service-area listing, category, review count in Kumeū's local pool), not a page-copy problem. Route this to a GBP/local-citations task instead (separate from this keyword pull's scope).
4. **Do not build a Hobsonville (or any further) location page.** Zero map-pack presence there, zero Ads-measurable local volume, and it repeats the doorway-page pattern the round-1 plan already 301'd away from `/locations/rodney-north-west/` and `/locations/auckland-north-west/`.
5. **Title/meta pass on `/blog/history-of-taekwondo/`, `/blog/olympic-taekwondo/`, `/blog/what-is-taekwondo/`, `/blog/taekwondo-in-new-zealand/`, `/contact/`** — lower priority than #1 since a large share of their impressions are global informational/foreign-noise queries with a low click ceiling regardless of title, but still worth tightening given the CTR is below even that lower ceiling. Suggested new titles (all ≤60 chars):
   - history-of-taekwondo: `When Was Taekwondo Invented? Full History | Superior TKD` (58)
   - olympic-taekwondo: `Is Taekwondo an Olympic Sport? Rules & Scoring` (47)
   - what-is-taekwondo: `What Is Taekwondo? Beginner's Guide | Superior TKD` (51)
   - taekwondo-in-new-zealand: `Taekwondo in New Zealand: Clubs & Grading Guide` (48)
   - contact: `Book a Free Taekwondo Trial | Superior Taekwondo` (49)
6. **Fix the no-slash/slash and http/https duplication** flagged in §8 before spending further effort on titles for `/blog/world-taekwondo` specifically — confirm the redirect is real, then re-pull GSC in ~4 weeks to see the two rows merge.
7. **Track the two live round-2 posts** (`kids-martial-arts-west-auckland` pos 17, `womens-self-defence-classes-auckland` pos 22) at the existing 2026-10-16 recheck date rather than starting new content — they're early and already ranking; premature to judge.
8. **No new pages are justified by search volume this round.** Every hyper-local keyword combination (any base term × Helensville/Kumeū/Huapai/Waimauku/Hobsonville/Riverhead/Kaukapakapa/Parakai/Rodney) returned 0 in Google Ads data. Keyword-ideas mining (300 ideas, ≥30 volume floor) surfaced no undiscovered taekwondo-Auckland terms — the volume that exists belongs to other disciplines (muay thai, tai chi, jiu-jitsu) or other NZ cities.
9. **February 2026 is the seasonal window** to schedule any enrollment-angle push (paid or content); the August spike is noted but not yet understood well enough to plan around.

### Failed / no-data items
- None of the DataForSEO calls failed.
- Hyper-local search volume: **no data** for all place-name × base-term combinations below the "west auckland" level of granularity (Google Ads has no coverage; not a pull failure, a real ceiling of the tool).
- `PROJECT-LOG.md` referenced in the brief does not exist in this repo/branch (it exists at commit `02c3342` on a different point in history, not on `main` or the current `growth/keywords-2026-09-21` branch) — flagging in case it was expected to be current.

---

**Outputs saved:**
- `tools/dataforseo/outputs/gsc-query-90d.csv`, `gsc-query-28d.csv`, `gsc-page-90d.csv`/`.json`, `gsc-query-page-90d.csv`
- `tools/dataforseo/outputs/dfs-search-volume.csv` (130 keywords, NZ)
- `tools/dataforseo/outputs/dfs-keyword-ideas.csv` (65 ideas ≥30 volume, tagged geo/intent)
