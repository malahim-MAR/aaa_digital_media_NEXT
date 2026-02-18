"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const textItem = {
    hidden: { y: "100%", opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -left-[25%] -top-[25%] h-[60%] w-[60%] rounded-full bg-sky-blue/8 blur-[150px]"
                    animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-[15%] -right-[15%] h-[50%] w-[50%] rounded-full bg-ocean-blue/10 blur-[120px]"
                    animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[100px]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 mx-auto max-w-[1600px] px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-light-300 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-sky-blue opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-blue" />
                    </span>
                    Trusted by brands in 15+ countries
                </motion.div>

                {/* Title – Portfolio-like massive typography */}
                <motion.h1
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="font-display font-extrabold text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tighter"
                >
                    <div className="overflow-hidden">
                        <motion.span
                            variants={textItem}
                            className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 pb-2"
                        >
                            Transforming Brands
                        </motion.span>
                    </div>
                    <div className="overflow-hidden">
                        <motion.span
                            variants={textItem}
                            className="block pb-2"
                        >
                            Into{" "}
                            <span className="gradient-text">Global Success</span>
                        </motion.span>
                    </div>
                    <div className="overflow-hidden">
                        <motion.span
                            variants={textItem}
                            className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500"
                        >
                            Stories
                        </motion.span>
                    </div>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400 leading-relaxed md:text-xl"
                >
                    A full-service digital agency delivering world-class marketing,
                    web &amp; app development, and creative solutions — from Karachi
                    to the world.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button href="/contact" size="lg">
                        Start Your Project <ArrowRight size={18} />
                    </Button>
                    <Button href="/portfolio" variant="secondary" size="lg">
                        View Our Work
                    </Button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className="mt-20 flex flex-col items-center gap-4"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-medium">
                        Trusted by industry leaders
                    </p>
                    <div className="flex items-center gap-10 opacity-30">
                        {["Enterprise Co.", "TechStart", "GrowthX", "MediaPro", "ScaleUp"].map(
                            (name) => (
                                <span
                                    key={name}
                                    className="hidden text-sm font-semibold text-neutral-400 sm:block"
                                >
                                    {name}
                                </span>
                            )
                        )}
                        {["Enterprise", "TechStart", "GrowthX"].map((name) => (
                            <span
                                key={`m-${name}`}
                                className="text-sm font-semibold text-neutral-400 sm:hidden"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={24} className="text-neutral-600" />
            </motion.div>
        </section>
    );
}
