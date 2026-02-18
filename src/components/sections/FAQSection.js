"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { generalFaqs } from "@/lib/data";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="relative py-28 md:py-36 lg:py-44 border-t border-white/[0.04]">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
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
                        FAQ
                    </div>
                    <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                        Your Questions{" "}
                        <span className="gradient-text">Answered</span>
                    </h2>
                </motion.div>

                {/* Accordion */}
                <div className="space-y-3">
                    {generalFaqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.5 }}
                            className="chrome-card overflow-hidden"
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="flex w-full items-center justify-between px-6 py-5 text-left"
                            >
                                <span className="text-base font-medium text-neutral-100 pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`shrink-0 text-neutral-500 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-sky-blue" : ""
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
                                        <div className="px-6 pb-5">
                                            <p className="text-sm leading-relaxed text-neutral-400">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
