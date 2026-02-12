/**
 * Central data store for the AAA Digital Media website.
 * All 8 services, portfolio items, testimonials, and team info.
 */

// ─── Services ──────────────────────────────────────────────
export const services = [
    {
        id: "performance-marketing",
        title: "Performance Marketing",
        shortDesc: "Data-driven campaigns that maximize ROI and scale your growth.",
        icon: "TrendingUp",
        description:
            "We craft precision-targeted advertising campaigns across Google, Meta, TikTok, and LinkedIn that turn ad spend into measurable revenue. Every dollar is tracked, optimized, and maximized.",
        features: [
            "Google Ads (Search, Display, Shopping, YouTube)",
            "Meta Ads (Facebook & Instagram)",
            "TikTok & LinkedIn Advertising",
            "Conversion Rate Optimization",
            "A/B Testing & Landing Page Optimization",
            "Advanced Analytics & Attribution Modeling",
        ],
        process: [
            { step: 1, title: "Audit & Discovery", description: "We analyze your current marketing, competitors, and target audience to find the biggest opportunities." },
            { step: 2, title: "Strategy & Planning", description: "Build a custom campaign architecture with targeting, budgets, and creative direction." },
            { step: 3, title: "Launch & Execute", description: "Deploy campaigns across platforms with precision targeting and compelling creatives." },
            { step: 4, title: "Optimize & Scale", description: "Continuous monitoring, A/B testing, and optimization to maximize ROAS." },
        ],
        technologies: ["Google Ads", "Meta Business Suite", "Google Analytics 4", "Hotjar", "Unbounce"],
        faqs: [
            { question: "What's the minimum budget to start?", answer: "We recommend a minimum of $1,000/month ad spend for meaningful results, plus management fees." },
            { question: "How soon will I see results?", answer: "Most campaigns start showing traction within 2-4 weeks. Full optimization takes 60-90 days." },
            { question: "Do you work with e-commerce businesses?", answer: "Absolutely! E-commerce is one of our strongest verticals with proven ROAS results." },
        ],
    },
    {
        id: "web-development",
        title: "Web Development",
        shortDesc: "Stunning, high-performance websites that convert visitors into customers.",
        icon: "Globe",
        description:
            "We build fast, beautiful, and conversion-optimized websites using the latest technologies. From corporate sites to complex web platforms — built to perform on the global stage.",
        features: [
            "Custom Website Design & Development",
            "E-commerce Stores (Shopify, WooCommerce, Custom)",
            "Landing Pages & Microsites",
            "CMS Integration (WordPress, Contentful, Sanity)",
            "Performance Optimization & Core Web Vitals",
            "Responsive & Mobile-First Design",
        ],
        process: [
            { step: 1, title: "Discovery & Wireframes", description: "Understand your goals, audience, and create low-fidelity wireframes." },
            { step: 2, title: "UI/UX Design", description: "High-fidelity designs with your brand identity, reviewed and approved." },
            { step: 3, title: "Development & Testing", description: "Build with clean code, integrations, and thorough cross-browser testing." },
            { step: 4, title: "Launch & Support", description: "Deploy live with monitoring, training, and ongoing maintenance." },
        ],
        technologies: ["Next.js", "React", "Node.js", "WordPress", "Shopify", "Tailwind CSS", "Vercel"],
        faqs: [
            { question: "How long does a website take to build?", answer: "Typical timelines range from 4-8 weeks depending on complexity and content readiness." },
            { question: "Will my website be mobile-friendly?", answer: "100%. Every site is built mobile-first with responsive design across all devices." },
            { question: "Do you provide hosting?", answer: "We recommend and set up optimized hosting on platforms like Vercel, AWS, or Netlify." },
        ],
    },
    {
        id: "mobile-app-development",
        title: "Mobile App Development",
        shortDesc: "Native & cross-platform mobile apps that users love.",
        icon: "Smartphone",
        isNew: true,
        description:
            "From concept to App Store — we build beautiful, high-performance mobile applications for iOS and Android. Cross-platform or native, we deliver apps that scale globally.",
        features: [
            "Cross-Platform Apps (React Native, Flutter)",
            "Native iOS (Swift) & Android (Kotlin) Development",
            "UI/UX Design for Mobile",
            "Backend API Development",
            "App Store Optimization (ASO)",
            "Push Notifications & Analytics Integration",
        ],
        process: [
            { step: 1, title: "Concept & Prototyping", description: "Define features, user flows, and create interactive prototypes." },
            { step: 2, title: "Design & Architecture", description: "UI/UX design, system architecture, and API planning." },
            { step: 3, title: "Development & Integration", description: "Agile sprints with regular demos, API integration, and testing." },
            { step: 4, title: "Testing & QA", description: "Comprehensive testing across devices, performance optimization." },
            { step: 5, title: "Launch & Maintain", description: "App Store/Play Store submission, monitoring, and updates." },
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify", "Expo"],
        faqs: [
            { question: "Should I go native or cross-platform?", answer: "Cross-platform (React Native/Flutter) covers 90% of use cases at lower cost. We recommend native only for hardware-intensive apps." },
            { question: "How much does a mobile app cost?", answer: "Simple apps start from $10,000. Complex apps with backend systems range $25,000-$100,000+." },
            { question: "Do you handle App Store submissions?", answer: "Yes, we manage the entire submission process for both Apple App Store and Google Play Store." },
        ],
    },
    {
        id: "web-app-development",
        title: "Web App Development",
        shortDesc: "Powerful web applications built for scale and performance.",
        icon: "AppWindow",
        isNew: true,
        description:
            "We engineer enterprise-grade web applications — from SaaS platforms and admin dashboards to complex booking systems. Built with modern stacks for speed, security, and scalability.",
        features: [
            "SaaS Platform Development",
            "Admin Dashboards & Internal Tools",
            "E-commerce & Marketplace Platforms",
            "Real-time Applications (Chat, Collaboration)",
            "API Development & Third-Party Integrations",
            "Cloud Architecture (AWS, GCP, Azure)",
        ],
        process: [
            { step: 1, title: "Requirements & Scoping", description: "Deep-dive into business logic, user stories, and technical requirements." },
            { step: 2, title: "Architecture & Design", description: "System design, database schema, API contracts, and UI/UX mockups." },
            { step: 3, title: "Agile Development", description: "2-week sprints with demos, continuous testing, and iterative delivery." },
            { step: 4, title: "Deployment & DevOps", description: "CI/CD pipelines, monitoring, staging environments, and production launch." },
        ],
        technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "Docker", "AWS"],
        faqs: [
            { question: "What tech stacks do you use?", answer: "Primarily MERN (MongoDB, Express, React, Node.js) and Next.js with PostgreSQL. We choose the best stack for each project." },
            { question: "Can you work with our existing system?", answer: "Yes. We regularly integrate with legacy systems, third-party APIs, and existing databases." },
            { question: "Do you provide ongoing support?", answer: "Absolutely. We offer maintenance packages including updates, monitoring, and feature additions." },
        ],
    },
    {
        id: "content-creation",
        title: "Content Creation",
        shortDesc: "Scroll-stopping content that builds brands and drives engagement.",
        icon: "Palette",
        description:
            "From video production and motion graphics to copywriting and social media content — we create media that tells your story, engages your audience, and drives action.",
        features: [
            "Video Production & Editing",
            "Motion Graphics & Animation",
            "Brand Photography",
            "Copywriting & Content Strategy",
            "Social Media Content Calendars",
            "Infographics & Visual Design",
        ],
        process: [
            { step: 1, title: "Content Strategy", description: "Define brand voice, content pillars, and audience messaging." },
            { step: 2, title: "Creative Development", description: "Storyboards, scripts, shot lists, and design concepts." },
            { step: 3, title: "Production & Creation", description: "Shoot, edit, design, and produce polished content." },
            { step: 4, title: "Distribution & Analytics", description: "Publish across channels with performance tracking." },
        ],
        technologies: ["Adobe Creative Suite", "DaVinci Resolve", "After Effects", "Figma", "Canva Pro"],
        faqs: [
            { question: "Do you create content for all platforms?", answer: "Yes — Instagram, TikTok, YouTube, LinkedIn, Facebook, and more." },
            { question: "Can you handle ongoing content needs?", answer: "We offer monthly retainer packages for consistent content delivery." },
        ],
    },
    {
        id: "seo-services",
        title: "SEO Services",
        shortDesc: "Dominate search rankings and drive organic traffic that converts.",
        icon: "Search",
        description:
            "Our proven SEO strategies help your business climb search rankings and attract high-intent organic traffic. From technical SEO to content optimization — we cover it all.",
        features: [
            "Technical SEO Audits & Fixes",
            "On-Page & Off-Page Optimization",
            "Keyword Research & Content Strategy",
            "Local SEO & Google My Business",
            "Link Building & Digital PR",
            "Monthly Reporting & Analytics",
        ],
        process: [
            { step: 1, title: "SEO Audit", description: "Comprehensive technical, on-page, and competitive analysis." },
            { step: 2, title: "Keyword Strategy", description: "Target high-value keywords aligned with business goals." },
            { step: 3, title: "Optimization", description: "Implement on-page changes, technical fixes, and content improvements." },
            { step: 4, title: "Build Authority", description: "Quality link building, content marketing, and digital PR." },
        ],
        technologies: ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "Surfer SEO"],
        faqs: [
            { question: "How long does SEO take to show results?", answer: "Typically 3-6 months for meaningful organic traffic growth. SEO is a long-term investment." },
            { question: "Do you guarantee rankings?", answer: "No ethical SEO agency can guarantee specific rankings. We guarantee best practices and consistent improvement." },
        ],
    },
    {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        shortDesc: "Build communities, drive engagement, and grow your brand presence.",
        icon: "Share2",
        description:
            "Strategic social media management and marketing across all major platforms. We build engaged communities around your brand with content that resonates and converts.",
        features: [
            "Social Media Strategy & Management",
            "Community Building & Engagement",
            "Influencer Marketing & Partnerships",
            "Social Media Advertising",
            "Brand Reputation Management",
            "Analytics & Performance Reporting",
        ],
        process: [
            { step: 1, title: "Audit & Strategy", description: "Analyze current presence, competitors, and build a tailored strategy." },
            { step: 2, title: "Content Planning", description: "Create monthly calendars with platform-specific content." },
            { step: 3, title: "Execution & Engagement", description: "Publish, engage, and build community consistently." },
            { step: 4, title: "Analyze & Optimize", description: "Track KPIs, report results, and refine approach." },
        ],
        technologies: ["Meta Business Suite", "Hootsuite", "Later", "Sprout Social", "Buffer"],
        faqs: [
            { question: "Which platforms should my business be on?", answer: "It depends on your audience. We'll recommend the right mix based on your industry and goals." },
        ],
    },
    {
        id: "product-photography",
        title: "Product Photography",
        shortDesc: "Professional product imagery that sells and elevates your brand.",
        icon: "Camera",
        description:
            "High-quality product photography for e-commerce, social media, and marketing materials. We make your products look premium and irresistible across every channel.",
        features: [
            "E-commerce Product Photography",
            "Lifestyle & Contextual Shoots",
            "360° Product Views",
            "Photo Retouching & Enhancement",
            "Amazon & Marketplace Optimization",
            "Flat Lay & Creative Compositions",
        ],
        process: [
            { step: 1, title: "Brief & Planning", description: "Understand products, brand style, and usage requirements." },
            { step: 2, title: "Shoot Day", description: "Professional studio or location shoot with expert lighting." },
            { step: 3, title: "Post-Production", description: "Retouching, color correction, and format optimization." },
            { step: 4, title: "Delivery", description: "Multiple formats optimized for web, print, and social." },
        ],
        technologies: ["Adobe Lightroom", "Adobe Photoshop", "Capture One", "Studio Lighting"],
        faqs: [
            { question: "How many products can you shoot in a day?", answer: "Typically 15-30 products per day depending on complexity and style requirements." },
        ],
    },
];

