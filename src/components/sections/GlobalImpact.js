"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function GlobalImpact() {
    return (
        <section className="relative overflow-hidden py-28 md:py-36">
            {/* Subtle top/bottom border glow */}
            <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-blue/20 to-transparent" />
            <div className="absolute bottom-0 left-1/2 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-blue/20 to-transparent" />

            <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <div className="section-label mb-4 justify-center">
                        <span className="label-dot" />
                        Global Impact
                    </div>
                    <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                        Going Global,{" "}
                        <span className="gradient-text">Staying Personal</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-lg text-lg text-neutral-400">
                        Real numbers from real partnerships. Our track record speaks for itself.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="chrome-card group p-8 text-center"
                        >
                            <AnimatedCounter
                                value={stat.value}
                                suffix={stat.suffix}
                                className="block text-5xl font-bold text-white sm:text-6xl md:text-7xl"
                            />
                            <p className="mt-3 text-sm font-medium text-neutral-500">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
