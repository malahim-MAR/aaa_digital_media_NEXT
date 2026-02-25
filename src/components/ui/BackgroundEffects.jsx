"use client";

import { m, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundEffects() {
    const [mounted, setMounted] = useState(false);

    // Always initialise to 0 — never read window at module level (causes SSR hydration mismatch)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Move initial position to screen centre after mount (client-only)
        mouseX.set(window.innerWidth / 2);
        mouseY.set(window.innerHeight / 2);
        setMounted(true);

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Don't render orbs until client is mounted (avoids any flicker artifact)
    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Dynamic Glow Orb 1 — follows cursor */}
            <m.div
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"
            />

            {/* Dynamic Glow Orb 2 — slightly offset for depth */}
            <m.div
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-20%",
                    translateY: "-30%",
                }}
                className="absolute w-[400px] h-[400px] bg-cyan-400/5 blur-[100px] rounded-full"
            />

            {/* Static corner glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full" />
        </div>
    );
}
