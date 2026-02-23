"use client";
import { m } from "framer-motion";

export default function Marquee({ items = [] }) {
    // Triple the items to ensure seamless loop
    const list = [...items, ...items, ...items];

    return (
        <div className="relative flex overflow-hidden border-y border-white/5 bg-[#020617] py-6 select-none">
            <m.div
                animate={{
                    x: ["0%", "-33.33%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex whitespace-nowrap min-w-full"
            >
                {list.map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center mx-6 md:mx-10"
                    >
                        <span className="text-xl md:text-2xl font-black text-white/20 uppercase tracking-tighter hover:text-[#00A6FB] transition-colors duration-500 cursor-default">
                            {item}
                        </span>
                        <div className="ml-6 md:ml-10 w-2 h-2 rounded-full bg-[#00A6FB]/20" />
                    </div>
                ))}
            </m.div>
        </div>
    );
}
