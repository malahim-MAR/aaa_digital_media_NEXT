"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "@/lib/data";

export default function Services() {
    return (
        <section id="services" className="section" style={{ background: "transparent" }}>
            <div className="wrap">
                <div style={{ marginBottom: 96 }}>
                    <m.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em",
                            textTransform: "uppercase", color: "#00A6FB", marginBottom: 16, /* Cyan */
                        }}
                    >
                        Capabilities
                    </m.span>
                    <m.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 800,
                            lineHeight: 0.9, letterSpacing: "-0.04em",
                            color: "#FFFFFF"
                        }}
                    >
                        Digital <br />
                        <span style={{ color: "#0077B6" }}>Capabilities</span> {/* Royal Blue */}
                    </m.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {SERVICES.map((s, i) => (
                        <Link key={i} href={`/services/${s.slug}`} style={{ display: "block", textDecoration: "none" }}>
                            <m.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                style={{
                                    padding: 32, borderRadius: 24,
                                    background: "rgba(10, 20, 40, 0.5)", /* Deep Blue Glass Fill */
                                    border: "1px solid rgba(0, 166, 251, 0.15)", /* Cyan Tint Border */
                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                                    transition: "all 0.3s",
                                    height: "100%", /* Ensure full height in grid */
                                }}
                                /* Hover Effect: Glow border + slight lift */
                                whileHover={{
                                    borderColor: "rgba(0, 166, 251, 0.4)",
                                    y: -5,
                                }}
                            >
                                <div style={{
                                    width: 48, height: 48, borderRadius: 50,
                                    background: "linear-gradient(135deg, rgba(0, 166, 251, 0.1), rgba(0, 119, 182, 0.05))",
                                    border: "1px solid rgba(0, 166, 251, 0.2)",
                                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24,
                                    color: "#00A6FB", /* Cyan Icon */
                                }}>
                                    {s.icon}
                                </div>
                                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#FFFFFF" }}>{s.title}</h3>
                                <p style={{ fontSize: 14, color: "#CECECE", lineHeight: 1.6, marginBottom: 24 }}>
                                    {s.desc}
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {s.tags.map(t => (
                                        <span key={t} style={{
                                            fontSize: 12, padding: "4px 12px", borderRadius: 100,
                                            background: "rgba(0, 166, 251, 0.05)", /* Cyan Badge */
                                            border: "1px solid rgba(0, 166, 251, 0.15)",
                                            color: "#A0E0FF", /* Light Cyan Text */
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </m.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
