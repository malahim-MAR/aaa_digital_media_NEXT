"use client";

import { cn } from "@/lib/utils";

export default function GlassCard({
    children,
    className,
    hover = true,
    glow = false,
    ...props
}) {
    return (
        <div
            className={cn(
                "rounded-2xl glass",
                hover && "glass-hover transition-all duration-300",
                glow && "glow-sm",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
