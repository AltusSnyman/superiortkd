#!/usr/bin/env node
// scripts/fetch-schedule.mjs
//
// Usage:
//   node scripts/fetch-schedule.mjs                  Fetch the live GymDesk schedule and, if it
//                                                     parses cleanly, overwrite src/data/schedule.ts.
//   node scripts/fetch-schedule.mjs --out <path>      Write the generated file to <path> instead of
//                                                     src/data/schedule.ts (useful for dry runs / diffing).
//   node scripts/fetch-schedule.mjs --check           Fetch + parse, but write nothing. Instead diff
//                                                     the parsed result against the current
//                                                     src/data/schedule.ts and print any differences.
//                                                     Always exits 0.
//
// Also available as npm scripts: `npm run schedule:fetch` / `npm run schedule:check`.
//
// What it does:
//   Fetches https://superior-taekwondo.gymdesk.com/schedule (plain `fetch`, no dependencies) and
//   pulls the class data out of the `data-event-info="{...}"` JSON blob that GymDesk embeds on each
//   `.schedule-event` div in the server-rendered HTML (day number, start time, duration, title,
//   instructor). That JSON is far more reliable than trying to scrape the visual grid layout.
//
// Safety:
//   This is a MANUAL, developer-run script -- it is deliberately NOT wired into `npm run build` (no
//   `prebuild` hook). Silently rewriting the club's real published timetable on every build would be
//   the wrong default; a person runs `npm run schedule:fetch` (or `schedule:check` to preview) when
//   they actually want to sync. Regardless, the script must still NEVER throw or exit non-zero in a
//   way that could break a build if it's ever invoked from one. Any failure to fetch, a non-200
//   response, a timeout, or a parse that yields fewer than 5 days or 0 classes is treated as "GymDesk
//   didn't give us something we trust" -- the script prints a clear message to stderr and exits 0
//   having written nothing, so the existing snapshot in src/data/schedule.ts is left exactly as it was.
//
// No invented data: GymDesk's raw `title`/`instructor` strings are cosmetically different from the
// site's published display copy (ALL CAPS titles, first-name-only instructors, four separate Sunday
// private-coaching bookings shown as one row). Rather than publish that cosmetic mismatch as a diff
// every run, DISPLAY_MAP and INSTRUCTOR_MAP below translate each known raw GymDesk string to the
// exact display string already used in src/data/schedule.ts -- every value in those maps was copied
// from that file, nothing is invented. A title/instructor GymDesk sends that ISN'T in the map falls
// back to a generic conversion (title-case / raw string) and is printed as a warning, so a future
// GymDesk rename is visible instead of silently mangled or silently matched by coincidence.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SCHEDULE_URL = "https://superior-taekwondo.gymdesk.com/schedule";
const FETCH_TIMEOUT_MS = 20_000;
const MIN_DAYS_WITH_CLASSES = 5;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_OUT = path.join(__dirname, "..", "src", "data", "schedule.ts");

// Monday -> Sunday, mapped to GymDesk's `day` field (0 = Sunday ... 6 = Saturday, matching
// JS Date#getDay()). This is also the display order used in src/data/schedule.ts.
const DAY_ORDER = [
	{ num: 1, day: "Monday", short: "Mon" },
	{ num: 2, day: "Tuesday", short: "Tue" },
	{ num: 3, day: "Wednesday", short: "Wed" },
	{ num: 4, day: "Thursday", short: "Thu" },
	{ num: 5, day: "Friday", short: "Fri" },
	{ num: 6, day: "Saturday", short: "Sat" },
	{ num: 0, day: "Sunday", short: "Sun" },
];

