"use client";

import { motion } from "framer-motion";
import {
    TrendingUp, Globe, Smartphone, AppWindow,
    Palette, Search, Share2, Camera, ArrowRight, Sparkles,
} from "lucide-react";
import { services } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";

const iconMap = {
    TrendingUp, Globe, Smartphone, AppWindow,
    Palette, Search, Share2, Camera,
};

export default function ServicesOverview() {
    // Take the first 6 for homepage display
    const displayed = services.slice(0, 6);

    return (
        <SectionWrapper id="services" className="relative">
            {/* Section Header */}
            <div className="mb-14 max-w-2xl">
                <motion.p
                    variants={fadeInUp}
                    className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue"
                >
                    Our Services
                </motion.p>
                <motion.h2
                    variants={fadeInUp}
                    className="text-3xl font-bold sm:text-4xl md:text-5xl"
                >
                    Full-Service Digital{" "}
                    <span className="gradient-text">Solutions</span>
                </motion.h2>
                <motion.p
                    variants={fadeInUp}
                    className="mt-4 text-base text-light-400 leading-relaxed"
                >
                    From strategy to execution — everything your brand needs to dominate
                    the digital landscape, under one roof.
                </motion.p>
            </div>

            {/* Bento Grid */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
                {displayed.map((service, index) => {
                    const Icon = iconMap[service.icon] || Globe;
                    // Make first two cards tall on large screens
                    const isFeatured = index < 2;

                    return (
                        <motion.a
                            key={service.id}
                            href={`/services/${service.id}`}
                            variants={fadeInUp}
                            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-sky-blue/30 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)] ${isFeatured ? "lg:row-span-2 lg:p-8" : ""
                                }`}
                        >
                            {/* Hover gradient glow */}
                            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky-blue/0 blur-[60px] transition-all duration-500 group-hover:bg-sky-blue/10" />

                            <div>
                                {/* Icon */}
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                    <Icon size={22} className="text-sky-blue" />
                                </div>

                                {/* Title + Badge */}
                                <div className="mb-2 flex items-center gap-2">
                                    <h3 className="text-lg font-semibold text-light-100 group-hover:text-white">
                                        {service.title}
                                    </h3>
                                    {service.isNew && (
                                        <Badge variant="new">
                                            <Sparkles size={10} /> New
                                        </Badge>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-light-400">
                                    {service.shortDesc}
                                </p>

                                {/* Extended info for featured cards */}
                                {isFeatured && (
                                    <ul className="mt-4 hidden space-y-1.5 lg:block">
                                        {service.features.slice(0, 4).map((feat) => (
                                            <li
                                                key={feat}
                                                className="flex items-center gap-2 text-xs text-light-400"
                                            >
                                                <span className="h-1 w-1 rounded-full bg-sky-blue/60" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Arrow */}
                            <div className="mt-5 flex items-center gap-1 text-sm font-medium text-sky-blue opacity-0 transition-all duration-300 group-hover:opacity-100">
                                Learn more{" "}
                                <ArrowRight
                                    size={14}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </div>
                        </motion.a>
                    );
                })}
            </motion.div>

            {/* View All */}
            <motion.div
                variants={fadeInUp}
                className="mt-10 text-center"
            >
                <a
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-light-300 transition-colors hover:text-sky-blue"
                >
                    View all services <ArrowRight size={14} />
                </a>
            </motion.div>
        </SectionWrapper>
    );
}
