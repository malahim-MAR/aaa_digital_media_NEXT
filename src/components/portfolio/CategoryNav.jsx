"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PORTFOLIO_CATEGORIES } from "@/lib/data";

export default function CategoryNav() {
    const pathname = usePathname();

    return (
        <div style={{
            position: "sticky",
            top: 72,
            zIndex: 40,
            background: "rgba(0,8,18,0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
            {/* scrollable pill row */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                overflowX: "auto",
                padding: "42px 16px 22px 16px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
            }}
                className="hide-scrollbar"
            >
                {/* All work link */}
                <Link href="/portfolio" style={{ textDecoration: "none", flexShrink: 0 }}>
                    <span style={{
                        display: "inline-block",
                        padding: "7px 16px",
                        borderRadius: 100,
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        whiteSpace: "nowrap",
                        background: pathname === "/portfolio" ? "rgba(255,255,255,0.12)" : "transparent",
                        color: pathname === "/portfolio" ? "#fff" : "#64748b",
                        border: pathname === "/portfolio" ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent",
                        transition: "all 0.2s",
                    }}>
                        All Work
                    </span>
                </Link>

                {PORTFOLIO_CATEGORIES.map((cat) => {
                    const isActive = pathname === `/portfolio/${cat.slug}`;
                    return (
                        <Link key={cat.slug} href={`/portfolio/${cat.slug}`} style={{ textDecoration: "none", flexShrink: 0 }}>
                            <span style={{
                                display: "inline-block",
                                padding: "7px 16px",
                                borderRadius: 100,
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: "0.04em",
                                whiteSpace: "nowrap",
                                background: isActive ? cat.accent + "22" : "transparent",
                                color: isActive ? cat.accent : "#64748b",
                                border: isActive ? `1px solid ${cat.accent}44` : "1px solid transparent",
                                transition: "all 0.2s",
                                boxShadow: isActive ? `0 0 12px ${cat.accent}33` : "none",
                            }}>
                                {cat.shortTitle}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