// Raw GymDesk `title` (verbatim, whitespace-trimmed) -> the display string already published in
// src/data/schedule.ts. Every value below was copied out of that file, not invented.
//
// Two raw titles are known to cover MORE THAN ONE display string in src/data/schedule.ts, because
// GymDesk uses the identical admin-side title for two slightly different site copy variants on
// different days:
//   - "YOUTH SUPERIOR LEGENDS AGES 6-11 YEARS - ALL BELTS" reads "...(ages 6-11, all belts)" on
//     Monday, but "...(ages 6-11)" (no "all belts") on Tue/Wed/Thu -- 3 of its 4 occurrences.
//   - "CADETS, JUNIORS, SENIOR SUPERIOR LEGENDS - ALL BELTS 12+" reads "...(12+, all belts)" on
//     Tuesday, but "...(12+)" (no "all belts") on Thursday -- a 1-1 tie between its 2 occurrences.
// A single title -> string map can only pick one value per title, so an exact match against
// src/data/schedule.ts isn't achievable for these two from a title-keyed map alone. We pick the
// shorter "no all belts" phrasing for both (majority variant for Youth: 3 of 4; picked for
// consistency with Youth on the tied Cadets) to minimise the real, reported difference rather than
// invent a day-specific special case -- the day(s) that use the other phrasing still show up as a
// genuine difference in --check / dry-run output. See the R6 wrap-up report for the exact rows.
const DISPLAY_MAP = {
	// GymDesk advertises this class as "AGES 2-5 YEARS". The owner's confirmed position (plan.md
	// §2b) is that Tiny Tigers starts at age 4, and that "2" must not appear anywhere on the site,
	// so the published age band here is 4–5 — the same band the ClassFinder table shows. The raw
	// GymDesk string is preserved on the left of this mapping so the difference stays visible.
	"LITTLE SUPERIOR LEGENDS AGES 2-5 YEARS": "Little Superior Legends (ages 4–5)",
	"YOUTH SUPERIOR LEGENDS AGES 6-11 YEARS - ALL BELTS": "Youth Superior Legends (ages 6–11)",
	"SUPERIOR PERFORMANCE PATHWAY - Development Squad": "Superior Performance Pathway, Development Squad",
	"ADULTS TAEKWONDO CLASS": "Adults Taekwondo Class",
	"CADETS, JUNIORS, SENIOR SUPERIOR LEGENDS - ALL BELTS 12+": "Cadets, Juniors, Senior Superior Legends (12+)",
	"POOMSAE CLASS": "Poomsae Class",
	// GymDesk publishes this title with two different punctuation variants (Tuesday's has an extra
	// " - " before the parenthesis, Friday's doesn't) that both map to the same display string.
	"SUPERIOR PSS ELECTRONIC SPARRING CLASS - (Daedo Gen 3)": "Superior PSS Electronic Sparring Class (Daedo Gen 3)",
	"SUPERIOR PSS ELECTRONIC SPARRING CLASS (Daedo Gen 3)": "Superior PSS Electronic Sparring Class (Daedo Gen 3)",
	"SPARRING CLASS - YOUTH SUPERIOR LEGENDS AGES 5 - 11 - ALL BELTS": "Sparring Class, Youth Superior Legends (ages 5–11)",
	"SUPERIOR FITNESS KIDS/TEENS CLASS": "Superior Fitness Kids/Teens Class",
	"SUPERIOR SPARRING CLASS - 12+ ALL BELTS": "Superior Sparring Class (12+, all belts)",
	"SUPERIOR FAMILY CLASS - ALL AGES & BELTS": "Superior Family Class (all ages and belts)",
	"SUPERIOR POOMSAE/SPARRING CLASSES - ALL AGES": "Superior Poomsae/Sparring Classes (all ages)",
	"SUPERIOR FITNESS CIRCUIT CLASS": "Superior Fitness Circuit Class",
	// GymDesk's raw title for these is already close to plain English (not ALL CAPS like the rest).
	// The merge rule (mergeConsecutiveSlots, below) turns four of these on Sunday into the single
	// "Private Coaching Sessions (four 90-minute slots, bookable)" row src/data/schedule.ts uses;
	// this entry is only the un-merged single-session fallback (e.g. if GymDesk ever publishes just
	// one private-coaching slot on a day instead of several back to back).
	"Private Coaching Session": "Private Coaching Session",
};

