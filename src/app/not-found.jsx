"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <main style={{
            minHeight: "100vh",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: "#000812", textAlign: "center",
            padding: "0 24px",
        }}>
            {/* 404 number */}
            <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    fontSize: "clamp(7rem, 25vw, 14rem)",
                    fontWeight: 900, lineHeight: 1, letterSpacing: "-0.06em",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(0,166,251,0.25)",
                    background: "linear-gradient(to bottom, rgba(0,166,251,0.5), rgba(0,119,182,0.1))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: 8,
                    userSelect: "none",
                }}
            >
                404
            </m.div>

            <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 16 }}
            >
                Page Not Found
            </m.h1>
            <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ fontSize: 16, color: "#64748b", maxWidth: 400, lineHeight: 1.65, marginBottom: 40 }}
            >
                Looks like this page went off the grid. Let&apos;s get you back to something real.
            </m.p>
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}
            >
                <Link href="/" className="btn btn-primary" style={{ gap: 8 }}>
                    <Home size={16} /> Back to Home
                </Link>
                <Link href="/portfolio" className="btn btn-outline" style={{ gap: 8 }}>
                    <ArrowLeft size={16} /> See Our Work
                </Link>
            </m.div>
        </main>
    );
}
