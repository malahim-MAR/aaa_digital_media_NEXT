"use client";
import { useState } from "react";
import { m, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { NAV, SERVICES } from "@/lib/data";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) setHidden(true);
        else setHidden(false);

        if (latest > 50) setScrolled(true);
        else setScrolled(false);
    });

    return (
        <m.header
            variants={{ visible: { y: 0 }, hidden: { y: -100 } }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
                position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
                display: "flex", justifyContent: "center",
                padding: "0 24px", paddingTop: scrolled ? 16 : 32,
                transition: "padding 0.3s",
            }}
        >
            <nav
                style={{
                    position: "relative",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "12px 24px", borderRadius: 100,
                    transition: "all 0.3s",
                    border: scrolled ? "1px solid rgba(0, 166, 251, 0.15)" : "1px solid transparent", /* Cyan tint border */
                    background: scrolled ? "rgba(10, 20, 40, 0.85)" : "transparent", /* Deep Navy Glass */
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                    width: scrolled ? "100%" : "100%", maxWidth: scrolled ? 1024 : 1600,
                }}
            >
                {/* Logo */}
                <Link href="/" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF", textDecoration: "none" }}>
                    AAA<span style={{ color: "#00A6FB" }}>Digital</span> {/* Electric Cyan Accent */}
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex" style={{ gap: 32, alignItems: "center" }}>
                    {NAV.filter(item => item.label !== 'Home').map((item) => {
                        if (item.label === "Services") {
                            return (
                                <div key={item.label} className="group relative py-4">
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 text-[14px] font-medium text-[#CECECE] transition-colors hover:text-[#00A6FB] flex items-center"
                                    >
                                        {item.label}
                                        <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[360px] transform group-hover:translate-y-0 translate-y-2">
                                        <div className="bg-[#00152b]/95 backdrop-blur-2xl border border-[rgba(0,166,251,0.2)] rounded-2xl p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,1)] overflow-hidden ring-1 ring-white/5">
                                            <div className="flex flex-col gap-1">
                                                {SERVICES.map((service) => (
                                                    <Link
                                                        key={service.slug}
                                                        href={`/services/${service.slug}`}
                                                        className="group/item flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-all duration-200 border border-transparent hover:border-white/[0.05]"
                                                    >
                                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-[#00A6FB] group-hover/item:scale-110 group-hover/item:bg-[#00A6FB] group-hover/item:text-white transition-all duration-300">
                                                            {service.icon}
                                                        </div>
                                                        <div>
                                                            <div className="text-[15px] font-semibold text-white group-hover/item:text-[#00A6FB] transition-colors">
                                                                {service.title}
                                                            </div>
                                                            <div className="text-[12px] text-[#94a3b8] line-clamp-1 group-hover/item:text-[#CECECE]">
                                                                Explore our {service.title.toLowerCase()} services
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                style={{ fontSize: 14, fontWeight: 500, color: "#CECECE", textDecoration: "none", transition: "color 0.2s" }}
                                onMouseEnter={(e) => e.target.style.color = "#00A6FB"} /* Cyan Hover */
                                onMouseLeave={(e) => e.target.style.color = "#CECECE"}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <Link
                        href="/contact"
                        className="btn btn-primary hidden md:inline-flex"
                        style={{ fontSize: 13, gap: 8, padding: "10px 24px" }}
                    >
                        Let&apos;s Talk <ArrowUpRight size={16} />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden flex items-center justify-center"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{ color: "#fff", background: "transparent", border: "none", cursor: "pointer" }}>
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <m.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: "fixed", top: scrolled ? 76 : 92, left: 16, right: 16,
                            background: "rgba(0, 21, 43, 0.97)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(0, 166, 251, 0.15)",
                            borderRadius: 20, padding: 24, zIndex: 49,
                            display: "flex", flexDirection: "column", gap: 4,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                        }}
                    >
                        {NAV.map((item) => (
                            <Link key={item.label} href={item.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    padding: "14px 16px", fontSize: 16, fontWeight: 600,
                                    color: "#CECECE", textDecoration: "none", borderRadius: 12,
                                    borderBottom: "1px solid rgba(255,255,255,0.05)"
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="btn btn-primary"
                            onClick={() => setMobileOpen(false)}
                            style={{ marginTop: 8, justifyContent: "center", display: "flex", alignItems: "center", gap: 8 }}>
                            Let's Talk <ArrowUpRight size={16} />
                        </Link>
                    </m.div>
                )}
            </AnimatePresence>
        </m.header>
    );
}