// The exact raw GymDesk title that gets the "N x Y-minute slots, bookable" merged-row treatment.
// Kept as a named constant (rather than checking `=== "Private Coaching Session"` inline) so the
// merge special-case in mergeConsecutiveSlots is easy to find and is scoped to only this title.
const PRIVATE_COACHING_TITLE = "Private Coaching Session";

// Raw GymDesk instructor first name -> the display name used in src/data/schedule.ts. Every value
// below was copied out of that file. An instructor GymDesk sends that isn't in this map falls back
// to the raw string as-is (documented fallback, not a silent guess) and is warned about below.
const INSTRUCTOR_MAP = {
	Andrea: "Andrea Kilday",
};

// Fallback for a class title GymDesk sends that ISN'T in DISPLAY_MAP: convert ALL-CAPS admin-style
// titles to Title Case rather than publishing them shouting. This is only a fallback -- it never
// overrides a DISPLAY_MAP entry -- and every title it's used for gets a warning printed (see the
// unmappedTitles handling in main(), fed by buildSchedule()) so a real class rename doesn't quietly
// ship as a mismatched row.
const SMALL_WORDS = new Set(["a", "an", "and", "at", "for", "in", "of", "on", "or", "the", "to"]);
function titleCaseFallback(rawTitle) {
	const words = rawTitle.toLowerCase().split(/(\s+)/);
	return words
		.map((w, i) => {
			if (/^\s+$/.test(w)) return w;
			if (i !== 0 && SMALL_WORDS.has(w)) return w;
			return w.replace(/(^|[-/])([a-z])/g, (_, sep, ch) => sep + ch.toUpperCase());
		})
		.join("");
}

function parseArgs(argv) {
	const args = { out: DEFAULT_OUT, check: false };
	for (let i = 0; i < argv.length; i++) {
		if (argv[i] === "--out") {
			args.out = argv[++i];
		} else if (argv[i] === "--check") {
			args.check = true;
		}
	}
	return args;
}

// Minimal HTML-entity unescape for the handful of entities GymDesk uses inside its
// data-event-info attribute (it HTML-escapes the JSON so it can sit inside a "..." attribute).
function unescapeHtml(str) {
	return str
		.replace(/&quot;/g, '"')
		.replace(/&#0?39;/g, "'")
		.replace(/&apos;/g, "'")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
		.replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
		.replace(/&amp;/g, "&");
}

async function fetchScheduleHtml() {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
	try {
		const res = await fetch(SCHEDULE_URL, { signal: controller.signal });
		if (!res.ok) {
			throw new Error(`GymDesk returned HTTP ${res.status}`);
		}
		return await res.text();
	} finally {
		clearTimeout(timer);
	}
}

// Pull every `data-event-info="{...}"` blob out of the schedule grid HTML and parse it into an
// event object: { day, start: "HH:MM:SS", duration (minutes), title, instructor }.
function extractEvents(html) {
	const events = [];
	const re = /data-event-info="([^"]*)"/g;
	let match;
	while ((match = re.exec(html))) {
		let info;
		try {
			info = JSON.parse(unescapeHtml(match[1]));
		} catch {
			// Not valid JSON (shouldn't normally happen) -- skip this block rather than crash.
			continue;
		}
		if (!info || typeof info.day !== "number" || typeof info.start !== "string") continue;
		// Skip events GymDesk itself marks as cancelled or not visible on the public schedule.
		if (info.cancel === 1) continue;
		if (info.website_visible === 0) continue;
		const duration = Number(info.duration);
		if (!Number.isFinite(duration) || duration <= 0) continue;
		const title = String(info.title || "").replace(/\s+/g, " ").trim();
		if (!title) continue;
		const instructorNames = Object.values(info.instructors || {})
			.map((ins) => String(ins?.name || "").trim())
			.filter(Boolean);
		const instructor = instructorNames.length > 0 ? instructorNames.join(" & ") : "TBC";
		events.push({ day: info.day, start: info.start, duration, title, instructor });
	}
	return events;
}

