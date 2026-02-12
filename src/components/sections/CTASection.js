"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";

export default function CTASection() {
    return (
        <section className="relative overflow-hidden py-20 md:py-28">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue/30 via-dark-800 to-dark-900" />
                <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-blue/10 blur-[100px]" />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
            >
                <motion.h2
                    variants={fadeInUp}
                    className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
                >
                    Ready to Scale Your Business{" "}
                    <span className="gradient-text">Globally?</span>
                </motion.h2>
                <motion.p
                    variants={fadeInUp}
                    className="mx-auto mt-5 max-w-2xl text-base text-light-400 sm:text-lg"
                >
                    Whether you&apos;re in New York or Karachi, we&apos;re ready to help. Let&apos;s
                    build something extraordinary together.
                </motion.p>
                <motion.div
                    variants={fadeInUp}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button href="/contact" size="lg">
                        Start Your Project <ArrowRight size={18} />
                    </Button>
                    <Button href="/services" variant="secondary" size="lg">
                        Explore Services
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
