import { NAVIGATION, COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import { services } from "@/lib/data";
import {
    Linkedin, Facebook, Instagram, Twitter,
    Mail, Phone, MapPin, ArrowUpRight,
} from "lucide-react";

const iconMap = { Linkedin, Facebook, Instagram, Twitter };

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-dark-900">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Col 1: Company Info */}
                    <div className="space-y-4">
                        <a href="/" className="inline-block">
                            <span className="text-xl font-bold font-display">
                                <span className="gradient-text">AAA</span>{" "}
                                <span className="text-light-100">Digital Media</span>
                            </span>
                        </a>
                        <p className="text-sm leading-relaxed text-light-400">
                            Transforming brands into global success stories. World-class digital
                            solutions from Karachi to the world.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            {SOCIAL_LINKS.map((link) => {
                                const Icon = iconMap[link.icon];
                                return (
                                    <a
                                        key={link.platform}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-light-400 transition-all duration-200 hover:border-sky-blue/50 hover:text-sky-blue hover:bg-sky-blue/5"
                                        aria-label={link.platform}
                                    >
                                        <Icon size={16} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Col 2: Services */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-light-200">
                            Services
                        </h4>
                        <ul className="space-y-2.5">
                            {services.slice(0, 6).map((service) => (
                                <li key={service.id}>
                                    <a
                                        href={`/services/${service.id}`}
                                        className="text-sm text-light-400 transition-colors duration-200 hover:text-sky-blue"
                                    >
                                        {service.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-light-200">
                            Company
                        </h4>
                        <ul className="space-y-2.5">
                            {NAVIGATION.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-light-400 transition-colors duration-200 hover:text-sky-blue"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="/faq"
                                    className="text-sm text-light-400 transition-colors duration-200 hover:text-sky-blue"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-light-200">
                            Get in Touch
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`mailto:${COMPANY.email}`}
                                    className="flex items-center gap-2 text-sm text-light-400 transition-colors duration-200 hover:text-sky-blue"
                                >
                                    <Mail size={14} />
                                    {COMPANY.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={COMPANY.whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-light-400 transition-colors duration-200 hover:text-sky-blue"
                                >
                                    <Phone size={14} />
                                    {COMPANY.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-light-400">
                                <MapPin size={14} className="mt-0.5 shrink-0" />
                                <span>{COMPANY.address}<br />Serving Worldwide 🌍</span>
                            </li>
                        </ul>

                        {/* CTA */}
                        <a
                            href="/contact"
                            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-sky-blue transition-colors hover:text-cyan"
                        >
                            Start a Project <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
                    <p className="text-xs text-light-400">
                        © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-light-400">
                        <a href="/privacy" className="hover:text-light-200 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="hover:text-light-200 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
