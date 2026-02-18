"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) setHidden(true);
        else setHidden(false);

        if (latest > 50) setScrolled(true);
        else setScrolled(false);
    });

    return (
        <motion.header
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
                    {["Work", "Services", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{ fontSize: 14, fontWeight: 500, color: "#CECECE", textDecoration: "none", transition: "color 0.2s" }}
                            onMouseEnter={(e) => e.target.style.color = "#00A6FB"} /* Cyan Hover */
                            onMouseLeave={(e) => e.target.style.color = "#CECECE"}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <Link
                        href="#contact"
                        className="btn btn-primary hidden md:inline-flex"
                        style={{ fontSize: 13, gap: 8, padding: "10px 24px" }}
                    >
                        Let&apos;s Talk <ArrowUpRight size={16} />
                    </Link>

                    {/* Mobile Menu Button - Visual Only */}
                    <button className="md:hidden" style={{ color: "#fff", background: "transparent", border: "none" }}>
                        <Menu size={24} />
                    </button>
                </div>
            </nav>
        </motion.header>
    );
}
