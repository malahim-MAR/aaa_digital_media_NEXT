
"use client";

import { SERVICES, SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
    return (
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="wrap" style={{ padding: "56px 0 32px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }} className="footer-grid">
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                            <div style={{
                                width: 30, height: 30, borderRadius: 8,
                                background: "linear-gradient(135deg,#2563EB,#00C2FF)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                <span style={{ color: "#fff", fontWeight: 900, fontSize: 13 }}>A</span>
                            </div>
                            <span style={{ fontWeight: 700, fontSize: 14, color: "#EEF2FF" }}>
                                AAA <span style={{ color: "#8892A4", fontWeight: 500 }}>Digital Media</span>
                            </span>
                        </div>
                        <p style={{ fontSize: 13, color: "#3D4A5C", lineHeight: 1.7, maxWidth: 220, marginBottom: 20 }}>
                            Full-service digital agency delivering world-class results from Karachi to the world.
                        </p>
                        <div style={{ display: "flex", gap: 8 }}>
                            {SOCIAL_LINKS.map((Icon, i) => (
                                <a key={i} href="#" style={{
                                    width: 32, height: 32, borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "#3D4A5C", textDecoration: "none", transition: "all .2s",
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(37,99,235,0.3)"; e.currentTarget.style.color = "#60A5FA"; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#3D4A5C"; }}
                                >
                                    <Icon size={13} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#8892A4", marginBottom: 16 }}>Services</p>
                        {SERVICES.map(s => (
                            <a key={s.title} href="#services" style={{ display: "block", fontSize: 13, color: "#3D4A5C", textDecoration: "none", marginBottom: 10, transition: "color .2s" }}
                                onMouseEnter={e => e.target.style.color = "#EEF2FF"}
                                onMouseLeave={e => e.target.style.color = "#3D4A5C"}
                            >
                                {s.title}
                            </a>
                        ))}
                    </div>

                    {/* Company */}
                    <div>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#8892A4", marginBottom: 16 }}>Company</p>
                        {["Home", "About", "Work", "Contact"].map(l => (
                            <a key={l} href={`#${l.toLowerCase()}`} style={{ display: "block", fontSize: 13, color: "#3D4A5C", textDecoration: "none", marginBottom: 10, transition: "color .2s" }}
                                onMouseEnter={e => e.target.style.color = "#EEF2FF"}
                                onMouseLeave={e => e.target.style.color = "#3D4A5C"}
                            >
                                {l}
                            </a>
                        ))}
                    </div>

                    {/* Contact */}
                    <div>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#8892A4", marginBottom: 16 }}>Contact</p>
                        <p style={{ fontSize: 13, color: "#3D4A5C", marginBottom: 10 }}>contact@aaadigitalmedia.com</p>
                        <p style={{ fontSize: 13, color: "#3D4A5C", marginBottom: 10 }}>+92 319 3949557</p>
                        <p style={{ fontSize: 13, color: "#3D4A5C" }}>Karachi, Pakistan</p>
                    </div>
                </div>

                <div className="divider" style={{ margin: "32px 0 24px" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <p style={{ fontSize: 12, color: "#1E2A3A" }}>© {new Date().getFullYear()} AAA Digital Media. All rights reserved.</p>
                    <div style={{ display: "flex", gap: 24 }}>
                        {["Privacy Policy", "Terms of Service"].map(l => (
                            <a key={l} href="#" style={{ fontSize: 12, color: "#1E2A3A", textDecoration: "none" }}>{l}</a>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </footer>
    );
}
