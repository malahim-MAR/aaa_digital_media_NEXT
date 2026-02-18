
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/data";

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section className="section">
            <div className="wrap">
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <span className="label" style={{ justifyContent: "center" }}><span className="label-dot" />FAQ</span>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                        Questions <span className="g-text">Answered</span>
                    </h2>
                    <p style={{ marginTop: 12, color: "#8892A4", maxWidth: 400, margin: "12px auto 0" }}>
                        Everything you need to know before working with us.
                    </p>
                </div>

                <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 8 }}>
                    {FAQS.map((f, i) => (
                        <div key={i} className="card" style={{
                            overflow: "hidden",
                            borderColor: open === i ? "rgba(37,99,235,0.28)" : undefined,
                        }}>
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                style={{
                                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                                    padding: "20px 24px", gap: 16, background: "transparent", border: "none",
                                    cursor: "pointer", textAlign: "left",
                                }}
                            >
                                <span style={{ fontSize: 15, fontWeight: 600, color: "#EEF2FF" }}>{f.q}</span>
                                <div style={{
                                    width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                                    background: open === i ? "rgba(37,99,235,0.18)" : "rgba(255,255,255,0.04)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    transition: "background .2s",
                                }}>
                                    {open === i
                                        ? <Minus size={13} color="#60A5FA" />
                                        : <Plus size={13} color="#8892A4" />
                                    }
                                </div>
                            </button>
                            {open === i && (
                                <div style={{ padding: "0 24px 20px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                                    <p style={{ paddingTop: 16, fontSize: 14, color: "#8892A4", lineHeight: 1.75 }}>{f.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
