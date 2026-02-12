"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { generalFaqs } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <SectionWrapper>
            <div className="mx-auto max-w-3xl">
                {/* Section Header */}
                <motion.div variants={fadeInUp} className="mb-12 text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue">
                        FAQ
                    </p>
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        Your Questions{" "}
                        <span className="gradient-text">Answered</span>
                    </h2>
                </motion.div>

                {/* Accordion */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3"
                >
                    {generalFaqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-colors duration-200 hover:border-white/10"
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="flex w-full items-center justify-between px-6 py-4 text-left"
                            >
                                <span className="text-sm font-medium text-light-100 pr-4 sm:text-base">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`shrink-0 text-light-400 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-sky-blue" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-4">
                                            <p className="text-sm leading-relaxed text-light-400">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
