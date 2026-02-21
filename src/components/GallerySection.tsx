import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VerticalCutReveal } from "./ui/vertical-cut-reveal";

// Generate array of 62 images
// Note: gallery-58 was corrupt (XML file, not a real image) — skipped
const images = Array.from({ length: 62 }, (_, i) => ({
    src: `/gallery/gallery-${i + 1}.webp`,
    alt: `Superior Taekwondo Gallery Image ${i + 1}`,
    id: i
})).filter((img) => !img.src.includes("gallery-58"));

export default function GallerySection() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (selectedId !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedId]);

    const openLightbox = (id: number) => setSelectedId(id);
    const closeLightbox = () => setSelectedId(null);
    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedId !== null) {
            setSelectedId((selectedId + 1) % images.length);
        }
    };
    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedId !== null) {
            setSelectedId((selectedId - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="min-h-screen bg-deep-space-black relative overflow-hidden pt-32 pb-24">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase tracking-tighter text-white drop-shadow-2xl">
                        <VerticalCutReveal splitBy="words" staggerDuration={0.1} staggerFrom="center" containerClassName="justify-center">
                            Photo Gallery
                        </VerticalCutReveal>
                    </h1>
                    <div className="h-1 w-32 bg-blue-gradient mx-auto mt-6 shadow-[0_0_15px_rgba(0,229,255,0.5)]"></div>
                    <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto font-body">
                        Highlights from our training, grading, and competitions.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 max-w-7xl mx-auto">
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow-lg shadow-black/50 border border-white/5"
                            onClick={() => openLightbox(image.id)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-oswald uppercase text-lg tracking-wider border border-white/30 px-6 py-2 rounded backdrop-blur-sm">
                                    View
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-blue-belt-end transition-colors z-50 p-2"
                            onClick={closeLightbox}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-belt-end transition-colors z-50 p-4 bg-black/20 rounded-full hover:bg-black/40 backdrop-blur-sm"
                            onClick={prevImage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-belt-end transition-colors z-50 p-4 bg-black/20 rounded-full hover:bg-black/40 backdrop-blur-sm"
                            onClick={nextImage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <motion.img
                            key={selectedId}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            src={images[selectedId].src}
                            alt={images[selectedId].alt}
                            className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
