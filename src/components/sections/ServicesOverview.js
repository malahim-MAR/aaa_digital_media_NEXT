"use client";

import { motion } from "framer-motion";
import {
    TrendingUp, Globe, Smartphone, AppWindow,
    Palette, Search, Share2, Camera, ArrowRight, Sparkles,
} from "lucide-react";
import { services } from "@/lib/data";
import Badge from "@/components/ui/Badge";

const iconMap = {
    TrendingUp, Globe, Smartphone, AppWindow,
    Palette, Search, Share2, Camera,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function ServicesOverview() {
    const displayed = services.slice(0, 6);

    return (
        <section className="relative py-28 md:py-36 lg:py-44 border-t border-white/[0.04]">
            {/* Background accent */}
            <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-blue/[0.03] blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20 max-w-2xl"
                >
                    <div className="section-label mb-4">
                        <span className="label-dot" />
                        Our Services
                    </div>
                    <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl leading-[1]">
                        Full-Service Digital{" "}
                        <span className="gradient-text">Solutions</span>
                    </h2>
                    <p className="mt-5 text-lg text-neutral-400 leading-relaxed">
                        From strategy to execution — everything your brand needs to
                        dominate the digital landscape, under one roof.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {displayed.map((service, index) => {
                        const Icon = iconMap[service.icon] || Globe;
                        const isFeatured = index < 2;

                        return (
                            <motion.a
                                key={service.id}
                                href={`/services/${service.id}`}
                                variants={cardVariant}
                                className={`chrome-card group flex flex-col justify-between p-7 lg:p-8 ${isFeatured ? "lg:row-span-2" : ""
                                    }`}
                            >
                                {/* Hover gradient */}
                                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-blue/0 blur-[70px] transition-all duration-500 group-hover:bg-sky-blue/8" />

                                <div>
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                                        <Icon size={22} className="text-sky-blue" />
                                    </div>

                                    <div className="mb-3 flex items-center gap-2">
                                        <h3 className="text-xl font-semibold text-neutral-100 group-hover:text-white transition-colors">
                                            {service.title}
                                        </h3>
                                        {service.isNew && (
                                            <Badge variant="new">
                                                <Sparkles size={10} /> New
                                            </Badge>
                                        )}
                                    </div>

                                    <p className="text-sm leading-relaxed text-neutral-400">
                                        {service.shortDesc}
                                    </p>

                                    {isFeatured && (
                                        <ul className="mt-5 hidden space-y-2 lg:block">
                                            {service.features.slice(0, 4).map((feat) => (
                                                <li
                                                    key={feat}
                                                    className="flex items-center gap-2.5 text-sm text-neutral-500"
                                                >
                                                    <span className="h-1 w-1 shrink-0 rounded-full bg-sky-blue/60" />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-sky-blue opacity-0 transition-all duration-300 group-hover:opacity-100">
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

                {/* View All */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-sky-blue"
                    >
                        View all 8 services <ArrowRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
