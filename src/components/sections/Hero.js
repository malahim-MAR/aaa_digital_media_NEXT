"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark-900">
            {/* Gradient Mesh Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary gradient orb */}
                <motion.div
                    className="absolute -left-[20%] -top-[20%] h-[60%] w-[60%] rounded-full bg-ocean-blue/20 blur-[120px]"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Secondary gradient orb */}
                <motion.div
                    className="absolute -bottom-[10%] -right-[10%] h-[50%] w-[50%] rounded-full bg-sky-blue/15 blur-[100px]"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Cyan accent */}
                <motion.div
                    className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[80px]"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Sparkle Decorations */}
            <motion.div
                className="absolute right-[15%] top-[20%] text-sky-blue/60"
                animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
            </motion.div>
            <motion.div
                className="absolute left-[10%] top-[35%] text-cyan/40"
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
            </motion.div>
            <motion.div
                className="absolute bottom-[25%] right-[25%] text-electric-blue/30"
                animate={{ rotate: 360, scale: [1, 1.4, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
            </motion.div>

            {/* Hero Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                {/* Label badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-light-300 backdrop-blur-sm"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                    Trusted by brands in 15+ countries
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                >
                    Transforming Brands Into{" "}
                    <span className="gradient-text">Global Success</span>{" "}
                    Stories
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-light-400 sm:text-lg md:text-xl"
                >
                    We&apos;re a full-service digital agency delivering world-class
                    marketing, web &amp; app development, and creative solutions — from
                    Karachi to the world.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
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
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 flex flex-col items-center gap-3"
                >
                    <p className="text-xs uppercase tracking-widest text-light-400/60">
                        Trusted by industry leaders
                    </p>
                    <div className="flex items-center gap-8 opacity-40">
                        {["Enterprise Co.", "TechStart", "GrowthX", "MediaPro", "ScaleUp"].map(
                            (name) => (
                                <span
                                    key={name}
                                    className="hidden text-sm font-semibold text-light-300 sm:block"
                                >
                                    {name}
                                </span>
                            )
                        )}
                        {["Enterprise", "TechStart", "GrowthX"].map((name) => (
                            <span
                                key={`m-${name}`}
                                className="text-sm font-semibold text-light-300 sm:hidden"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={24} className="text-light-400/40" />
            </motion.div>
        </section>
    );
}
