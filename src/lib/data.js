// Pure data — no JSX here so this file is safely importable from Server Components too

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
        iconName: "Camera",
        title: "Visual Content",
        slug: "visual-content",
        desc: "Scroll-stopping reels, branded videos, motion graphics, and social content that converts viewers into customers.",
        tags: ["Reels & Short-form", "Brand Videos", "Motion Graphics", "Social Content"],
    },
    {
        iconName: "Globe",
        title: "Website Development",
        slug: "website-development",
        desc: "High-converting Shopify stores and WordPress sites built for speed, SEO, and seamless user experience.",
        tags: ["Shopify", "WordPress", "Landing Pages", "SEO Optimised"],
    },
    {
        iconName: "Smartphone",
        title: "Web App & Mobile App",
        slug: "web-app-mobile-app",
        desc: "Custom web applications and cross-platform mobile apps that solve real problems and scale with your business.",
        tags: ["React / Next.js", "React Native", "UI/UX Design", "API Integration"],
    },
    {
        iconName: "TrendingUp",
        title: "Performance Marketing",
        slug: "performance-marketing",
        desc: "Data-driven ad campaigns on Meta, Google, and TikTok engineered to maximise ROI and scale your revenue.",
        tags: ["Meta Ads", "Google Ads", "TikTok Ads", "Analytics & Reporting"],
    },
    {
        iconName: "Camera",
        title: "Photography",
        slug: "photography",
        desc: "Professional product, brand, and lifestyle photography that elevates your visual identity across every channel.",
        tags: ["Product Photography", "Brand Shoots", "Lifestyle", "Post-production"],
    },
];

