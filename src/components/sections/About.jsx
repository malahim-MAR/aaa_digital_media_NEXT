"use client";

import { m, useScroll, useTransform } from "framer-motion";
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
            <div className="wrap border-t border-white/5 pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-32">
                    {/* Sidebar / Top Heading on mobile */}
                    <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center">
                        <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <span style={{ display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00A6FB", marginBottom: 16 }}>
                                About Us
                            </span>
                            <h2 style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.04em", color: "#FFFFFF" }}>
                                Built <br className="hidden lg:block" /> <span style={{ color: "#0077B6" }}>Different.</span>
                            </h2>
                            <p style={{ fontSize: "16px", marginTop: '20px', fontWeight: 300, lineHeight: 1.5, color: "#CECECE" }}>
                                AAA Digital Media is a <strong style={{ fontWeight: 600, color: "#00A6FB" }}>full-service partner</strong> for ambitious brands. We combine international-level quality with the dedication of a boutique studio to deliver <span style={{ fontStyle: "italic", color: "#D4AF37" /* Gold */ }}>real, measurable growth</span>.
                            </p>
                            {/* Cyan Gradient Line */}
                            <div style={{ height: 2, background: "linear-gradient(90deg, #00A6FB, transparent)", marginTop: 32, width: 120 }}></div>
                        </m.div>
                    </div>

                    {/* Content */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 50, marginTop: '32px' }}>

                        {/* Story */}
                        <div>
                            <span style={{ display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0077B6", marginBottom: 32 }}>
                                01 / Mission
                            </span>
                            <p style={{ fontSize: "18px", fontWeight: 300, lineHeight: 1.4, color: "#CECECE" }}>
                                AAA Digital Media is a <strong style={{ fontWeight: 600, color: "#00A6FB" }}>full-service partner</strong> for ambitious brands. We combine international-level quality with the dedication of a boutique studio to deliver <span style={{ fontStyle: "italic", color: "#D4AF37" /* Gold */ }}>real, measurable growth</span>.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <div style={{ position: "relative", paddingLeft: 48, borderLeft: "1px solid rgba(0, 166, 251, 0.2)" }}>
                            <m.div
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
                    </div>
                </div>
            </div>
        </section>
    );
}
