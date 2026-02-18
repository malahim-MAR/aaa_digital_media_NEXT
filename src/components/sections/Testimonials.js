"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () =>
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );

    return (
        <section className="relative py-28 md:py-36 lg:py-44 border-t border-white/[0.04]">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-14 text-center"
                >
                    <div className="section-label mb-4 justify-center">
                        <span className="label-dot" />
                        Testimonials
                    </div>
                    <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                        What People Say{" "}
                        <span className="gradient-text">About Us</span>
                    </h2>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="chrome-card p-8 sm:p-12"
                >
                    <Quote
                        size={44}
                        className="mb-6 text-sky-blue/20"
                        fill="currentColor"
                    />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <blockquote className="text-xl leading-relaxed text-neutral-200 sm:text-2xl md:text-3xl">
                                &ldquo;{testimonials[current].quote}&rdquo;
                            </blockquote>
                            <div className="mt-8">
                                <p className="text-base font-semibold text-white">
                                    {testimonials[current].author}
                                </p>
                                <p className="text-sm text-neutral-500">
                                    {testimonials[current].role},{" "}
                                    {testimonials[current].company}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="mt-10 flex items-center justify-between">
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === current
                                            ? "w-8 bg-sky-blue"
                                            : "w-2 bg-white/20 hover:bg-white/40"
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={prev}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-neutral-400 transition-all hover:border-sky-blue/50 hover:text-white"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={next}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-neutral-400 transition-all hover:border-sky-blue/50 hover:text-white"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
