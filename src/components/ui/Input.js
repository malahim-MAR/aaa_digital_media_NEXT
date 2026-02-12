"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef(({ label, error, className, ...props }, ref) => {
    return (
        <div className="space-y-1.5">
            {label && (
                <label className="block text-sm font-medium text-light-300">
                    {label}
                </label>
            )}
            <input
                ref={ref}
                className={cn(
                    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-light-100 placeholder:text-light-400",
                    "focus:border-sky-blue/50 focus:outline-none focus:ring-1 focus:ring-sky-blue/30",
                    "transition-all duration-200",
                    error && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30",
                    className
                )}
                {...props}
            />
            {error && <p className="text-xs text-red-400">{error}</p>}
        </div>
    );
});

Input.displayName = "Input";
export default Input;
