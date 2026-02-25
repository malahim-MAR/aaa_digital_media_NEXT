"use client";

import { m } from "framer-motion";
import Marquee from "@/components/ui/Marquee";

const CLIENTS = [
    { name: "TechGlobal", tag: "SaaS" },
    { name: "Nexus", tag: "Fintech" },
    { name: "Elevate", tag: "E-Commerce" },
    { name: "Prime", tag: "Retail" },
    { name: "Velocity", tag: "Logistics" },
    { name: "Aura", tag: "Beauty" },
    { name: "Quantum", tag: "AI" },
    { name: "Apex", tag: "Real Estate" },
];

export default function LogoWall() {
    return (
        <section style={{
            padding: "80px 0 0",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* Ambient top glow */}
            <div style={{
                position: "absolute", top: 0, left: "50%",
                transform: "translateX(-50%)",
                width: 700, height: 350,
                background: "radial-gradient(ellipse at top, rgba(0,119,182,0.08), transparent 70%)",
                pointerEvents: "none",
            }} />

            <div className="wrap" style={{ position: "relative", marginBottom: 56 }}>

                {/* Section label */}
                <m.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: "center",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "#4B5563",
                        marginBottom: 48,
                    }}
                >
                    Trusted by industry leaders
                </m.p>

                {/* Client grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 20,
                    overflow: "hidden",
                }}>
                    {CLIENTS.map((client, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "36px 20px",
                                background: "rgba(0,14,28,0.7)",
                                cursor: "default",
                                transition: "background 0.35s",
                                gap: 6,
                            }}
                            whileHover={{ background: "rgba(0,166,251,0.06)" }}
                        >
                            {/* Brand name — visibly bright */}
                            <span
                                style={{
                                    fontSize: "clamp(1.05rem, 2vw, 1.4rem)",
                                    fontWeight: 900,
                                    letterSpacing: "-0.03em",
                                    /* Readable by default — NOT faded out */
                                    color: "rgba(255,255,255,0.55)",
                                    fontFamily: "var(--font-heading)",
                                    textAlign: "center",
                                    transition: "color 0.35s",
                                    lineHeight: 1,
                                    userSelect: "none",
                                }}
                                onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.95)"; }}
                                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
                            >
                                {client.name}
                            </span>
                            {/* Industry tag */}
                            <span style={{
                                fontSize: 10,
                                fontWeight: 600,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "rgba(0,166,251,0.55)",
                                userSelect: "none",
                            }}>
                                {client.tag}
                            </span>
                        </m.div>
                    ))}
                </div>
            </div>

            {/* Marquee scrolling band */}
            <Marquee />
        </section>
    );
}
