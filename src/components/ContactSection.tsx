import { Card, CardContent, CardHeader } from "./ui/card";
import { TimelineContent } from "./ui/timeline-animation";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import { useRef } from "react";

export default function ContactSection() {
    const contactRef = useRef<HTMLDivElement>(null);

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
                <h1 className="text-4xl md:text-5xl font-black font-oswald uppercase tracking-tighter text-white mb-4 drop-shadow-lg">
                    Book a free trial class
                </h1>

                <TimelineContent
                    as="p"
                    animationNum={0}
                    timelineRef={contactRef}
                    customVariants={revealVariants}
                    className="text-gray-300 font-body text-xl max-w-2xl mx-auto"
                >
                    Tell us who the class is for and when suits, and we'll be in touch to book your free first session.
                </TimelineContent>
            </article>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <TimelineContent
                        as="div"
                        animationNum={1}
                        timelineRef={contactRef}
                        customVariants={revealVariants}
                    >
                        <Card className="h-full bg-deep-space-black/80 backdrop-blur-md border border-white/10 p-8">
                            <h3 className="text-2xl font-bold font-oswald uppercase tracking-wide text-white mb-8 border-b border-white/10 pb-4">
                                Book your free trial
                            </h3>

                            <div className="min-h-[720px] w-full">
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/form/L3HyiQ9aU9bX3S5fOq2k"
                                    style={{ width: "100%", height: "100%", minHeight: "720px", border: "none", borderRadius: "8px" }}
                                    id="inline-L3HyiQ9aU9bX3S5fOq2k"
                                    data-layout="{'id':'INLINE'}"
                                    data-trigger-type="alwaysShow"
                                    data-trigger-value=""
                                    data-activation-type="alwaysActivated"
                                    data-activation-value=""
                                    data-deactivation-type="neverDeactivate"
                                    data-deactivation-value=""
                                    data-form-name="QUESTION"
                                    data-height="undefined"
                                    data-layout-iframe-id="inline-L3HyiQ9aU9bX3S5fOq2k"
                                    data-form-id="L3HyiQ9aU9bX3S5fOq2k"
                                    data-cookie-consent="true"
                                    data-cookie-consent-provider="auto"
                                    title="Free trial and enquiry form"
                                ></iframe>
                            </div>

                            <p className="text-sm text-gray-500 mt-4">
                                Prefer to talk? Call or text <a href="tel:0275201613" className="hover:text-blue-belt-end transition-colors">027 520 1613</a>, or email <a href="mailto:superiorfitnessnz@gmail.com" className="hover:text-blue-belt-end transition-colors">superiorfitnessnz@gmail.com</a>.
                            </p>
                        </Card>
                    </TimelineContent>

                    {/* Contact Info */}
                    <TimelineContent
                        as="div"
                        animationNum={2}
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
                                        <p className="text-sm text-gray-500 mt-1">For fastest response, call us directly</p>
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
                                        <p className="text-lg">94 Mill Road, Helensville 0875</p>
                                        <p className="text-sm text-gray-500 mt-1">North West Auckland</p>
                                    </div>
                                </div>
                            </div>
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
                            src="https://www.google.com/maps?q=Superior+Taekwondo,+94+Mill+Road,+Helensville&output=embed"
                            className="grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-500"
                        ></iframe>
                    </Card>
                </TimelineContent>
            </div>
        </div>
    );
}
