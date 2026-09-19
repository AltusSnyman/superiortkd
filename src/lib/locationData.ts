export interface LocationData {
    slug: string;
    title: string;
    // Optional H1 override for the page hero. When omitted, the page falls
    // back to deriving the heading from `title` (text before the first "|").
    heading?: string;
    metaDescription: string;
    heroImage: string;
    introTitle: string;
    introContent: string[]; // Array of paragraphs
    // Verbatim drive-time claim for this place, lower-case start (capitalise
    // when it opens a sentence). One of the fixed set from the copy brief —
    // never invent a more precise number or a distance in km.
    driveTime: string;
    gettingHere: {
        title: string;
        content: string[];
    };
    classesForFamilies: {
        title: string;
        content: string[];
    };
    historyTitle: string;
    historyContent: string[];
    whyChooseUs: {
        title: string;
        items: {
            title: string;
            content: string;
        }[];
    };
    serviceArea: {
        title: string;
        description: string;
        landmarks: string[];
        neighborhoods: string[];
        majorRoutes: string[];
    };
    faq: {
        question: string;
        answer: string;
    }[];
}

export const locationData: LocationData[] = [
    {
        slug: "helensville",
        title: "Taekwondo Classes in Helensville | Superior Taekwondo",
        metaDescription: "Taekwondo training in Helensville at 94 Mill Road. Kids from age 4, teens and adults, coached by a 2016 Olympian. Your first class is free.",
        heroImage: "/images/locations/helensville-hero.webp",
        introTitle: "Taekwondo training in the middle of Helensville",
        introContent: [
            "Superior Taekwondo trains at 94 Mill Road, Helensville, just off Commercial Road in the middle of town. We're a World Taekwondo club, and we've trained here since 2016 — no branch, no franchise, just the one dojang.",
            "Every class is led by head coach Andrea Kilday, a 3rd Dan black belt, WT Level 2 coach and 2016 Rio Olympian. Kids start in Little Superior Legends from age 4, older kids and teens move through Youth Superior Legends and the Cadets, Juniors and Seniors classes, and adults train alongside them on Tuesday mornings and Friday evenings.",
            "If you're already in Helensville, this is the closest training on offer — no highway drive, just parking at the door. Sessions start at $30 a week for one class or $40 a week for unlimited training, with sibling tiers at $55, $70, $80 and $90 a week for families with more than one child on the mat. We're rated 5.0 from 23 Google reviews, and your first class is free."
        ],
        driveTime: "in town, a few minutes from Commercial Road",
        gettingHere: {
            title: "Getting here from Helensville",
            content: [
                "We're in town, a few minutes from Commercial Road. 94 Mill Road has parking right at the door, so you can pull in, walk your child to the mat and be back in the car within a couple of minutes.",
                "There's no highway leg for local families — Mill Road runs through the middle of Helensville, and the dojang is easy to find on a first visit. If you have questions before you come in, call 027 520 1613, or check the live class timetable and book online at superior-taekwondo.gymdesk.com."
            ]
        },
        classesForFamilies: {
            title: "Classes that suit families from Helensville",
            content: [
                "Because you're already in town, the school run isn't the obstacle it can be for families driving in from further out. Little Superior Legends runs 4:00–4:40pm (ages 4–5) and Youth Superior Legends 4:45–5:30pm (ages 6–11), Monday to Thursday, so most primary-aged kids can go straight from school to the mat.",
                "From age 12, kids move into the Cadets, Juniors and Seniors class on Tuesday and Thursday, 5:30–6:30pm. Adults can train Tuesday mornings, 9:00–10:00am, or join the whole family on Friday at 4:30–5:30pm for the Superior Family Class. Saturday mornings have the Fitness Circuit Class at 9:15am and the Performance Pathway squad from 10:15am to 12:45pm for students working toward competition."
            ]
        },
        historyTitle: "One dojang, since 2016",
        historyContent: [
            "Superior Taekwondo has trained at 94 Mill Road since 2016. It's a World Taekwondo club, and every class is led by head coach Andrea Kilday — a 3rd Dan black belt, WT Level 2 coach, and 2016 Rio Olympian who also won gold at the 2015 Pacific Games.",
            "Helensville grew up as a timber and river-port town on the Kaipara Harbour, and Mill Road still runs through the centre of it. We've kept the club to one site rather than opening a second location — Helensville locals and families driving in from Kaukapakapa and Kumeū all train under the same coaching team, on the same World Taekwondo syllabus from a first white-belt class through to black belt grading."
        ],
        whyChooseUs: {
            title: "Why Helensville families choose Superior Taekwondo",
            items: [
                {
                    title: "Local and close",
                    content: "94 Mill Road is in the middle of Helensville, with parking at the door — no highway drive if you're already in town. There's extra parking on Commercial Road if the dojang car park is full."
                },
                {
                    title: "Olympian-led coaching",
                    content: "Every class is led by head coach Andrea Kilday, a 2016 Rio Olympian, 3rd Dan black belt and WT Level 2 coach."
                },
                {
                    title: "One dojang, not a franchise",
                    content: "One site, one coaching team, and a clear belt path from your first class through to black belt. A 10-week term is $300 for one class a week, or $400 for unlimited training."
                }
            ]
        },
        serviceArea: {
            title: "Based in Helensville, serving the Kaipara district",
            description: "We're based in the middle of Helensville, and families from across the wider Kaipara district come to the same dojang — there's no second site, and the class times and prices are the same wherever you're driving in from.",
            landmarks: [
                "Helensville Railway Station",
                "Kaipara River",
                "Parakai Springs",
                "Helensville Museum",
                "Kaipara College"
            ],
            neighborhoods: [
                "Helensville Central",
                "Parakai",
                "Shelly Beach",
                "South Head",
                "Kaukapakapa",
                "Woodhill"
            ],
            majorRoutes: [
                "State Highway 16",
                "Mill Road",
                "Parkhurst Road"
            ]
        },
        faq: [
            {
                question: "How far is the dojang from Helensville?",
                answer: "In town, a few minutes from Commercial Road. We're at 94 Mill Road, Helensville, with parking at the door."
            },
            {
                question: "Which class should my child start in?",
                answer: "Ages 4 to 5 start in Little Superior Legends, 6 to 11 in Youth Superior Legends, and 12 and up train with the Cadets, Juniors and Seniors. The first class is free, so come and try."
            },
            {
                question: "Do we have to buy a uniform before the trial?",
                answer: "No. Comfortable sports clothes and a water bottle are all you need for the first class. Uniforms are arranged after you join."
            }
        ]
    },
    {
        slug: "auckland",
        title: "Taekwondo Classes in Auckland's North West | Superior Taekwondo",
        heading: "Taekwondo in Auckland: our dojang in the north-west",
        metaDescription: "Looking for Taekwondo in Auckland? Our dojang is in Helensville, north-west of the city up SH16. Olympian coaching for kids, teens and adults. Free trial.",
        heroImage: "/images/locations/auckland-hero.webp",
        introTitle: "One dojang, serving Auckland's north-west",
        introContent: [
            "We're not in the central city. Superior Taekwondo trains at one dojang at 94 Mill Road, Helensville, up State Highway 16 from Auckland. Families come from Kumeū, Huapai, Waimauku, Kaukapakapa, Riverhead, Westgate and the Kaipara coast. Classes run for kids from age 4, teens and adults, six days a week, and every student is coached by a team led by 2016 Olympian Andrea Kilday. Your first class is free.",
            "Getting to us means a drive up SH16, but families tell us it's worth it. Classes are practical: real technique, real fitness, and a clear belt path from white belt through to black. There's no franchise script here — just one dojang, one coaching team, and a training standard that meets World Taekwondo requirements.",
            "Auckland is spread out and a Helensville address isn't for everyone. But if you're prepared to make the drive, you'll find a small, focused club rather than a big-city chain: kids' classes starting at 4pm on weekdays, a Saturday morning slot, and coaches who know every student by name. Sessions start at $30 a week for one class or $40 a week unlimited, with sibling tiers at $55, $70, $80 and $90 a week, and we're rated 5.0 from 23 Google reviews."
        ],
        driveTime: "35 to 55 minutes north-west of the city on SH16, depending on where you start",
        gettingHere: {
            title: "Getting here from Auckland",
            content: [
                "From central Auckland, allow 35 to 55 minutes north-west of the city on SH16, depending on where you start and the time of day. Head out on State Highway 16 and stay on it through Westgate, Riverhead and Kumeū — Helensville is at the end of that run.",
                "Once you reach Helensville, 94 Mill Road is easy to find, with parking right at the door. If you have questions before you make the trip, call 027 520 1613, or check the live class timetable and book online at superior-taekwondo.gymdesk.com."
            ]
        },
        classesForFamilies: {
            title: "Classes that suit families driving up from Auckland",
            content: [
                "A 35-to-55-minute drive makes a straight-after-school dash harder, so a lot of Auckland families use the classes that don't compete with the evening commute. The Superior Family Class runs Friday 4:30–5:30pm, and Saturday morning has the Fitness Circuit Class at 9:15am and the Performance Pathway squad from 10:15am to 12:45pm — all easier to plan around than a weekday peak-hour trip.",
                "If you can manage the drive on a weeknight, Little Superior Legends (ages 4–5) runs 4:00–4:40pm and Youth Superior Legends (ages 6–11) 4:45–5:30pm, Monday to Thursday, with the 12-and-up class on Tuesday and Thursday, 5:30–6:30pm. Adults can also train Tuesday mornings, 9:00–10:00am, outside the school-run traffic altogether."
            ]
        },
        historyTitle: "One club, one address",
        historyContent: [
            "Superior Taekwondo has always trained out of the one dojang in Helensville. We're a World Taekwondo club, led by head coach Andrea Kilday — a 3rd Dan black belt, WT Level 2 coach, and 2016 Rio Olympian who also won gold at the 2015 Pacific Games.",
            "We've never opened a branch in central Auckland. The dojang has always been at 94 Mill Road, Helensville, up SH16 from the city, and families from across the north-west make that drive rather than training at a franchise closer to home, training the same World Taekwondo syllabus from a first white-belt class through to black belt grading."
        ],
        whyChooseUs: {
            title: "Why families make the drive",
            items: [
                {
                    title: "Olympian-led coaching",
                    content: "Head coach Andrea Kilday represented New Zealand at the Rio 2016 Olympics, and that standard runs through every class."
                },
                {
                    title: "One dojang, no franchise gimmicks",
                    content: "Everyone trains at 94 Mill Road, Helensville — not a chain of branches. What you see is the club you join. A 10-week term is $300 for one class a week, or $400 for unlimited training."
                },
                {
                    title: "A class for every age",
                    content: "Little Superior Legends from age 4, Youth and 12+ classes for kids and teens, and an Adults class for parents who want to train too. Andrea Kilday holds a 3rd Dan black belt and a WT Level 2 coaching qualification."
                }
            ]
        },
        serviceArea: {
            title: "Where our Auckland families come from",
            description: "We're based in Helensville, up SH16 from the city. Families who train with us travel in from across Auckland's north-west, and the same class times and pricing apply no matter which suburb you're driving in from.",
            landmarks: [
                "Westgate Shopping Centre",
                "Kumeu Showgrounds",
                "Riverhead Forest",
                "Muriwai Beach",
                "Kaipara Coast"
            ],
            neighborhoods: [
                "Kumeū",
                "Huapai",
                "Waimauku",
                "Kaukapakapa",
                "Riverhead",
                "Westgate",
                "Kaipara Coast"
            ],
            majorRoutes: [
                "State Highway 16",
                "Coatesville-Riverhead Highway"
            ]
        },
        faq: [
            {
                question: "How far is the dojang from central Auckland?",
                answer: "35 to 55 minutes north-west of the city on SH16, depending on where you start. We're at 94 Mill Road, Helensville, with parking at the door."
            },
            {
                question: "Which class should my child start in?",
                answer: "Ages 4 to 5 start in Little Superior Legends, 6 to 11 in Youth Superior Legends, and 12 and up train with the Cadets, Juniors and Seniors. The first class is free, so come and try."
            },
            {
                question: "Do we have to buy a uniform before the trial?",
                answer: "No. Comfortable sports clothes and a water bottle are all you need for the first class. Uniforms are arranged after you join."
            }
        ]
    },
    {
        slug: "kumeu",
        title: "Taekwondo Classes near Kumeū | Superior Taekwondo",
        heading: "Taekwondo classes for Kumeū families",
        metaDescription: "Taekwondo for Kumeū and Huapai families: kids from age 4, teens and adults. Our Helensville dojang is up SH16, Olympian-led. Free trial class.",
        heroImage: "/images/hero-poster.webp",
        introTitle: "Taekwondo classes for Kumeū families",
        introContent: [
            "Kumeū doesn't have its own dojang, but ours is a straightforward drive up State Highway 16 at 94 Mill Road, Helensville, with parking at the door. Kids' classes start at 4pm on weekdays, so families from Kumeū and Huapai can make it after school.",
            "Superior Taekwondo is a World Taekwondo club led by Andrea Kilday, who represented New Zealand at the Rio 2016 Olympics. Kids start in Little Superior Legends from age 4, where the focus is listening, balance, confidence and having fun in a structured class. Teens and adults train in the 12+, Family and Adults classes, and students who want to compete can move into the Performance Pathway squad.",
            "Sessions start at $30 a week for one class, or $40 a week for unlimited training, with sibling tiers at $55, $70, $80 and $90 a week for families with more than one child. A 10-week term is $300 for one class a week or $400 unlimited, and we're rated 5.0 from 23 Google reviews. Your first class is free: come along, meet the coaches, and see if it fits."
        ],
        driveTime: "about 20 minutes up SH16",
        gettingHere: {
            title: "Getting here from Kumeū",
            content: [
                "From Kumeū, it's about 20 minutes up SH16 to 94 Mill Road, Helensville. Stay on State Highway 16 north-west through Huapai and Waimauku; Mill Road is on your right as you come into Helensville.",
                "There's parking right at the door, so drop-off and pick-up is quick even on a school night. If you have questions before you visit, call 027 520 1613, or check the live class timetable and book online at superior-taekwondo.gymdesk.com."
            ]
        },
        classesForFamilies: {
            title: "Classes that suit families from Kumeū",
            content: [
                "Leaving Kumeū straight after school gives most families enough time to make Youth Superior Legends, 4:45–5:30pm, or the earlier Little Superior Legends session, 4:00–4:40pm, if you can get away a little sooner — both run Monday to Thursday.",
                "From age 12, kids move into the Cadets, Juniors and Seniors class on Tuesday and Thursday, 5:30–6:30pm. Adults can train Tuesday mornings, 9:00–10:00am, or join the Superior Family Class on Friday, 4:30–5:30pm. Saturday mornings have the Fitness Circuit Class at 9:15am and the Performance Pathway squad from 10:15am to 12:45pm."
            ]
        },
        historyTitle: "Training the north-west since 2016",
        historyContent: [
            "Superior Taekwondo has trained at 94 Mill Road, Helensville since 2016. It's a World Taekwondo club led by head coach Andrea Kilday — a 3rd Dan black belt, WT Level 2 coach, and 2016 Rio Olympian.",
            "We've never opened a second site in Kumeū or Huapai. The dojang has always been at 94 Mill Road, and families from both townships make the run up SH16 rather than training at a franchise closer to home, on the same World Taekwondo syllabus from a first white-belt class through to black belt grading."
        ],
        whyChooseUs: {
            title: "Why Kumeū families choose Superior Taekwondo",
            items: [
                {
                    title: "A short run up SH16",
                    content: "94 Mill Road, Helensville is about 20 minutes up State Highway 16, with parking at the door. A 10-week term is $300 for one class a week, or $400 for unlimited training."
                },
                {
                    title: "Olympian-led team",
                    content: "Head coach Andrea Kilday represented New Zealand at the Rio 2016 Olympics — she holds a 3rd Dan black belt and a WT Level 2 coaching qualification, and leads a team that coaches every belt level."
                },
                {
                    title: "Classes for the whole family",
                    content: "Little Superior Legends from age 4, classes for teens and adults, and sibling discounts for families training together. We're rated 5.0 from 23 Google reviews."
                }
            ]
        },
        serviceArea: {
            title: "Serving Kumeū and Huapai",
            description: "We don't have a dojang in Kumeū — everyone trains at 94 Mill Road, Helensville, up SH16. Here's what that drive looks like from around Kumeū and Huapai, and the class times and pricing are the same for both townships. If a weekly class doesn't suit, a 10-session concession card is $285 and can be used at any class on the timetable.",
            landmarks: [
                "Kumeu Showgrounds",
                "Kumeū Village",
                "Huapai Village"
            ],
            neighborhoods: [
                "Kumeū",
                "Huapai",
                "Riverhead",
                "Waimauku"
            ],
            majorRoutes: [
                "State Highway 16"
            ]
        },
        faq: [
            {
                question: "How far is the dojang from Kumeū?",
                answer: "About 20 minutes up SH16. We're at 94 Mill Road, Helensville, with parking at the door."
            },
            {
                question: "Which class should my child start in?",
                answer: "Ages 4 to 5 start in Little Superior Legends, 6 to 11 in Youth Superior Legends, and 12 and up train with the Cadets, Juniors and Seniors. The first class is free, so come and try."
            },
            {
                question: "Do we have to buy a uniform before the trial?",
                answer: "No. Comfortable sports clothes and a water bottle are all you need for the first class. Uniforms are arranged after you join."
            }
        ]
    },
    {
        slug: "kaukapakapa",
        title: "Taekwondo Classes for Kaukapakapa | Superior Taekwondo",
        metaDescription: "Taekwondo for Kaukapakapa families: about 15 minutes down the Kaipara Coast Highway to 94 Mill Road, Helensville. Kids from age 4. Free trial class.",
        heroImage: "/images/locations/kaukapakapa-hero.webp",
        introTitle: "Taekwondo for Kaukapakapa families",
        introContent: [
            "Kaukapakapa doesn't have its own dojang — families from the village train with us at 94 Mill Road, Helensville, a short drive down the Kaipara Coast Highway. It's become a regular part of the week for a number of local families: a structured class, a free trial, and parking at the door.",
            "Superior Taekwondo is a World Taekwondo club led by Andrea Kilday, a 2016 Rio Olympian. Kids start in Little Superior Legends from age 4, moving through Youth Superior Legends and, from age 12, the Cadets, Juniors and Seniors class. Adults train alongside them on Tuesday mornings and at the Friday Family Class.",
            "Because the drive is short, the weekday classes are realistic even after a full day at school or work — and Saturday morning is there for families who'd rather not do a weeknight trip at all. Sessions start at $30 a week for one class or $40 a week unlimited, with sibling tiers at $55, $70, $80 and $90 a week, and we're rated 5.0 from 23 Google reviews."
        ],
        driveTime: "about 15 minutes down the Kaipara Coast Highway",
        gettingHere: {
            title: "Getting here from Kaukapakapa",
            content: [
                "From Kaukapakapa, it's about 15 minutes down the Kaipara Coast Highway to 94 Mill Road, Helensville. The route is a straightforward run south on SH16 — no turns to think about.",
                "Parking is at the door, so there's no need to find street parking in town once you arrive. If you have questions before you come in, call 027 520 1613, or check the live class timetable and book online at superior-taekwondo.gymdesk.com."
            ]
        },
        classesForFamilies: {
            title: "Classes that suit families from Kaukapakapa",
            content: [
                "A 15-minute drive down the highway still leaves room for the after-school classes: Little Superior Legends runs 4:00–4:40pm (ages 4–5) and Youth Superior Legends 4:45–5:30pm (ages 6–11), Monday to Thursday.",
                "From age 12, kids move into the Cadets, Juniors and Seniors class on Tuesday and Thursday, 5:30–6:30pm. Adults can train Tuesday mornings, 9:00–10:00am, or join the Superior Family Class on Friday, 4:30–5:30pm. Saturday has the Fitness Circuit Class at 9:15am and the Performance Pathway squad from 10:15am to 12:45pm, both a shorter round trip on a weekend."
            ]
        },
        historyTitle: "Serving Kaukapakapa since 2016",
        historyContent: [
            "Superior Taekwondo has trained at 94 Mill Road, Helensville since 2016. It's a World Taekwondo club led by head coach Andrea Kilday — a 3rd Dan black belt, WT Level 2 coach, and 2016 Rio Olympian.",
            "Kaukapakapa sits on the Kaipara Coast Highway north of Helensville, close to the Kaipara Coast Sculpture Gardens and Kaukapakapa School. We've never opened a dojang in the village — families make the short drive down SH16 to train at 94 Mill Road instead, on the same World Taekwondo syllabus from a first white-belt class through to black belt grading."
        ],
        whyChooseUs: {
            title: "Why Kaukapakapa families choose Superior Taekwondo",
            items: [
                {
                    title: "A short drive down the highway",
                    content: "94 Mill Road, Helensville is about 15 minutes down the Kaipara Coast Highway — the closest dojang for local families. A 10-week term is $300 for one class a week, or $400 for unlimited training."
                },
                {
                    title: "Olympian-led coaching",
                    content: "Head coach Andrea Kilday represented New Zealand at the Rio 2016 Olympics — she holds a 3rd Dan black belt and a WT Level 2 coaching qualification, and leads a team that coaches every belt level."
                },
                {
                    title: "Kids from age 4",
                    content: "Little Superior Legends is a structured, age-appropriate starting point for younger children, four days a week, with sibling discounts once more than one child joins."
                }
            ]
        },
        serviceArea: {
            title: "Serving Kaukapakapa and surrounds",
            description: "We don't have a dojang in Kaukapakapa — the village and surrounding lifestyle blocks train with us at 94 Mill Road, Helensville, down the Kaipara Coast Highway. The class times and pricing are the same as for our Helensville-based families. If a weekly class doesn't suit, a 10-session concession card is $285 and can be used at any class on the timetable.",
            landmarks: [
                "Omeru Scenic Reserve",
                "Kaipara Coast Sculpture Gardens",
                "Kaukapakapa School"
            ],
            neighborhoods: [
                "Kaukapakapa Village",
                "Waitoki",
                "Makarau",
                "Peak Road",
                "Kahikatea Flat"
            ],
            majorRoutes: [
                "State Highway 16 (North)",
                "Kahikatea Flat Road",
                "Peak Road"
            ]
        },
        faq: [
            {
                question: "How far is the dojang from Kaukapakapa?",
                answer: "About 15 minutes down the Kaipara Coast Highway. We're at 94 Mill Road, Helensville, with parking at the door."
            },
            {
                question: "Which class should my child start in?",
                answer: "Ages 4 to 5 start in Little Superior Legends, 6 to 11 in Youth Superior Legends, and 12 and up train with the Cadets, Juniors and Seniors. The first class is free, so come and try."
            },
            {
                question: "Do we have to buy a uniform before the trial?",
                answer: "No. Comfortable sports clothes and a water bottle are all you need for the first class. Uniforms are arranged after you join."
            }
        ]
    },
    {
        slug: "waimauku",
        title: "Waimauku Taekwondo Classes | Superior Taekwondo",
        metaDescription: "Taekwondo for Waimauku families: about 10 minutes up SH16 to 94 Mill Road, Helensville. Kids from age 4, Olympian-led coaching. Free trial class.",
        heroImage: "/images/locations/waimauku-hero.webp",
        introTitle: "Taekwondo for Waimauku families",
        introContent: [
            "Waimauku doesn't have its own dojang — we train out of 94 Mill Road, Helensville, one of the shortest drives of any of our catchment areas. Families from Waimauku, School Road and out toward Muriwai make the trip up SH16 as part of a normal week.",
            "Superior Taekwondo is a World Taekwondo club led by Andrea Kilday, a 2016 Rio Olympian. Kids start in Little Superior Legends from age 4, moving into Youth Superior Legends and, from age 12, the Cadets, Juniors and Seniors class. Adults train Tuesday mornings, and the whole family can train together on Friday afternoons.",
            "Sessions start at $30 a week for one class, or $40 a week unlimited, with sibling tiers at $55, $70, $80 and $90 a week for families training together. A 10-week term is $300 for one class a week or $400 unlimited, and we're rated 5.0 from 23 Google reviews. Your first class is free."
        ],
        driveTime: "about 10 minutes up SH16",
        gettingHere: {
            title: "Getting here from Waimauku",
            content: [
                "From Waimauku, it's about 10 minutes up SH16 to 94 Mill Road, Helensville — one of the shorter drives on our books. Head north-west on State Highway 16 and you're at the door within minutes.",
                "Parking is right outside, so there's no need to look for street parking once you arrive. If you have questions before you visit, call 027 520 1613, or check the live class timetable and book online at superior-taekwondo.gymdesk.com."
            ]
        },
        classesForFamilies: {
            title: "Classes that suit families from Waimauku",
            content: [
                "A 10-minute run up SH16 makes the after-school classes easy: Little Superior Legends, 4:00–4:40pm (ages 4–5), and Youth Superior Legends, 4:45–5:30pm (ages 6–11), both run Monday to Thursday.",
                "From age 12, kids move into the Cadets, Juniors and Seniors class on Tuesday and Thursday, 5:30–6:30pm. Adults can train Tuesday mornings, 9:00–10:00am, or join the Superior Family Class on Friday, 4:30–5:30pm. Saturday mornings have the Fitness Circuit Class at 9:15am and the Performance Pathway squad from 10:15am to 12:45pm."
            ]
        },
        historyTitle: "Serving Waimauku since 2016",
        historyContent: [
            "Superior Taekwondo has trained at 94 Mill Road, Helensville since 2016. It's a World Taekwondo club led by head coach Andrea Kilday — a 3rd Dan black belt, WT Level 2 coach, and 2016 Rio Olympian.",
            "Waimauku sits on SH16 between Kumeū and Helensville, close to Muriwai Beach and Waimauku School. We've never opened a dojang in the village — families make the short run up SH16 to train at 94 Mill Road instead, on the same World Taekwondo syllabus from a first white-belt class through to black belt grading, taught by the same coaching team every family trains under, wherever in the north-west they start from."
        ],
        whyChooseUs: {
            title: "Why Waimauku families choose Superior Taekwondo",
            items: [
                {
                    title: "One of the shorter drives",
                    content: "94 Mill Road, Helensville is about 10 minutes up SH16 from Waimauku, with parking right at the door. A 10-week term is $300 for one class a week, or $400 for unlimited training."
                },
                {
                    title: "Olympian-led coaching",
                    content: "Head coach Andrea Kilday represented New Zealand at the Rio 2016 Olympics — she holds a 3rd Dan black belt and a WT Level 2 coaching qualification, and leads a team that coaches every belt level."
                },
                {
                    title: "Family-friendly pricing",
                    content: "Sibling discount tiers at $55, $70, $80 and $90 a week make it more affordable for more than one child to train, and the Friday Family Class is open to parents too."
                }
            ]
        },
        serviceArea: {
            title: "Serving Waimauku and Muriwai",
            description: "We don't have a dojang in Waimauku — the village and the surrounding countryside train with us at 94 Mill Road, Helensville, a short drive up SH16. The class times and pricing are the same as for our Helensville-based families. If a weekly class doesn't suit, a 10-session concession card is $285 and can be used at any class on the timetable.",
            landmarks: [
                "Waimauku School",
                "Muriwai Beach",
                "Glasgow Park",
                "Waimauku Village Centre"
            ],
            neighborhoods: [
                "Waimauku Village",
                "Muriwai Valley",
                "School Road",
                "Restall Road",
                "Taiapa Road"
            ],
            majorRoutes: [
                "State Highway 16",
                "Muriwai Road",
                "Waimauku Station Road"
            ]
        },
        faq: [
            {
                question: "How far is the dojang from Waimauku?",
                answer: "About 10 minutes up SH16. We're at 94 Mill Road, Helensville, with parking at the door."
            },
            {
                question: "Which class should my child start in?",
                answer: "Ages 4 to 5 start in Little Superior Legends, 6 to 11 in Youth Superior Legends, and 12 and up train with the Cadets, Juniors and Seniors. The first class is free, so come and try."
            },
            {
                question: "Do we have to buy a uniform before the trial?",
                answer: "No. Comfortable sports clothes and a water bottle are all you need for the first class. Uniforms are arranged after you join."
            }
        ]
    },
    {
        slug: "huapai",
        title: "Huapai Taekwondo Classes | Superior Taekwondo",
        metaDescription: "Taekwondo for Huapai families: about 20 minutes up SH16 to 94 Mill Road, Helensville. Kids from age 4, Olympian-led coaching. Free trial class.",
        heroImage: "/images/locations/huapai-hero.webp",
        introTitle: "Taekwondo for Huapai families",
        introContent: [
            "Huapai doesn't have its own dojang — families from the Huapai Triangle and surrounding streets train with us at 94 Mill Road, Helensville, a short drive down SH16. It's a straightforward addition to the week: one class, one trip, parking at the door.",
            "Superior Taekwondo is a World Taekwondo club led by Andrea Kilday, a 2016 Rio Olympian. Kids start in Little Superior Legends from age 4, moving through Youth Superior Legends and, from age 12, the Cadets, Juniors and Seniors class. Adults train alongside them on Tuesday mornings and the Friday Family Class.",
            "Sessions start at $30 a week for one class, or $40 a week for unlimited training, with sibling tiers at $55, $70, $80 and $90 a week for families with more than one child. A 10-week term is $300 for one class a week or $400 unlimited, and we're rated 5.0 from 23 Google reviews. Your first class is free."
        ],
        driveTime: "about 20 minutes up SH16",
        gettingHere: {
            title: "Getting here from Huapai",
            content: [
                "From Huapai, it's about 20 minutes up SH16 to 94 Mill Road, Helensville. Stay on State Highway 16 north-west through Waimauku; Mill Road is on your right as you come into Helensville.",
                "There's parking right at the door, so drop-off and pick-up is quick even on a school night. If you have questions before you visit, call 027 520 1613, or check the live class timetable and book online at superior-taekwondo.gymdesk.com."
            ]
        },
        classesForFamilies: {
            title: "Classes that suit families from Huapai",
            content: [
                "Leaving Huapai straight after school gives most families enough time to make Youth Superior Legends, 4:45–5:30pm, or the earlier Little Superior Legends session, 4:00–4:40pm, if you can get away a little sooner — both run Monday to Thursday.",
                "From age 12, kids move into the Cadets, Juniors and Seniors class on Tuesday and Thursday, 5:30–6:30pm. Adults can train Tuesday mornings, 9:00–10:00am, or join the Superior Family Class on Friday, 4:30–5:30pm. Saturday mornings have the Fitness Circuit Class at 9:15am and the Performance Pathway squad from 10:15am to 12:45pm."
            ]
        },
        historyTitle: "Serving Huapai since 2016",
        historyContent: [
            "Superior Taekwondo has trained at 94 Mill Road, Helensville since 2016. It's a World Taekwondo club led by head coach Andrea Kilday — a 3rd Dan black belt, WT Level 2 coach, and 2016 Rio Olympian.",
            "Huapai sits alongside Kumeū on SH16, part of the fast-growing Huapai Triangle. We've never opened a second site here — Huapai families make the short drive down SH16 to train at 94 Mill Road, Helensville instead, on the same World Taekwondo syllabus from a first white-belt class through to black belt grading, taught by the same coaching team every family trains under, wherever in the north-west they start from."
        ],
        whyChooseUs: {
            title: "Why Huapai families choose Superior Taekwondo",
            items: [
                {
                    title: "A short run up SH16",
                    content: "94 Mill Road, Helensville is about 20 minutes up State Highway 16, with parking right at the door. A 10-week term is $300 for one class a week, or $400 for unlimited training."
                },
                {
                    title: "Olympian-led coaching",
                    content: "Head coach Andrea Kilday represented New Zealand at the Rio 2016 Olympics — she holds a 3rd Dan black belt and a WT Level 2 coaching qualification, and leads a team that coaches every belt level."
                },
                {
                    title: "A clear belt path",
                    content: "One dojang, one coaching team, and a syllabus that runs from a first class through to black belt. We're rated 5.0 from 23 Google reviews."
                }
            ]
        },
        serviceArea: {
            title: "Serving Huapai families from Helensville",
            description: "We don't have a dojang in Huapai — the Huapai Triangle and surrounding growth areas train with us at 94 Mill Road, Helensville, a short drive up SH16. The class times and pricing are the same as for our Helensville-based families. If a weekly class doesn't suit, a 10-session concession card is $285 and can be used at any class on the timetable.",
            landmarks: [
                "Huapai District School",
                "Huapai Domain",
                "The Huapai Triangle",
                "Kumeu Showgrounds"
            ],
            neighborhoods: [
                "Huapai Triangle",
                "Matua Ngaru",
                "Tapu Road",
                "Station Road",
                "Main Road Huapai"
            ],
            majorRoutes: [
                "State Highway 16",
                "Station Road",
                "Tapu Road"
            ]
        },
        faq: [
            {
                question: "How far is the dojang from Huapai?",
                answer: "About 20 minutes up SH16. We're at 94 Mill Road, Helensville, with parking at the door."
            },
            {
                question: "Which class should my child start in?",
                answer: "Ages 4 to 5 start in Little Superior Legends, 6 to 11 in Youth Superior Legends, and 12 and up train with the Cadets, Juniors and Seniors. The first class is free, so come and try."
            },
            {
                question: "Do we have to buy a uniform before the trial?",
                answer: "No. Comfortable sports clothes and a water bottle are all you need for the first class. Uniforms are arranged after you join."
            }
        ]
    }
];
