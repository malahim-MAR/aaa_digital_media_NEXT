"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { PORTFOLIO_CATEGORIES } from "@/lib/data";
import { ArrowUpRight, Play } from "lucide-react";
import CategoryNav from "@/components/portfolio/CategoryNav";
import { Icon } from "@/lib/icons";


export default function PortfolioIndexPage() {
    return (
        <main style={{ background: "#000812", minHeight: "100vh" }}>
            <CategoryNav />

            <div style={{ paddingTop: 48, paddingBottom: 96 }}>
                <div className="wrap">
                    {/* Header */}
                    <div style={{ textAlign: "center", paddingTop: "clamp(40px,8vw,80px)", marginBottom: "clamp(48px,8vw,80px)" }}>
                        <m.span
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                            style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#00A6FB", marginBottom: 16 }}
                        >
                            Our Work
                        </m.span>
                        <m.h1
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.04em", color: "#fff", marginBottom: 20 }}
                        >
                            Video <span style={{ color: "#0077B6" }}>Portfolio</span>
                        </m.h1>
                        <m.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            style={{ fontSize: "clamp(15px,2.5vw,18px)", color: "#64748b", maxWidth: 520, margin: "0 auto" }}
                        >
                            Browse our work by category. Each portfolio opens in a full-screen reel viewer — swipe or scroll through.
                        </m.p>
                    </div>

                    {/* Category grid: 1 col mobile, 2 col sm, 3 col lg */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        style={{ gap: "clamp(16px,3vw,24px)" }}
                    >
                        {PORTFOLIO_CATEGORIES.map((cat, i) => (
                            <m.div
                                key={cat.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 }}
                            >
                                <Link href={`/portfolio/${cat.slug}`} style={{ display: "block", textDecoration: "none" }}>
                                    <div
                                        style={{
                                            position: "relative",
                                            borderRadius: 20,
                                            overflow: "hidden",
                                            border: "1px solid rgba(255,255,255,0.06)",
                                            background: "rgba(0,14,28,0.8)",
                                            transition: "all 0.35s ease",
                                            cursor: "pointer",
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = cat.accent + "55";
                                            e.currentTarget.style.boxShadow = `0 0 40px ${cat.accent}18`;
                                            e.currentTarget.style.transform = "translateY(-4px)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                                            e.currentTarget.style.boxShadow = "none";
                                            e.currentTarget.style.transform = "translateY(0)";
                                        }}
                                    >
                                        {/* Thumbnail area */}
                                        <div style={{
                                            height: 200, position: "relative",
                                            background: `linear-gradient(135deg, #000d1a, #001428)`,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            overflow: "hidden",
                                        }}>
                                            {/* Background accent glow */}
                                            <div style={{
                                                position: "absolute", width: 200, height: 200,
                                                borderRadius: "50%",
                                                background: `radial-gradient(circle, ${cat.accent}22, transparent 70%)`,
                                                filter: "blur(40px)",
                                            }} />
                                            {/* Play circle */}
                                            <div style={{
                                                width: 64, height: 64, borderRadius: "50%",
                                                background: cat.accent + "18",
                                                border: `1.5px solid ${cat.accent}44`,
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                position: "relative",
                                                zIndex: 1,
                                            }}>
                                                <Play size={24} color={cat.accent} fill={cat.accent} />
                                            </div>
                                            {/* Video count badge */}
                                            <div style={{
                                                position: "absolute", bottom: 12, right: 12,
                                                padding: "4px 10px", borderRadius: 100,
                                                background: "rgba(0,0,0,0.6)",
                                                backdropFilter: "blur(8px)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)",
                                            }}>
                                                {cat.videos.length} videos
                                            </div>
                                        </div>

                                        {/* Card body */}
                                        <div style={{ padding: "20px 24px 24px" }}>
                                            {/* Icon + title row */}
                                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                                                <span style={{
                                                    width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                                                    background: cat.accent + "14",
                                                    border: `1px solid ${cat.accent}33`,
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    color: cat.accent,
                                                }}>
                                                    <span style={{ width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={cat.iconName} size={16} /></span>
                                                </span>
                                                <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", margin: 0 }}>
                                                    {cat.title}
                                                </h2>
                                            </div>
                                            <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 16 }}>
                                                {cat.description.split("—")[0].trim()}
                                            </p>
                                            <div style={{
                                                display: "inline-flex", alignItems: "center", gap: 6,
                                                fontSize: 12, fontWeight: 600, color: cat.accent,
                                                letterSpacing: "0.04em",
                                            }}>
                                                Watch Reels <ArrowUpRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </m.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
