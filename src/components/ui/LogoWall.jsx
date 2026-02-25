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
        <section style={{ padding: "clamp(48px,8vw,80px) 0 0", borderBottom: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 700, height: 350, background: "radial-gradient(ellipse at top, rgba(0,119,182,0.08), transparent 70%)", pointerEvents: "none" }} />

            <div className="wrap" style={{ position: "relative", marginBottom: "clamp(32px,6vw,56px)" }}>
                <m.p
                    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ textAlign: "center", fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#4B5563", marginBottom: "clamp(24px,5vw,48px)" }}
                >
                    Trusted by industry leaders
                </m.p>

                {/* 2-col on mobile, 4-col on md */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 16,
                    overflow: "hidden",
                }}
                    className="logo-grid"
                >
                    <style>{`@media(min-width:640px){.logo-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>

                    {CLIENTS.map((client, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            whileHover={{ background: "rgba(0,166,251,0.06)" }}
                            style={{
                                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                                padding: "clamp(20px,4vw,36px) clamp(12px,2vw,20px)",
                                background: "rgba(0,14,28,0.7)", cursor: "default", transition: "background 0.35s", gap: 4,
                            }}
                        >
                            <span
                                style={{ fontSize: "clamp(0.85rem,2.5vw,1.35rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-heading)", textAlign: "center", transition: "color 0.35s", lineHeight: 1, userSelect: "none" }}
                                onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.95)"; }}
                                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
                            >
                                {client.name}
                            </span>
                            <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,166,251,0.55)", userSelect: "none" }}>
                                {client.tag}
                            </span>
                        </m.div>
                    ))}
                </div>
            </div>

            <Marquee />
        </section>
    );
}
