"use client";
import { useState, useEffect } from "react";
import { m, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react";
import { NAV, SERVICES } from "@/lib/data";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    // Lock body scroll when sidebar is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) setHidden(true);
        else setHidden(false);
        setScrolled(latest > 50);
    });

    const close = () => { setMobileOpen(false); setServicesOpen(false); };

    return (
        <>
            <m.header
                variants={{ visible: { y: 0 }, hidden: { y: -100 } }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{
                    position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
                    display: "flex", justifyContent: "center",
                    padding: `${scrolled ? 10 : 20}px 16px 0`,
                    transition: "padding 0.3s ease",
                }}
            >
                <nav style={{
                    position: "relative",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "10px 20px", borderRadius: 100, width: "100%", maxWidth: 1100,
                    background: scrolled ? "rgba(0, 15, 30, 0.92)" : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
                    border: scrolled ? "1px solid rgba(0, 166, 251, 0.15)" : "1px solid transparent",
                    boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
                    transition: "all 0.35s ease",
                }}>
                    {/* Logo */}
                    <Link href="/" style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", textDecoration: "none" }}>
                        AAA<span style={{ color: "#00A6FB" }}>Digital</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex" style={{ gap: 32, alignItems: "center" }}>
                        {NAV.filter(item => item.label !== "Home").map((item) => {
                            if (item.label === "Services") {
                                return (
                                    <DesktopServicesDropdown key="services" href={item.href} />
                                );
                            }
                            return (
                                <Link key={item.label} href={item.href}
                                    style={{ fontSize: 14, fontWeight: 500, color: "#CECECE", textDecoration: "none", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.currentTarget.style.color = "#00A6FB"}
                                    onMouseLeave={e => e.currentTarget.style.color = "#CECECE"}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA + Hamburger */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <Link href="/contact" className="btn btn-primary hidden md:inline-flex"
                            style={{ fontSize: 13, gap: 6, padding: "9px 22px" }}>
                            Let&apos;s Talk <ArrowUpRight size={15} />
                        </Link>

                        {/* Hamburger — mobile only */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                            style={{
                                width: 42, height: 42, borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                background: mobileOpen ? "rgba(0,166,251,0.12)" : "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "#fff", cursor: "pointer",
                                transition: "all 0.25s",
                            }}
                        >
                            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </nav>
            </m.header>

            {/* ── Mobile Sidebar ──────────────────────────────────────── */}
            {/* Backdrop */}
            <AnimatePresence>
                {mobileOpen && (
                    <m.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={close}
                        style={{
                            position: "fixed", inset: 0, zIndex: 60,
                            background: "rgba(0,0,0,0.65)",
                            backdropFilter: "blur(4px)",
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Panel */}
            <AnimatePresence>
                {mobileOpen && (
                    <m.aside
                        key="sidebar"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 260 }}
                        style={{
                            position: "fixed", top: 0, right: 0, bottom: 0,
                            width: "min(340px, 88vw)",
                            background: "rgba(0, 10, 22, 0.98)",
                            backdropFilter: "blur(24px)",
                            WebkitBackdropFilter: "blur(24px)",
                            borderLeft: "1px solid rgba(0, 166, 251, 0.15)",
                            zIndex: 70,
                            display: "flex", flexDirection: "column",
                            boxShadow: "-20px 0 60px rgba(0,0,0,0.6)",
                            overflowY: "auto",
                        }}
                    >
                        {/* Sidebar Top Bar */}
                        <div style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            padding: "20px 24px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}>
                            <Link href="/" onClick={close}
                                style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", textDecoration: "none" }}>
                                AAA<span style={{ color: "#00A6FB" }}>Digital</span>
                            </Link>
                            <button onClick={close} style={{
                                width: 38, height: 38, borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                color: "#fff", cursor: "pointer",
                            }}>
                                <X size={16} />
                            </button>
                        </div>

                        {/* Nav Links */}
                        <nav style={{ flex: 1, padding: "16px 16px" }}>

                            {/* Services accordion */}
                            <div>
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    style={{
                                        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                                        padding: "14px 12px", borderRadius: 12,
                                        background: servicesOpen ? "rgba(0,166,251,0.07)" : "transparent",
                                        border: "none", cursor: "pointer",
                                        fontSize: 16, fontWeight: 600, color: servicesOpen ? "#00A6FB" : "#CECECE",
                                        textAlign: "left", transition: "all 0.2s",
                                    }}
                                >
                                    Services
                                    <ChevronDown size={16} style={{
                                        transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.3s",
                                        color: servicesOpen ? "#00A6FB" : "#64748b",
                                    }} />
                                </button>

                                {/* Accordion sub-items */}
                                <AnimatePresence>
                                    {servicesOpen && (
                                        <m.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.28, ease: "easeInOut" }}
                                            style={{ overflow: "hidden", paddingLeft: 8, marginTop: 4 }}
                                        >
                                            {SERVICES.map((service) => (
                                                <Link
                                                    key={service.slug}
                                                    href={`/services/${service.slug}`}
                                                    onClick={close}
                                                    style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12, padding: "11px 12px", borderRadius: 10, marginBottom: 2 }}
                                                    onMouseEnter={e => e.currentTarget.style.background = "rgba(0,166,251,0.06)"}
                                                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                                                >
                                                    <span style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(0,166,251,0.08)", border: "1px solid rgba(0,166,251,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#00A6FB", flexShrink: 0 }}>
                                                        <span style={{ width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>{service.icon}</span>
                                                    </span>
                                                    <span style={{ fontSize: 14, fontWeight: 500, color: "#CECECE" }}>{service.title}</span>
                                                    <ChevronRight size={14} style={{ color: "#374151", marginLeft: "auto" }} />
                                                </Link>
                                            ))}
                                        </m.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Other nav links */}
                            {NAV.filter(item => item.label !== "Home" && item.label !== "Services").map((item) => (
                                <Link key={item.label} href={item.href} onClick={close}
                                    style={{ display: "block", padding: "14px 12px", fontSize: 16, fontWeight: 600, color: "#CECECE", textDecoration: "none", borderRadius: 12, marginBottom: 2, transition: "all 0.2s" }}
                                    onMouseEnter={e => { e.currentTarget.style.color = "#00A6FB"; e.currentTarget.style.background = "rgba(0,166,251,0.06)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.color = "#CECECE"; e.currentTarget.style.background = "transparent"; }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Bottom CTA */}
                        <div style={{
                            padding: "20px 24px 32px",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                        }}>
                            <Link href="/contact" className="btn btn-primary" onClick={close}
                                style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "14px 24px" }}>
                                Let&apos;s Talk <ArrowUpRight size={16} />
                            </Link>
                            <p style={{ marginTop: 16, textAlign: "center", fontSize: 12, color: "#374151" }}>
                                hello@aaadigitalmedia.com
                            </p>
                        </div>
                    </m.aside>
                )}
            </AnimatePresence>
        </>
    );
}

/* ── Desktop Services Dropdown ─────────────────────── */
function DesktopServicesDropdown({ href }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            style={{ position: "relative" }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <Link href={href}
                style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14, fontWeight: 500, color: open ? "#00A6FB" : "#CECECE", textDecoration: "none", padding: "18px 0", transition: "color 0.2s" }}
            >
                Services
                <ChevronDown size={13} style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s", color: open ? "#00A6FB" : "#94a3b8" }} />
            </Link>

            <AnimatePresence>
                {open && (
                    <m.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{
                            position: "absolute", top: "calc(100% - 4px)", left: "50%",
                            transform: "translateX(-50%)",
                            minWidth: 340, zIndex: 100, paddingTop: 8,
                        }}
                    >
                        <div style={{
                            background: "rgba(0, 10, 22, 0.98)",
                            backdropFilter: "blur(24px)",
                            WebkitBackdropFilter: "blur(24px)",
                            border: "1px solid rgba(0, 166, 251, 0.2)",
                            borderRadius: 20, padding: 8,
                            boxShadow: "0 24px 64px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.03)",
                        }}>
                            {SERVICES.map((service) => (
                                <DropdownRow key={service.slug} service={service} />
                            ))}
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function DropdownRow({ service }) {
    const [hov, setHov] = useState(false);
    return (
        <Link href={`/services/${service.slug}`} style={{ display: "block", textDecoration: "none" }}>
            <div
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
                style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "11px 12px", borderRadius: 12,
                    background: hov ? "rgba(0,166,251,0.07)" : "transparent",
                    border: `1px solid ${hov ? "rgba(0,166,251,0.15)" : "transparent"}`,
                    transition: "all 0.2s ease", cursor: "pointer",
                }}
            >
                <div style={{
                    width: 36, height: 36, borderRadius: 9, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: hov ? "rgba(0,166,251,0.18)" : "rgba(0,166,251,0.07)",
                    border: "1px solid rgba(0,166,251,0.18)",
                    color: hov ? "#fff" : "#00A6FB",
                    transition: "all 0.2s",
                }}>
                    <span style={{ width: 17, height: 17, display: "flex", alignItems: "center", justifyContent: "center" }}>{service.icon}</span>
                </div>
                <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: hov ? "#00A6FB" : "#fff", transition: "color 0.2s", marginBottom: 2 }}>{service.title}</div>
                    <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.3 }}>Explore our {service.title.toLowerCase()} services</div>
                </div>
            </div>
        </Link>
    );
}