// ─── Portfolio Items ───────────────────────────────────────
export const portfolioItems = [
    {
        id: "luxe-fashion-store",
        title: "Luxe Fashion E-commerce",
        client: "Luxe Fashion Co.",
        category: "web-development",
        industry: "Fashion & Retail",
        thumbnail: "/portfolio/luxe-fashion.jpg",
        challenge: "An established fashion brand needed a modern e-commerce platform to compete with international fast-fashion giants.",
        solution: "Built a custom Shopify Plus store with immersive product pages, AR try-on features, and a lightning-fast checkout experience.",
        results: { metric1: "+180% online sales", metric2: "3.2s → 0.8s load time", metric3: "+65% mobile conversions" },
        technologies: ["Shopify Plus", "React", "Node.js", "Stripe"],
        testimonial: { quote: "AAA transformed our online presence completely. Sales doubled in the first quarter.", author: "Sarah K.", role: "CEO, Luxe Fashion Co." },
    },
    {
        id: "fintech-mobile-app",
        title: "FinPay Mobile Banking App",
        client: "FinPay Technologies",
        category: "mobile-app",
        industry: "Financial Technology",
        thumbnail: "/portfolio/finpay-app.jpg",
        challenge: "A fintech startup needed a secure, intuitive mobile banking app for both iOS and Android within a tight timeline.",
        solution: "Delivered a cross-platform React Native app with biometric auth, real-time transactions, and seamless API integration with their banking core.",
        results: { metric1: "50K+ downloads in 3 months", metric2: "4.8★ App Store rating", metric3: "99.9% uptime" },
        technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Plaid"],
        testimonial: { quote: "From concept to App Store in 12 weeks. Incredibly professional team.", author: "Ahmed R.", role: "CTO, FinPay" },
    },
    {
        id: "saas-dashboard",
        title: "CloudMetrics SaaS Dashboard",
        client: "CloudMetrics Inc.",
        category: "web-app",
        industry: "SaaS / Analytics",
        thumbnail: "/portfolio/cloudmetrics.jpg",
        challenge: "An analytics company needed a real-time dashboard platform that could handle millions of data points with sub-second response times.",
        solution: "Engineered a Next.js web application with real-time WebSocket connections, interactive charts, and a robust multi-tenant architecture.",
        results: { metric1: "2M+ data points/second", metric2: "200ms avg response time", metric3: "500+ enterprise users" },
        technologies: ["Next.js", "React", "D3.js", "Node.js", "Redis", "PostgreSQL"],
        testimonial: { quote: "They built something our team couldn't in 6 months — in just 10 weeks.", author: "Michael T.", role: "VP Engineering, CloudMetrics" },
    },
    {
        id: "organic-food-brand",
        title: "GreenLeaf Brand Launch",
        client: "GreenLeaf Organics",
        category: "marketing",
        industry: "Food & Beverage",
        thumbnail: "/portfolio/greenleaf.jpg",
        challenge: "A new organic food brand needed a complete digital launch strategy to build awareness and drive online sales from zero.",
        solution: "Full-service launch: brand identity, e-commerce website, performance marketing campaigns, and social media content strategy.",
        results: { metric1: "1M+ reach in 60 days", metric2: "8.5x ROAS", metric3: "$120K revenue in first quarter" },
        technologies: ["Google Ads", "Meta Ads", "Shopify", "Mailchimp"],
        testimonial: { quote: "They didn't just market our products — they built our entire brand from scratch.", author: "Fatima A.", role: "Founder, GreenLeaf" },
    },
    {
        id: "real-estate-platform",
        title: "PropHub Real Estate Platform",
        client: "PropHub International",
        category: "web-app",
        industry: "Real Estate",
        thumbnail: "/portfolio/prophub.jpg",
        challenge: "A real estate company needed a property listing platform with map integration, virtual tours, and lead management.",
        solution: "Built a comprehensive Next.js platform with interactive maps, 3D virtual tours, CRM integration, and automated lead nurturing.",
        results: { metric1: "+250% qualified leads", metric2: "10K+ property listings", metric3: "40% conversion rate increase" },
        technologies: ["Next.js", "Mapbox", "Supabase", "Three.js", "Twilio"],
    },
];

