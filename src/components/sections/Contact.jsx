"use client";

import { m } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";

export default function Contact() {
    return (
        <section id="contact" className="section relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="wrap border-t border-white/5 pt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
                    {/* Info */}
                    <div>
                        <m.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00A6FB", marginBottom: 16 }}
                        >
                            Get in Touch
                        </m.span>
                        <m.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.04em", color: "#FFFFFF", marginBottom: 32 }}
                        >
                            Let&apos;s Build <br /> <span style={{ color: "#0077B6" }}>Something Great.</span>
                        </m.h2>
                        <m.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{ fontSize: 18, color: "#CECECE", lineHeight: 1.6, marginBottom: 56, maxWidth: 480 }}
                        >
                            Have a project in mind? Looking to scale your brand? Drop us a message and we&apos;ll get back to you within 24 hours.
                        </m.p>

                        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                            {CONTACT_INFO.map((item, i) => (
                                <m.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    style={{ display: "flex", gap: 24, alignItems: "flex-start" }}
                                >
                                    <div style={{
                                        width: 56, height: 56, borderRadius: 16,
                                        background: "rgba(0, 166, 251, 0.05)",
                                        border: "1px solid rgba(0, 166, 251, 0.15)",
                                        display: "flex", alignItems: "center", justifyContent: "center", color: "#00A6FB"
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
                                            {item.label}
                                        </p>
                                        <p style={{ fontSize: 18, color: "#FFFFFF", fontWeight: 600 }}>{item.value}</p>
                                    </div>
                                </m.div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <m.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            padding: 48, borderRadius: 32,
                            background: "rgba(10, 20, 40, 0.35)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            boxShadow: "0 24px 80px rgba(0,0,0,0.3)"
                        }}
                    >
                        <form style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    <label style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Full Name</label>
                                    <input type="text" placeholder="John Doe" style={{
                                        background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: 12, padding: "16px 20px", color: "#fff", fontSize: 15, outline: "none", transition: "border 0.3s"
                                    }} onFocus={(e) => e.target.style.borderColor = "#00A6FB"} onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                <label style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Address</label>
                                <input type="email" placeholder="john@example.com" style={{
                                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: 12, padding: "16px 20px", color: "#fff", fontSize: 15, outline: "none", transition: "border 0.3s"
                                }} onFocus={(e) => e.target.style.borderColor = "#00A6FB"} onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                <label style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Message</label>
                                <textarea rows={4} placeholder="Tell us about your project..." style={{
                                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: 12, padding: "16px 20px", color: "#fff", fontSize: 15, outline: "none", transition: "border 0.3s", resize: "none"
                                }} onFocus={(e) => e.target.style.borderColor = "#00A6FB"} onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "18px", fontSize: 16 }}>
                                Send Message <ArrowRight size={18} />
                            </button>
                        </form>
                    </m.div>
                </div>
            </div>
        </section>
    );
}
