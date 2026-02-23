"use client";

import { m } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const item = {
        hidden: { y: "100%", rotate: 5, opacity: 0 },
        show: {
            y: 0,
            rotate: 0,
            opacity: 1,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section
            id="home"
            style={{
                minHeight: "100vh", position: "relative",
                paddingTop: 128, paddingBottom: 80,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            }}
        >
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-900/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Badge -> Cyan & Deep Blue */}
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "10px 24px", borderRadius: 100,
                    background: "rgba(0, 166, 251, 0.08)", /* Cyan Tint */
                    border: "1px solid rgba(0, 166, 251, 0.2)",
                    color: "#00A6FB", /* Electric Cyan */
                    fontWeight: 600, fontSize: 13, marginBottom: 48,
                    textTransform: "uppercase", letterSpacing: "0.08em"
                }}
            >
                <span style={{ position: "relative", display: "flex", height: 8, width: 8 }}>
                    <span className="animate-ping" style={{ position: "absolute", display: "inline-flex", height: "100%", width: "100%", borderRadius: "50%", background: "#00A6FB", opacity: 0.75 }}></span>
                    <span style={{ position: "relative", display: "inline-flex", borderRadius: "50%", height: 8, width: 8, background: "#0077B6" }}></span>
                </span>
                Full-Service Digital Agency
            </m.div>

            {/* Main Title - Stacked reveal */}
            <m.h1
                variants={container}
                initial="hidden"
                animate="show"
                style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "clamp(2.2rem, 10vw, 8.5rem)",
                    fontWeight: 800,
                    lineHeight: 0.9,
                    letterSpacing: "-0.04em",
                    textAlign: "center",
                    display: "flex", flexDirection: "column", alignItems: "center",
                    zIndex: 10,
                }}
            >
                <div style={{ overflow: "hidden" }}>
                    <m.span variants={item} style={{ display: "block", color: "#FFFFFF", paddingBottom: 16 }}>
                        We Build Brands
                    </m.span>
                </div>
                <div style={{ overflow: "hidden" }}>
                    {/* Gradient: White -> Silver -> Cyan Hint */}
                    <m.span variants={item} style={{
                        display: "block",
                        background: "linear-gradient(to bottom, #FFFFFF, #B0E0FF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        paddingBottom: 16
                    }}>
                        That Win Globally.
                    </m.span>
                </div>
            </m.h1>

            <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{
                    marginTop: 48,
                    fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                    color: "#CECECE", /* Silver Text */
                    maxWidth: 640,
                    textAlign: "center",
                    lineHeight: 1.6,
                }}
            >
                From strategy to execution — we handle every digital touchpoint so you can focus on scaling your business.
            </m.p>

            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                style={{ marginTop: 48, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
            >
                <a href="#work" className="btn btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
                    Explore Our Work
                </a>
                <Link href="/contact" className="btn btn-outline" style={{ fontSize: 16, padding: "16px 36px" }}>
                    Get a Free Quote
                </Link>
            </m.div>

        </section>
    );
}
