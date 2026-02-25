"use client";

import { m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/data";

function FAQItem({ faq, isOpen, onClick }) {
    return (
        <div
            style={{
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                overflow: "hidden",
            }}
        >
            {/* Question row */}
            <button
                onClick={onClick}
                style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", textAlign: "left",
                    padding: "clamp(18px,3vw,26px) 0",
                    background: "none", border: "none", cursor: "pointer",
                    gap: 16,
                }}
            >
                <span style={{
                    fontSize: "clamp(15px,2.5vw,18px)",
                    fontWeight: 700,
                    color: isOpen ? "#00A6FB" : "#FFFFFF",
                    lineHeight: 1.4,
                    transition: "color 0.25s",
                    flex: 1,
                }}>
                    {faq.q}
                </span>
                <span style={{
                    width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                    background: isOpen ? "rgba(0,166,251,0.15)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isOpen ? "rgba(0,166,251,0.4)" : "rgba(255,255,255,0.1)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: isOpen ? "#00A6FB" : "#64748b",
                    transition: "all 0.25s",
                }}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <m.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p style={{
                            fontSize: "clamp(14px,2vw,16px)",
                            color: "#94a3b8",
                            lineHeight: 1.7,
                            paddingBottom: "clamp(18px,3vw,26px)",
                            maxWidth: 680,
                        }}>
                            {faq.a}
                        </p>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [open, setOpen] = useState(0);

    return (
        <section className="section" style={{ position: "relative" }}>
            {/* Bg glow */}
            <div style={{ position: "absolute", bottom: 0, right: 0, width: "40%", height: "60%", background: "radial-gradient(ellipse, rgba(0,77,182,0.06), transparent 70%)", pointerEvents: "none" }} />

            <div className="wrap" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "clamp(40px,8vw,96px)" }}>
                {/* Two-column: header left, accordion right */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-2"
                    style={{ gap: "clamp(32px,6vw,80px)", alignItems: "start" }}
                >
                    {/* Left: label + heading */}
                    <div style={{ position: "sticky", top: 96 }}>
                        <m.span
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#00A6FB", marginBottom: 16 }}
                        >
                            Got Questions?
                        </m.span>
                        <m.h2
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            style={{ fontSize: "clamp(2rem,6vw,4rem)", fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.04em", color: "#fff", marginBottom: 24 }}
                        >
                            Frequently<br /><span style={{ color: "#0077B6" }}>Asked.</span>
                        </m.h2>
                        <m.p
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                            style={{ fontSize: 15, color: "#64748b", lineHeight: 1.7, maxWidth: 360 }}
                        >
                            Can&apos;t find what you&apos;re looking for? Reach out on{" "}
                            <a href="https://wa.me/923193949557" target="_blank" rel="noopener noreferrer" style={{ color: "#00A6FB", textDecoration: "none" }}>WhatsApp</a>{" "}
                            and we&apos;ll respond within the hour.
                        </m.p>
                    </div>

                    {/* Right: accordion */}
                    <m.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
                    >
                        {FAQS.map((faq, i) => (
                            <FAQItem
                                key={i}
                                faq={faq}
                                isOpen={open === i}
                                onClick={() => setOpen(open === i ? -1 : i)}
                            />
                        ))}
                    </m.div>
                </div>
            </div>
        </section>
    );
}
