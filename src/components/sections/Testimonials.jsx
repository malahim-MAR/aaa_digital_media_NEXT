"use client";

import { m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const next = () => setActive((p) => (p + 1) % TESTIMONIALS.length);
    const prev = () => setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    const t = TESTIMONIALS[active];

    return (
        <section className="section" style={{ position: "relative", overflow: "hidden" }}>
            {/* Ambient glow */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "min(700px,90%)", height: 400, background: "radial-gradient(ellipse, rgba(0,77,182,0.08), transparent 70%)", pointerEvents: "none" }} />

            <div className="wrap" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "clamp(40px,8vw,96px)" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(40px,8vw,80px)", flexWrap: "wrap", gap: 16 }}>
                    <div>
                        <m.span
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#00A6FB", marginBottom: 12 }}
                        >
                            Social Proof
                        </m.span>
                        <m.h2
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            style={{ fontSize: "clamp(2rem,6vw,4rem)", fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.04em", color: "#fff" }}
                        >
                            Trusted by <span style={{ color: "#0077B6" }}>Leaders.</span>
                        </m.h2>
                    </div>

                    {/* Prev / Next arrows */}
                    <div style={{ display: "flex", gap: 10 }}>
                        {[prev, next].map((fn, i) => (
                            <button key={i} onClick={fn}
                                style={{
                                    width: 48, height: 48, borderRadius: "50%",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "#CECECE", cursor: "pointer", transition: "all 0.25s",
                                }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "#00A6FB"; e.currentTarget.style.color = "#00A6FB"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#CECECE"; }}
                            >
                                {i === 0 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Testimonial card */}
                <div style={{ position: "relative", minHeight: 280 }}>
                    <AnimatePresence mode="wait">
                        <m.div
                            key={active}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                padding: "clamp(28px,5vw,56px)",
                                borderRadius: 28,
                                background: "rgba(0,14,28,0.7)",
                                backdropFilter: "blur(16px)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Top-right quote glow */}
                            <div style={{ position: "absolute", top: -20, right: -20, width: 180, height: 180, background: "radial-gradient(circle, rgba(0,166,251,0.06), transparent 70%)", pointerEvents: "none" }} />

                            {/* Quote icon */}
                            <div style={{ marginBottom: 24 }}>
                                <Quote size={32} color="rgba(0,166,251,0.3)" />
                            </div>

                            {/* Quote text */}
                            <p style={{
                                fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
                                fontWeight: 400, lineHeight: 1.55, color: "#FFFFFF",
                                marginBottom: "clamp(24px,4vw,40px)",
                                maxWidth: 800,
                                fontStyle: "italic",
                            }}>
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Author row */}
                            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                {/* Avatar */}
                                <div style={{
                                    width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
                                    background: "linear-gradient(135deg, #002147, #0077B6)",
                                    border: "2px solid rgba(0,166,251,0.3)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: "0.04em",
                                }}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <p style={{ fontWeight: 700, color: "#fff", fontSize: 16, marginBottom: 2 }}>{t.name}</p>
                                    <p style={{ fontSize: 13, color: "#64748b" }}>{t.role}</p>
                                </div>

                                {/* Accent line */}
                                <div style={{ marginLeft: "auto", width: "clamp(40px,8vw,80px)", height: 2, background: "linear-gradient(90deg, #00A6FB, transparent)" }} />
                            </div>
                        </m.div>
                    </AnimatePresence>
                </div>

                {/* Dot indicators */}
                <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 28 }}>
                    {TESTIMONIALS.map((_, i) => (
                        <button key={i} onClick={() => setActive(i)}
                            style={{
                                width: i === active ? 24 : 8, height: 8, borderRadius: 100,
                                background: i === active ? "#00A6FB" : "rgba(255,255,255,0.12)",
                                border: "none", cursor: "pointer", padding: 0,
                                transition: "all 0.35s ease",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
