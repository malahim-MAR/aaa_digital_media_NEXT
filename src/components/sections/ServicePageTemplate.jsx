"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicePageTemplate({
    icon,
    title,
    subtitle,
    desc,
    tags,
    benefits = [
        "Data-Backed Strategy",
        "Premium Quality Execution",
        "Fast, Reliable Turnaround",
        "Ongoing Dedicated Support",
    ],
    accentColor = "#00A6FB",
}) {
    return (
        <>
            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="section" style={{ paddingTop: 180, position: "relative", overflow: "hidden" }}>

                {/* Background glow blobs — purely decorative */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                }}>
                    <div style={{
                        position: "absolute", top: "-160px", left: "50%", transform: "translateX(-50%)",
                        width: 900, height: 500, borderRadius: "50%",
                        background: `radial-gradient(ellipse at center, ${accentColor}22 0%, transparent 70%)`,
                    }} />
                    <div style={{
                        position: "absolute", bottom: 0, right: 0,
                        width: 700, height: 700, borderRadius: "50%",
                        background: `radial-gradient(ellipse at center, ${accentColor}0d 0%, transparent 70%)`,
                    }} />
                    {/* grid dots */}
                    <div style={{
                        position: "absolute", inset: 0, opacity: 0.035,
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }} />
                </div>

                {/* Content — uses site wrap */}
                <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
                    <motion.div variants={stagger} initial="hidden" animate="visible">

                        {/* Breadcrumb pill */}
                        <motion.div variants={item} style={{ marginBottom: 40 }}>
                            <Link href="/services" style={{
                                display: "inline-flex", alignItems: "center", gap: 8,
                                padding: "8px 18px", borderRadius: 100,
                                border: `1px solid ${accentColor}44`,
                                background: `${accentColor}12`,
                                color: accentColor,
                                fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
                                textDecoration: "none",
                            }}>
                                <span style={{
                                    width: 7, height: 7, borderRadius: "50%",
                                    background: accentColor, animation: "pulse 2s infinite",
                                }} />
                                Our Services
                                <ChevronRight size={12} />
                            </Link>
                        </motion.div>

                        {/* Icon badge */}
                        <motion.div variants={item} style={{
                            width: 72, height: 72, borderRadius: 20, marginBottom: 36,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: `${accentColor}18`,
                            border: `1px solid ${accentColor}30`,
                            color: accentColor,
                        }}>
                            <span style={{ transform: "scale(1.4)" }}>{icon}</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1 variants={item} style={{
                            fontSize: "clamp(3rem, 9vw, 7rem)",
                            fontWeight: 900,
                            lineHeight: 0.95,
                            letterSpacing: "-0.04em",
                            marginBottom: 28,
                            fontFamily: "var(--font-heading)",
                        }}>
                            <span style={{ color: "#fff" }}>{title}</span>
                            {subtitle && (
                                <>
                                    <br />
                                    <span style={{
                                        backgroundImage: `linear-gradient(135deg, ${accentColor}, #004f80)`,
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}>
                                        {subtitle}
                                    </span>
                                </>
                            )}
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={item} style={{
                            fontSize: 18, color: "var(--text-secondary)",
                            maxWidth: 680, lineHeight: 1.7, marginBottom: 48,
                        }}>
                            {desc}
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div variants={item} style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                            <Link href="/contact" className="btn btn-primary" style={{ gap: 12, padding: "16px 32px", fontSize: 15 }}>
                                Start a Project <ArrowUpRight size={16} />
                            </Link>
                            <Link href="#details" className="btn" style={{
                                gap: 10, padding: "16px 32px", fontSize: 15,
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                color: "#fff", borderRadius: 100,
                                display: "inline-flex", alignItems: "center",
                                textDecoration: "none", fontWeight: 600,
                            }}>
                                See What We Do <ChevronRight size={15} style={{ color: accentColor }} />
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* ── DETAILS ──────────────────────────────────────────── */}
            <section id="details" className="section" style={{ background: "transparent" }}>
                <div className="wrap">
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
                        gap: "64px 80px",
                        alignItems: "start",
                    }}>

                        {/* Left — Why us */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <p style={{
                                fontSize: 12, fontWeight: 700, letterSpacing: "0.18em",
                                textTransform: "uppercase", color: accentColor, marginBottom: 18,
                            }}>
                                Why AAA Digital
                            </p>
                            <h2 style={{
                                fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800,
                                lineHeight: 1.05, letterSpacing: "-0.03em",
                                marginBottom: 24, fontFamily: "var(--font-heading)",
                            }}>
                                We Deliver<br />
                                <span style={{ color: "var(--text-secondary)" }}>Real Results.</span>
                            </h2>
                            <p style={{
                                fontSize: 16, color: "var(--text-tertiary)",
                                lineHeight: 1.75, marginBottom: 48,
                            }}>
                                We combine creative excellence with analytical precision —
                                every deliverable is built to drive measurable growth, not just look good.
                            </p>

                            <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                {benefits.map((b, i) => (
                                    <motion.li key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        style={{
                                            display: "flex", alignItems: "center", gap: 16,
                                            padding: "18px 20px", borderRadius: 16,
                                            background: "rgba(255,255,255,0.025)",
                                            border: "1px solid rgba(255,255,255,0.06)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "rgba(255,255,255,0.045)";
                                            e.currentTarget.style.borderColor = `${accentColor}30`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                                        }}
                                    >
                                        <div style={{
                                            width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            background: `${accentColor}20`, color: accentColor,
                                        }}>
                                            <Check size={17} strokeWidth={3} />
                                        </div>
                                        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-secondary)" }}>{b}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Right — Glass card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div style={{
                                padding: "48px 44px", borderRadius: 40,
                                background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 100%)",
                                border: "1px solid rgba(255,255,255,0.09)",
                                backdropFilter: "blur(20px)",
                                position: "relative", overflow: "hidden",
                            }}>
                                {/* inner glow */}
                                <div style={{
                                    position: "absolute", top: -60, right: -60,
                                    width: 280, height: 280, borderRadius: "50%",
                                    background: `${accentColor}18`, filter: "blur(60px)",
                                    pointerEvents: "none",
                                }} />

                                <p style={{
                                    fontSize: 12, fontWeight: 700, letterSpacing: "0.18em",
                                    textTransform: "uppercase", color: accentColor, marginBottom: 16,
                                }}>
                                    What&apos;s Included
                                </p>
                                <h3 style={{
                                    fontSize: 26, fontWeight: 800, marginBottom: 32,
                                    fontFamily: "var(--font-heading)", letterSpacing: "-0.02em",
                                }}>
                                    Technical Expertise
                                </h3>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48 }}>
                                    {tags.map((tag) => (
                                        <span key={tag}
                                            onMouseEnter={(e) => { e.currentTarget.style.background = accentColor; e.currentTarget.style.color = "#000e1c"; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.background = `${accentColor}14`; e.currentTarget.style.color = accentColor; }}
                                            style={{
                                                padding: "10px 18px", borderRadius: 12,
                                                background: `${accentColor}14`, color: accentColor,
                                                border: `1px solid ${accentColor}25`,
                                                fontSize: 13, fontWeight: 600,
                                                cursor: "default", transition: "all 0.2s",
                                            }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 32 }}>
                                    <p style={{ fontSize: 14, color: "var(--text-tertiary)", marginBottom: 20 }}>
                                        Ready to scale your business?
                                    </p>
                                    <Link href="/contact" style={{
                                        display: "inline-flex", alignItems: "center", gap: 8,
                                        fontSize: 15, fontWeight: 700, color: "#fff",
                                        textDecoration: "none",
                                        borderBottom: `1px solid ${accentColor}`,
                                        paddingBottom: 4,
                                        transition: "color 0.2s, gap 0.2s",
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.color = accentColor; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.color = "#fff"; }}
                                    >
                                        Book a Free Consultation <ArrowUpRight size={15} style={{ color: accentColor }} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    );
}
