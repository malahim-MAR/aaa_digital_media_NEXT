"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION, COMPANY } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 200) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setIsScrolled(latest > 50);
    });

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.header
                animate={{ y: hidden ? "-100%" : "0%" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-black/60 backdrop-blur-2xl border-b border-white/[0.04] py-3"
                        : "bg-transparent py-5"
                    }`}
            >
                <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-8">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold font-display">
                            <span className="gradient-text">AAA</span>{" "}
                            <span className="text-white">Digital Media</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {NAVIGATION.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-white"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button href="/contact" size="sm">
                            Start Your Project
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/5 md:hidden"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 z-50 w-[300px] border-l border-white/[0.06] bg-neutral-950 p-6 flex flex-col"
                        >
                            <div className="flex justify-end mb-8">
                                <button
                                    className="rounded-lg p-2 text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-1">
                                {NAVIGATION.map((item, i) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                        className="rounded-xl px-4 py-3 text-lg font-medium text-neutral-200 transition-colors hover:bg-white/5 hover:text-white"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="mt-auto pt-6 border-t border-white/[0.06]">
                                <Button
                                    href="/contact"
                                    className="w-full justify-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Start Your Project
                                </Button>
                                <p className="mt-4 text-xs text-neutral-600 text-center">
                                    {COMPANY.email}
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
