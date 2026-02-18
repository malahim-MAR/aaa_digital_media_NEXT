"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ScrollReveal({
    children,
    variants,
    className = "",
    style,
    delay = 0,
    once = true,
    margin = "-80px",
    as = "div",
    ...rest
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin });

    const defaultVariants = {
        hidden: { opacity: 0, y: 28 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const MotionTag = motion[as] || motion.div;

    return (
        <MotionTag
            ref={ref}
            className={className}
            style={style}
            variants={variants || defaultVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            {...rest}
        >
            {children}
        </MotionTag>
    );
}
