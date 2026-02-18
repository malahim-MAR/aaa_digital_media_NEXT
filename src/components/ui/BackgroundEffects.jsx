"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BackgroundEffects() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Physics
    const glow1X = useSpring(mouseX, { damping: 45, stiffness: 60, mass: 1 });
    const glow1Y = useSpring(mouseY, { damping: 45, stiffness: 60, mass: 1 });

    const glow2X = useSpring(mouseX, { damping: 55, stiffness: 40, mass: 2 });
    const glow2Y = useSpring(mouseY, { damping: 55, stiffness: 40, mass: 2 });

    const glow3X = useSpring(mouseX, { damping: 70, stiffness: 25, mass: 3 });
    const glow3Y = useSpring(mouseY, { damping: 70, stiffness: 25, mass: 3 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

            {/* 
        NEW PALETTE LAYERS:
        1. Electric Cyan (#00A6FB) - Bright Core
        2. Royal Blue (#0077B6) - Secondary Flow
        3. Deep Navy (#00152b) - Ambient Base 
      */}

            {/* Primary Glow - Electric Cyan (0.1 opacity -> subtle) */}
            <motion.div
                className="absolute w-[500px] h-[500px] blur-[120px] rounded-full -left-[250px] -top-[250px]"
                style={{
                    x: glow1X, y: glow1Y,
                    background: "rgba(0, 166, 251, 0.08)"
                }}
            />

            {/* Secondary Glow - Royal Blue */}
            <motion.div
                className="absolute w-[800px] h-[800px] blur-[150px] rounded-full -left-[400px] -top-[400px]"
                style={{
                    x: glow2X, y: glow2Y,
                    background: "rgba(0, 119, 182, 0.08)"
                }}
            />

            {/* Deep Ambient Aura - Deep Navy Overlay */}
            <motion.div
                className="absolute w-[1200px] h-[1200px] blur-[200px] rounded-full -left-[600px] -top-[600px]"
                style={{
                    x: glow3X, y: glow3Y,
                    background: "rgba(0, 21, 43, 0.6)"
                }}
            />

            {/* Static Ambient Gradients - Corner Highlights */}
            {/* Top Right: Darker Navy */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#000e1c] blur-[150px] rounded-full opacity-60" />
            {/* Bottom Left: Deep Blue hint */}
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#002147] blur-[150px] rounded-full opacity-30" />
        </div>
    );
}
