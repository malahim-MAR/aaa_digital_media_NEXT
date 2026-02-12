"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeInUp } from "@/lib/animations";

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () =>
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );

    return (
        <SectionWrapper>
            <div className="mx-auto max-w-4xl">
                {/* Section Header */}
                <motion.div variants={fadeInUp} className="mb-12 text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue">
                        Testimonials
                    </p>
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        What People Say{" "}
                        <span className="gradient-text">About Us</span>
                    </h2>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div
                    variants={fadeInUp}
                    className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12"
                >
                    {/* Quote icon */}
                    <Quote
                        size={40}
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
                            <blockquote className="text-lg leading-relaxed text-light-200 sm:text-xl md:text-2xl">
                                &ldquo;{testimonials[current].quote}&rdquo;
                            </blockquote>
                            <div className="mt-6">
                                <p className="font-semibold text-light-100">
                                    {testimonials[current].author}
                                </p>
                                <p className="text-sm text-light-400">
                                    {testimonials[current].role},{" "}
                                    {testimonials[current].company}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="mt-8 flex items-center justify-between">
                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === current
                                            ? "w-6 bg-sky-blue"
                                            : "w-2 bg-white/20 hover:bg-white/40"
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-2">
                            <button
                                onClick={prev}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-light-300 transition-all hover:border-sky-blue/50 hover:text-white"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={next}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-light-300 transition-all hover:border-sky-blue/50 hover:text-white"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
