"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
    const [cur, setCur] = useState(0);
    const [dir, setDir] = useState(1);

    const go = (next) => {
        setDir(next > cur ? 1 : -1);
        setCur(next);
    };

    const variants = {
        enter: (d) => ({ opacity: 0, x: d > 0 ? 32 : -32 }),
        center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
        exit: (d) => ({ opacity: 0, x: d > 0 ? -32 : 32, transition: { duration: 0.25 } }),
    };

    return (
        <section style={{ padding: "128px 0", borderTop: "1px solid rgba(255,255,255,0.055)" }}>
            <div className="wrap">
                {/* Header */}
                <ScrollReveal style={{ marginBottom: 72 }}>
                    <p style={{
                        fontSize: 11, fontWeight: 600, letterSpacing: "0.22em",
                        textTransform: "uppercase", color: "#64748b", marginBottom: 20,
                    }}>
                        Testimonials
                    </p>
                    <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}>
                        What Our Clients <span className="g-text">Say</span>
                    </h2>
                </ScrollReveal>

                {/* Split layout — editorial left + stacked right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    {/* Left — large quote */}
                    <ScrollReveal>
                        <AnimatePresence mode="wait" custom={dir}>
                            <m.div key={cur} custom={dir} variants={variants} initial="enter" animate="center" exit="exit">
                                <Quote size={48} color="rgba(37,99,235,0.12)" fill="rgba(37,99,235,0.12)" style={{ marginBottom: 32 }} />
                                <blockquote style={{
                                    fontSize: "clamp(1.2rem, 2.2vw, 1.45rem)",
                                    fontWeight: 500,
                                    lineHeight: 1.65,
                                    color: "rgba(240,244,255,0.82)",
                                    letterSpacing: "-0.015em",
                                    marginBottom: 40,
                                    fontFamily: "var(--font-heading)",
                                }}>
                                    &ldquo;{TESTIMONIALS[cur].quote}&rdquo;
                                </blockquote>
                                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                                    <div style={{
                                        width: 44, height: 44, borderRadius: "50%",
                                        background: "linear-gradient(135deg, #2563EB, #00C2FF)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontWeight: 800, fontSize: 17, color: "#fff", flexShrink: 0,
                                        fontFamily: "var(--font-heading)",
                                    }}>
                                        {TESTIMONIALS[cur].name[0]}
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 700, fontSize: 15, fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
                                            {TESTIMONIALS[cur].name}
                                        </p>
                                        <p style={{ fontSize: 13, color: "#94a3b8", marginTop: 2 }}>{TESTIMONIALS[cur].role}</p>
                                    </div>
                                </div>
                            </m.div>
                        </AnimatePresence>

                        {/* Dots */}
                        <div style={{ display: "flex", gap: 8, marginTop: 40 }}>
                            {TESTIMONIALS.map((_, i) => (
                                <button key={i} onClick={() => go(i)} style={{
                                    height: 4, width: i === cur ? 32 : 4, borderRadius: 2,
                                    background: i === cur ? "#2563EB" : "rgba(255,255,255,0.1)",
                                    border: "none", cursor: "pointer", transition: "all 0.35s ease",
                                }} />
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Right — stacked cards */}
                    <ScrollReveal delay={0.15}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 2, border: "1px solid rgba(255,255,255,0.055)", borderRadius: 18, overflow: "hidden" }}>
                            {TESTIMONIALS.map((t, i) => (
                                <div
                                    key={i}
                                    onClick={() => go(i)}
                                    style={{
                                        padding: "24px 28px",
                                        background: i === cur ? "#111820" : "#0D1117",
                                        borderBottom: "1px solid rgba(255,255,255,0.055)",
                                        cursor: "pointer",
                                        transition: "background 0.25s",
                                        borderLeft: i === cur ? "2px solid #2563EB" : "2px solid transparent",
                                    }}
                                    onMouseEnter={e => { if (i !== cur) e.currentTarget.style.background = "#0F1520"; }}
                                    onMouseLeave={e => { if (i !== cur) e.currentTarget.style.background = "#0D1117"; }}
                                >
                                    <p style={{ fontSize: 13, color: i === cur ? "#B0BCCC" : "#64748b", lineHeight: 1.6, marginBottom: 12 }}>
                                        &ldquo;{t.quote.substring(0, 80)}...&rdquo;
                                    </p>
                                    <p style={{ fontSize: 12, fontWeight: 700, color: i === cur ? "#F0F4FF" : "#94a3b8", fontFamily: "var(--font-heading)" }}>
                                        {t.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