// Portfolio categories — plain data, icons resolved in components via ICON_MAP
export const PORTFOLIO_CATEGORIES = [
    {
        slug: "seller-video",
        title: "Seller Videos",
        shortTitle: "Seller",
        description: "High-converting product videos crafted to drive e-commerce sales. Professional storytelling meets persuasive visuals.",
        accent: "#00A6FB",
        iconName: "Video",
        videos: [
            { id: "dQw4w9WgXcQ", title: "Premium Skincare Launch", client: "GlowUp Beauty" },
            { id: "dQw4w9WgXcQ", title: "Smart Home Device Promo", client: "TechNest" },
            { id: "dQw4w9WgXcQ", title: "Organic Food Brand", client: "PureRoots" },
            { id: "dQw4w9WgXcQ", title: "Fitness Equipment Ad", client: "IronForge" },
            { id: "dQw4w9WgXcQ", title: "Luxury Watch Drop", client: "Tempus Co." },
        ],
    },
    {
        slug: "seller-talkie",
        title: "Seller Talkies",
        shortTitle: "Talkies",
        description: "Authentic, talking-head seller videos that build trust and convert cold audiences into loyal buyers.",
        accent: "#0077B6",
        iconName: "Mic",
        videos: [
            { id: "dQw4w9WgXcQ", title: "Founder Story — Tech Startup", client: "LaunchPad" },
            { id: "dQw4w9WgXcQ", title: "Product Explanation — SaaS", client: "FlowMetric" },
            { id: "dQw4w9WgXcQ", title: "Customer Review Compilation", client: "Apex Store" },
            { id: "dQw4w9WgXcQ", title: "Behind The Brand", client: "Nomad Threads" },
            { id: "dQw4w9WgXcQ", title: "CEO Brand Vision", client: "Vertix Capital" },
        ],
    },
    {
        slug: "podcast",
        title: "Podcasts",
        shortTitle: "Podcast",
        description: "Cinematic podcast productions — from intimate conversations to multi-guest roundtables, shot and edited for maximum engagement.",
        accent: "#6366F1",
        iconName: "Radio",
        videos: [
            { id: "dQw4w9WgXcQ", title: "The Founder Files — Ep.12", client: "Disrupt Media" },
            { id: "dQw4w9WgXcQ", title: "Digital Minds Podcast", client: "ThinkWave" },
            { id: "dQw4w9WgXcQ", title: "Health & Wellness Roundtable", client: "Vitara" },
            { id: "dQw4w9WgXcQ", title: "The Money Mindset Show", client: "CashFlow HQ" },
            { id: "dQw4w9WgXcQ", title: "Build in Public — S2", client: "MakerCast" },
        ],
    },
    {
        slug: "interview",
        title: "Interviews",
        shortTitle: "Interview",
        description: "One-on-one interview productions with cinematic framing, professional lighting, and broadcast-quality audio.",
        accent: "#14B8A6",
        iconName: "Users",
        videos: [
            { id: "dQw4w9WgXcQ", title: "CEO Spotlight — Fintech Leader", client: "NexPay" },
            { id: "dQw4w9WgXcQ", title: "Athlete Brand Story", client: "Elevate Sports" },
            { id: "dQw4w9WgXcQ", title: "Artist Interview Feature", client: "Canvas & Co." },
            { id: "dQw4w9WgXcQ", title: "Think Tank Panel — 2025", client: "Summit Media" },
            { id: "dQw4w9WgXcQ", title: "Investor Roundtable", client: "Bridge VC" },
        ],
    },
    {
        slug: "dvc",
        title: "Digital Video Commercials",
        shortTitle: "DVC",
        description: "Full-scale digital commercials with scripting, talent casting, location production, and post-production color grading.",
        accent: "#D4AF37",
        iconName: "Film",
        videos: [
            { id: "dQw4w9WgXcQ", title: "Automotive Brand Launch", client: "VeloMotors" },
            { id: "dQw4w9WgXcQ", title: "Real Estate Empire DVC", client: "Horizon Realty" },
            { id: "dQw4w9WgXcQ", title: "Luxury Resort Campaign", client: "Azur Retreats" },
            { id: "dQw4w9WgXcQ", title: "Fashion Season Campaign", client: "Khaadi Luxe" },
            { id: "dQw4w9WgXcQ", title: "FMCG National Campaign", client: "PureSip" },
        ],
    },
    {
        slug: "documentary",
        title: "Documentaries",
        shortTitle: "Documentary",
        description: "Long-form documentary content that tells powerful brand stories, culture pieces, and social impact narratives.",
        accent: "#F59E0B",
        iconName: "BookOpen",
        videos: [
            { id: "dQw4w9WgXcQ", title: "The Makers of Karachi", client: "Heritage Pak" },
            { id: "dQw4w9WgXcQ", title: "Startup Ecosystem 2025", client: "Invest.pk" },
            { id: "dQw4w9WgXcQ", title: "Women in Tech Pakistan", client: "SheLead" },
            { id: "dQw4w9WgXcQ", title: "Fashion Forward — S1", client: "PFDC" },
            { id: "dQw4w9WgXcQ", title: "Taste of Home", client: "Foodpanda Originals" },
        ],
    },
    {
        slug: "fashion-reel",
        title: "Fashion Reels",
        shortTitle: "Fashion",
        description: "Editorial-grade fashion reels that blend artistry and trend-literacy — made to dominate Instagram and TikTok.",
        accent: "#EC4899",
        iconName: "Shirt",
        videos: [
            { id: "dQw4w9WgXcQ", title: "Summer Luxe Collection", client: "Sana Safinaz" },
            { id: "dQw4w9WgXcQ", title: "Urban Streetwear Drop", client: "Breakout" },
            { id: "dQw4w9WgXcQ", title: "Bridal Couture Editorial", client: "Elan" },
            { id: "dQw4w9WgXcQ", title: "Festive Pret Campaign", client: "Gul Ahmed" },
            { id: "dQw4w9WgXcQ", title: "Luxury RTW — Winter 25", client: "Hussain Rehar" },
        ],
    },
    {
        slug: "brand-story",
        title: "Brand Stories",
        shortTitle: "Brand",
        description: "Narrative-driven brand films that articulate your founding vision, values, and unique identity to the world.",
        accent: "#8B5CF6",
        iconName: "LayoutTemplate",
        videos: [
            { id: "dQw4w9WgXcQ", title: "Origin Story — From Zero", client: "Nayatel" },
            { id: "dQw4w9WgXcQ", title: "Purpose-Led Brand Film", client: "Engro" },
            { id: "dQw4w9WgXcQ", title: "10-Year Anniversary Film", client: "Daraz" },
            { id: "dQw4w9WgXcQ", title: "Culture & Values Film", client: "Gaditek" },
            { id: "dQw4w9WgXcQ", title: "Global Expansion Story", client: "Careem" },
        ],
    },
    {
        slug: "social-content",
        title: "Social Content",
        shortTitle: "Social",
        description: "High-frequency, platform-native content designed for virality — optimised for TikTok, Instagram, and YouTube Shorts.",
        accent: "#10B981",
        iconName: "Share2",
        videos: [
            { id: "dQw4w9WgXcQ", title: "30-Day Content Sprint", client: "Foodpanda" },
            { id: "dQw4w9WgXcQ", title: "Viral TikTok Series", client: "Jazz" },
            { id: "dQw4w9WgXcQ", title: "IG Reel Campaign", client: "Zellbury" },
            { id: "dQw4w9WgXcQ", title: "YouTube Shorts Pack", client: "Tapmad" },
            { id: "dQw4w9WgXcQ", title: "Multi-Platform Rollout", client: "EasyPaisa" },
        ],
    },
];

