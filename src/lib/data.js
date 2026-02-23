
import {
    Camera, TrendingUp, Globe, Smartphone, Code2,
    Star, CheckCircle2, Sparkles, Mail, Phone, MapPin,
    Linkedin, Instagram, Facebook, Twitter
} from "lucide-react";

export const NAV = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Clients", href: "/clients" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const SERVICES = [
    {
        icon: <Camera size={22} className="text-blue-400" />,
        title: "Visual Content",
        slug: "visual-content",
        desc: "Scroll-stopping reels, branded videos, motion graphics, and social content that converts viewers into customers.",
        tags: ["Reels & Short-form", "Brand Videos", "Motion Graphics", "Social Content"],
    },
    {
        icon: <Globe size={22} className="text-blue-400" />,
        title: "Website Development",
        slug: "website-development",
        desc: "High-converting Shopify stores and WordPress sites built for speed, SEO, and seamless user experience.",
        tags: ["Shopify", "WordPress", "Landing Pages", "SEO Optimised"],
    },
    {
        icon: <Smartphone size={22} className="text-blue-400" />,
        title: "Web App & Mobile App",
        slug: "web-app-mobile-app",
        desc: "Custom web applications and cross-platform mobile apps that solve real problems and scale with your business.",
        tags: ["React / Next.js", "React Native", "UI/UX Design", "API Integration"],
    },
    {
        icon: <TrendingUp size={22} className="text-blue-400" />,
        title: "Performance Marketing",
        slug: "performance-marketing",
        desc: "Data-driven ad campaigns on Meta, Google, and TikTok engineered to maximise ROI and scale your revenue.",
        tags: ["Meta Ads", "Google Ads", "TikTok Ads", "Analytics & Reporting"],
    },
    {
        icon: <Camera size={22} className="text-blue-400" />,
        title: "Photography",
        slug: "photography",
        desc: "Professional product, brand, and lifestyle photography that elevates your visual identity across every channel.",
        tags: ["Product Photography", "Brand Shoots", "Lifestyle", "Post-production"],
    },
];

export const STATS = [
    { value: "200+", label: "Projects Delivered" },
    { value: "15+", label: "Countries Served" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5+", label: "Years of Experience" },
];

export const WORK = [
    {
        title: "Luxe Fashion E-commerce",
        industry: "Fashion & Retail",
        result: "+180% online sales",
        color: "#1a2744",
        accent: "#3B82F6",
    },
    {
        title: "FinPay Mobile Banking App",
        industry: "Fintech",
        result: "50k+ downloads in 3 months",
        color: "#1a1a2e",
        accent: "#8B5CF6",
    },
    {
        title: "CloudMetrics SaaS Dashboard",
        industry: "SaaS / B2B",
        result: "+240% trial signups",
        color: "#0d2137",
        accent: "#06B6D4",
    },
    {
        title: "GreenBite Brand Campaign",
        industry: "Food & Lifestyle",
        result: "3M+ organic impressions",
        color: "#1a2a1a",
        accent: "#10B981",
    },
];

export const TESTIMONIALS = [
    {
        quote: "AAA Digital Media took our brand from local to international in under 6 months. The results speak for themselves.",
        name: "James Morrison",
        role: "CEO, TechVentures Global",
    },
    {
        quote: "Their performance marketing team is exceptional. We saw a 3x return on ad spend within the first month.",
        name: "Sarah Chen",
        role: "Marketing Director, Luxe Fashion",
    },
    {
        quote: "The Shopify store they built for us is fast, beautiful, and converts like crazy. Highly recommend.",
        name: "Ahmed Al-Rashid",
        role: "Founder, Desert Goods",
    },
];

export const FAQS = [
    {
        q: "What makes AAA Digital Media different from other agencies?",
        a: "We combine international-level quality with the dedication of a boutique agency. Every project gets a dedicated team, transparent reporting, and a results-first mindset — not just deliverables.",
    },
    {
        q: "How long does a typical project take?",
        a: "Timelines vary by scope. A landing page takes 1–2 weeks, a full Shopify store 3–4 weeks, and a mobile app 8–16 weeks. We'll give you a precise timeline in your free consultation.",
    },
    {
        q: "Do you work with international clients?",
        a: "Absolutely. We currently serve clients across 15+ countries including the US, UK, UAE, and Australia. We're fully remote-ready with cross-timezone availability.",
    },
    {
        q: "What is your pricing model?",
        a: "We offer project-based pricing and monthly retainers depending on the service. All quotes are custom — book a free consultation and we'll scope it out together.",
    },
    {
        q: "Can you handle both marketing and development?",
        a: "Yes — that's our edge. We're a full-service agency, so your brand gets consistent strategy, design, and execution across every channel without juggling multiple vendors.",
    },
];

export const WHY_CHOOSE_US = [
    { icon: <Star size={16} className="text-blue-400" />, title: "Results-First", desc: "Every decision is tied to a measurable outcome. No vanity metrics." },
    { icon: <Globe size={16} className="text-blue-400" />, title: "Global Standards", desc: "International-quality work delivered from Karachi to the world." },
    { icon: <CheckCircle2 size={16} className="text-blue-400" />, title: "Full-Service", desc: "Strategy, design, development, and marketing — all under one roof." },
    { icon: <Sparkles size={16} className="text-blue-400" />, title: "Boutique Attention", desc: "You get a dedicated team, not a ticket number." },
];

export const CONTACT_INFO = [
    { icon: <Mail size={16} className="text-blue-400" />, label: "Email", value: "contact@aaadigitalmedia.com" },
    { icon: <Phone size={16} className="text-blue-400" />, label: "WhatsApp", value: "+92 319 3949557" },
    { icon: <MapPin size={16} className="text-blue-400" />, label: "Location", value: "Karachi, Pakistan · Serving Worldwide 🌍" },
];

export const SOCIAL_LINKS = [Linkedin, Instagram, Facebook, Twitter];
