"use client";

import { m, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { STATS } from "@/lib/data";

const Counter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const inView = useInView(countRef, { once: true });

    // Parse numeric value and suffix (e.g., "200+" -> { num: 200, suffix: "+" })
    const num = parseInt(value);
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = num;
            const totalSteps = 60;
            const increment = end / totalSteps;
            const stepTime = duration / totalSteps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [inView, num, duration]);

    return (
        <span ref={countRef}>
            {count}{suffix}
        </span>
    );
};

export default function Stats() {
    return (
        <section className="bg-[#020617]/50 border-y border-white/5">
            <div className="wrap py-12 lg:py-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
                    {STATS.map((stat, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center lg:border-r last:border-0 border-white/10"
                        >
                            <div
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tighter text-white"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                <Counter value={stat.value} />
                            </div>
                            <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#94a3b8]">
                                {stat.label}
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
