import { Card, CardContent, CardHeader } from "./ui/card";

import { TimelineContent } from "./ui/timeline-animation";
import { VerticalCutReveal } from "./ui/vertical-cut-reveal";
import { cn } from "../lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import React, { useRef, useState } from "react";
import Button from "./Button.astro"; // Note: Cannot import Astro component in React directly. Will use a standard button or pass as prop. Using standard button for now.

interface PricingPlan {
    title: string;
    frequency: string;
    description: string;
    sport: string;
    price: string;
    period: string;
    signup: string;
    recommended?: boolean;
}

interface PricingCategory {
    category: string;
    options: PricingPlan[];
}

interface PricingSectionProps {
    plans: PricingCategory[];
}

const PricingSwitch = ({ onSwitch, selected }: { onSwitch: (value: string) => void, selected: string }) => {
    return (
        <div className="flex justify-center mb-12">
            <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-neutral-800 p-1">
                <button
                    onClick={() => onSwitch("weekly")}
                    className={cn(
                        "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors font-oswald uppercase tracking-wider",
                        selected === "weekly" ? "text-white" : "text-gray-400",
                    )}
                >
                    {selected === "weekly" && (
                        <motion.span
                            layoutId="switch"
                            className="absolute top-0 left-0 h-10 w-full rounded-full border border-blue-belt-end bg-blue-belt-start/50 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative z-20">Weekly Plans</span>
                </button>

                <button
                    onClick={() => onSwitch("term")}
                    className={cn(
                        "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors font-oswald uppercase tracking-wider",
                        selected === "term" ? "text-white" : "text-gray-400",
                    )}
                >
                    {selected === "term" && (
                        <motion.span
                            layoutId="switch"
                            className="absolute top-0 left-0 h-10 w-full rounded-full border border-blue-belt-end bg-blue-belt-start/50 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative z-20">Term & Concession</span>
                </button>
            </div>
        </div>
    );
};

export default function PricingSection({ plans }: PricingSectionProps) {
    const [selectedCategory, setSelectedCategory] = useState("weekly");
    const pricingRef = useRef<HTMLDivElement>(null);

    const currentPlans = selectedCategory === "weekly" ? plans[0].options : plans[1].options;

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            y: 20,
            opacity: 0,
        },
    };

    return (
        <div
            className="min-h-screen mx-auto relative bg-deep-space-black overflow-hidden pt-12"
            ref={pricingRef}
        >



            <article className="text-center mb-8 relative z-50 px-4">
                {/* Animated Title */}
                <h2 className="text-4xl md:text-5xl font-black font-oswald uppercase tracking-tighter text-white mb-4 drop-shadow-lg">
                    <VerticalCutReveal
                        splitBy="words"
                        staggerDuration={0.15}
                        staggerFrom="first"
                        containerClassName="justify-center"
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 40,
                        }}
                    >
                        Choose Your Path to Mastery
                    </VerticalCutReveal>
                </h2>

                <TimelineContent
                    as="p"
                    animationNum={0}
                    timelineRef={pricingRef}
                    customVariants={revealVariants}
                    className="text-gray-300 font-body text-xl max-w-2xl mx-auto mb-8"
                >
                    Simple, transparent pricing. Join the team today.
                </TimelineContent>

                <TimelineContent
                    as="div"
                    animationNum={1}
                    timelineRef={pricingRef}
                    customVariants={revealVariants}
                >
                    <PricingSwitch onSwitch={setSelectedCategory} selected={selectedCategory} />
                </TimelineContent>
            </article>

            <div className="container mx-auto px-4 pb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {currentPlans.map((plan, index) => {
                        // Parse price string to number for NumberFlow (removing $ and text)
                        // Example: "$27.00" -> 27
                        const numericPrice = parseFloat(plan.price.replace(/[^0-9.]/g, ''));

                        return (
                            <TimelineContent
                                key={plan.title}
                                as="div"
                                animationNum={2 + index}
                                timelineRef={pricingRef}
                                customVariants={revealVariants}
                            >
                                <Card
                                    className={`relative h-full bg-deep-space-black/80 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] group ${plan.recommended
                                        ? "border-blue-belt-end shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                                        : "hover:border-blue-belt-end/50"
                                        }`}
                                >
                                    {plan.recommended && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-belt-start to-blue-belt-end text-black font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,229,255,0.6)] z-20 whitespace-nowrap pt-5 pb-1.5">
                                            Most Popular
                                        </div>
                                    )}

                                    <CardHeader className="text-left pb-4">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold font-oswald text-white uppercase tracking-wide group-hover:text-blue-belt-end transition-colors duration-300">{plan.title}</h3>
                                            <p className="text-sm text-gray-400 font-body uppercase tracking-wider">{plan.frequency}</p>
                                        </div>

                                        <div className="flex items-baseline mb-1">
                                            <span className="text-4xl md:text-5xl font-black font-oswald text-white">
                                                $
                                                <NumberFlow
                                                    value={numericPrice}
                                                    format={{ minimumFractionDigits: 0 }}
                                                    className="inline-block"
                                                />
                                            </span>
                                            <span className="text-lg text-gray-400 font-body ml-2">{plan.period}</span>
                                        </div>
                                        {plan.signup && <p className="text-sm text-blue-belt-end font-body">{plan.signup}</p>}
                                    </CardHeader>

                                    <CardContent className="flex-grow flex flex-col pt-0">
                                        <div className="space-y-4 mb-8 mt-4 border-t border-white/10 pt-6 text-gray-300 font-body text-sm flex-grow">
                                            <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-blue-belt-end/10 flex items-center justify-center flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-blue-belt-end" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span>{plan.description}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-blue-belt-end/10 flex items-center justify-center flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-blue-belt-end" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span>{plan.sport}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-blue-belt-end/10 flex items-center justify-center flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-blue-belt-end" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span>Access to all locations (Kaukapakapa, Helensville, Waimauku)</span>
                                            </div>
                                        </div>

                                        <a
                                            href="https://superior-taekwondo.gymdesk.com/signup"
                                            className={`block w-full text-center py-4 rounded-xl font-bold font-oswald uppercase tracking-wider transition-all duration-300 ${plan.recommended
                                                ? "bg-gradient-to-r from-blue-belt-start to-blue-belt-end text-black shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] hover:-translate-y-1"
                                                : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-blue-belt-end/50 hover:text-blue-belt-end"
                                                }`}
                                        >
                                            Select Plan
                                        </a>
                                    </CardContent>
                                </Card>
                            </TimelineContent>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
