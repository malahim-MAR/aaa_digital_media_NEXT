"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function GlobalImpact() {
    return (
        <section className="relative overflow-hidden py-20 md:py-28">
            {/* Background gradients */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-blue/20 to-transparent" />
                <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-blue/20 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue">
                        Global Impact
                    </p>
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        Going Global,{" "}
                        <span className="gradient-text">Staying Personal</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-base text-light-400">
                        Real numbers from real partnerships. Our track record speaks for itself.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 gap-6 lg:grid-cols-4"
                >
                    {STATS.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={fadeInUp}
                            className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center transition-all duration-300 hover:border-sky-blue/20 hover:bg-white/[0.04]"
                        >
                            {/* Glow on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-sky-blue/0 blur-[40px] transition-all duration-500 group-hover:bg-sky-blue/5" />

                            <div className="relative">
                                <AnimatedCounter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    className="block text-4xl font-bold text-light-100 sm:text-5xl md:text-6xl"
                                />
                                <p className="mt-2 text-sm font-medium text-light-400">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
