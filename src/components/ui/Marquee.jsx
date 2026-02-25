"use client";
import { m } from "framer-motion";

const WORDS = [
    "Brand Identity", "Performance Marketing", "Website Development",
    "Visual Content", "Social Strategy", "Mobile Apps", "SEO & Growth",
    "Photography", "Motion Graphics", "Shopify Stores",
];

function Row({ direction = 1, speed = 40 }) {
    const list = [...WORDS, ...WORDS, ...WORDS];
    return (
        <div style={{ display: "flex", overflow: "hidden", position: "relative" }}>
            <m.div
                animate={{ x: direction > 0 ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
                transition={{ duration: speed, ease: "linear", repeat: Infinity }}
                style={{ display: "flex", whiteSpace: "nowrap", willChange: "transform" }}
            >
                {list.map((word, i) => (
                    <div
                        key={i}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "0 40px",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)",
                                fontWeight: 700,
                                letterSpacing: "-0.02em",
                                color: direction > 0 ? "rgba(255,255,255,0.12)" : "rgba(0,166,251,0.15)",
                                textTransform: "uppercase",
                                transition: "color 0.4s",
                                cursor: "default",
                                userSelect: "none",
                                fontFamily: "var(--font-heading)",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = direction > 0
                                    ? "rgba(255,255,255,0.7)"
                                    : "rgba(0,166,251,0.7)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = direction > 0
                                    ? "rgba(255,255,255,0.12)"
                                    : "rgba(0,166,251,0.15)";
                            }}
                        >
                            {word}
                        </span>
                        {/* Separator dot */}
                        <span style={{
                            display: "inline-block",
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: direction > 0 ? "rgba(255,255,255,0.1)" : "rgba(0,166,251,0.25)",
                            marginLeft: 40,
                            boxShadow: direction > 0 ? "none" : "0 0 6px rgba(0,166,251,0.4)",
                            flexShrink: 0,
                        }} />
                    </div>
                ))}
            </m.div>
        </div>
    );
}

export default function Marquee() {
    return (
        <div style={{
            position: "relative",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(0,14,28,0.6)",
            overflow: "hidden",
            padding: "28px 0",
            display: "flex",
            flexDirection: "column",
            gap: 20,
        }}>
            {/* Left fade mask */}
            <div style={{
                position: "absolute", left: 0, top: 0, bottom: 0, width: 120,
                background: "linear-gradient(to right, #00152b, transparent)",
                zIndex: 10, pointerEvents: "none",
            }} />
            {/* Right fade mask */}
            <div style={{
                position: "absolute", right: 0, top: 0, bottom: 0, width: 120,
                background: "linear-gradient(to left, #00152b, transparent)",
                zIndex: 10, pointerEvents: "none",
            }} />

            <Row direction={1} speed={50} />
            <Row direction={-1} speed={40} />
        </div>
    );
}
