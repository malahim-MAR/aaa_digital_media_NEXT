"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section className="section">
            <div className="wrap">
                {/* Header */}
                <ScrollReveal style={{ marginBottom: 72 }}>
                    <p style={{
                        fontSize: 11, fontWeight: 600, letterSpacing: "0.22em",
                        textTransform: "uppercase", color: "#3D5070", marginBottom: 20,
                    }}>
                        FAQ
                    </p>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
                        <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}>
                            Questions <span className="g-text">Answered</span>
                        </h2>
                        <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.75, maxWidth: 300 }}>
                            Everything you need to know before working with us.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Accordion */}
                <motion.div
                    variants={staggerContainer(0.06, 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    style={{ maxWidth: 800, display: "flex", flexDirection: "column" }}
                >
                    {FAQS.map((f, i) => (
                        <motion.div key={i} variants={staggerItem} style={{ borderBottom: "1px solid rgba(255,255,255,0.055)" }}>
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                style={{
                                    width: "100%", display: "flex", alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "24px 0", gap: 24,
                                    background: "transparent", border: "none",
                                    cursor: "pointer", textAlign: "left",
                                }}
                            >
                                <span style={{
                                    fontSize: 16, fontWeight: 600,
                                    color: open === i ? "#F0F4FF" : "#7A8699",
                                    transition: "color 0.2s",
                                    fontFamily: "var(--font-syne, Syne, sans-serif)",
                                    letterSpacing: "-0.025em",
                                    lineHeight: 1.3,
                                }}>
                                    {f.q}
                                </span>
                                <div style={{
                                    width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                                    background: open === i ? "rgba(37,99,235,0.12)" : "rgba(255,255,255,0.04)",
                                    border: `1px solid ${open === i ? "rgba(37,99,235,0.22)" : "rgba(255,255,255,0.06)"}`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    transition: "all 0.22s",
                                }}>
                                    {open === i ? <Minus size={12} color="#60A5FA" /> : <Plus size={12} color="#4A5568" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                                        exit={{ height: 0, opacity: 0, transition: { duration: 0.22, ease: "easeIn" } }}
                                        style={{ overflow: "hidden" }}
                                    >
                                        <p style={{
                                            paddingBottom: 28, fontSize: 15, color: "#4A5568",
                                            lineHeight: 1.8, maxWidth: 620,
                                        }}>
                                            {f.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
