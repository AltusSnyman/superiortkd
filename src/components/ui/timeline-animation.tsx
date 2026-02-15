import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import { cn } from "../../lib/utils";

type TimelineContentProps = {
    animationNum: number;
    timelineRef?: React.RefObject<HTMLElement | null>;
    customVariants?: any;
    className?: string;
    as?: React.ElementType;
    children?: React.ReactNode;
    [key: string]: any;
};

export const TimelineContent = ({
    animationNum,
    timelineRef,
    customVariants,
    className,
    as: Component = "div",
    children,
    ...props
}: TimelineContentProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const variants = customVariants || {
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
            },
        }),
        hidden: { opacity: 0, y: 50 },
    };

    return (
        <Component
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            custom={animationNum}
            className={cn("relative", className)}
            {...props}
        >
            {children}
        </Component>
    );
};