// ─── Testimonials ──────────────────────────────────────────
export const testimonials = [
    {
        quote: "AAA Digital Media took our brand from local to international in under a year. Their strategic approach and execution quality is world-class.",
        author: "James Morrison",
        role: "CEO",
        company: "TechVentures Global",
    },
    {
        quote: "The mobile app they built exceeded every expectation. Our user engagement metrics have tripled since launch.",
        author: "Priya Sharma",
        role: "Product Director",
        company: "FinPay Technologies",
    },
    {
        quote: "Working with AAA feels like having an in-house team, but with international-level expertise. True partners in every sense.",
        author: "David Chen",
        role: "Marketing VP",
        company: "CloudMetrics Inc.",
    },
    {
        quote: "From SEO strategy to content creation — they handle everything with precision. Our organic traffic grew 400% in 8 months.",
        author: "Aisha Khan",
        role: "Founder",
        company: "StyleBox Pakistan",
    },
];

// ─── Why Choose Us ─────────────────────────────────────────
export const differentiators = [
    {
        title: "Data-Driven Results",
        description: "Every decision backed by analytics. Every campaign optimized for ROI. No guesswork — only measurable outcomes.",
        icon: "BarChart3",
    },
    {
        title: "International Standards",
        description: "Global-quality deliverables with competitive pricing. We serve clients across 15+ countries with consistent excellence.",
        icon: "Globe",
    },
    {
        title: "Full-Service Solutions",
        description: "Marketing, development, design, and content — all under one roof. No juggling multiple vendors.",
        icon: "Layers",
    },
    {
        title: "Dedicated Support",
        description: "A dedicated account manager, transparent communication, and 24/7 availability across time zones.",
        icon: "Headphones",
    },
];

