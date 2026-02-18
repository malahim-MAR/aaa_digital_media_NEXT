"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // 1. Center Dot Physics (Tight, fast)
    const dotSpring = { damping: 25, stiffness: 700 };
    const dotX = useSpring(mouseX, dotSpring);
    const dotY = useSpring(mouseY, dotSpring);

    // 2. Trailing Ring Physics (Loose, slower) -> CREATES THE TRAIL EFFECT
    const ringSpring = { damping: 15, stiffness: 150, mass: 1.1 };
    const ringX = useSpring(mouseX, ringSpring);
    const ringY = useSpring(mouseY, ringSpring);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [mouseX, mouseY, isVisible]);

    // Hide on mobile/touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

    return (
        <>
            {/* 1. Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-[8px] h-[8px] bg-white rounded-full pointer-events-none z-[9999] mix-blend-exclusion"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
            />

            {/* 2. Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-[40px] h-[40px] border border-white/40 rounded-full pointer-events-none z-[9998] mix-blend-exclusion"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
            />
        </>
    );
}
