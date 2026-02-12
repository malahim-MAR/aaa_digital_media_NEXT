"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";

export default function SectionWrapper({
    children,
    className,
    id,
    noPadding = false,
}) {
    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className={cn(
                "relative w-full",
                !noPadding && "py-20 md:py-28 lg:py-32",
                className
            )}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        </motion.section>
    );
}