// ─── About / Values ────────────────────────────────────────
export const values = [
    { title: "Excellence", description: "We deliver nothing less than world-class quality in everything we create.", icon: "Award" },
    { title: "Innovation", description: "We stay ahead of trends, technologies, and strategies to give our clients an unfair advantage.", icon: "Lightbulb" },
    { title: "Transparency", description: "Honest communication, clear reporting, and no hidden fees. Ever.", icon: "Eye" },
    { title: "Partnership", description: "We don't just work for our clients — we grow with them. Long-term success is our metric.", icon: "Handshake" },
    { title: "Global Mindset", description: "Local roots in Karachi, global perspective in everything we do.", icon: "Globe" },
    { title: "Continuous Learning", description: "Our team constantly upskills to master emerging platforms, tools, and strategies.", icon: "BookOpen" },
];

// ─── Portfolio Filter Categories ───────────────────────────
export const portfolioCategories = [
    { id: "all", label: "All Work" },
    { id: "web-development", label: "Web Design" },
    { id: "mobile-app", label: "Mobile Apps" },
    { id: "web-app", label: "Web Apps" },
    { id: "marketing", label: "Marketing" },
];

// ─── FAQ (General) ─────────────────────────────────────────
export const generalFaqs = [
    { question: "What makes AAA Digital Media different from other agencies?", answer: "We combine international-level quality with the dedication of a boutique agency. Our team brings global experience from serving clients in 15+ countries, with a proven track record of delivering measurable results." },
    { question: "Do you work with international clients?", answer: "Absolutely! While we're based in Karachi, Pakistan, we serve clients worldwide. We work across multiple time zones and use async communication tools to ensure seamless collaboration regardless of location." },
    { question: "How do you handle project communication?", answer: "We use Slack, email, and video calls for regular communication. Every project includes a dedicated account manager, weekly status updates, and shared project dashboards for full transparency." },
    { question: "What is your pricing model?", answer: "We offer both project-based and retainer pricing depending on the service. We'll provide a detailed proposal after understanding your requirements during our free consultation call." },
    { question: "Can you work with our existing team?", answer: "Yes! We often augment in-house teams or collaborate with other agencies. We're flexible and adapt to whatever working model suits your needs best." },
    { question: "What industries do you specialize in?", answer: "We work across industries including e-commerce, fintech, SaaS, real estate, healthcare, education, food & beverage, and fashion. Our diverse experience allows us to bring cross-industry best practices to every project." },
];
