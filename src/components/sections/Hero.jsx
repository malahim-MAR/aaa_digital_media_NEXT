"use client";

import { m } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
    };
    const item = {
        hidden: { y: "100%", rotate: 5, opacity: 0 },
        show: { y: 0, rotate: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <section
            id="home"
            style={{
                minHeight: "100vh", position: "relative",
                // Mobile: less top padding — desktop: generous
                paddingTop: "clamp(100px, 20vh, 160px)",
                paddingBottom: "clamp(48px, 8vh, 80px)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                textAlign: "center",
                paddingLeft: 16, paddingRight: 16,
            }}
        >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-900/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Badge */}
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "8px 20px", borderRadius: 100,
                    background: "rgba(0,166,251,0.08)",
                    border: "1px solid rgba(0,166,251,0.2)",
                    color: "#00A6FB", fontWeight: 600,
                    fontSize: "clamp(11px, 2vw, 13px)",
                    marginBottom: "clamp(24px, 5vw, 48px)",
                    textTransform: "uppercase", letterSpacing: "0.08em",
                }}
            >
                <span style={{ position: "relative", display: "flex", height: 8, width: 8 }}>
                    <span className="animate-ping" style={{ position: "absolute", display: "inline-flex", height: "100%", width: "100%", borderRadius: "50%", background: "#00A6FB", opacity: 0.75 }} />
                    <span style={{ position: "relative", display: "inline-flex", borderRadius: "50%", height: 8, width: 8, background: "#0077B6" }} />
                </span>
                Full-Service Digital Agency
            </m.div>

            {/* H1 */}
            <m.h1
                variants={container}
                initial="hidden"
                animate="show"
                style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "clamp(2.4rem, 12vw, 8.5rem)",
                    fontWeight: 800,
                    lineHeight: 0.9,
                    letterSpacing: "-0.04em",
                    display: "flex", flexDirection: "column", alignItems: "center",
                    zIndex: 10,
                }}
            >
                <div style={{ overflow: "hidden" }}>
                    <m.span variants={item} style={{ display: "block", color: "#FFFFFF", paddingBottom: "clamp(8px, 2vw, 16px)" }}>
                        We Build Brands
                    </m.span>
                </div>
                <div style={{ overflow: "hidden" }}>
                    <m.span variants={item} style={{
                        display: "block",
                        background: "linear-gradient(to bottom, #FFFFFF, #B0E0FF)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        paddingBottom: "clamp(8px, 2vw, 16px)",
                    }}>
                        That Win Globally.
                    </m.span>
                </div>
            </m.h1>

            {/* Subtitle */}
            <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{
                    marginTop: "clamp(24px, 5vw, 48px)",
                    fontSize: "clamp(1rem, 3vw, 1.2rem)",
                    color: "#CECECE",
                    maxWidth: 600,
                    lineHeight: 1.65,
                }}
            >
                From strategy to execution — we handle every digital touchpoint so you can focus on scaling your business.
            </m.p>

            {/* Buttons */}
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                style={{
                    marginTop: "clamp(24px, 5vw, 48px)",
                    display: "flex", gap: "clamp(10px, 3vw, 16px)",
                    justifyContent: "center", flexWrap: "wrap",
                }}
            >
                <a href="#work" className="btn btn-primary"
                    style={{ fontSize: "clamp(14px, 3vw, 16px)", padding: "clamp(12px, 3vw, 16px) clamp(24px, 5vw, 36px)" }}>
                    Explore Our Work
                </a>
                <Link href="/contact" className="btn btn-outline"
                    style={{ fontSize: "clamp(14px, 3vw, 16px)", padding: "clamp(12px, 3vw, 16px) clamp(24px, 5vw, 36px)" }}>
                    Get a Free Quote
                </Link>
            </m.div>
        </section>
    );
}
