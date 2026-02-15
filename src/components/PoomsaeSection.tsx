import React, { useRef } from "react";
import { TimelineContent } from "./ui/timeline-animation";
import { VerticalCutReveal } from "./ui/vertical-cut-reveal";

export default function PoomsaeSection() {
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
                        <VerticalCutReveal splitBy="chars" staggerDuration={0.05} staggerFrom="center" containerClassName="justify-center">
                            Poomsae
                        </VerticalCutReveal>
                    </h1>
                    <p className="text-xl text-blue-belt-end font-oswald uppercase tracking-widest mt-2">(Patterns)</p>
                    <div className="h-1 w-32 bg-blue-gradient mx-auto mt-6 shadow-[0_0_15px_rgba(0,229,255,0.5)]"></div>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <TimelineContent animationNum={0} timelineRef={ref} customVariants={revealVariants}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-blue-belt-start/50 transition-colors">
                            <p className="text-gray-300 font-body text-lg leading-relaxed mb-8">
                                Our dedicated Poomsae class is perfect for students who enjoy practicing patterns, want to compete in tournaments, or need extra support preparing for upcoming gradings.
                            </p>

                            <div className="inline-block bg-black/40 px-8 py-4 rounded-lg border border-white/10">
                                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Additional Cost</p>
                                <p className="text-3xl font-black text-white">$10 <span className="text-base font-normal text-gray-400">/ session</span></p>
                                <p className="text-xs text-gray-500 mt-2">(If not on unlimited membership)</p>
                            </div>
                        </div>
                    </TimelineContent>
                </div>
            </div>
        </div>
    );
}
