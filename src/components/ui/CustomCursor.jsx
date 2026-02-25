"use client";

import { useEffect, useState } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Always 0 on server — useEffect sets real values client-side
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Center Dot — tight & fast
    const dotX = useSpring(mouseX, { damping: 25, stiffness: 700 });
    const dotY = useSpring(mouseY, { damping: 25, stiffness: 700 });

    // Trailing Ring — loose & slow
    const ringX = useSpring(mouseX, { damping: 15, stiffness: 150, mass: 1.1 });
    const ringY = useSpring(mouseY, { damping: 15, stiffness: 150, mass: 1.1 });

    useEffect(() => {
        // Skip on touch/mobile devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        setMounted(true);

        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsVisible(true);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [mouseX, mouseY]);

    // Don't render on server or touch devices
    if (!mounted) return null;

    return (
        <>
            {/* Main Dot */}
            <m.div
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#fff",
                    pointerEvents: "none",
                    zIndex: 9999,
                    mixBlendMode: "exclusion",
                }}
            />

            {/* Trailing Ring */}
            <m.div
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 0.5 : 0,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.4)",
                    pointerEvents: "none",
                    zIndex: 9998,
                    mixBlendMode: "exclusion",
                }}
            />
        </>
    );
}
