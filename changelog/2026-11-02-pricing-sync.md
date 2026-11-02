# 2026-11-02 — Pricing and policy sync to GymDesk

**What:** Rebuilt the pricing page and swept every price, membership and trial statement on the site so it matches GymDesk's current pricing page (source of truth, https://superior-taekwondo.gymdesk.com/pricing, saved copy in `research/gymdesk-pricing-2026-11-02.html`).

**Why:** The site still advertised the old structure (sibling deals, 10-week term pricing, a $25 sign-up fee, unlimited at $40, a five-month concession card, "first class is free", two weeks' notice). GymDesk now shows three weekly plans at a $40 sign-up, a 10-session concession card valid 3 months, a free week trial, family discounts and 21 days' notice. Showing a different price on the site from the one a parent sees at checkout costs trust and trial or sign-up conversions, and the stale prices were also in the FAQPage and Offer JSON-LD.

## Old to new

| Item | Old | New |
|---|---|---|
| One session per week | $30/week + $25 sign-up | $30/week + $40 sign-up |
| Two sessions per week | not listed (sibling deal $55 for 2 sessions) | $40/week + $40 sign-up |
| Unlimited | $40/week + $25 sign-up | $50/week + $40 sign-up |
| Concession card | $285, 5 months | $285, 10 sessions, valid 3 months |
| Trial | "first class is free" / "free trial class" | free week trial (1 week, any day) |
| Multiple family members | sibling deals $55 / $70 / $80 / $90 per week | family discounts: 1st full price, 2nd 10% off, 3rd 15% off, 4th 20% off |
| Term pricing | $300 (1/week) and $400 (unlimited) per 10-week term | removed |
| Cancel or hold notice | 2 weeks, by email | 21 days' written notice by email, from the date the request is received |
| Holds | not stated | max 2 to 3 weeks; longer only for injury, medical reasons or pre-planned holidays; can't cover a whole term (membership is then cancelled) |
| Missed sessions, public holidays, instructor absences | one line on public holidays | flexible training, public holiday make-up, instructor-absence make-up or catch-up the following week |

## Files touched

- `src/pages/pricing.astro`: new `plans` data (Weekly memberships, Other options), Family discounts block, Membership policies block, visible pricing FAQ rendered from the FAQPage data, rewritten FAQPage JSON-LD (8 questions), Offer/OfferCatalog schema rebuilt for the 5 plans (free trial price 0.00), meta description rewritten (128 chars).
- `src/components/PricingSection.tsx`: tab label "Term & Concession" is now "Other Options"; non-numeric prices (the "FREE" plan) render as plain text instead of going through NumberFlow, and that card's button reads "Book your free week".
- `src/lib/locationData.ts`: facts only, on all six suburb pages (prices, family discounts, free week, concession validity); each page's own wording kept.
- `src/data/ageTiers.ts`: unlimited $40 to $50 (two rows).
- `src/pages/index.astro`, `src/pages/contact.astro`, `src/pages/classes/index.astro`, `src/pages/classes/general.astro`, `src/pages/locations/index.astro`, `src/components/Hero.astro`, `src/components/ClassFinder.astro`, `src/components/ContactSection.tsx`: free trial wording to "free trial week" / "first week is free".
- Blog: `after-school-activities-kumeu`, `kids-martial-arts-west-auckland`, `womens-self-defence-classes-auckland` (prices, FAQ answers and schema), `how-to-choose-a-taekwondo-club` (family discount line, trial wording), `adult-taekwondo-fitness`, `self-defence-auckland`, `history-of-taekwondo` (trial wording).
- `public/llms.txt`: pricing section rewritten.

## Left alone (not membership prices)

- `src/components/PoomsaeSection.tsx`: $10 per session for the Poomsae class when not on unlimited. Not on GymDesk's pricing page; confirm with the owner.
- `src/components/TournamentsSection.tsx`: $20 per student per class for extra tournament training when not on unlimited. Not on GymDesk's pricing page; confirm with the owner.
- `src/pages/blog/after-school-activities-kumeu.astro`: "A non-member can also drop in to a single casual class for $30". GymDesk's pricing page shows no drop-in option; confirm with the owner and remove if it no longer exists.
- `src/layouts/Layout.astro`: `priceRange: "$$"` is generic and still true; its OfferCatalog lists services, not prices.
- Button labels such as "Book a free trial" are still correct for a free week trial.

## Verification

- `npm run build` passes (42 pages).
- All 134 JSON-LD blocks in `dist/` parse.
- `dist/` HTML has 0 hits for "sibling", "$25", "$300", "$400", "five months", "two weeks' notice", "10-week" (the only "sibling" hit anywhere is inside the bundled React client JS).
- `dist/pricing/index.html` shows the 3 weekly plans, the Family discounts block and the Membership policies block; the Offer schema lists the 5 plans (30.00, 40.00, 50.00, 285.00, 0.00); the "Other options" tab (concession card and free week trial) renders client-side on tab switch.
- No page meta description over 160 characters.

**GSC / GA metric:** free-trial form submissions and GymDesk sign-ups (`free_trial_click`, `gymdesk_click`); /pricing/ CTR. **Re-check:** 2026-11-16.
