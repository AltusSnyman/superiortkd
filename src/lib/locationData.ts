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
    weatherImpact: {
        title: string;
        content: string;
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
        metaDescription: "Taekwondo training in Helensville at 94 Mill Road. Build confidence and discipline with Olympian-led coaching. Your first class is free.",
        heroImage: "/images/locations/helensville-hero.webp",
        introTitle: "Helensville's Premier Martial Arts Academy",
        introContent: [
            "Superior Taekwondo is proud to call Helensville home. Located at 94 Mill Road, our dojang sits at the heart of this historic township, serving the community with world-class martial arts training. Since our establishment, we have been dedicated to constructing champions not just in sport, but in life, right here in the Kaipara District.",
            "Helensville is known for its strong community spirit and rich heritage, values that align perfectly with the tenets of Taekwondo: Courtesy, Integrity, Perseverance, Self-Control, and Indomitable Spirit. Our classes cater to all ages and skill levels, from young beginners taking their first steps on the mat to seasoned athletes aiming for the national stage.",
            "We understand the unique rhythm of life in Helensville. Whether you're commuting back from the city or working locally in our thriving rural industries, our class schedules are designed to fit your busy lifestyle. We provide a supportive, disciplined environment where students can escape the daily grind and focus on personal growth."
        ],
        historyTitle: "A Legacy in the Kaipara District",
        historyContent: [
            "Helensville has a storied past, from its origins as a timber milling town to its status today as a vibrant rural hub. Just as the town has evolved, so too has the martial arts landscape. Superior Taekwondo brings modern, Olympic-style training to the region, bridging the gap between traditional discipline and contemporary athletic performance.",
            "Our presence in Helensville is more than just a business; it's a commitment to the future of our local youth. We have seen countless students from local schools like Helensville Primary and Kaipara College walk through our doors and transform into confident, respectful young leaders. We are honored to contribute to the legacy of this resilient town."
        ],
        whyChooseUs: {
            title: "Why Helensville Families Choose Superior Taekwondo",
            items: [
                {
                    title: "Local Convenience",
                    content: "Located directly on Mill Road, we are easily accessible for families across Helensville and Parakai. No need to battle Auckland traffic for elite training."
                },
                {
                    title: "Community Focus",
                    content: "We are deeply embedded in the local community. We participate in local events and foster a family-friendly atmosphere where everyone knows your name."
                },
                {
                    title: "Expert Instruction",
                    content: "Led by Olympic-level instructors, we bring world-class expertise to our small-town setting, ensuring every student receives top-tier guidance."
                }
            ]
        },
        serviceArea: {
            title: "Serving the Entire Kaipara Region",
            description: "While based in Helensville, our Taekwondo family extends throughout the surrounding areas. We are the central hub for martial arts education in the district.",
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
        weatherImpact: {
            title: "Training Through Helensville's Changing Seasons",
            content: "Helensville's weather can be unpredictable, from humid summers to damp winters near the Kaipara Harbour. Our facility is fully equipped to handle year-round training. We emphasize the importance of adaptability—just as we adapt to opponents in sparring, we adapt to our environment. On rainy winter nights, our dojang offers a warm, energetic refuge for constructive physical activity."
        },
        faq: [
            {
                question: "Where is your Helensville dojang located?",
                answer: "We are located at 94 Mill Road, Helensville, easily accessible from the main town centre."
            },
            {
                question: "Do you have parking available?",
                answer: "Yes, there is ample parking available for drop-offs and pick-ups."
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
            "We're not in the central city. Superior Taekwondo trains at one dojang at 94 Mill Road, Helensville, in Auckland's north-west up State Highway 16. Families come from Kumeū, Huapai, Waimauku, Kaukapakapa, Riverhead, Westgate and the Kaipara coast. Classes run for kids from age 4, teens and adults, six days a week, and every student is coached by a team led by 2016 Olympian Andrea Kilday. Your first class is free.",
            "Getting to us means a drive up SH16, but families tell us it's worth it. Classes are practical: real technique, real fitness, and a clear belt path from white belt through to black, taught by a team that includes a 2016 Olympian. There's no franchise script here — just one dojang, one coaching team, and a training standard that meets World Taekwondo requirements.",
            "We know Auckland is spread out and a Helensville address isn't for everyone. But if you're prepared to make the drive, you'll find a small, focused club rather than a big-city factory: kids' classes starting at 4pm on weekdays, a Saturday morning slot, and coaches who know every student by name."
        ],
        historyTitle: "One club, one address",
        historyContent: [
            "Superior Taekwondo has always trained out of the one dojang in Helensville. We haven't tried to be a citywide chain with a branch in every suburb — instead we've focused on building a strong programme in one place and let families from across Auckland's north-west come to us.",
            "Our instructors have trained and competed internationally, and that experience shapes the coaching here: modern, technical, and grounded in World Taekwondo standards, with a pathway from a first class through to competition."
        ],
        whyChooseUs: {
            title: "Why families make the drive",
            items: [
                {
                    title: "Olympian-led coaching",
                    content: "Head coach Andrea Kilday represented New Zealand at the Rio 2016 Olympics, and that standard runs through every class."
                },
                {
                    title: "One dojang, no gimmicks",
                    content: "Everyone trains at 94 Mill Road, Helensville — not a chain of franchised locations. What you see is the club you join."
                },
                {
                    title: "A class for every age",
                    content: "Tiny Tigers from age 4, a General class for teens and adults, and a Performance Pathway for students who want to compete."
                }
            ]
        },
        serviceArea: {
            title: "Where our Auckland families come from",
            description: "We're based in Helensville, up SH16 from the city. Families who train with us travel in from across Auckland's north-west.",
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
        weatherImpact: {
            title: "Training through Auckland's changeable weather",
            content: "Auckland's weather can turn quickly, especially out toward the Kaipara coast. Training indoors at our Helensville dojang means class goes ahead rain or shine, whatever it's doing on the drive up SH16."
        },
        faq: [
            {
                question: "Do you have a location in central Auckland?",
                answer: "No — we train at one dojang, 94 Mill Road, Helensville, up SH16 from the city. There's no branch anywhere else in Auckland."
            },
            {
                question: "Is it worth the drive from Auckland?",
                answer: "Families travel in from Kumeū, Huapai, Waimauku, Riverhead and further because of the coaching, not the postcode. Come try a free class and decide for yourself."
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
            "Superior Taekwondo is a World Taekwondo club led by Andrea Kilday, who represented New Zealand at the Rio 2016 Olympics. Kids start in Tiny Tigers from age 4, where the focus is listening, balance, confidence and having fun in a structured class. Teens and adults train in the General class, which mixes fitness, technique and self-defence, and students who want to compete can move into the Performance Pathway squad.",
            "Memberships start at $30 a week for one class, or $40 a week for unlimited training, with sibling discounts for families. Your first class is free: come along, meet the coaches, and see if it fits."
        ],
        historyTitle: "Training the north-west since day one",
        historyContent: [
            "Superior Taekwondo has never had a branch in Kumeū — our dojang has always been the one at 94 Mill Road, Helensville. Kumeū and Huapai families have simply made the short trip up SH16 part of their week.",
            "As Kumeū and Huapai have grown, so has the number of families making that drive. We've kept the club to one site rather than opening a second location, so every student trains under the same coaching team."
        ],
        whyChooseUs: {
            title: "Why Kumeū families choose Superior Taekwondo",
            items: [
                {
                    title: "Easy drive up SH16",
                    content: "94 Mill Road, Helensville is a straightforward run up State Highway 16, with parking at the door."
                },
                {
                    title: "Olympian-led team",
                    content: "Head coach Andrea Kilday represented New Zealand at the Rio 2016 Olympics, leading a team that coaches every belt level."
                },
                {
                    title: "Classes for the whole family",
                    content: "Tiny Tigers from age 4, a General class for teens and adults, and sibling discounts for families training together."
                }
            ]
        },
        serviceArea: {
            title: "Serving Kumeū and Huapai",
            description: "We don't have a dojang in Kumeū — everyone trains at 94 Mill Road, Helensville, up SH16. Here's what that drive looks like from around Kumeū and Huapai.",
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
        weatherImpact: {
            title: "Training whatever Kumeū's weather is doing",
            content: "Kumeū's weather can shift fast, especially heading into the wetter months. Training indoors at our Helensville dojang means class goes ahead as planned, whatever the drive up SH16 looks like that day."
        },
        faq: [
            {
                question: "Where is the nearest class to Kumeū?",
                answer: "Our dojang is at 94 Mill Road, Helensville, up SH16 from Kumeū."
            },
            {
                question: "What age can my child start?",
                answer: "Tiny Tigers takes children from age 4. Teens and adults join the General class."
            },
            {
                question: "Do I need any gear for the free trial?",
                answer: "No. Wear comfortable sports clothes and bring water. Uniforms are arranged after you join."
            }
        ]
    },
    {
        slug: "kaukapakapa",
        title: "Taekwondo Classes for Kaukapakapa | Superior Taekwondo",
        metaDescription: "Martial arts training for the Kaukapakapa community. Develop focus and strength with Superior Taekwondo. Local classes for kids and adults.",
        heroImage: "/images/locations/kaukapakapa-hero.webp",
        introTitle: "Martial Arts for the Kaukapakapa Community",
        introContent: [
            "Kaukapakapa is a growing community that values its rural roots. We don't have a dojang in the village — families from Kaukapakapa train with us at our Helensville dojang, a short drive down SH16. It's become a local activity for many 'Kau' families: character, fitness and community connections, just a few minutes from home.",
            "For families in Kaukapakapa, finding quality extracurricular activities often means a long drive. We bridge that gap by being easily accessible via SH16. Our classes offer a constructive outlet for energy, teaching children respect and discipline, while offering adults a challenging way to stay fit and focused.",
            "The 'Kau' spirit of resilience and neighborliness is something we cherish. Our dojang is an extension of that community spirit—a place where everyone supports each other's journey to black belt and beyond. We are building a tribe of strong, confident individuals right here in the North West."
        ],
        historyTitle: "Deep Roots in the North West",
        historyContent: [
            "Kaukapakapa has a deep history, from its early days of kauri milling to its modern vitality. As the area expands with new developments, the need for community anchors becomes stronger. Superior Taekwondo serves as one of those anchors, providing consistency and tradition in a changing world.",
            "We honor the history of the region by fostering a culture of profound respect. Our students learn to respect their history, their instructors, and most importantly, themselves. We are proud to be the martial arts provider for the next generation of Kaukapakapa residents."
        ],
        whyChooseUs: {
            title: "Perfect for Kaukapakapa Residents",
            items: [
                {
                    title: "Short drive down SH16",
                    content: "94 Mill Road, Helensville is a short, easy drive down SH16 from Kaukapakapa — the closest dojang for local families."
                },
                {
                    title: "Values-Based Training",
                    content: "We reinforce the strong family values that the Kaukapakapa community is known for."
                },
                {
                    title: "Safe Environment",
                    content: "A safe, structured environment for kids to learn self-defense and confidence."
                }
            ]
        },
        serviceArea: {
            title: "Services for Kaukapakapa & Surrounds",
            description: "We proudly serve the wider Kaukapakapa area, welcoming students from the village and surrounding lifestyle blocks who train with us at our Helensville dojang.",
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
        weatherImpact: {
            title: "Training for All Conditions",
            content: "Living in a rural setting like Kaukapakapa means being in touch with the elements. Our indoor training provides consistency regardless of the weather, ensuring that fitness goals aren't derailed by rain or winter darkness. It's the perfect year-round activity."
        },
        faq: [
            {
                question: "How far is the drive from Kaukapakapa?",
                answer: "It's a quick and scenic drive south on SH16, usually taking less than 10-15 minutes."
            },
            {
                question: "Are there classes for young children?",
                answer: "Yes, we have age-specific classes at our Helensville dojang perfect for primary school aged children."
            }
        ]
    },
    {
        slug: "waimauku",
        title: "Waimauku Taekwondo Classes | Superior Taekwondo",
        metaDescription: "Empowering Waimauku families through Taekwondo. Expert martial arts tuition for kids and adults. Join our supportive North West community.",
        heroImage: "/images/locations/waimauku-hero.webp",
        introTitle: "Empowering the Waimauku Community",
        introContent: [
            "Waimauku is known for its beautiful vineyards, lifestyle blocks, and strong family focus. We don't train in Waimauku itself — families from Waimauku train with us at our Helensville dojang, a short drive down SH16. It fits well alongside the area's goal-oriented, community-minded pace of life.",
            "We understand that Waimauku residents value quality and authenticity. That's exactly what we deliver. Our curriculum is authentic World Taekwondo, taught by instructors who are passionate about their craft. We offer a structured path to success that resonates with the goal-oriented nature of the local community.",
            "From fresh-faced beginners to serious competitors, our Waimauku students are some of our most dedicated. The short commute to our dojang makes it easy to integrate training into a weekly routine, providing a consistent foundation for personal development and physical fitness."
        ],
        historyTitle: "A Tradition of Strength",
        historyContent: [
            "Waimauku has evolved from a farming settlement to a sought-after lifestyle destination. Throughout this change, the desire for strong community activities has remained constant. Superior Taekwondo provides a modern 'village square'—a place where neighbors train together and support one another.",
            "We are committed to upholding the tradition of strength and resilience. In a world of instant gratification, we teach the value of long-term dedication. This philosophy aligns perfectly with the hardworking spirit of the Waimauku region."
        ],
        whyChooseUs: {
            title: "The Choice for Waimauku",
            items: [
                {
                    title: "Quality Instruction",
                    content: "Waimauku parents expect the best, and we deliver with certified, experienced instructors."
                },
                {
                    title: "Character Building",
                    content: "Our focus on respect and integrity mirrors the values taught in local homes and schools."
                },
                {
                    title: "Family Discounts",
                    content: "We offer options that make it affordable for the whole family to train together."
                }
            ]
        },
        serviceArea: {
            title: "Serving Waimauku & Muriwai",
            description: "Our Helensville dojang is well positioned for households in Waimauku, Muriwai, and the surrounding countryside, a short drive down SH16.",
            landmarks: [
                "Waimauku School",
                "Muriwai Beach",
                "Glasgow Park",
                "The Hunting Lodge",
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
        weatherImpact: {
            title: "Consistency Despite the Weather",
            content: "Waimauku's West Coast weather can be wild. When the surf is blown out at Muriwai or the fields are soaked, the dojang is always open. We provide a reliable, weather-proof venue for expending energy and maintaining fitness throughout the year."
        },
        faq: [
            {
                question: "Is it a long drive from Muriwai?",
                answer: "Not at all. We are very convenient for Muriwai residents heading inland."
            },
            {
                question: "Do you offer trial classes for Waimauku locals?",
                answer: "Yes, we welcome you to come and try a class to feel the atmosphere."
            }
        ]
    },
    {
        slug: "huapai",
        title: "Huapai Martial Arts & Taekwondo | Superior Taekwondo",
        metaDescription: "The top choice for Taekwondo in Huapai. Join a thriving community of martial artists. Classes for fitness, focus, and self-defense.",
        heroImage: "/images/locations/huapai-hero.webp",
        introTitle: "Martial Arts Expertise for Huapai",
        introContent: [
            "Huapai is experiencing rapid growth, and we don't have a second dojang out here — Huapai families train with us at 94 Mill Road, Helensville, a short drive down SH16. It's a focused, convenient program without needing a branch on every corner.",
            "As new families move into the Huapai Triangle and surrounding developments, they are looking for connection. Our dojang is a melting pot where old locals and new residents come together with a shared purpose. We foster a welcoming environment where friendships are forged through shared sweat and achievement.",
            "For the youth of Huapai, we offer an essential outlet. In an era of screens and digital distractions, we get kids moving, thinking, and interacting. Our program develops the focus and self-discipline that translates directly to better performance at school and a more positive attitude at home."
        ],
        historyTitle: "Growing with the Community",
        historyContent: [
            "Huapai's history is rooted in horticulture and community. As the orchards turn into homes, the need for positive community spaces is greater than ever. Superior Taekwondo is dedicated to growing alongside Huapai, providing access to a modern dojang up the road in Helensville and a program that meets the needs of today's families.",
            "We embrace the dynamic energy of Huapai. Our classes are high-energy and forward-thinking, preparing students not just for tournaments, but for the challenges of modern life. We are proud to be a cornerstone of the new Huapai community."
        ],
        whyChooseUs: {
            title: "Why Huapai Trains With Us",
            items: [
                {
                    title: "Structured Learning",
                    content: "Our clear belt progression gives students clear goals to strive for, ideal for the ambitious Huapai mindset."
                },
                {
                    title: "Modern Approach",
                    content: "We blend traditional values with modern sports science, appealing to forward-thinking families."
                },
                {
                    title: "Convenient Location",
                    content: "Just minutes away via SH16, making the school run or after-work training seamless."
                }
            ]
        },
        serviceArea: {
            title: "Serving Huapai families from Helensville",
            description: "We don't have a branch in Huapai — our dojang is at 94 Mill Road, Helensville, a short drive down SH16 from the Huapai Triangle and surrounding growth areas.",
            landmarks: [
                "Huapai District School",
                "Huapai Domain",
                "The Huapai Triangle",
                "Kumeu Showgrounds",
                "Nature's Point"
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
        weatherImpact: {
            title: "All-Weather Active Lifestyle",
            content: "Huapai residents love an active lifestyle. Our indoor training facility ensures that even when the winter rains set in across the North West, your fitness regime doesn't have to pause. We offer a dry, safe, and professional environment to keep moving."
        },
        faq: [
            {
                question: "Is there traffic from Huapai?",
                answer: "Traffic usually flows against the city commute, making the drive to us generally quick and stress-free."
            },
            {
                question: "Do you cater to beginners?",
                answer: "Yes, many of our Huapai students started with zero experience and are now moving through the ranks."
            }
        ]
    }
];
