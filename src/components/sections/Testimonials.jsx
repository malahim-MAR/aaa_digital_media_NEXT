
"use client";

import { useState } from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
    const [cur, setCur] = useState(0);

    return (
        <section style={{ padding: "96px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="wrap">
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <span className="label" style={{ justifyContent: "center" }}><span className="label-dot" />Testimonials</span>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                        What Our Clients <span className="g-text">Say</span>
                    </h2>
                </div>

                {/* Card */}
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <div className="card" style={{ padding: "48px 48px 36px" }}>
                        <Quote size={36} color="rgba(37,99,235,0.2)" fill="rgba(37,99,235,0.2)" style={{ marginBottom: 24 }} />
                        <blockquote style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", fontWeight: 500, lineHeight: 1.65, color: "rgba(238,242,255,0.88)", letterSpacing: "-.01em", marginBottom: 32 }}>
                            &ldquo;{TESTIMONIALS[cur].quote}&rdquo;
                        </blockquote>
                        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                            <div style={{
                                width: 40, height: 40, borderRadius: "50%",
                                background: "linear-gradient(135deg,#2563EB,#00C2FF)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontWeight: 800, fontSize: 15, color: "#fff", flexShrink: 0,
                            }}>
                                {TESTIMONIALS[cur].name[0]}
                            </div>
                            <div>
                                <p style={{ fontWeight: 700, fontSize: 15 }}>{TESTIMONIALS[cur].name}</p>
                                <p style={{ fontSize: 13, color: "#8892A4" }}>{TESTIMONIALS[cur].role}</p>
                            </div>
                        </div>

                        {/* Controls */}
                        <div style={{ marginTop: 32, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", gap: 8 }}>
                                {TESTIMONIALS.map((_, i) => (
                                    <button key={i} onClick={() => setCur(i)} style={{
                                        height: 6, width: i === cur ? 28 : 6, borderRadius: 3,
                                        background: i === cur ? "#2563EB" : "rgba(255,255,255,0.12)",
                                        border: "none", cursor: "pointer", transition: "all .3s",
                                    }} />
                                ))}
                            </div>
                            <div style={{ display: "flex", gap: 8 }}>
                                {["←", "→"].map((arrow, i) => (
                                    <button key={i} onClick={() => setCur(c => i === 0 ? (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length : (c + 1) % TESTIMONIALS.length)}
                                        style={{
                                            width: 36, height: 36, borderRadius: 8, border: "1px solid rgba(255,255,255,0.09)",
                                            background: "transparent", color: "#8892A4", cursor: "pointer", fontSize: 16,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                        }}>
                                        {arrow}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
