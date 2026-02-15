import React, { useRef } from "react";
import { TimelineContent } from "./ui/timeline-animation";
import { VerticalCutReveal } from "./ui/vertical-cut-reveal";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function GuidelinesSection() {
    const ref = useRef<HTMLDivElement>(null);

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { detail: i * 0.1, duration: 0.5 },
        }),
        hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
    };

    const guidelines = [
        {
            title: "Arrival & Attendance",
            rules: [
                "Arrive at least 10 minutes before class to check in so we can start on time.",
                "If you arrive late, wait respectfully at the side of the mat until the Instructor gives you permission to join the class.",
            ],
        },
        {
            title: "Respect & Etiquette",
            rules: [
                "Bow when entering and exiting the club.",
                "Bow to your Instructor before class begins and when class ends.",
                "If you need to leave the mat (e.g., to use the bathroom), approach your Instructor, bow, and ask for permission—never walk off without asking.",
                "Never challenge or show disrespect to a senior belt.",
                "No foul language from start to finish.",
                "No cell phones in the training area.",
            ],
        },
        {
            title: "Behaviour During Class",
            rules: [
                "Always pay attention when the Instructor is demonstrating techniques.",
                "A clean uniform is mandatory; a dirty uniform shows disrespect.",
                "When tying your uniform or belt, turn to face the back of the class.",
                "Your belt represents your progress—wear it properly at all times.",
                "No shoes, food, or drink are allowed on the mats.",
            ],
        },
        {
            title: "Proper Attire",
            rules: [
                "Wear your full Taekwondo uniform, or Taekwondo pants with your club T-shirt or a plain black T-shirt. No other colours are permitted.",
                "Your belt must be tied neatly, with both ends the same length.",
                "For Sparring Class: Arm guards, shin guards, chest guard, head gear, hand and foot guards, and a mouthguard are compulsory. Cadet fighters must wear a face guard—one will be provided if you don’t have your own. Club sparring gear must be wiped down after use and returned neatly.",
            ],
        },
        {
            title: "Footwear & Hygiene",
            rules: [
                "Keep your feet clean and wear shoes or slides when off the mats.",
                "Always wear shoes when walking to and from the bathroom.",
                "Keep fingernails and toenails short and trimmed to prevent scratches or injuries.",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-deep-space-black relative overflow-hidden pt-32 pb-24" ref={ref}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase tracking-tighter text-white drop-shadow-2xl">
                        <VerticalCutReveal splitBy="words" staggerDuration={0.1} staggerFrom="center" containerClassName="justify-center">
                            Club Guidelines
                        </VerticalCutReveal>
                    </h1>
                    <div className="h-1 w-32 bg-blue-gradient mx-auto mt-6 shadow-[0_0_15px_rgba(0,229,255,0.5)]"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {guidelines.map((section, idx) => (
                        <TimelineContent key={section.title} animationNum={idx} timelineRef={ref} customVariants={revealVariants}>
                            <Card className="bg-white/5 border border-white/10 hover:border-blue-belt-end/30 transition-colors h-full flex flex-col">
                                <CardHeader>
                                    <h3 className="text-xl font-bold font-oswald text-blue-belt-end uppercase tracking-wide mb-2">
                                        {section.title}
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {section.rules.map((rule, rIdx) => (
                                            <li key={rIdx} className="flex gap-3 text-gray-300 font-body text-sm leading-relaxed">
                                                <span className="text-blue-belt-end mt-1.5">•</span>
                                                <span>{rule}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                    ))}
                </div>
            </div>
        </div>
    );
}
