"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    return (
        <section
            id="about"
            ref={containerRef}
            style={{ padding: "clamp(64px,12vw,128px) 0", position: "relative" }}
        >
            <div className="wrap border-t border-white/5" style={{ paddingTop: "clamp(32px,6vw,96px)" }}>
                {/* Stack on mobile, side-by-side on lg */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]" style={{ gap: "clamp(32px,6vw,64px)" }}>

                    {/* Sidebar */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <span style={{ display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00A6FB", marginBottom: 16 }}>
                                About Us
                            </span>
                            <h2 style={{ fontSize: "clamp(2.2rem, 8vw, 5.5rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.04em", color: "#FFFFFF", marginBottom: 20 }}>
                                Built <br className="hidden lg:block" />
                                <span style={{ color: "#0077B6" }}>Different.</span>
                            </h2>
                            <p style={{ fontSize: "clamp(14px,2vw,16px)", fontWeight: 300, lineHeight: 1.6, color: "#CECECE" }}>
                                AAA Digital Media is a <strong style={{ fontWeight: 600, color: "#00A6FB" }}>full-service partner</strong> for ambitious brands. We combine international-level quality with the dedication of a boutique studio to deliver <span style={{ fontStyle: "italic", color: "#D4AF37" }}>real, measurable growth</span>.
                            </p>
                            <div style={{ height: 2, background: "linear-gradient(90deg, #00A6FB, transparent)", marginTop: 28, width: 100 }} />
                        </m.div>
                    </div>

                    {/* Content */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px,6vw,50px)" }}>

                        {/* Mission */}
                        <div>
                            <span style={{ display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0077B6", marginBottom: 24 }}>
                                01 / Mission
                            </span>
                            <p style={{ fontSize: "clamp(16px,2.5vw,18px)", fontWeight: 300, lineHeight: 1.5, color: "#CECECE" }}>
                                AAA Digital Media is a <strong style={{ fontWeight: 600, color: "#00A6FB" }}>full-service partner</strong> for ambitious brands. We combine international-level quality with the dedication of a boutique studio to deliver <span style={{ fontStyle: "italic", color: "#D4AF37" }}>real, measurable growth</span>.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <div style={{ position: "relative", paddingLeft: "clamp(24px,5vw,48px)", borderLeft: "1px solid rgba(0,166,251,0.2)" }}>
                            {/* Scroll progress bar */}
                            <m.div style={{ scaleY: scrollYProgress, transformOrigin: "top", position: "absolute", left: -1, top: 0, bottom: 0, width: 2, background: "#00A6FB" }} />

                            <span style={{ display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0077B6", marginBottom: "clamp(24px,5vw,48px)" }}>
                                02 / Why Choose Us
                            </span>

                            {WHY_CHOOSE_US.map((item, i) => (
                                <div key={i} style={{ marginBottom: "clamp(32px,6vw,64px)", position: "relative" }}>
                                    {/* Bullet */}
                                    <div style={{ position: "absolute", left: "clamp(-29px,-53px,-29px)", top: 8, width: 10, height: 10, borderRadius: "50%", background: "#00152b", border: "2px solid #00A6FB", boxShadow: "0 0 10px rgba(0,166,251,0.5)" }} />
                                    <h3 style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 700, marginBottom: 12, color: "#FFFFFF" }}>{item.title}</h3>
                                    <p style={{ fontSize: "clamp(15px,2vw,18px)", color: "#CECECE", lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
