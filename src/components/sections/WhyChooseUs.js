"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe, Layers, Headphones } from "lucide-react";
import { differentiators } from "@/lib/data";

const iconMap = { BarChart3, Globe, Layers, Headphones };

export default function WhyChooseUs() {
    return (
        <section className="relative py-28 md:py-36 lg:py-44 border-t border-white/[0.04]">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-label mb-4">
                            <span className="label-dot" />
                            Why Choose Us
                        </div>
                        <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl leading-[1]">
                            Built Different,{" "}
                            <span className="gradient-text">Proven Results</span>
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-neutral-400">
                            We&apos;re not just another agency. We combine global standards
                            with dedicated personal service to deliver outcomes that matter.
                        </p>
                    </motion.div>

                    {/* Right: Cards */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {differentiators.map((item, i) => {
                            const Icon = iconMap[item.icon] || Globe;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className="chrome-card group p-6 transition-all hover:border-sky-blue/15"
                                >
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-blue/10 border border-sky-blue/10">
                                        <Icon size={20} className="text-sky-blue" />
                                    </div>
                                    <h3 className="mb-2 text-base font-semibold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-neutral-500">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
