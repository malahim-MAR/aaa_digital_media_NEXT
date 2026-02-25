"use client";

import { m } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const STEPS = [
    {
        icon: Search,
        num: "01",
        title: "Discovery & Strategy",
        desc: "We dive deep into your brand, audience, and goals to craft a data-backed roadmap for success.",
        color: "#00A6FB",
    },
    {
        icon: Lightbulb,
        num: "02",
        title: "Creative Direction",
        desc: "Our designers and storytellers bring the strategy to life with premium visuals and intuitive UX.",
        color: "#0077B6",
    },
    {
        icon: Code2,
        num: "03",
        title: "Development & Build",
        desc: "We turn concepts into reality using cutting-edge technology, ensuring speed and scalability.",
        color: "#00A6FB",
    },
    {
        icon: Rocket,
        num: "04",
        title: "Launch & Growth",
        desc: "Go-live is just the beginning. We optimize and scale your presence to maximize ROI.",
        color: "#0077B6",
    },
];

export default function Process() {
    return (
        <section style={{ padding: "128px 0", position: "relative", overflow: "hidden" }}>
            {/* Ambient bg glow */}
            <div style={{
                position: "absolute", bottom: 0, right: 0,
                width: 600, height: 600,
                background: "radial-gradient(ellipse, rgba(0,119,182,0.05), transparent 70%)",
                pointerEvents: "none",
            }} />

            <div className="wrap" style={{ position: "relative" }}>

                {/* ── Section header ─────────────────── */}
                <div style={{
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: 96,
                    marginBottom: 96,
                }}>
                    <m.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: "block",
                            fontSize: 13,
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#00A6FB",
                            marginBottom: 16,
                        }}
                    >
                        Our Process
                    </m.span>
                    <m.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(2.5rem, 7vw, 5rem)",
                            fontWeight: 800,
                            lineHeight: 0.9,
                            letterSpacing: "-0.04em",
                            color: "#FFFFFF",
                            maxWidth: 700,
                            marginBottom: 24,
                        }}
                    >
                        How We Build <br />
                        <span style={{ color: "#0077B6" }}>Legacy Brands</span>
                    </m.h2>
                    <m.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                            color: "#94a3b8",
                            lineHeight: 1.7,
                            maxWidth: 560,
                        }}
                    >
                        A streamlined, four-phase approach to taking your business from where it is to where it needs to be.
                    </m.p>
                </div>

                {/* ── Steps ──────────────────────────── */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(1, 1fr)",
                    gap: 20,
                }}
                    className="process-grid"
                >
                    {STEPS.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <m.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.7 }}
                                whileHover={{ borderColor: "rgba(0,166,251,0.35)", y: -4 }}
                                style={{
                                    position: "relative",
                                    padding: "40px 36px",
                                    background: "rgba(0,14,28,0)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    borderRadius: 24,
                                    overflow: "hidden",
                                    transition: "border-color 0.4s, transform 0.4s",
                                }}
                            >
                                {/* Large ghost number */}
                                <div style={{
                                    position: "absolute",
                                    top: 24, right: 28,
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "5rem",
                                    fontWeight: 900,
                                    lineHeight: 1,
                                    color: "rgba(255,255,255,0.04)",
                                    letterSpacing: "-0.04em",
                                    pointerEvents: "none",
                                    userSelect: "none",
                                }}>
                                    {step.num}
                                </div>

                                {/* Top cyan connector line */}
                                {i > 0 && (
                                    <div style={{
                                        position: "absolute",
                                        top: 0, left: 36,
                                        width: 1, height: 0,
                                        background: "linear-gradient(to bottom, rgba(0,166,251,0.4), transparent)",
                                    }} />
                                )}

                                {/* Icon */}
                                <div style={{
                                    width: 52, height: 52,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: `rgba(0,166,251,0.08)`,
                                    border: `1px solid rgba(0,166,251,0.2)`,
                                    marginBottom: 28,
                                    color: step.color,
                                    boxShadow: `0 0 20px rgba(0,166,251,0.1)`,
                                }}>
                                    <Icon size={22} />
                                </div>

                                {/* Step num badge */}
                                <div style={{
                                    display: "inline-block",
                                    fontSize: 11,
                                    fontWeight: 700,
                                    color: "#00A6FB",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    marginBottom: 12,
                                    background: "rgba(0,166,251,0.07)",
                                    border: "1px solid rgba(0,166,251,0.15)",
                                    padding: "3px 10px",
                                    borderRadius: 100,
                                }}>
                                    Phase {step.num}
                                </div>

                                <h3 style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "1.35rem",
                                    fontWeight: 700,
                                    color: "#FFFFFF",
                                    marginBottom: 12,
                                    letterSpacing: "-0.02em",
                                }}>
                                    {step.title}
                                </h3>

                                <p style={{
                                    fontSize: 15,
                                    color: "#94a3b8",
                                    lineHeight: 1.7,
                                }}>
                                    {step.desc}
                                </p>

                                {/* Bottom cyan line accent */}
                                <div style={{
                                    position: "absolute",
                                    bottom: 0, left: 36,
                                    height: 2, width: 24,
                                    background: "linear-gradient(90deg, #00A6FB, transparent)",
                                    borderRadius: 2,
                                }} />
                            </m.div>
                        );
                    })}
                </div>

                {/* Responsive grid override */}
                <style>{`
                    .process-grid {
                        grid-template-columns: 1fr !important;
                    }
                    @media (min-width: 768px) {
                        .process-grid {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                    }
                    @media (min-width: 1280px) {
                        .process-grid {
                            grid-template-columns: repeat(4, 1fr) !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}
