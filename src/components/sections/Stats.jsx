"use client";

import { m, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { STATS } from "@/lib/data";

function Counter({ value, duration = 2200 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const num = parseInt(value);
    const suffix = value.replace(/[0-9]/g, "");
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const steps = 80, inc = num / steps, ms = duration / steps;
        const t = setInterval(() => {
            start += inc;
            if (start >= num) { setCount(num); clearInterval(t); }
            else setCount(Math.floor(start));
        }, ms);
        return () => clearInterval(t);
    }, [inView, num, duration]);
    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
    return (
        <section style={{
            position: "relative",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            overflow: "hidden",
        }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,21,43,0.6)", backdropFilter: "blur(12px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 200, background: "radial-gradient(ellipse, rgba(0,166,251,0.07), transparent 70%)", pointerEvents: "none" }} />

            <div className="wrap" style={{ position: "relative", padding: "clamp(24px, 5vw, 48px) 0" }}>
                {/* Responsive grid with gap:1px lines */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1px",
                    background: "rgba(255,255,255,0.1)",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
                    className="stats-grid"
                >
                    <style>{`@media(min-width:640px){.stats-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
                    {STATS.map((stat, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            style={{
                                display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                                padding: "clamp(24px, 5vw, 48px) 16px",
                                background: "#00152b", // Matches bg color to hide lines inside cells
                            }}
                        >
                            <div style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                                fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", color: "#FFFFFF",
                                marginBottom: 8, filter: "drop-shadow(0 0 15px rgba(0,166,251,0.2))",
                            }}>
                                <Counter value={stat.value} />
                            </div>
                            <div style={{ width: 32, height: 2, background: "linear-gradient(90deg, transparent, #00A6FB, transparent)", marginBottom: 12, borderRadius: 2 }} />
                            <div style={{ fontSize: "clamp(10px,1.5vw,11px)", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#64748b" }}>
                                {stat.label}
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
