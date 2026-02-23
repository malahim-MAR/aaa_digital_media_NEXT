"use client";

import { m, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundEffects() {
    const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

    // Smooth out the movement
    const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Dynamic Glow Orb 1 */}
            <m.div
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"
            />

            {/* Dynamic Glow Orb 2 */}
            <m.div
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-20%",
                    translateY: "-30%",
                }}
                className="absolute w-[400px] h-[400px] bg-cyan-400/5 blur-[100px] rounded-full"
            />

            {/* Static Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full" />
        </div>
    );
}
