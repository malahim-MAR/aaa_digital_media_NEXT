"use client";

import { motion } from "framer-motion";
import {
    TrendingUp, Globe, Smartphone, AppWindow, Palette,
    Search, Share2, Camera, ArrowRight, ArrowLeft, CheckCircle2,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const iconMap = {
    TrendingUp, Globe, Smartphone, AppWindow,
    Palette, Search, Share2, Camera,
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServiceDetailClient({
    service,
    nextService,
    prevService,
}) {
    const Icon = iconMap[service.icon] || Globe;

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="relative flex items-center overflow-hidden pt-32 pb-20">
                    <div className="absolute inset-0">
                        <div className="absolute -left-[20%] -top-[20%] h-[50%] w-[50%] rounded-full bg-ocean-blue/15 blur-[120px]" />
                        <div className="absolute -bottom-[10%] -right-[10%] h-[30%] w-[30%] rounded-full bg-cyan/10 blur-[100px]" />
                    </div>
                    <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 flex items-center gap-3"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                <Icon size={28} className="text-sky-blue" />
                            </div>
                            <div>
                                <p className="text-sm font-medium uppercase tracking-widest text-sky-blue">
                                    Our Services
                                </p>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-4xl font-bold sm:text-5xl md:text-6xl"
                        >
                            {service.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 max-w-3xl text-lg text-light-400 leading-relaxed"
                        >
                            {service.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8"
                        >
                            <Button href="/contact">
                                Get a Free Consultation <ArrowRight size={16} />
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 md:py-28 border-t border-white/5">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mb-12"
                        >
                            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue">
                                What&apos;s Included
                            </p>
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Service <span className="gradient-text">Features</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                        >
                            {service.features.map((feat, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-sky-blue/15"
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="mt-0.5 shrink-0 text-sky-blue"
                                    />
                                    <span className="text-sm text-light-300">{feat}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-20 md:py-28 border-t border-white/5">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mb-12"
                        >
                            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue">
                                How We Work
                            </p>
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Our <span className="gradient-text">Process</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative space-y-6"
                        >
                            {/* Connecting line */}
                            <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-sky-blue/40 via-cyan/20 to-transparent hidden sm:block" />

                            {service.process.map((step, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="relative flex gap-5"
                                >
                                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sky-blue/30 bg-dark-700 text-sm font-bold text-sky-blue">
                                        {step.step}
                                    </div>
                                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 flex-1">
                                        <h3 className="text-base font-semibold mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-light-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Technologies */}
                <section className="py-20 md:py-28 border-t border-white/5">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mb-10"
                        >
                            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue">
                                Tools & Platforms
                            </p>
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Technologies We <span className="gradient-text">Use</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="flex flex-wrap gap-3"
                        >
                            {service.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-light-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* FAQs */}
                {service.faqs && service.faqs.length > 0 && (
                    <section className="py-20 md:py-28 border-t border-white/5">
                        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="mb-10 text-center"
                            >
                                <h2 className="text-3xl font-bold sm:text-4xl">
                                    Frequently <span className="gradient-text">Asked</span>
                                </h2>
                            </motion.div>
                            <motion.div
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                {service.faqs.map((faq, i) => (
                                    <motion.details
                                        key={i}
                                        variants={fadeUp}
                                        className="group rounded-xl border border-white/[0.06] bg-white/[0.02]"
                                    >
                                        <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-light-100 list-none">
                                            {faq.question}
                                            <span className="ml-4 shrink-0 text-light-400 transition-transform group-open:rotate-45 text-xl">
                                                +
                                            </span>
                                        </summary>
                                        <p className="px-5 pb-5 text-sm text-light-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.details>
                                ))}
                            </motion.div>
                        </div>
                    </section>
                )}

                {/* Navigation */}
                <section className="py-12 border-t border-white/5">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <a
                                href={`/services/${prevService.id}`}
                                className="group flex items-center gap-2 text-sm text-light-400 hover:text-white transition-colors"
                            >
                                <ArrowLeft
                                    size={16}
                                    className="transition-transform group-hover:-translate-x-1"
                                />
                                {prevService.title}
                            </a>
                            <a
                                href={`/services/${nextService.id}`}
                                className="group flex items-center gap-2 text-sm text-light-400 hover:text-white transition-colors"
                            >
                                {nextService.title}
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
