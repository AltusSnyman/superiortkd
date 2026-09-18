// Superior Taekwondo weekly class timetable.
// Source: GymDesk (https://superior-taekwondo.gymdesk.com/schedule), week of 14-20 Sep 2026.
// Head coach Andrea Kilday instructs every class on the current timetable.
// IMPORTANT: this is a manually-transcribed snapshot, not a live feed. If GymDesk changes the
// timetable, this file must be re-checked and updated to match — do not assume it stays accurate.
//
// Note on "ages 2-5" class names below: these are the exact GymDesk class names and are kept
// verbatim here. The club's position is that Tiny Tigers actually starts from age 4 — any prose
// written elsewhere (hub copy, cards, FAQs) should say "from age 4", never "from age 2".

export type ClassSlot = {
	time: string;
	name: string;
	instructor: string;
};

export type ScheduleDay = {
	day: string;
	short: string;
	slots: ClassSlot[];
};

const ANDREA = "Andrea Kilday";

export const schedule: ScheduleDay[] = [
	{
		day: "Monday",
		short: "Mon",
		slots: [
			{ time: "4:00–4:40pm", name: "Little Superior Legends (ages 2–5)", instructor: ANDREA },
			{ time: "4:45–5:30pm", name: "Youth Superior Legends (ages 6–11, all belts)", instructor: ANDREA },
			{ time: "5:30–7:30pm", name: "Superior Performance Pathway, Development Squad", instructor: ANDREA },
		],
	},
	{
		day: "Tuesday",
		short: "Tue",
		slots: [
			{ time: "9:00–10:00am", name: "Adults Taekwondo Class", instructor: ANDREA },
			{ time: "4:00–4:40pm", name: "Little Superior Legends (ages 2–5)", instructor: ANDREA },
			{ time: "4:45–5:30pm", name: "Youth Superior Legends (ages 6–11)", instructor: ANDREA },
			{ time: "5:30–6:30pm", name: "Cadets, Juniors, Senior Superior Legends (12+, all belts)", instructor: ANDREA },
			{ time: "6:30–7:00pm", name: "Poomsae Class", instructor: ANDREA },
			{ time: "7:00–8:15pm", name: "Superior PSS Electronic Sparring Class (Daedo Gen 3)", instructor: ANDREA },
		],
	},
	{
		day: "Wednesday",
		short: "Wed",
		slots: [
			{ time: "4:00–4:40pm", name: "Little Superior Legends (ages 2–5)", instructor: ANDREA },
			{ time: "4:45–5:30pm", name: "Youth Superior Legends (ages 6–11)", instructor: ANDREA },
			{ time: "5:30–6:00pm", name: "Superior Fitness Kids/Teens Class", instructor: ANDREA },
			{ time: "6:00–8:00pm", name: "Superior Performance Pathway, Development Squad", instructor: ANDREA },
		],
	},
	{
		day: "Thursday",
		short: "Thu",
		slots: [
			{ time: "4:00–4:45pm", name: "Sparring Class, Youth Superior Legends (ages 5–11)", instructor: ANDREA },
			{ time: "4:45–5:30pm", name: "Youth Superior Legends (ages 6–11)", instructor: ANDREA },
			{ time: "5:30–6:30pm", name: "Cadets, Juniors, Senior Superior Legends (12+)", instructor: ANDREA },
			{ time: "6:30–8:00pm", name: "Superior Sparring Class (12+, all belts)", instructor: ANDREA },
		],
	},
	{
		day: "Friday",
		short: "Fri",
		slots: [
			{ time: "4:30–5:30pm", name: "Superior Family Class (all ages and belts)", instructor: ANDREA },
			{ time: "5:30–6:30pm", name: "Superior Poomsae/Sparring Classes (all ages)", instructor: ANDREA },
			{ time: "6:30–8:00pm", name: "Superior PSS Electronic Sparring Class (Daedo Gen 3)", instructor: ANDREA },
		],
	},
	{
		day: "Saturday",
		short: "Sat",
		slots: [
			{ time: "9:15–10:00am", name: "Superior Fitness Circuit Class", instructor: ANDREA },
			{ time: "10:15am–12:45pm", name: "Superior Performance Pathway, Development Squad", instructor: ANDREA },
		],
	},
	{
		day: "Sunday",
		short: "Sun",
		slots: [
			{ time: "10:00am–4:00pm", name: "Private Coaching Sessions (four 90-minute slots, bookable)", instructor: ANDREA },
		],
	},
];

export const SCHEDULE_AS_OF = "18 Sep 2026";
export const GYMDESK_SCHEDULE_URL = "https://superior-taekwondo.gymdesk.com/schedule";
