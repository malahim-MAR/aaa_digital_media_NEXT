"use client";
import { m } from "framer-motion";

export default function LogoWall() {
    const logos = [
        "TechGlobal", "Nexus", "Elevate", "Prime", "Velocity", "Aura", "Quantum", "Apex"
    ];

    return (
        <section className="py-20 border-b border-white/5 overflow-hidden">
            <div className="wrap">
                <p className="text-center text-[#64748b] text-sm font-bold tracking-widest uppercase mb-12">Trusted by Industry Leaders</p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {logos.map((logo, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-2xl font-black text-white tracking-tighter"
                        >
                            {logo}
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
