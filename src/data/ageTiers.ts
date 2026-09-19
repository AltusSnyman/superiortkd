// "Which class for my child" lookup table.
// Verbatim copy owned by the ClassFinder component — do not reword, do not add rows,
// do not invent facts. Cross-check against src/data/schedule.ts (the source of truth
// for the underlying timetable) before changing anything here; this file does not
// import or edit schedule.ts, it is kept consistent with it by hand.
//
// The club's public line is "from age 4" — never print "age 2" or "ages 2–5" here,
// even though schedule.ts keeps the raw GymDesk class name for Little Superior
// Legends with "(ages 2–5)" in it.

export type AgeTierRow = {
	ageBand: string;
	className: string;
	schedule: string;
	details: string;
};

export const ageTiers: AgeTierRow[] = [
	{
		ageBand: "4–5 years",
		className: "Little Superior Legends",
		schedule: "Mon, Tue, Wed 4:00–4:40pm",
		details:
			"40 minutes of games, balance and listening skills. From $30 a week.",
	},
	{
		ageBand: "6–11 years",
		className: "Youth Superior Legends (all belts)",
		schedule: "Mon–Thu 4:45–5:30pm; sparring Thu 4:00–4:45pm",
		details:
			"Technique, fitness and confidence. From $30 a week, unlimited $40.",
	},
	{
		ageBand: "12 years and up",
		className: "Cadets, Juniors and Seniors (all belts)",
		schedule: "Tue and Thu 5:30–6:30pm; sparring Thu 6:30–8:00pm",
		details:
			"Teens train together on the full WT syllabus. Unlimited $40 a week.",
	},
	{
		ageBand: "Adults",
		className: "Adults Taekwondo Class",
		schedule: "Tue 9:00–10:00am; plus any 12+ class",
		details:
			"Fitness, self-defence and belts at your pace. From $30 a week.",
	},
	{
		ageBand: "Whole family",
		className: "Superior Family Class",
		schedule: "Fri 4:30–5:30pm",
		details:
			"Parents and kids on the mat together, all ages and belts.",
	},
	{
		ageBand: "Want to compete?",
		className: "Superior Performance Pathway, Development Squad",
		schedule: "Mon 5:30–7:30pm, Wed 6:00–8:00pm, Sat 10:15am–12:45pm",
		details: "By invitation after your first term. Ask Andrea.",
	},
];
