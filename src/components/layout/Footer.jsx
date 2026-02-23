"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { SOCIAL_LINKS, NAV, CONTACT_INFO } from "@/lib/data";

export default function Footer() {
    return (
        <footer style={{ background: "#000814", paddingTop: 120, paddingBottom: 60, borderTop: "1px solid rgba(255,255,255,0.03)" }}>
            <div className="wrap">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 80, marginBottom: 120 }}>
                    {/* Brand */}
                    <div>
                        <Link href="/" style={{ fontSize: 24, fontWeight: 800, color: "#fff", textDecoration: "none", marginBottom: 32, display: "block" }}>
                            AAA<span style={{ color: "#00A6FB" }}>Digital</span>
                        </Link>
                        <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 40, maxWidth: 320 }}>
                            Crafting high-end digital solutions for brands that dare to lead. Karachi to the World. 🌎
                        </p>
                        <div style={{ display: "flex", gap: 16 }}>
                            {SOCIAL_LINKS.map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00A6FB] hover:border-[#00A6FB] hover:shadow-[0_0_15px_rgba(0,166,251,0.4)] transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#CECECE", marginBottom: 32 }}>
                            Navigation
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {NAV.map(link => (
                                <Link key={link.label} href={link.href} style={{ color: "#64748b", textDecoration: "none", fontSize: 15, transition: "color 0.2s" }}
                                    onMouseEnter={e => e.target.style.color = "#fff"}
                                    onMouseLeave={e => e.target.style.color = "#64748b"}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#CECECE", marginBottom: 32 }}>
                            Get in Touch
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                            {CONTACT_INFO.map((info, i) => (
                                <div key={i} style={{ display: "flex", gap: 16 }}>
                                    <div style={{ color: "#00A6FB", marginTop: 4 }}>{info.icon}</div>
                                    <div>
                                        <p style={{ fontSize: 11, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
                                            {info.label}
                                        </p>
                                        <p style={{ color: "#CECECE", fontSize: 15 }}>{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div style={{ pt: 40, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 24, alignItems: "center" }}>
                    <p style={{ fontSize: 13, color: "#475569" }}>
                        © {new Date().getFullYear()} AAA Digital Media. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: 32 }}>
                        <Link href="/privacy" style={{ fontSize: 13, color: "#475569", textDecoration: "none" }}>Privacy Policy</Link>
                        <Link href="/terms" style={{ fontSize: 13, color: "#475569", textDecoration: "none" }}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
