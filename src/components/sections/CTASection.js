"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTASection() {
    return (
        <section className="relative overflow-hidden py-28 md:py-36 lg:py-44">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue/20 via-transparent to-transparent" />
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-blue/8 blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto max-w-4xl px-6 text-center"
            >
                <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
                    Ready to Scale Your Business{" "}
                    <span className="gradient-text">Globally?</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400 leading-relaxed">
                    Whether you&apos;re in New York or Karachi, we&apos;re ready
                    to help. Let&apos;s build something extraordinary together.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button href="/contact" size="lg">
                        Start Your Project <ArrowRight size={18} />
                    </Button>
                    <Button href="/services" variant="secondary" size="lg">
                        Explore Services
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
