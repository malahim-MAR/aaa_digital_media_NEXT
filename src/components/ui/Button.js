"use client";

import { cn } from "@/lib/utils";

export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    className,
    ...props
}) {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer font-display";

    const variants = {
        primary:
            "bg-gradient-to-r from-sky-blue to-cyan text-white shadow-lg shadow-sky-blue/20 hover:shadow-sky-blue/40 hover:-translate-y-0.5",
        secondary:
            "bg-transparent border border-white/10 text-light-100 hover:border-sky-blue/50 hover:bg-white/5",
        ghost:
            "bg-transparent text-light-300 hover:text-white underline-offset-4 hover:underline",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
