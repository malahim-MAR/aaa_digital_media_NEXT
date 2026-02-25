"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { WORK } from "@/lib/data";

export default function Work() {
    return (
        <section id="work" className="section">
            <div className="wrap border-t border-white/5 pt-24">
                {/* Header */}
                <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 96, marginTop: 32 }} className="md:flex-row md:items-start md:justify-between">
                    <div>
                        <m.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em",
                                textTransform: "uppercase", color: "#00A6FB", marginBottom: 16, /* Cyan */
                            }}
                        >
                            Selected Works
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
                            Featured <br />
                            <span style={{ color: "#0077B6" }}>Case Studies</span> {/* Royal Blue Accent */}
                        </m.h2>
                    </div>
                    <m.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/portfolio" className="btn btn-outline" style={{ padding: "12px 32px", fontSize: 14 }}>
                            View All Work
                        </Link>
                    </m.div>
                </div>

                {/* Projects Grid */}
                <div style={{ display: "grid", gap: 80 }}>
                    {WORK.map((project, index) => (
                        <m.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                        >
                            <div className={index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}>
                                <span style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 16, display: "block" }}>
                                    0{index + 1} / {project.industry}
                                </span>
                                <h3 style={{
                                    fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, marginBottom: 24,
                                    color: "#FFFFFF"
                                }} className="text-gradient">
                                    {project.title}
                                </h3>
                                <p style={{
                                    fontSize: 18, color: "#CECECE", marginBottom: 32, lineHeight: 1.6, maxWidth: 480,
                                }}>
                                    {project.result}
                                </p>

                                {/* Electric Cyan Accent Line */}
                                <div style={{ width: 64, height: 2, background: "#00A6FB", marginBottom: 40, boxShadow: "0 0 10px #00A6FB" }} />

                                <Link href="#" style={{
                                    display: "inline-flex", alignItems: "center", gap: 8, fontSize: 16, fontWeight: 700,
                                    color: "#00A6FB", textDecoration: "none", transition: "all 0.3s"
                                }}
                                    className="hover:text-[#FFD700]"
                                >
                                    View Case Study <ArrowUpRight size={18} />
                                </Link>
                            </div>

                            {/* Project Image Placeholder */}
                            <div
                                style={{
                                    position: "relative", aspectRatio: "16/10", borderRadius: 24, overflow: "hidden",
                                    /* Deep Navy based gradient */
                                    background: `linear-gradient(135deg, ${project.color || "#002147"}, #000e1c)`,
                                    border: "1px solid rgba(0, 166, 251, 0.15)",
                                }}
                                className={index % 2 !== 0 ? "lg:order-1 cursor-pointer" : "lg:order-2 cursor-pointer"}
                            >
                                <div style={{ position: "absolute", inset: 0, background: "rgba(0, 21, 43, 0.4)", transition: "background 0.3s" }} />
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
