"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail, Phone, MapPin, ArrowUpRight, Send,
    Clock, Globe, MessageSquare,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "contact@aaadigitalmedia.com",
        href: "mailto:contact@aaadigitalmedia.com",
    },
    {
        icon: Phone,
        label: "WhatsApp",
        value: "+92 319 3949557",
        href: "https://wa.me/923193949557",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Karachi, Pakistan",
        href: null,
    },
    {
        icon: Clock,
        label: "Working Hours",
        value: "Mon-Sat, 10AM - 8PM PKT",
        href: null,
    },
];

const serviceOptions = [
    "Performance Marketing",
    "Web Development",
    "Mobile App Development",
    "Web App Development",
    "Content Creation",
    "SEO Services",
    "Social Media Marketing",
    "Product Photography",
    "Other",
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-20">
                    <div className="absolute inset-0">
                        <div className="absolute -left-[15%] -top-[15%] h-[45%] w-[45%] rounded-full bg-ocean-blue/15 blur-[120px]" />
                        <div className="absolute -bottom-[10%] -right-[15%] h-[40%] w-[40%] rounded-full bg-cyan/10 blur-[100px]" />
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4 text-sm font-medium uppercase tracking-widest text-sky-blue"
                        >
                            Get in Touch
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Let&apos;s Build Something{" "}
                            <span className="gradient-text">Extraordinary</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mx-auto mt-6 max-w-2xl text-lg text-light-400 leading-relaxed"
                        >
                            Ready to take your brand global? Book a free consultation and
                            let&apos;s discuss your vision.
                        </motion.p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-20 md:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
                            {/* Contact Info */}
                            <motion.div
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="lg:col-span-2 space-y-6"
                            >
                                <motion.div variants={fadeUp}>
                                    <h2 className="text-2xl font-bold mb-2">
                                        Contact <span className="gradient-text">Details</span>
                                    </h2>
                                    <p className="text-light-400 text-sm leading-relaxed">
                                        We&apos;re available across multiple channels. Reach out
                                        however works best for you.
                                    </p>
                                </motion.div>

                                {contactInfo.map((info) => (
                                    <motion.div
                                        key={info.label}
                                        variants={fadeUp}
                                        className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-blue/10">
                                            <info.icon size={18} className="text-sky-blue" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wider text-light-400">
                                                {info.label}
                                            </p>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm font-medium text-light-200 hover:text-sky-blue transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-sm font-medium text-light-200">
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Quick links */}
                                <motion.div
                                    variants={fadeUp}
                                    className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <Globe size={16} className="text-sky-blue" />
                                        <p className="text-sm font-medium">Serving Worldwide</p>
                                    </div>
                                    <p className="text-xs text-light-400 leading-relaxed">
                                        Based in Karachi, Pakistan — serving clients in USA, UK, UAE,
                                        Australia, Canada, and 10+ more countries. We work across all
                                        time zones.
                                    </p>
                                </motion.div>
                            </motion.div>

                            {/* Form */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="lg:col-span-3"
                            >
                                {submitted ? (
                                    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 text-center min-h-[400px]">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-blue/10">
                                            <MessageSquare size={28} className="text-sky-blue" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-light-400 max-w-md">
                                            Thanks for reaching out, {formData.name || "there"}!
                                            We&apos;ll get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setSubmitted(false);
                                                setFormData({
                                                    name: "",
                                                    email: "",
                                                    company: "",
                                                    service: "",
                                                    budget: "",
                                                    message: "",
                                                });
                                            }}
                                            className="mt-6 text-sm text-sky-blue hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8"
                                    >
                                        <h3 className="text-xl font-bold mb-1">
                                            Start a <span className="gradient-text">Project</span>
                                        </h3>
                                        <p className="text-sm text-light-400 mb-4">
                                            Fill in the details and we&apos;ll get back to you within
                                            24 hours.
                                        </p>

                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="mb-1 block text-xs font-medium text-light-400"
                                                >
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-light-100 placeholder:text-light-400/50 focus:border-sky-blue/50 focus:outline-none focus:ring-1 focus:ring-sky-blue/30 transition-all"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="mb-1 block text-xs font-medium text-light-400"
                                                >
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-light-100 placeholder:text-light-400/50 focus:border-sky-blue/50 focus:outline-none focus:ring-1 focus:ring-sky-blue/30 transition-all"
                                                    placeholder="you@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    htmlFor="company"
                                                    className="mb-1 block text-xs font-medium text-light-400"
                                                >
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-light-100 placeholder:text-light-400/50 focus:border-sky-blue/50 focus:outline-none focus:ring-1 focus:ring-sky-blue/30 transition-all"
                                                    placeholder="Company (optional)"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="service"
                                                    className="mb-1 block text-xs font-medium text-light-400"
                                                >
                                                    Service *
                                                </label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    required
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-light-100 focus:border-sky-blue/50 focus:outline-none focus:ring-1 focus:ring-sky-blue/30 transition-all appearance-none"
                                                >
                                                    <option value="" className="bg-dark-800">
                                                        Select a service
                                                    </option>
                                                    {serviceOptions.map((s) => (
                                                        <option key={s} value={s} className="bg-dark-800">
                                                            {s}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="budget"
                                                className="mb-1 block text-xs font-medium text-light-400"
                                            >
                                                Budget Range
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-light-100 focus:border-sky-blue/50 focus:outline-none focus:ring-1 focus:ring-sky-blue/30 transition-all appearance-none"
                                            >
                                                <option value="" className="bg-dark-800">
                                                    Select budget range
                                                </option>
                                                <option value="<1k" className="bg-dark-800">
                                                    Less than $1,000
                                                </option>
                                                <option value="1k-5k" className="bg-dark-800">
                                                    $1,000 - $5,000
                                                </option>
                                                <option value="5k-15k" className="bg-dark-800">
                                                    $5,000 - $15,000
                                                </option>
                                                <option value="15k-50k" className="bg-dark-800">
                                                    $15,000 - $50,000
                                                </option>
                                                <option value="50k+" className="bg-dark-800">
                                                    $50,000+
                                                </option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="mb-1 block text-xs font-medium text-light-400"
                                            >
                                                Project Details *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-light-100 placeholder:text-light-400/50 focus:border-sky-blue/50 focus:outline-none focus:ring-1 focus:ring-sky-blue/30 transition-all"
                                                placeholder="Tell us about your project, goals, and timeline..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-blue to-cyan px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.01]"
                                        >
                                            <Send size={16} />
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
