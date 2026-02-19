import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import { TrendingUp } from "lucide-react";

export const metadata = {
    title: "Performance Marketing | AAA Digital Media",
    description: "Data-driven ad campaigns on Meta, Google, and TikTok engineered to maximise ROI and scale your revenue.",
};

export default function PerformanceMarketingPage() {
    return (
        <>
            <ServicePageTemplate
                icon={<TrendingUp size={28} />}
                title="Performance"
                subtitle="Marketing"
                desc="Data-driven ad campaigns on Meta, Google, and TikTok engineered to maximise ROI and scale your revenue. We don't run ads — we build growth systems."
                tags={["Meta Ads", "Google Ads", "TikTok Ads", "Analytics & Reporting"]}
                benefits={[
                    "Full-funnel campaign strategy",
                    "ROAS-focused optimisation",
                    "Weekly performance reports",
                    "A/B testing at scale",
                ]}
                accentColor="#0077B6"
            />
            <CTA />
            <Footer />
        </>
    );
}
