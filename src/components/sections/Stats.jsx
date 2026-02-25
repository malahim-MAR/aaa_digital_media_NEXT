"use client";

import { m, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { STATS } from "@/lib/data";

/* ── Animated counter ─────────────────────────────────── */
function Counter({ value, duration = 2200 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const num = parseInt(value);
    const suffix = value.replace(/[0-9]/g, "");

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const steps = 80;
        const inc = num / steps;
        const ms = duration / steps;
        const t = setInterval(() => {
            start += inc;
            if (start >= num) { setCount(num); clearInterval(t); }
            else setCount(Math.floor(start));
        }, ms);
        return () => clearInterval(t);
    }, [inView, num, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Stats ─────────────────────────────────────────── */
export default function Stats() {
    return (
        <section style={{
            position: "relative",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            overflow: "hidden",
        }}>
            {/* Frosted glass bg */}
            <div style={{
                position: "absolute", inset: 0,
                background: "rgba(0,21,43,0.6)",
                backdropFilter: "blur(12px)",
                pointerEvents: "none",
            }} />
            {/* Subtle cyan radial glow */}
            <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 800, height: 300,
                background: "radial-gradient(ellipse, rgba(0,166,251,0.07) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div className="wrap" style={{ position: "relative", padding: "56px 32px" }}>
                {/* Single horizontal row — always 4 columns */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                }}>
                    {STATS.map((stat, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.7 }}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                padding: "0 16px",
                                /* Divider between cells — not after the last one */
                                borderRight: i < STATS.length - 1
                                    ? "1px solid rgba(255,255,255,0.07)"
                                    : "none",
                            }}
                        >
                            {/* Big glowing number */}
                            <div style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                                fontWeight: 900,
                                lineHeight: 1,
                                letterSpacing: "-0.04em",
                                color: "#FFFFFF",
                                marginBottom: 10,
                                filter: "drop-shadow(0 0 20px rgba(0,166,251,0.3))",
                            }}>
                                <Counter value={stat.value} />
                            </div>

                            {/* Cyan accent underline */}
                            <div style={{
                                width: 28, height: 2,
                                background: "linear-gradient(90deg, transparent, #00A6FB, transparent)",
                                marginBottom: 10,
                                borderRadius: 2,
                            }} />

                            {/* Label */}
                            <div style={{
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                color: "#64748b",
                            }}>
                                {stat.label}
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