export const STATS = [
    { value: "200+", label: "Projects Delivered" },
    { value: "15+", label: "Countries Served" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5+", label: "Years of Experience" },
];

export const WORK = [
    { title: "Luxe Fashion E-commerce", industry: "Fashion & Retail", result: "+180% online sales", color: "#1a2744", accent: "#3B82F6" },
    { title: "FinPay Mobile Banking App", industry: "Fintech", result: "50k+ downloads in 3 months", color: "#1a1a2e", accent: "#8B5CF6" },
    { title: "CloudMetrics SaaS Dashboard", industry: "SaaS / B2B", result: "+240% trial signups", color: "#0d2137", accent: "#06B6D4" },
    { title: "GreenBite Brand Campaign", industry: "Food & Lifestyle", result: "3M+ organic impressions", color: "#1a2a1a", accent: "#10B981" },
];

export const TESTIMONIALS = [
    { quote: "AAA Digital Media took our brand from local to international in under 6 months. The results speak for themselves.", name: "James Morrison", role: "CEO, TechVentures Global", avatar: "JM" },
    { quote: "Their performance marketing team is exceptional. We saw a 3x return on ad spend within the first month.", name: "Sarah Chen", role: "Marketing Director, Luxe Fashion", avatar: "SC" },
    { quote: "The Shopify store they built for us is fast, beautiful, and converts like crazy. Highly recommend.", name: "Ahmed Al-Rashid", role: "Founder, Desert Goods", avatar: "AA" },
];

export const FAQS = [
    { q: "What makes AAA Digital Media different from other agencies?", a: "We combine international-level quality with the dedication of a boutique agency. Every project gets a dedicated team, transparent reporting, and a results-first mindset — not just deliverables." },
    { q: "How long does a typical project take?", a: "Timelines vary by scope. A landing page takes 1–2 weeks, a full Shopify store 3–4 weeks, and a mobile app 8–16 weeks. We'll give you a precise timeline in your free consultation." },
    { q: "Do you work with international clients?", a: "Absolutely. We currently serve clients across 15+ countries including the US, UK, UAE, and Australia. We're fully remote-ready with cross-timezone availability." },
    { q: "What is your pricing model?", a: "We offer project-based pricing and monthly retainers depending on the service. All quotes are custom — book a free consultation and we'll scope it out together." },
    { q: "Can you handle both marketing and development?", a: "Yes — that's our edge. We're a full-service agency, so your brand gets consistent strategy, design, and execution across every channel without juggling multiple vendors." },
];

export const WHY_CHOOSE_US = [
    { iconName: "Star", title: "Results-First", desc: "Every decision is tied to a measurable outcome. No vanity metrics." },
    { iconName: "Globe", title: "Global Standards", desc: "International-quality work delivered from Karachi to the world." },
    { iconName: "CheckCircle2", title: "Full-Service", desc: "Strategy, design, development, and marketing — all under one roof." },
    { iconName: "Sparkles", title: "Boutique Attention", desc: "You get a dedicated team, not a ticket number." },
];

export const CONTACT_INFO = [
    { iconName: "Mail", label: "Email", value: "contact@aaadigitalmedia.com" },
    { iconName: "Phone", label: "WhatsApp", value: "+92 319 3949557" },
    { iconName: "MapPin", label: "Location", value: "Karachi, Pakistan · Serving Worldwide 🌍" },
];

export const SOCIAL_LINKS = ["Linkedin", "Instagram", "Facebook", "Twitter"];
