import React, { useRef } from "react";
import { TimelineContent } from "./ui/timeline-animation";
import { VerticalCutReveal } from "./ui/vertical-cut-reveal";

export default function GradingSection() {
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

    const gradingReqs = [
        { belt: "White to Green", hours: "15 Classes/Hours" },
        { belt: "Green to Blue", hours: "30 Classes/Hours" },
        { belt: "Blue to Red", hours: "50 Classes/Hours" },
        { belt: "Red Belt", hours: "80 Classes/Hours" },
        { belt: "Red to Black", hours: "100 Classes/Hours" },
        { belt: "Black Belt", hours: "200 Classes/Hours" },
    ];

    return (
        <div className="min-h-screen bg-deep-space-black relative overflow-hidden pt-32 pb-24" ref={ref}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase tracking-tighter text-white drop-shadow-2xl">
                        <VerticalCutReveal splitBy="words" staggerDuration={0.1} staggerFrom="center" containerClassName="justify-center">
                            Grading Requirements
                        </VerticalCutReveal>
                    </h1>
                    <div className="h-1 w-32 bg-blue-gradient mx-auto mt-6 shadow-[0_0_15px_rgba(0,229,255,0.5)]"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <TimelineContent animationNum={0} timelineRef={ref} customVariants={revealVariants}>
                        <div className="bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
                            <p className="text-center text-gray-300 font-body mb-12 max-w-2xl mx-auto text-lg">
                                Consistency is key. Minimum attendance is required before you are eligible to grade.
                                <br /><span className="text-blue-belt-end font-bold italic block mt-2">There are no shortcuts to success.</span>
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {gradingReqs.map((req, idx) => (
                                    <div key={req.belt} className="bg-white/5 border border-white/5 p-6 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors group">
                                        <h3 className="text-lg font-bold font-oswald text-white uppercase group-hover:text-blue-belt-end transition-colors">{req.belt}</h3>
                                        <span className="text-blue-belt-end font-bold">{req.hours}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 text-center text-sm text-gray-400 font-body border-t border-white/10 pt-6">
                                <p>Students who received a provisional belt at grading will automatically qualify to attend the next grading.</p>
                                <p className="mt-2 text-white font-semibold">Payment must be made via the app or by EFTPOS before grading.</p>
                            </div>
                        </div>
                    </TimelineContent>
                </div>
            </div>
        </div>
    );
}
