"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe, Layers, Headphones } from "lucide-react";
import { differentiators } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";

const iconMap = { BarChart3, Globe, Layers, Headphones };

export default function WhyChooseUs() {
    return (
        <SectionWrapper>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                {/* Left Side: Text */}
                <div>
                    <motion.p
                        variants={fadeInUp}
                        className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-blue"
                    >
                        Why Choose Us
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold sm:text-4xl md:text-5xl"
                    >
                        Built Different,{" "}
                        <span className="gradient-text">Proven Results</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="mt-4 text-base leading-relaxed text-light-400"
                    >
                        We're not just another agency. We combine global standards with
                        dedicated personal service to deliver outcomes that matter.
                    </motion.p>
                </div>

                {/* Right Side: Cards Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                    {differentiators.map((item) => {
                        const Icon = iconMap[item.icon] || Globe;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-sky-blue/20 hover:bg-white/[0.04]"
                            >
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-blue/10">
                                    <Icon size={20} className="text-sky-blue" />
                                </div>
                                <h3 className="mb-1.5 text-base font-semibold text-light-100">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-light-400">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
