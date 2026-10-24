# 2026-10-24 — Timetable sync to GymDesk week of 2 Nov 2026

**What:** Regenerated `src/data/schedule.ts` from GymDesk for the week of Mon 2 Nov 2026 (new `--date YYYY-MM-DD` option on `scripts/fetch-schedule.mjs`, commit 4c13cb0), then aligned every hard-coded timetable mention in the copy, the LocalBusiness hours schema and `llms.txt` with it.

**Why:** The timetable changed. The Tuesday 9:00–10:00am Adults class is gone permanently (owner decision, confirmed by Altus 2026-10-24). Little Legends is now Tue and Wed 4:00–4:40pm, Youth is Tue to Thu 4:45–5:30pm, the Family Class is Mon and Fri 4:30–5:30pm, Saturday Fitness Circuit starts 9:30am, and Sunday private coaching is three 90-minute slots (10:00am–2:30pm). Stale times on a local-business site cost trust and trial bookings.

**Changed:**
- `src/data/ageTiers.ts` — ClassFinder rows updated; Adults row kept but now points at "Any 12+ class (Tue & Thu 5:30–6:30pm) or the Family Class (Mon & Fri 4:30–5:30pm)"; header comment notes the owner-approved change.
- `src/layouts/Layout.astro` — `openingHoursSpecification` derived from schedule.ts: Mon 16:30–19:30, Tue 16:00–20:15 (09:00–10:00 object deleted), Wed 16:00–20:00, Thu 16:00–20:00, Fri 16:30–19:30, Sat 09:30–12:45, Sun 10:00–14:30.
- `public/llms.txt` — class finder line (no Adults Tuesday 9am; Family class Monday and Friday 4:30pm).
- `src/lib/locationData.ts` — facts only changed on all six suburb pages (Helensville, Auckland, Kumeū, Kaukapakapa, Waimauku, Huapai); sentence structure and local wording kept so the pages do not converge. "Four days a week" is now "twice a week"; Saturday Fitness Circuit 9:30am.
- `src/pages/classes/general.astro` — class-times intro sentence.
- `src/pages/blog/after-school-activities-kumeu.astro` — FAQ answer (feeds the FAQ JSON-LD) and body: Little Legends Tue and Wed, "two" sessions, Youth Tue to Thu.
- `src/pages/blog/adult-taekwondo-fitness.astro` — FAQ answer and FAQ schema (kept identical).
- `src/pages/blog/womens-self-defence-classes-auckland.astro` — FAQ answer, body, Family Class days, CTA line.
- `src/components/ScheduleGrid.astro` — "Timetable current as of 2 Nov 2026" now reads "Timetable from 2 Nov 2026" so it is not odd before that date.

**Left alone:** "six days a week" (Mon–Sat still all have classes); competition squad times (unchanged); office phone hours "Mon–Fri 9am–5pm" on contact (not class times). The ClassFinder Adults row still carries the class name "Adults Taekwondo Class"; only its schedule changed, per the owner sign-off.

**Verification:** `npm run build` passes (42 pages); no "9:00am", "Tuesday morning", "9:15am", "9:00–10:00" or "Monday to Thursday" left in `dist/`; all 134 JSON-LD blocks in `dist/` parse; home-page opening hours match schedule.ts.

**GSC metric:** none primary; this is an accuracy and conversion fix (trial bookings). **Re-check:** 2026-11-03 (first day of the new timetable): confirm the live pages and GymDesk agree, and that no stale times show in Google Business Profile hours or snippets.

**Owner / Altus:** update Google Business Profile hours to match the schedule (Tue 9–10am removed, Mon and Fri now open 4:30pm, Sat 9:30am, Sun to 2:30pm).
