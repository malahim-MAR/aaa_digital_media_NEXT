"use client";

import { ArrowRight } from "lucide-react";
import { SERVICES, CONTACT_INFO } from "@/lib/data";
import { slideLeft, slideRight } from "@/lib/motion";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="wrap">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="contact-grid">
                    {/* Left */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        <p style={{
                            fontSize: 11, fontWeight: 600, letterSpacing: "0.22em",
                            textTransform: "uppercase", color: "#3D5070", marginBottom: 20,
                        }}>
                            Contact
                        </p>
                        <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", marginBottom: 24 }}>
                            Let&apos;s Start a <span className="g-text">Conversation</span>
                        </h2>
                        <p style={{ color: "#4A5568", fontSize: 16, lineHeight: 1.85, marginBottom: 52 }}>
                            Tell us about your project and we&apos;ll get back to you within 24 hours with a free consultation.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                            {CONTACT_INFO.map((c, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                                    <div style={{
                                        width: 38, height: 38, borderRadius: 10,
                                        background: "rgba(37,99,235,0.08)",
                                        border: "1px solid rgba(37,99,235,0.14)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0,
                                    }}>
                                        {c.icon}
                                    </div>
                                    <div>
                                        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#2A3545", marginBottom: 4 }}>
                                            {c.label}
                                        </p>
                                        <p style={{ fontSize: 14, color: "#4A5568" }}>{c.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        style={{
                            background: "#0D1117",
                            border: "1px solid rgba(255,255,255,0.055)",
                            borderRadius: 20,
                            padding: 40,
                        }}
                    >
                        <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                                {[
                                    { label: "First Name", placeholder: "John" },
                                    { label: "Last Name", placeholder: "Smith" },
                                ].map((f, i) => (
                                    <div key={i}>
                                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#3D5070", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                            {f.label}
                                        </label>
                                        <input placeholder={f.placeholder} className="input-field" />
                                    </div>
                                ))}
                            </div>

                            {[
                                { label: "Email", placeholder: "john@company.com", type: "email" },
                                { label: "Company (optional)", placeholder: "Your company name", type: "text" },
                            ].map((f, i) => (
                                <div key={i}>
                                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#3D5070", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                        {f.label}
                                    </label>
                                    <input type={f.type} placeholder={f.placeholder} className="input-field" />
                                </div>
                            ))}

                            <div>
                                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#3D5070", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                    Service Needed
                                </label>
                                <select className="input-field" style={{ color: "#4A5568" }}>
                                    <option value="">Select a service...</option>
                                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                                </select>
                            </div>

                            <div>
                                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#3D5070", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="input-field"
                                    style={{ resize: "vertical" }}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "15px", marginTop: 4 }}>
                                Send Message <ArrowRight size={15} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
        </section>
    );
}
