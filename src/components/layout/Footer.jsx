"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { SERVICES, PORTFOLIO_CATEGORIES, CONTACT_INFO } from "@/lib/data";
import { Icon } from "@/lib/icons";


const SOCIAL = [
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter / X" },
];

function FooterHeading({ children }) {
    return (
        <h4 style={{
            fontSize: 11, fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.2em", color: "#475569", marginBottom: 20,
        }}>
            {children}
        </h4>
    );
}

function FooterLink({ href, children }) {
    return (
        <Link href={href} style={{ display: "block", color: "#64748b", textDecoration: "none", fontSize: 14, lineHeight: 1, padding: "6px 0", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#CECECE"}
            onMouseLeave={e => e.currentTarget.style.color = "#64748b"}
        >
            {children}
        </Link>
    );
}

export default function Footer() {
    return (
        <footer style={{ background: "#000610", borderTop: "1px solid rgba(255,255,255,0.04)" }}>

            {/* ── Pre-footer CTA band ──────────────────────────────── */}
            <div style={{
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                padding: "clamp(56px,10vw,96px) 0",
                position: "relative", overflow: "hidden",
            }}>
                {/* Background glow */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "min(900px,100%)", height: 300, background: "radial-gradient(ellipse, rgba(0,119,182,0.12), transparent 70%)", pointerEvents: "none" }} />

                <div className="wrap" style={{ position: "relative", textAlign: "center" }}>
                    <m.span
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#00A6FB", marginBottom: 16 }}
                    >
                        Ready to grow?
                    </m.span>
                    <m.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        style={{ fontSize: "clamp(2rem,7vw,4.5rem)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.04em", color: "#fff", marginBottom: 24 }}
                    >
                        Let&apos;s build something<br />
                        <span style={{ color: "#0077B6" }}>extraordinary.</span>
                    </m.h2>
                    <m.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        style={{ fontSize: "clamp(14px,2vw,17px)", color: "#64748b", marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}
                    >
                        From strategy to execution, we handle every digital touchpoint — so you can focus on scaling.
                    </m.p>
                    <m.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                        style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
                    >
                        <Link href="/contact" className="btn btn-primary" style={{ fontSize: 15, padding: "14px 32px" }}>
                            Start a Project <ArrowUpRight size={16} />
                        </Link>
                        <Link href="/portfolio" className="btn btn-outline" style={{ fontSize: 15, padding: "14px 32px" }}>
                            View Our Work
                        </Link>
                    </m.div>
                </div>
            </div>

            {/* ── Main footer grid ─────────────────────────────────── */}
            <div className="wrap" style={{ padding: "clamp(48px,8vw,80px) clamp(16px,4vw,48px) clamp(32px,5vw,48px)" }}>
                <div style={{
                    display: "grid",
                    gap: "clamp(32px,5vw,60px)",
                    gridTemplateColumns: "1fr",
                }}
                    className="footer-grid"
                >
                    <style>{`
                        @media(min-width:640px){.footer-grid{grid-template-columns:repeat(2,1fr)!important}}
                        @media(min-width:1024px){.footer-grid{grid-template-columns:2fr 1fr 1fr 1.4fr!important}}
                    `}</style>

                    {/* Brand column */}
                    <div>
                        <Link href="/" style={{ display: "inline-block", textDecoration: "none", marginBottom: 20 }}>
                            <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", color: "#fff" }}>
                                AAA<span style={{ color: "#00A6FB" }}>Digital</span>
                            </span>
                        </Link>
                        <p style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.75, marginBottom: 28, maxWidth: 280 }}>
                            Crafting high-end digital solutions for brands that dare to lead. Karachi to the World. 🌎
                        </p>
                        {/* Social icons */}
                        <div style={{ display: "flex", gap: 10 }}>
                            {SOCIAL.map(({ Icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                    aria-label={label}
                                    style={{
                                        width: 38, height: 38, borderRadius: "50%",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        color: "rgba(255,255,255,0.4)",
                                        transition: "all 0.25s",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.color = "#00A6FB";
                                        e.currentTarget.style.borderColor = "rgba(0,166,251,0.4)";
                                        e.currentTarget.style.boxShadow = "0 0 14px rgba(0,166,251,0.25)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services column */}
                    <div>
                        <FooterHeading>Services</FooterHeading>
                        {SERVICES.map(s => (
                            <FooterLink key={s.slug} href={`/services/${s.slug}`}>{s.title}</FooterLink>
                        ))}
                    </div>

                    {/* Portfolio column */}
                    <div>
                        <FooterHeading>Portfolio</FooterHeading>
                        {PORTFOLIO_CATEGORIES.slice(0, 6).map(cat => (
                            <FooterLink key={cat.slug} href={`/portfolio/${cat.slug}`}>{cat.shortTitle}</FooterLink>
                        ))}
                        <FooterLink href="/portfolio">→ All Work</FooterLink>
                    </div>

                    {/* Contact column */}
                    <div>
                        <FooterHeading>Get in Touch</FooterHeading>
                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            {CONTACT_INFO.map((info, i) => (
                                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                                    <span style={{ color: "#00A6FB", marginTop: 2, flexShrink: 0 }}><Icon name={info.iconName} size={16} /></span>
                                    <div>
                                        <p style={{ fontSize: 10, fontWeight: 700, color: "#334155", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 3 }}>{info.label}</p>
                                        <p style={{ color: "#CECECE", fontSize: 13, lineHeight: 1.4 }}>{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Bottom bar ─────────────────────────────────────── */}
                <div style={{
                    marginTop: "clamp(32px,5vw,56px)",
                    paddingTop: 24,
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                    display: "flex", flexWrap: "wrap",
                    justifyContent: "space-between", alignItems: "center",
                    gap: 12,
                }}>
                    <p style={{ fontSize: 12, color: "#1E293B" }}>
                        © {new Date().getFullYear()} AAA Digital Media. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: 24 }}>
                        <Link href="/privacy" style={{ fontSize: 12, color: "#1E293B", textDecoration: "none" }}>Privacy Policy</Link>
                        <Link href="/terms" style={{ fontSize: 12, color: "#1E293B", textDecoration: "none" }}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
