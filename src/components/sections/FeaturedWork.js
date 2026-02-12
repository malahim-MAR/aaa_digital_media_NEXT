"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolioItems } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function FeaturedWork() {
    const featured = portfolioItems.slice(0, 4);

    return (
        <SectionWrapper>
            {/* Section Header */}
            <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <motion.p
                        variants={fadeInUp}
                        className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue"
                    >
                        Featured Work
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold sm:text-4xl md:text-5xl"
                    >
                        Our <span className="gradient-text">Works</span>
                    </motion.h2>
                </div>
                <motion.a
                    variants={fadeInUp}
                    href="/portfolio"
                    className="flex items-center gap-1.5 text-sm font-medium text-light-300 transition-colors hover:text-sky-blue"
                >
                    View full portfolio <ArrowRight size={14} />
                </motion.a>
            </div>

            {/* Projects Grid — masonry-like layout */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
                {featured.map((item, i) => {
                    // First item is full-width and tall
                    const isLarge = i === 0;

                    return (
                        <motion.a
                            key={item.id}
                            href={`/portfolio/${item.id}`}
                            variants={fadeInUp}
                            className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-dark-700 transition-all duration-500 hover:border-sky-blue/20 ${isLarge ? "md:col-span-2 aspect-[16/7]" : "aspect-[4/3]"
                                }`}
                        >
                            {/* Placeholder Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-dark-600 to-dark-800 transition-transform duration-700 group-hover:scale-105" />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />

                            {/* Content overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-sky-blue">
                                            {item.industry}
                                        </p>
                                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                                            {item.title}
                                        </h3>
                                        {item.results && (
                                            <p className="mt-1 text-sm text-light-300">
                                                {Object.values(item.results)[0]}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-sky-blue group-hover:bg-sky-blue">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    );
                })}
            </motion.div>
        </SectionWrapper>
    );
}
