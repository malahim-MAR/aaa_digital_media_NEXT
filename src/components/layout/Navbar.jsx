
"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV } from "@/lib/data";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <>
            <header
                style={{
                    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
                    padding: scrolled ? "12px 0" : "20px 0",
                    background: scrolled ? "rgba(10,13,18,0.85)" : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
                    transition: "all .3s",
                }}
            >
                <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                        <div style={{
                            width: 32, height: 32, borderRadius: 9,
                            background: "linear-gradient(135deg,#2563EB,#00C2FF)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
                        }}>
                            <span style={{ color: "#fff", fontWeight: 900, fontSize: 14 }}>A</span>
                        </div>
                        <span style={{ fontWeight: 700, fontSize: 15, color: "#EEF2FF" }}>
                            AAA <span style={{ color: "#8892A4", fontWeight: 500 }}>Digital Media</span>
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <nav style={{ display: "flex", gap: 4 }} className="hidden md:flex">
                        {NAV.map(n => (
                            <a key={n.label} href={n.href} style={{
                                padding: "8px 16px", borderRadius: 8, fontSize: 14, fontWeight: 500,
                                color: "#8892A4", textDecoration: "none", transition: "all .2s",
                            }}
                                onMouseEnter={e => { e.target.style.color = "#EEF2FF"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
                                onMouseLeave={e => { e.target.style.color = "#8892A4"; e.target.style.background = "transparent"; }}
                            >
                                {n.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <a href="#contact" className="btn btn-primary hidden md:inline-flex" style={{ fontSize: 13, padding: "10px 20px" }}>
                        Start a Project <ArrowRight size={14} />
                    </a>

                    {/* Hamburger */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden"
                        style={{
                            width: 36, height: 36, borderRadius: 8,
                            border: "1px solid rgba(255,255,255,0.09)",
                            background: "transparent", color: "#8892A4",
                            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                        }}
                    >
                        <Menu size={18} />
                    </button>
                </div>
            </header>

            {/* Mobile drawer */}
            {open && (
                <div style={{ position: "fixed", inset: 0, zIndex: 100 }}>
                    <div
                        onClick={() => setOpen(false)}
                        style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
                    />
                    <div style={{
                        position: "absolute", top: 0, right: 0, bottom: 0, width: 280,
                        background: "#0D1219", borderLeft: "1px solid rgba(255,255,255,0.07)",
                        padding: 24, display: "flex", flexDirection: "column",
                    }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
                            <span style={{ fontWeight: 700, fontSize: 14, color: "#EEF2FF" }}>Menu</span>
                            <button onClick={() => setOpen(false)} style={{
                                width: 32, height: 32, borderRadius: 8, border: "1px solid rgba(255,255,255,0.09)",
                                background: "transparent", color: "#8892A4", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                            }}>
                                <X size={15} />
                            </button>
                        </div>
                        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            {NAV.map(n => (
                                <a key={n.label} href={n.href} onClick={() => setOpen(false)} style={{
                                    padding: "12px 16px", borderRadius: 10, fontSize: 15, fontWeight: 500,
                                    color: "#8892A4", textDecoration: "none",
                                }}>
                                    {n.label}
                                </a>
                            ))}
                        </nav>
                        <div style={{ marginTop: "auto", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                                Start a Project <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
