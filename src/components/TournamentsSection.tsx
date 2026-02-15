import React, { useRef } from "react";
import { TimelineContent } from "./ui/timeline-animation";
import { VerticalCutReveal } from "./ui/vertical-cut-reveal";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function TournamentsSection() {
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
                            Tournaments
                        </VerticalCutReveal>
                    </h1>
                    <div className="h-1 w-32 bg-blue-gradient mx-auto mt-6 shadow-[0_0_15px_rgba(0,229,255,0.5)]"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <TimelineContent animationNum={0} timelineRef={ref} customVariants={revealVariants}>
                        <Card className="bg-white/5 border border-white/10">
                            <CardHeader>
                                <h2 className="text-2xl font-black font-oswald uppercase text-white mb-2">Competition Requirements</h2>
                            </CardHeader>
                            <CardContent className="text-gray-300 font-body space-y-4">
                                <p>Students who wish to compete in taekwondo tournaments are encouraged to regularly attend sparring classes to build confidence and develop a solid understanding of sparring.</p>
                                <div className="p-4 bg-blue-belt-end/10 rounded-lg border-l-4 border-blue-belt-end">
                                    <p className="text-white font-bold mb-1">National Level Competitions</p>
                                    <p className="text-sm">It is required that you first participate in regional competitions to gain valuable experience before progressing to larger events.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TimelineContent>

                    <TimelineContent animationNum={1} timelineRef={ref} customVariants={revealVariants}>
                        <Card className="bg-white/5 border border-white/10">
                            <CardHeader>
                                <h2 className="text-2xl font-black font-oswald uppercase text-white mb-2">Extra Training Costs</h2>
                            </CardHeader>
                            <CardContent className="text-gray-300 font-body">
                                <p className="mb-4">Students who are not on an unlimited membership and would like to attend extra classes to prepare for tournaments will incur an additional cost.</p>
                                <div className="flex items-center gap-4 text-white">
                                    <span className="text-3xl font-bold text-blue-belt-end">$10</span>
                                    <span className="text-sm">per student / per class</span>
                                </div>
                                <p className="mt-4 text-xs text-gray-500">Payments must be made via the app or by EFTPOS before the class begins.</p>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </div>
            </div>
        </div>
    );
}
