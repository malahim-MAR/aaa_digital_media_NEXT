"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AnimatedCounter({
    value,
    suffix = "",
    duration = 2,
    className,
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = value;
        const stepTime = (duration * 1000) / end;
        const increment = Math.ceil(end / (duration * 60));

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isInView, value, duration]);

    return (
        <motion.span
            ref={ref}
            className={cn("tabular-nums", className)}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            {count}
            {suffix}
        </motion.span>
    );
}
