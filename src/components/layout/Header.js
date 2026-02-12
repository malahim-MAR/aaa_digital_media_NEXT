"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION, COMPANY } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-dark-800/80 backdrop-blur-xl border-b border-white/5 py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold font-display">
                            <span className="gradient-text">AAA</span>{" "}
                            <span className="text-light-100">Digital Media</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {NAVIGATION.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-light-300 transition-colors duration-200 hover:text-white"
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
                        className="flex items-center justify-center rounded-lg p-2 text-light-100 transition-colors hover:bg-white/5 md:hidden"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 z-50 w-[280px] bg-dark-700 border-l border-white/5 p-6 flex flex-col"
                        >
                            {/* Close Button */}
                            <div className="flex justify-end mb-8">
                                <button
                                    className="rounded-lg p-2 text-light-300 hover:bg-white/5 hover:text-white transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Mobile Links */}
                            <nav className="flex flex-col gap-1">
                                {NAVIGATION.map((item, i) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                        className="rounded-xl px-4 py-3 text-lg font-medium text-light-200 transition-colors hover:bg-white/5 hover:text-white"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Mobile CTA */}
                            <div className="mt-auto pt-6 border-t border-white/5">
                                <Button
                                    href="/contact"
                                    className="w-full justify-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Start Your Project
                                </Button>
                                <p className="mt-4 text-xs text-light-400 text-center">
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
