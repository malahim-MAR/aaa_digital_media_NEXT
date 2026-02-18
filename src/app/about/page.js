"use client";

import { motion } from "framer-motion";
import {
    Award, Lightbulb, Eye, Handshake, Globe, BookOpen,
    Users, Target, Zap, ArrowRight,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { values } from "@/lib/data";
import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const iconMap = { Award, Lightbulb, Eye, Handshake, Globe, BookOpen };

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                    <div className="absolute inset-0">
                        <div className="absolute -left-[20%] -top-[20%] h-[50%] w-[50%] rounded-full bg-ocean-blue/15 blur-[120px]" />
                        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-sky-blue/10 blur-[100px]" />
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4 text-sm font-medium uppercase tracking-widest text-sky-blue"
                        >
                            About Us
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            We Build Brands That{" "}
                            <span className="gradient-text">Compete Globally</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mx-auto mt-6 max-w-2xl text-lg text-light-400 leading-relaxed"
                        >
                            Based in Karachi, serving the world. We&apos;re a team of
                            strategists, designers, developers, and marketers obsessed with
                            delivering results that matter.
                        </motion.p>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-20 md:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue">
                                    Our Story
                                </p>
                                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                                    From Local Agency to{" "}
                                    <span className="gradient-text">Global Partner</span>
                                </h2>
                                <div className="mt-6 space-y-4 text-base text-light-400 leading-relaxed">
                                    <p>
                                        AAA Digital Media started with a simple belief: Pakistani
                                        talent can compete with the best in the world. What began as
                                        a small team in Karachi has grown into a full-service digital
                                        agency serving clients across 15+ countries.
                                    </p>
                                    <p>
                                        We&apos;ve helped startups launch, enterprises scale, and
                                        brands transform — all while maintaining the personal touch
                                        that sets us apart from faceless mega-agencies.
                                    </p>
                                    <p>
                                        Our approach is simple: understand your business deeply,
                                        deliver world-class work, and measure everything. No
                                        fluff, no jargon — just results.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="grid grid-cols-2 gap-4"
                            >
                                {STATS.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center"
                                    >
                                        <AnimatedCounter
                                            value={stat.value}
                                            suffix={stat.suffix}
                                            className="block text-3xl font-bold text-light-100 sm:text-4xl"
                                        />
                                        <p className="mt-1 text-sm text-light-400">{stat.label}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 md:py-28 border-t border-white/5">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-blue/10">
                                    <Target size={24} className="text-sky-blue" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                                <p className="text-light-400 leading-relaxed">
                                    To empower businesses worldwide with digital solutions that
                                    drive real growth. We bridge the gap between ambition and
                                    execution, turning visions into measurable success stories.
                                </p>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10">
                                    <Zap size={24} className="text-cyan" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                                <p className="text-light-400 leading-relaxed">
                                    To be recognized as the leading digital agency from South Asia,
                                    setting new standards in quality, innovation, and client
                                    success on the global stage.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20 md:py-28 border-t border-white/5">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mb-14 text-center"
                        >
                            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue">
                                Our Values
                            </p>
                            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                                What We <span className="gradient-text">Stand For</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {values.map((val) => {
                                const Icon = iconMap[val.icon] || Award;
                                return (
                                    <motion.div
                                        key={val.title}
                                        variants={fadeUp}
                                        className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-sky-blue/20 hover:bg-white/[0.04]"
                                    >
                                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-blue/10">
                                            <Icon size={20} className="text-sky-blue" />
                                        </div>
                                        <h3 className="mb-1.5 text-base font-semibold">
                                            {val.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-light-400">
                                            {val.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* Team Note */}
                <section className="py-20 md:py-28 border-t border-white/5">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <div className="mb-6 flex items-center justify-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-blue/10">
                                    <Users size={28} className="text-sky-blue" />
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                A Team That <span className="gradient-text">Delivers</span>
                            </h2>
                            <p className="mt-4 text-light-400 leading-relaxed">
                                Behind AAA Digital Media is a diverse team of 30+ professionals
                                — strategists, designers, full-stack developers, content
                                creators, and marketing specialists. United by a passion for
                                digital excellence.
                            </p>
                            <div className="mt-8">
                                <Button href="/contact">
                                    Work With Us <ArrowRight size={16} />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