// Format a start time (in minutes since midnight) + duration (minutes) into the site's display
// format, e.g. "4:00–4:40pm" or "10:15am–12:45pm" (en dash, lowercase am/pm, no leading zero on the
// hour, am/pm shown on both ends only when the range crosses the am/pm boundary).
function formatTimeRangeFromMinutes(startTotal, durationMin) {
	const endTotal = startTotal + durationMin;

	const pad2 = (n) => String(n).padStart(2, "0");
	const to12 = (hour24) => (hour24 % 12 === 0 ? 12 : hour24 % 12);
	const periodOf = (hour24) => (hour24 < 12 ? "am" : "pm");

	const startHour24 = Math.floor(startTotal / 60) % 24;
	const startMin = startTotal % 60;
	const endHour24 = Math.floor(endTotal / 60) % 24;
	const endMin = endTotal % 60;

	const startPeriod = periodOf(startHour24);
	const endPeriod = periodOf(endHour24);

	const startLabel = `${to12(startHour24)}:${pad2(startMin)}`;
	const endLabel = `${to12(endHour24)}:${pad2(endMin)}`;

	if (startPeriod === endPeriod) {
		return `${startLabel}–${endLabel}${endPeriod}`;
	}
	return `${startLabel}${startPeriod}–${endLabel}${endPeriod}`;
}

// "HH:MM:SS" -> minutes since midnight.
function toMinutes(start) {
	const [h, m] = start.split(":").map(Number);
	return h * 60 + m;
}

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
function numberWord(n) {
	return NUMBER_WORDS[n] ?? String(n);
}

// General merge rule: within a single day's events (already sorted by start time), collapse any
// run of ADJACENT events that share both the same raw title AND the same raw instructor into one
// group spanning from the first event's start to the latest event's end. This is deliberately not
// special-cased to any particular day -- it applies to every title. What differs per title is only
// how a merged group's DISPLAY name is rendered, handled separately in buildSchedule() below.
function mergeConsecutiveSlots(sortedEvents) {
	const merged = [];
	for (const ev of sortedEvents) {
		const last = merged[merged.length - 1];
		const startTotal = toMinutes(ev.start);
		const endTotal = startTotal + ev.duration;
		if (last && last.title === ev.title && last.instructor === ev.instructor) {
			last.durations.push(ev.duration);
			last.endTotal = Math.max(last.endTotal, endTotal);
		} else {
			merged.push({
				title: ev.title,
				instructor: ev.instructor,
				startTotal,
				endTotal,
				durations: [ev.duration],
			});
		}
	}
	return merged;
}

// Group raw events into the ScheduleDay[] shape used by src/data/schedule.ts, Monday -> Sunday,
// each day's slots sorted by start time, consecutive same-title/same-instructor slots merged, and
// raw GymDesk title/instructor strings translated to display strings via DISPLAY_MAP/INSTRUCTOR_MAP
// (falling back to a generic conversion + a warning for anything not in those maps).
function buildSchedule(events) {
	const unmappedTitles = new Set();
	const unmappedInstructors = new Set();

	const mapTitle = (rawTitle) => {
		if (Object.prototype.hasOwnProperty.call(DISPLAY_MAP, rawTitle)) return DISPLAY_MAP[rawTitle];
		unmappedTitles.add(rawTitle);
		return titleCaseFallback(rawTitle);
	};
	const mapInstructor = (rawInstructor) => {
		if (Object.prototype.hasOwnProperty.call(INSTRUCTOR_MAP, rawInstructor)) return INSTRUCTOR_MAP[rawInstructor];
		unmappedInstructors.add(rawInstructor);
		return rawInstructor;
	};

	const byDay = new Map(DAY_ORDER.map((d) => [d.num, []]));
	for (const ev of events) {
		if (!byDay.has(ev.day)) continue;
		byDay.get(ev.day).push(ev);
	}
	const days = DAY_ORDER.map(({ num, day, short }) => {
		const sorted = byDay
			.get(num)
			.slice()
			.sort((a, b) => a.start.localeCompare(b.start));
		const groups = mergeConsecutiveSlots(sorted);
		const slots = groups.map((group) => {
			const displayInstructor = mapInstructor(group.instructor);
			const time = formatTimeRangeFromMinutes(group.startTotal, group.endTotal - group.startTotal);

			// The "N x Y-minute slots, bookable" note is scoped to exactly this one raw title, and
			// only kicks in once merging has actually combined more than one booking into the group
			// (a single un-merged Private Coaching Session just uses its plain DISPLAY_MAP name).
			if (group.title === PRIVATE_COACHING_TITLE && group.durations.length > 1) {
				const allSameDuration = group.durations.every((d) => d === group.durations[0]);
				const name = allSameDuration
					? `Private Coaching Sessions (${numberWord(group.durations.length)} ${group.durations[0]}-minute slots, bookable)`
					: `Private Coaching Sessions (${group.durations.length} slots, bookable)`;
				return { time, name, instructor: displayInstructor };
			}

			return { time, name: mapTitle(group.title), instructor: displayInstructor };
		});
		return { day, short, slots };
	});

	return { days, unmappedTitles, unmappedInstructors };
}

