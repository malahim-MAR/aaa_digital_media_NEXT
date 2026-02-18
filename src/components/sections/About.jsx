"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WHY_CHOOSE_US, STATS } from "@/lib/data";

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section
            id="about"
            ref={containerRef}
            style={{ padding: "128px 0", minHeight: "100vh", position: "relative" }}
        >
            <div className="wrap">
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 128 }} className="lg:grid-cols-[1fr_2fr]">

                    {/* Sticky Sidebar */}
                    <div className="hidden lg:block lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span style={{ display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00A6FB", marginBottom: 16 }}>
                                About Us
                            </span>
                            <h2 style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.04em", color: "#FFFFFF" }}>
                                Built <br /> <span style={{ color: "#0077B6" }}>Different.</span>
                            </h2>
                            {/* Cyan Gradient Line */}
                            <div style={{ height: 2, background: "linear-gradient(90deg, #00A6FB, transparent)", marginTop: 32, width: 120 }}></div>
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 128 }}>

                        {/* Story */}
                        <div>
                            <span style={{ display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0077B6", marginBottom: 32 }}>
                                01 / Mission
                            </span>
                            <p style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 300, lineHeight: 1.4, color: "#CECECE" }}>
                                AAA Digital Media is a <strong style={{ fontWeight: 600, color: "#00A6FB" }}>full-service partner</strong> for ambitious brands. We combine international-level quality with the dedication of a boutique studio to deliver <span style={{ fontStyle: "italic", color: "#D4AF37" /* Gold */ }}>real, measurable growth</span>.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <div style={{ position: "relative", paddingLeft: 48, borderLeft: "1px solid rgba(0, 166, 251, 0.2)" }}>
                            <motion.div
                                style={{ scaleY: scrollYProgress, transformOrigin: "top", position: "absolute", left: -1, top: 0, bottom: 0, width: 2, background: "#00A6FB" /* Cyan progress bar */ }}
                            />

                            <span style={{ display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0077B6", marginBottom: 48 }}>
                                02 / Why Choose Us
                            </span>

                            {WHY_CHOOSE_US.map((item, i) => (
                                <div key={i} style={{ marginBottom: 64, position: "relative" }}>
                                    {/* Bullet Point - Cyan with Deep Blue fill */}
                                    <div style={{
                                        position: "absolute", left: -53, top: 8, width: 12, height: 12, borderRadius: 50,
                                        background: "#00152b", border: "2px solid #00A6FB", boxShadow: "0 0 10px rgba(0, 166, 251, 0.5)"
                                    }}></div>
                                    <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#FFFFFF" }}>{item.title}</h3>
                                    <p style={{ fontSize: 18, color: "#CECECE", lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Stats Card - Deep Navy Glass */}
                        <div style={{
                            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 64,
                            padding: 64,
                            background: "rgba(10, 20, 40, 0.4)", border: "1px solid rgba(0, 166, 251, 0.15)", /* Cyan tint */
                            borderRadius: 32, boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                        }}>
                            {STATS.map((stat, i) => (
                                <div key={i}>
                                    <h4 style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1, marginBottom: 8, color: "#00A6FB" }}>{stat.value}</h4>
                                    <p style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#CECECE" }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <style>{`
        @media (min-width: 1024px) { 
          .lg\\:grid-cols-\\[1fr_2fr\\] { grid-template-columns: 1fr 2fr !important; }
          .lg\\:sticky { position: sticky !important; }
          .lg\\:top-0 { top: 0 !important; }
          .lg\\:h-screen { height: 100vh !important; }
          .lg\\:block { display: block !important; }
        }
      `}</style>
        </section>
    );
}
