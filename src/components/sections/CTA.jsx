"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
    return (
        <section style={{
            padding: "160px 0",
            borderTop: "1px solid rgba(255,255,255,0.055)",
            position: "relative", overflow: "hidden",
        }}>
            {/* Ambient */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <div style={{
                    position: "absolute", left: "50%", top: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 900, height: 600,
                    background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 60%)",
                }} />
            </div>
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

            <ScrollReveal style={{ position: "relative", zIndex: 1 }}>
                <div className="wrap" style={{ textAlign: "center" }}>
                    <p style={{
                        fontSize: 11, fontWeight: 600, letterSpacing: "0.22em",
                        textTransform: "uppercase", color: "#3D5070", marginBottom: 28,
                    }}>
                        Let&apos;s Build Something Great
                    </p>
                    <h2 style={{
                        fontSize: "clamp(3rem, 7vw, 5.5rem)",
                        maxWidth: 760, margin: "0 auto 28px",
                        letterSpacing: "-0.045em",
                        lineHeight: 0.98,
                    }}>
                        Ready to Scale Your Business{" "}
                        <span className="g-text">Globally?</span>
                    </h2>
                    <p style={{
                        color: "#4A5568", fontSize: 16, maxWidth: 440,
                        margin: "0 auto 52px", lineHeight: 1.8,
                    }}>
                        Whether you&apos;re a startup or an enterprise — let&apos;s build something extraordinary together.
                    </p>
                    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                        <a href="#contact" className="btn btn-primary" style={{ fontSize: 14, padding: "14px 32px" }}>
                            Start Your Project <ArrowRight size={15} />
                        </a>
                        <a href="#services" className="btn btn-ghost" style={{ fontSize: 14, padding: "14px 32px" }}>
                            Explore Services
                        </a>
                    </div>
                    <p style={{ marginTop: 36, fontSize: 11, color: "#1E2D40", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        Free consultation · No commitment · Response within 24 hours
                    </p>
                </div>
            </ScrollReveal>
        </section>
    );
}