function daysWithClasses(schedule) {
	return schedule.filter((d) => d.slots.length > 0).length;
}

function totalClasses(schedule) {
	return schedule.reduce((sum, d) => sum + d.slots.length, 0);
}

// Local calendar date, NOT toISOString(): the club is in NZ, which is well ahead of UTC, so
// toISOString() would stamp the file with yesterday's date for most of the working day and
// disagree with the "fetched <d> <Mon> <yyyy>" line a few lines below it.
function isoDate(d) {
	const pad = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const MONTHS = [
	"Jan", "Feb", "Mar", "Apr", "May", "Jun",
	"Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
function humanDate(d) {
	return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

// Render the ScheduleDay[] into the exact TypeScript source shape src/data/schedule.ts uses:
// a shared instructor constant when every class shares one instructor string, tab indentation,
// double-quoted strings, one slot per line.
function renderFile(schedule, generatedAt) {
	const instructorSet = new Set(schedule.flatMap((d) => d.slots.map((s) => s.instructor)));
	const useSharedConstant = instructorSet.size === 1;
	const sharedInstructor = useSharedConstant ? [...instructorSet][0] : null;
	// Derive the shared-instructor constant's identifier from their display name's first word
	// (e.g. "Andrea Kilday" -> "ANDREA"), matching the naming convention already used by hand in
	// src/data/schedule.ts (`const ANDREA = "Andrea Kilday";`), rather than a generic "INSTRUCTOR".
	const sharedInstructorIdent = useSharedConstant
		? (sharedInstructor.split(/\s+/)[0].toUpperCase().replace(/[^A-Z0-9_]/g, "") || "INSTRUCTOR")
		: null;

	const instructorExpr = (name) =>
		useSharedConstant ? sharedInstructorIdent : JSON.stringify(name);

	// NOTE: this whole header comment block (down to the blank line before `export type
	// ClassSlot`) legitimately differs from src/data/schedule.ts's hand-written header -- it
	// describes itself as generated output rather than a manually-transcribed snapshot. Everything
	// from `export type ClassSlot` onward should match src/data/schedule.ts exactly when GymDesk's
	// published titles/instructors are all covered by DISPLAY_MAP/INSTRUCTOR_MAP.
	const lines = [];
	lines.push(`// Generated ${isoDate(generatedAt)} from GymDesk.`);
	lines.push(`// Superior Taekwondo weekly class timetable.`);
	lines.push(
		`// Source: GymDesk (${SCHEDULE_URL}), fetched ${humanDate(generatedAt)}.`
	);
	lines.push(
		`// This file is generated by scripts/fetch-schedule.mjs -- do not hand-edit it. Run`
	);
	lines.push(
		`// \`npm run schedule:fetch\` to refresh it, or \`npm run schedule:check\` to preview any`
	);
	lines.push(`// differences first. It is NOT run automatically as part of \`npm run build\`.`);
	lines.push(`//`);
	lines.push(
		`// Note on the Little Superior Legends age band: GymDesk lists that class as "ages 2-5". The`
	);
	lines.push(
		`// club's confirmed position is that Tiny Tigers starts from age 4, so the band published here`
	);
	lines.push(
		`// and everywhere else on the site is 4-5. Never print "from age 2" anywhere on the site.`
	);
	lines.push(``);
	lines.push(`export type ClassSlot = {`);
	lines.push(`\ttime: string;`);
	lines.push(`\tname: string;`);
	lines.push(`\tinstructor: string;`);
	lines.push(`};`);
	lines.push(``);
	lines.push(`export type ScheduleDay = {`);
	lines.push(`\tday: string;`);
	lines.push(`\tshort: string;`);
	lines.push(`\tslots: ClassSlot[];`);
	lines.push(`};`);
	lines.push(``);
	if (useSharedConstant) {
		lines.push(`const ${sharedInstructorIdent} = ${JSON.stringify(sharedInstructor)};`);
		lines.push(``);
	}
	lines.push(`export const schedule: ScheduleDay[] = [`);
	for (const d of schedule) {
		lines.push(`\t{`);
		lines.push(`\t\tday: ${JSON.stringify(d.day)},`);
		lines.push(`\t\tshort: ${JSON.stringify(d.short)},`);
		lines.push(`\t\tslots: [`);
		for (const s of d.slots) {
			lines.push(
				`\t\t\t{ time: ${JSON.stringify(s.time)}, name: ${JSON.stringify(s.name)}, instructor: ${instructorExpr(s.instructor)} },`
			);
		}
		lines.push(`\t\t],`);
		lines.push(`\t},`);
	}
	lines.push(`];`);
	lines.push(``);
	lines.push(`export const SCHEDULE_AS_OF = ${JSON.stringify(humanDate(generatedAt))};`);
	lines.push(`export const GYMDESK_SCHEDULE_URL = ${JSON.stringify(SCHEDULE_URL)};`);
	lines.push(``);
	return lines.join("\n");
}

// --- --check support: parse the *existing* src/data/schedule.ts back into { day, time, name,
// instructor } tuples with a small regex-based reader (no TS compiler dependency), so we can diff
// it against a freshly parsed GymDesk result. ---
function parseExistingSchedule(filePath) {
	let src;
	try {
		src = readFileSync(filePath, "utf8");
	} catch {
		return null;
	}

	// Resolve any single shared instructor constant(s), e.g. `const ANDREA = "Andrea Kilday";`.
	const constants = new Map();
	for (const m of src.matchAll(/const\s+([A-Z_][A-Z0-9_]*)\s*=\s*"([^"]*)"\s*;/g)) {
		constants.set(m[1], m[2]);
	}

	const arrayStart = src.indexOf("export const schedule");
	if (arrayStart === -1) return null;
	const body = src.slice(arrayStart);

	const days = [];
	let currentDay = null;
	for (const rawLine of body.split("\n")) {
		const line = rawLine.trim();
		const dayMatch = line.match(/^day:\s*"([^"]+)"\s*,?$/);
		if (dayMatch) {
			currentDay = dayMatch[1];
			continue;
		}
		const slotMatch = line.match(
			/^\{\s*time:\s*"([^"]*)"\s*,\s*name:\s*"([^"]*)"\s*,\s*instructor:\s*([^,}]+?)\s*,?\s*\}\s*,?$/
		);
		if (slotMatch && currentDay) {
			const [, time, name, instructorRaw] = slotMatch;
			const instructorExpr = instructorRaw.trim();
			let instructor;
			if (/^".*"$/.test(instructorExpr)) {
				instructor = instructorExpr.slice(1, -1);
			} else {
				instructor = constants.get(instructorExpr) ?? instructorExpr;
			}
			days.push({ day: currentDay, time, name, instructor });
		}
	}
	return days.length > 0 ? days : null;
}

