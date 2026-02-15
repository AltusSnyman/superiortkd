import { cn } from "../../lib/utils";
import { useAnimation, motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const Sparkles = ({
    id,
    className,
    background,
    minSize,
    maxSize,
    particleDensity,
    speed = 4,
    particleColor,
    type = "circle",
}: {
    id?: string;
    className?: string;
    background?: string;
    minSize?: number;
    maxSize?: number;
    particleDensity?: number;
    speed?: number;
    particleColor?: string;
    type?: "circle" | "square";
}) => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        setInit(true);
    }, []);
    const controls = useAnimation();

    useEffect(() => {
        if (init) {
            controls.start({
                opacity: 1,
                transition: {
                    duration: 1,
                },
            });
        }
    }, [init]);

    return (
        <motion.div
            animate={controls}
            className={cn("opacity-0", className)}
        >
            <canvas
                className="w-full h-full absolute inset-0 z-0 "
                id={id || "tsparticles"}
                style={{
                    background: background || "transparent",
                }}
                ref={(canvas) => {
                    if (canvas) {
                        const ctx = canvas.getContext("2d");
                        if (ctx) {
                            const particles: any[] = [];
                            const particleCount = particleDensity || 120;
                            for (let i = 0; i < particleCount; i++) {
                                particles.push({
                                    x: Math.random() * canvas.width,
                                    y: Math.random() * canvas.height,
                                    size: Math.random() * (maxSize || 2) + (minSize || 0.5),
                                    speedX: Math.random() * speed - speed / 2,
                                    speedY: Math.random() * speed - speed / 2,
                                });
                            }
                            const animate = () => {
                                ctx.clearRect(0, 0, canvas.width, canvas.height);
                                particles.forEach((particle) => {
                                    ctx.fillStyle = particleColor || "#FFFFFF";
                                    ctx.beginPath();
                                    if (type === "circle") {
                                        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                                    } else {
                                        ctx.rect(particle.x, particle.y, particle.size, particle.size);
                                    }
                                    ctx.fill();
                                    particle.x += particle.speedX;
                                    particle.y += particle.speedY;

                                    if (particle.x < 0) particle.x = canvas.width;
                                    if (particle.x > canvas.width) particle.x = 0;
                                    if (particle.y < 0) particle.y = canvas.height;
                                    if (particle.y > canvas.height) particle.y = 0;
                                });
                                requestAnimationFrame(animate);
                            };
                            animate();
                        }
                    }
                }}
            />
        </motion.div>
    );
};

// Aliasing the export to match user expectation
export const SparklesComp = ({ density = 1800, ...props }: any) => (
    <Sparkles particleDensity={density / 10} {...props} />
);
