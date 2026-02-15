import React, { useRef } from "react";
import { TimelineContent } from "./ui/timeline-animation";
import { VerticalCutReveal } from "./ui/vertical-cut-reveal";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function CompetitionSection() {
    const ref = useRef<HTMLDivElement>(null);
    const revealVariants = {
        visible: (i: number) => ({ y: 0, opacity: 1, filter: "blur(0px)", transition: { detail: i * 0.1, duration: 0.5 } }),
        hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
    };

    return (
        <div className="min-h-screen bg-deep-space-black relative overflow-hidden pt-32 pb-24" ref={ref}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase tracking-tighter text-white drop-shadow-2xl">
                        <VerticalCutReveal splitBy="words" staggerDuration={0.1} staggerFrom="center" containerClassName="justify-center">
                            Competition Team
                        </VerticalCutReveal>
                    </h1>
                    <div className="h-1 w-32 bg-blue-gradient mx-auto mt-6 shadow-[0_0_15px_rgba(0,229,255,0.5)]"></div>
                    <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto">Join the elite. Train to win.</p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <TimelineContent animationNum={0} timelineRef={ref} customVariants={revealVariants}>
                        <div className="bg-gradient-to-br from-blue-900/20 to-black border border-blue-belt-end/30 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-belt-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                                <div>
                                    <h2 className="text-3xl font-black font-oswald uppercase text-white mb-6">Schedule & Location</h2>
                                    <div className="space-y-4">
                                        <div className="border-l-4 border-blue-belt-start pl-4">
                                            <p className="text-blue-belt-end font-bold text-lg">Wednesday</p>
                                            <p className="text-white text-xl">6:00PM - 8:30PM</p>
                                        </div>
                                        <div className="border-l-4 border-blue-belt-end pl-4">
                                            <p className="text-blue-belt-end font-bold text-lg">Saturday</p>
                                            <p className="text-white text-xl">9:30AM - 11:30AM</p>
                                        </div>
                                        <p className="text-gray-400 mt-4 pt-4 border-t border-white/10">Location: <span className="text-white font-bold">Kaukapakapa Hall</span></p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold font-oswald text-white uppercase">What to Expect</h3>
                                    <ul className="space-y-3 text-gray-300 font-body">
                                        <li className="flex gap-3"><span className="text-blue-belt-end">✓</span> Up-to-date World Taekwondo Drills</li>
                                        <li className="flex gap-3"><span className="text-blue-belt-end">✓</span> Advanced Defensive & Offensive Skills</li>
                                        <li className="flex gap-3"><span className="text-blue-belt-end">✓</span> Elite Strength & Conditioning</li>
                                        <li className="flex gap-3"><span className="text-blue-belt-end">✓</span> High-Intensity Sparring Fitness</li>
                                    </ul>

                                    <a href="mailto:superiorfitnessnz@gmail.com?subject=Join Competition Team" className="inline-block mt-4 bg-blue-gradient text-black font-bold font-oswald uppercase px-8 py-3 rounded hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                                        Join The Team
                                    </a>
                                </div>
                            </div>
                        </div>
                    </TimelineContent>
                </div>
            </div>
        </div>
    );
}
