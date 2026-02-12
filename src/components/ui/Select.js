"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Select = forwardRef(
    ({ label, error, options = [], placeholder, className, ...props }, ref) => {
        return (
            <div className="space-y-1.5">
                {label && (
                    <label className="block text-sm font-medium text-light-300">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <select
                        ref={ref}
                        className={cn(
                            "w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-light-100",
                            "focus:border-sky-blue/50 focus:outline-none focus:ring-1 focus:ring-sky-blue/30",
                            "transition-all duration-200",
                            error &&
                            "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30",
                            className
                        )}
                        {...props}
                    >
                        {placeholder && (
                            <option value="" className="bg-dark-700 text-light-400">
                                {placeholder}
                            </option>
                        )}
                        {options.map((opt) => (
                            <option
                                key={opt.value}
                                value={opt.value}
                                className="bg-dark-700"
                            >
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-light-400" />
                </div>
                {error && <p className="text-xs text-red-400">{error}</p>}
            </div>
        );
    }
);

Select.displayName = "Select";
export default Select;
