
import { ArrowRight } from "lucide-react";
import { SERVICES, CONTACT_INFO } from "@/lib/data";

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="wrap">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="contact-grid">
                    {/* Left */}
                    <div>
                        <span className="label"><span className="label-dot" />Contact</span>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 20 }}>
                            Let&apos;s Start a <span className="g-text">Conversation</span>
                        </h2>
                        <p style={{ color: "#8892A4", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
                            Tell us about your project and we&apos;ll get back to you within 24 hours with a free consultation.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            {CONTACT_INFO.map((c, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                                    <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 9, flexShrink: 0 }}>{c.icon}</div>
                                    <div>
                                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#3D4A5C", marginBottom: 2 }}>{c.label}</p>
                                        <p style={{ fontSize: 14, color: "#8892A4" }}>{c.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right – Form */}
                    <div className="card" style={{ padding: 32 }}>
                        <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                {[
                                    { label: "First Name", placeholder: "John" },
                                    { label: "Last Name", placeholder: "Smith" },
                                ].map((f, i) => (
                                    <div key={i}>
                                        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8892A4", marginBottom: 6 }}>{f.label}</label>
                                        <input placeholder={f.placeholder} style={{
                                            width: "100%", padding: "11px 14px", borderRadius: 9,
                                            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                                            color: "#EEF2FF", fontSize: 14, outline: "none",
                                        }} />
                                    </div>
                                ))}
                            </div>
                            {[
                                { label: "Email", placeholder: "john@company.com", type: "email" },
                                { label: "Company (optional)", placeholder: "Your company name", type: "text" },
                            ].map((f, i) => (
                                <div key={i}>
                                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8892A4", marginBottom: 6 }}>{f.label}</label>
                                    <input type={f.type} placeholder={f.placeholder} style={{
                                        width: "100%", padding: "11px 14px", borderRadius: 9,
                                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                                        color: "#EEF2FF", fontSize: 14, outline: "none",
                                    }} />
                                </div>
                            ))}
                            <div>
                                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8892A4", marginBottom: 6 }}>Service Needed</label>
                                <select style={{
                                    width: "100%", padding: "11px 14px", borderRadius: 9,
                                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                                    color: "#8892A4", fontSize: 14, outline: "none",
                                }}>
                                    <option value="">Select a service...</option>
                                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                                </select>
                            </div>
                            <div>
                                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8892A4", marginBottom: 6 }}>Message</label>
                                <textarea rows={4} placeholder="Tell us about your project..." style={{
                                    width: "100%", padding: "11px 14px", borderRadius: 9,
                                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                                    color: "#EEF2FF", fontSize: 14, outline: "none", resize: "vertical",
                                }} />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "14px" }}>
                                Send Message <ArrowRight size={15} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
        </section>
    );
}
