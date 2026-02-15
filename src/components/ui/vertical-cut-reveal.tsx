import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface VerticalCutRevealProps {
    children: string;
    className?: string;
    splitBy?: "characters" | "words" | "lines";
    staggerDuration?: number;
    staggerFrom?: "first" | "last" | "center" | number | "random";
    transition?: any;
    containerClassName?: string;
    reverse?: boolean; // Added just to satisfy props, basic implementation won't strictly use it yet
}

export const VerticalCutReveal = ({
    children,
    className,
    splitBy = "characters",
    staggerDuration = 0.1,
    staggerFrom = "first",
    transition,
    containerClassName,
}: VerticalCutRevealProps) => {
    const words = children.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: staggerDuration, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: transition || {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: transition || {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            className={cn(containerClassName, className)}
        >
            {words.map((word, index) => (
                <motion.span variants={child} style={{ marginRight: "5px" }} key={index}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};