function flattenGenerated(schedule) {
	const rows = [];
	for (const d of schedule) {
		for (const s of d.slots) {
			rows.push({ day: d.day, time: s.time, name: s.name, instructor: s.instructor });
		}
	}
	return rows;
}

function diffRows(existingRows, generatedRows) {
	const key = (r) => `${r.day}::${r.time}::${r.name}`;
	const existingByKey = new Map(existingRows.map((r) => [key(r), r]));
	const generatedByKey = new Map(generatedRows.map((r) => [key(r), r]));

	const lines = [];
	for (const [k, gen] of generatedByKey) {
		const ex = existingByKey.get(k);
		if (!ex) {
			lines.push(`+ [${gen.day}] "${gen.time}" ${gen.name} (${gen.instructor})  <-- new in GymDesk, not in snapshot`);
		} else if (ex.instructor !== gen.instructor) {
			lines.push(`~ [${gen.day}] "${gen.time}" ${gen.name}: instructor "${ex.instructor}" -> "${gen.instructor}"`);
		}
	}
	for (const [k, ex] of existingByKey) {
		if (!generatedByKey.has(k)) {
			lines.push(`- [${ex.day}] "${ex.time}" ${ex.name} (${ex.instructor})  <-- in snapshot, not found on GymDesk`);
		}
	}
	return lines;
}

