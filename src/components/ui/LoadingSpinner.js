import { cn } from "@/lib/utils";

export default function LoadingSpinner({ size = "md", className }) {
    const sizes = {
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-2",
        lg: "h-10 w-10 border-3",
    };

    return (
        <div
            className={cn(
                "animate-spin rounded-full border-sky-blue/20 border-t-sky-blue",
                sizes[size],
                className
            )}
        />
    );
}
