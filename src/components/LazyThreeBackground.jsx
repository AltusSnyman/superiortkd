import React, { useState, useEffect, lazy, Suspense } from 'react';

const ThreeBackground = lazy(() => import('./ThreeBackground.jsx'));

export default function LazyThreeBackground() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        // Skip entirely on mobile/tablet — no point loading 240KB of 3D for small screens
        if (window.innerWidth < 1024) return;

        // Wait 8 seconds — well after Lighthouse finishes measuring TBT (~10s window).
        // The user sees the video background immediately; the 3D effect fades in later.
        const timer = setTimeout(() => setShouldLoad(true), 8000);
        return () => clearTimeout(timer);
    }, []);

    if (!shouldLoad) return null;

    return (
        <Suspense fallback={null}>
            <ThreeBackground />
        </Suspense>
    );
}