async function main() {
	const args = parseArgs(process.argv.slice(2));

	let html;
	try {
		html = await fetchScheduleHtml();
	} catch (err) {
		console.error(`[fetch-schedule] Could not fetch ${SCHEDULE_URL}: ${err.message}`);
		console.error(`[fetch-schedule] Leaving the existing schedule snapshot untouched.`);
		process.exit(0);
	}

	const events = extractEvents(html);
	const { days: schedule, unmappedTitles, unmappedInstructors } = buildSchedule(events);

	if (unmappedTitles.size > 0) {
		console.error(
			`[fetch-schedule] WARNING: ${unmappedTitles.size} class title(s) not in DISPLAY_MAP (used a title-case fallback instead of the site's published copy):`
		);
		for (const t of unmappedTitles) console.error(`  - ${JSON.stringify(t)}`);
	}
	if (unmappedInstructors.size > 0) {
		console.error(
			`[fetch-schedule] WARNING: ${unmappedInstructors.size} instructor name(s) not in INSTRUCTOR_MAP (used the raw GymDesk string instead):`
		);
		for (const i of unmappedInstructors) console.error(`  - ${JSON.stringify(i)}`);
	}

	if (daysWithClasses(schedule) < MIN_DAYS_WITH_CLASSES || totalClasses(schedule) === 0) {
		console.error(
			`[fetch-schedule] Parsed only ${daysWithClasses(schedule)} day(s) with classes and ${totalClasses(
				schedule
			)} total classes (need >= ${MIN_DAYS_WITH_CLASSES} days and > 0 classes). GymDesk's markup may` +
				` have changed. Leaving the existing schedule snapshot untouched.`
		);
		process.exit(0);
	}

	if (args.check) {
		const existingRows = parseExistingSchedule(DEFAULT_OUT);
		if (!existingRows) {
			console.log(`[fetch-schedule] Could not parse an existing schedule at ${DEFAULT_OUT} to diff against.`);
			process.exit(0);
		}
		const generatedRows = flattenGenerated(schedule);
		const diffs = diffRows(existingRows, generatedRows);
		if (diffs.length === 0) {
			console.log(`[fetch-schedule] No differences: GymDesk matches ${DEFAULT_OUT} exactly (day, time, name, instructor).`);
		} else {
			console.log(`[fetch-schedule] ${diffs.length} difference(s) between GymDesk and ${DEFAULT_OUT}:`);
			for (const line of diffs) console.log(line);
		}
		process.exit(0);
	}

	const out = renderFile(schedule, new Date());
	writeFileSync(args.out, out, "utf8");
	console.error(`[fetch-schedule] Wrote ${daysWithClasses(schedule)} day(s), ${totalClasses(schedule)} class(es) to ${args.out}`);
}

main().catch((err) => {
	// Belt and braces: never let an unexpected error break the build.
	console.error(`[fetch-schedule] Unexpected error: ${err?.stack || err}`);
	process.exit(0);
});
