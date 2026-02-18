"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/data";

function useCountUp(target, duration = 1800, active = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [active, target, duration]);
    return count;
}

function StatItem({ stat }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const match = stat.value.match(/^(\d+)(.*)$/);
    const num = match ? parseInt(match[1]) : 0;
    const suffix = match ? match[2] : stat.value;
    const count = useCountUp(num, 1800, isInView);

    return (
        <div ref={ref} style={{ textAlign: "center", padding: "0 16px" }}>
            <div
                className="g-text"
                style={{
                    fontSize: "clamp(3rem, 5.5vw, 4.5rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.045em",
                    lineHeight: 1,
                    fontFamily: "var(--font-syne, Syne, sans-serif)",
                }}
            >
                {isInView ? count : 0}{suffix}
            </div>
            <p style={{
                marginTop: 10, fontSize: 12, fontWeight: 500,
                color: "#3D5070", letterSpacing: "0.06em",
                textTransform: "uppercase",
            }}>
                {stat.label}
            </p>
        </div>
    );
}

export default function Stats() {
    return (
        <section style={{
            padding: "96px 0",
            borderTop: "1px solid rgba(255,255,255,0.055)",
            position: "relative", overflow: "hidden",
        }}>
            <div style={{
                position: "absolute", left: "50%", top: "50%",
                transform: "translate(-50%,-50%)",
                width: 800, height: 400,
                background: "radial-gradient(ellipse, rgba(37,99,235,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />
            <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 0,
                }} className="stats-grid">
                    {STATS.map((s, i) => (
                        <div key={i} style={{
                            borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.055)" : "none",
                        }}>
                            <StatItem stat={s} />
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.055); padding: 32px 0; }
        }
      `}</style>
        </section>
    );
}
