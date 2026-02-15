import { Card, CardContent, CardHeader } from "./ui/card";
import { TimelineContent } from "./ui/timeline-animation";
import { VerticalCutReveal } from "./ui/vertical-cut-reveal";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import React, { useRef, useState } from "react";

export default function ContactSection() {
    const contactRef = useRef<HTMLDivElement>(null);
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct mailto link
        const subject = encodeURIComponent(formState.subject || "Contact from Website");
        const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
        window.location.href = `mailto:superiorfitnessnz@gmail.com?subject=${subject}&body=${body}`;
    };

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
            className="min-h-screen mx-auto relative bg-deep-space-black overflow-hidden pt-12 pb-24"
            ref={contactRef}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none overflow-hidden">
                <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-belt-start/20 rounded-full blur-[100px] opacity-60 mix-blend-screen"></div>
            </div>

            <article className="text-center mb-16 relative z-50 px-4">
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
                        Get In Touch
                    </VerticalCutReveal>
                </h2>

                <TimelineContent
                    as="p"
                    animationNum={0}
                    timelineRef={contactRef}
                    customVariants={revealVariants}
                    className="text-gray-300 font-body text-xl max-w-2xl mx-auto"
                >
                    Have questions? We're here to help you start your journey.
                </TimelineContent>
            </article>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <TimelineContent
                        as="div"
                        animationNum={1}
                        timelineRef={contactRef}
                        customVariants={revealVariants}
                        className="space-y-8"
                    >
                        <Card className="h-full bg-deep-space-black/80 backdrop-blur-md border border-white/10 p-8">
                            <h3 className="text-2xl font-bold font-oswald uppercase tracking-wide text-white mb-8 border-b border-white/10 pb-4">
                                Contact Details
                            </h3>

                            <div className="space-y-8 font-body text-gray-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-belt-end/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-belt-end" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wider mb-1">Phone</h4>
                                        <a href="tel:0275201613" className="hover:text-blue-belt-end transition-colors text-lg">027 520 1613</a>
                                        <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 9am - 5pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-belt-end/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-belt-end" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wider mb-1">Email</h4>
                                        <a href="mailto:superiorfitnessnz@gmail.com" className="hover:text-blue-belt-end transition-colors text-lg">superiorfitnessnz@gmail.com</a>
                                        <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-belt-end/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-belt-end" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wider mb-1">Location</h4>
                                        <p className="text-lg">94 Mill Road, Helensville 0800</p>
                                        <p className="text-sm text-gray-500 mt-1">North West Auckland</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </TimelineContent>

                    {/* Contact Form */}
                    <TimelineContent
                        as="div"
                        animationNum={2}
                        timelineRef={contactRef}
                        customVariants={revealVariants}
                    >
                        <Card className="h-full bg-deep-space-black/80 backdrop-blur-md border border-white/10 p-8">
                            <h3 className="text-2xl font-bold font-oswald uppercase tracking-wide text-white mb-8 border-b border-white/10 pb-4">
                                Send a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-bold font-oswald uppercase tracking-wider text-gray-400">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-belt-end focus:ring-1 focus:ring-blue-belt-end transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold font-oswald uppercase tracking-wider text-gray-400">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-belt-end focus:ring-1 focus:ring-blue-belt-end transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-bold font-oswald uppercase tracking-wider text-gray-400">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-belt-end focus:ring-1 focus:ring-blue-belt-end transition-all"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold font-oswald uppercase tracking-wider text-gray-400">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-belt-end focus:ring-1 focus:ring-blue-belt-end transition-all resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-belt-start to-blue-belt-end text-black font-bold font-oswald uppercase tracking-wider py-4 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] hover:-translate-y-1 transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </Card>
                    </TimelineContent>
                </div>

                {/* Google Map */}
                <TimelineContent
                    as="div"
                    animationNum={3}
                    timelineRef={contactRef}
                    customVariants={revealVariants}
                    className="mt-16 max-w-6xl mx-auto"
                >
                    <Card className="bg-deep-space-black/80 backdrop-blur-md border border-white/10 p-2 overflow-hidden h-[400px]">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "100%" }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://maps.google.com/maps?q=94+Mill+Road,+Helensville+0800&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-500"
                        ></iframe>
                    </Card>
                </TimelineContent>
            </div>
        </div>
    );
}
