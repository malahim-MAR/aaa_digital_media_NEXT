"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CaseStudyClient({ item }) {
    const results = item.results
        ? Object.values(item.results)
        : [];

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="relative flex items-center overflow-hidden pt-32 pb-20">
                    <div className="absolute inset-0">
                        <div className="absolute -left-[20%] -top-[20%] h-[50%] w-[50%] rounded-full bg-ocean-blue/15 blur-[120px]" />
                    </div>
                    <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <a
                                href="/portfolio"
                                className="mb-6 inline-flex items-center gap-1 text-sm text-light-400 hover:text-white transition-colors"
                            >
                                <ArrowLeft size={14} /> Back to Portfolio
                            </a>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue"
                        >
                            Case Study — {item.industry}
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.6 }}
                            className="text-4xl font-bold sm:text-5xl md:text-6xl"
                        >
                            {item.title}
                        </motion.h1>

                        {item.client && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.25 }}
                                className="mt-2 text-light-400"
                            >
                                Client: <span className="text-light-200">{item.client}</span>
                            </motion.p>
                        )}
                    </div>
                </section>

                {/* Challenge & Solution */}
                <section className="py-20 md:py-28 border-t border-white/5">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 md:grid-cols-2">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue">
                                The Challenge
                            </p>
                            <p className="text-light-300 leading-relaxed">
                                {item.challenge}
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan">
                                Our Solution
                            </p>
                            <p className="text-light-300 leading-relaxed">
                                {item.solution}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Results */}
                {results.length > 0 && (
                    <section className="py-20 md:py-28 border-t border-white/5">
                        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="mb-10 text-center"
                            >
                                <h2 className="text-3xl font-bold sm:text-4xl">
                                    The <span className="gradient-text">Results</span>
                                </h2>
                            </motion.div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {results.map((metric, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center"
                                    >
                                        <p className="text-2xl font-bold text-sky-blue sm:text-3xl">
                                            {metric}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Technologies */}
                <section className="py-20 md:py-28 border-t border-white/5">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mb-8"
                        >
                            <h2 className="text-2xl font-bold">
                                Technologies <span className="gradient-text">Used</span>
                            </h2>
                        </motion.div>
                        <div className="flex flex-wrap gap-3">
                            {item.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-light-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                {item.testimonial && (
                    <section className="py-20 md:py-28 border-t border-white/5">
                        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10"
                            >
                                <Quote size={32} className="mb-4 text-sky-blue/30" />
                                <blockquote className="text-xl text-light-200 leading-relaxed italic">
                                    &ldquo;{item.testimonial.quote}&rdquo;
                                </blockquote>
                                <div className="mt-6">
                                    <p className="font-semibold text-light-100">
                                        {item.testimonial.author}
                                    </p>
                                    <p className="text-sm text-light-400">
                                        {item.testimonial.role}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="py-20 border-t border-white/5">
                    <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-3xl font-bold sm:text-4xl"
                        >
                            Want Results Like{" "}
                            <span className="gradient-text">These?</span>
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mt-4 text-light-400"
                        >
                            Let&apos;s discuss how we can create similar impact for your brand.
                        </motion.p>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mt-8 flex flex-wrap justify-center gap-3"
                        >
                            <Button href="/contact">
                                Start a Project <ArrowRight size={16} />
                            </Button>
                            <Button href="/portfolio" variant="secondary">
                                View More Work
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
