"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { portfolioItems, portfolioCategories } from "@/lib/data";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered =
        activeFilter === "all"
            ? portfolioItems
            : portfolioItems.filter((p) => p.category === activeFilter);

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-20">
                    <div className="absolute inset-0">
                        <div className="absolute -left-[15%] -top-[15%] h-[45%] w-[45%] rounded-full bg-ocean-blue/15 blur-[120px]" />
                        <div className="absolute -bottom-[10%] -right-[15%] h-[40%] w-[40%] rounded-full bg-cyan/10 blur-[100px]" />
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4 text-sm font-medium uppercase tracking-widest text-sky-blue"
                        >
                            Our Work
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Projects That{" "}
                            <span className="gradient-text">Speak Results</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mx-auto mt-6 max-w-2xl text-lg text-light-400 leading-relaxed"
                        >
                            Real work, real outcomes. Explore how we&apos;ve helped businesses
                            transform their digital presence.
                        </motion.p>
                    </div>
                </section>

                {/* Filters & Grid */}
                <section className="py-20 md:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {/* Filter Tabs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-12 flex flex-wrap justify-center gap-3"
                        >
                            {portfolioCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveFilter(cat.id)}
                                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${activeFilter === cat.id
                                            ? "bg-sky-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                                            : "border border-white/10 bg-white/[0.03] text-light-400 hover:text-white hover:border-white/20"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </motion.div>

                        {/* Projects Grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFilter}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                            >
                                {filtered.map((item, i) => (
                                    <motion.a
                                        key={item.id}
                                        href={`/portfolio/${item.id}`}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-sky-blue/20 hover:bg-white/[0.04]"
                                    >
                                        {/* Thumbnail placeholder */}
                                        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-ocean-blue/20 to-sky-blue/10">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-4xl font-black text-white/10">
                                                    {item.title.charAt(0)}
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-dark-800/30 transition-opacity group-hover:opacity-0" />
                                            <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                                                <ArrowUpRight size={14} className="text-white" />
                                            </div>
                                        </div>

                                        <div className="flex flex-1 flex-col p-5">
                                            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-sky-blue">
                                                {item.industry}
                                            </p>
                                            <h3 className="mb-2 text-lg font-semibold">
                                                {item.title}
                                            </h3>
                                            <p className="mb-4 text-sm text-light-400 leading-relaxed line-clamp-2">
                                                {item.challenge}
                                            </p>
                                            <div className="mt-auto flex flex-wrap gap-1.5">
                                                {item.technologies.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-light-400"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {filtered.length === 0 && (
                            <p className="text-center text-light-400 mt-12">
                                No projects in this category yet. Check back soon!
                            </p>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
