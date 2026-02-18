"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolioItems } from "@/lib/data";

export default function FeaturedWork() {
    const featured = portfolioItems.slice(0, 4);

    return (
        <section className="relative py-28 md:py-36 lg:py-44 border-t border-white/[0.04]">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
                >
                    <div>
                        <div className="section-label mb-4">
                            <span className="label-dot" />
                            Featured Work
                        </div>
                        <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                            Our <span className="gradient-text">Works</span>
                        </h2>
                    </div>
                    <a
                        href="/portfolio"
                        className="flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-sky-blue"
                    >
                        View full portfolio <ArrowRight size={14} />
                    </a>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {featured.map((item, i) => {
                        const isLarge = i === 0;

                        return (
                            <motion.a
                                key={item.id}
                                href={`/portfolio/${item.id}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-500 hover:border-white/[0.12] ${isLarge
                                        ? "md:col-span-2 aspect-[16/7]"
                                        : "aspect-[4/3]"
                                    }`}
                            >
                                {/* Background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-dark-600/80 to-dark-800 transition-transform duration-700 group-hover:scale-105" />

                                {/* Inner highlight */}
                                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent opacity-50" />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-sky-blue/0 transition-colors duration-500 group-hover:bg-sky-blue/[0.03]" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-8">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-sky-blue">
                                                {item.industry}
                                            </p>
                                            <h3 className="text-2xl font-bold text-white sm:text-3xl">
                                                {item.title}
                                            </h3>
                                            {item.results && (
                                                <p className="mt-1.5 text-sm text-neutral-300">
                                                    {Object.values(item.results)[0]}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-sky-blue group-hover:bg-sky-blue/20">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
