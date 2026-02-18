"use client";

import { motion } from "framer-motion";
import {
    TrendingUp, Globe, Smartphone, AppWindow,
    Palette, Search, Share2, Camera, ArrowRight, Sparkles,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import { services } from "@/lib/data";

const iconMap = {
    TrendingUp, Globe, Smartphone, AppWindow,
    Palette, Search, Share2, Camera,
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.08 } },
};

export default function ServicesPage() {
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
                            Our Services
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Everything Your Brand Needs to{" "}
                            <span className="gradient-text">Dominate Digital</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mx-auto mt-6 max-w-2xl text-lg text-light-400 leading-relaxed"
                        >
                            From strategy to execution — 8 specialized services designed to
                            grow your business, build your brand, and scale globally.
                        </motion.p>
                    </div>
                </section>

                {/* All Services Grid */}
                <section className="py-20 md:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 gap-6 md:grid-cols-2"
                        >
                            {services.map((service, i) => {
                                const Icon = iconMap[service.icon] || Globe;
                                return (
                                    <motion.a
                                        key={service.id}
                                        href={`/services/${service.id}`}
                                        variants={fadeUp}
                                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 hover:border-sky-blue/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(59,130,246,0.06)]"
                                    >
                                        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky-blue/0 blur-[60px] transition-all duration-500 group-hover:bg-sky-blue/8" />

                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                                <Icon size={22} className="text-sky-blue" />
                                            </div>
                                            {service.isNew && (
                                                <Badge variant="new">
                                                    <Sparkles size={10} /> New
                                                </Badge>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-light-400 leading-relaxed mb-4">
                                            {service.description}
                                        </p>

                                        <ul className="space-y-1.5 mb-6">
                                            {service.features.slice(0, 4).map((feat) => (
                                                <li
                                                    key={feat}
                                                    className="flex items-center gap-2 text-xs text-light-400"
                                                >
                                                    <span className="h-1 w-1 rounded-full bg-sky-blue/60 shrink-0" />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-auto flex items-center gap-1 text-sm font-medium text-sky-blue">
                                            Learn more
                                            <ArrowRight
                                                size={14}
                                                className="transition-transform group-hover:translate-x-1"
                                            />
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
