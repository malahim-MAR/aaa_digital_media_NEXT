import { cn } from "@/lib/utils";

export default function Badge({ children, variant = "default", className }) {
    const variants = {
        default: "bg-white/5 text-light-300 border-white/10",
        blue: "bg-sky-blue/10 text-sky-blue border-sky-blue/20",
        new: "bg-cyan/10 text-cyan border-cyan/20",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
