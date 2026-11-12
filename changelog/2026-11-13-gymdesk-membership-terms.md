# 2026-11-13 — Membership terms, concession price and shop sync to GymDesk

**What:** Brought the site in line with GymDesk's pricing page as updated by the owner (effective 12/11/2026), the Poomsae class page and the club shop. Source copies are saved in `research/gymdesk-*-2026-11-13.html`.

**Why:** GymDesk now has a 26-week minimum term with an early-cancellation fee, new notice and hold rules, and a dearer concession card. The site still said "Ongoing", 21 days' notice, 2–3 week holds and $285, and one blog post listed "long-term contracts with hefty cancellation fees" as a red flag. A parent who reads one set of terms on the site and signs a different set at checkout is a complaint waiting to happen.

## Old to new

| Item | Old (site) | New (GymDesk) |
|---|---|---|
| Weekly memberships | "Ongoing" | 26-week minimum term, then week to week; payments continue during the term |
| Concession card | $285 | $300 (10 sessions, valid 3 months) |
| Cancellation | 21 days' written notice | two weeks' written notice to superiorfitnessnz@gmail.com; $250 early-cancellation fee during the minimum term (or the remaining fees for the term if less) |
| Holds | max 2–3 weeks, can't cover a whole term | 3 to 8 weeks, once per 12 months; payments pause; minimum term extended by the hold |
| Poomsae class (not on unlimited) | $10 / session | $20 per student per session, paid via the app or EFTPOS before class |
| Casual drop-in $30 (Kumeū blog) | listed | removed: not offered on GymDesk |
| Club shop | not on the site | 7 items with prices on /pricing/ and a link to the GymDesk shop |

Unchanged: $30 / $40 / $50 a week, $40 sign-up, free week trial, family discounts 10 / 15 / 20%, tournament extra classes $20.

## Files touched

- `src/pages/pricing.astro`: plan cards say "26-week minimum"; concession $300 (card and Offer schema); weekly Offer descriptions mention the minimum term; new FAQ "Is there a minimum term?"; cancel/hold FAQ rewritten; policies now Minimum term, Cancellations, Holds; new "Uniforms and club gear" block from the GymDesk shop.
- `src/lib/locationData.ts`: concession $300 on all suburb pages; uniform FAQ mentions the club shop and the $80 standard uniform.
- `src/components/PoomsaeSection.tsx`: $20 per session.
- Blog: `after-school-activities-kumeu` (minimum term in the FAQ, $300, drop-in paragraph replaced), `kids-martial-arts-west-auckland` ($300), `how-to-choose-a-taekwondo-club` (red-flag line and the pricing sentence now match the club's own terms).
- `public/llms.txt`: pricing section.

## Verification

- `npm run build` passes; all 134 JSON-LD blocks parse.
- No "$285", "21 days", "2 to 3 weeks", "Ongoing" or drop-in text left in `src` or `public`.
- /pricing/ checked in the browser: weekly cards, concession $300, shop block and policies render; no console errors.

## For the owner

- GymDesk's own "Membership Cancellation & Holds" page (`/page/cancellationsandholds`) still shows the old 21 days and 2–3 week holds, which contradicts the new pricing page.
- Shop prices will drift if the shop changes; re-check them with the next pricing sync.

**Metric:** accuracy and trust at sign-up; no GSC target. **Re-check:** the next time GymDesk pricing changes, or 2027-01-31.
