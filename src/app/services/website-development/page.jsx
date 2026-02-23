import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import CTA from "@/components/sections/CTA";
import { Globe } from "lucide-react";

export const metadata = {
    title: "Website Development | AAA Digital Media",
    description: "High-converting Shopify stores and WordPress sites built for speed, SEO, and seamless user experience.",
};

export default function WebsiteDevelopmentPage() {
    return (
        <>
            <ServicePageTemplate
                icon={<Globe size={28} />}
                title="Website"
                subtitle="Development"
                desc="High-converting Shopify stores and WordPress sites built for speed, SEO, and seamless user experience. Every pixel is crafted to turn visitors into paying customers."
                tags={["Shopify", "WordPress", "Landing Pages", "SEO Optimised"]}
                benefits={[
                    "Mobile-first responsive design",
                    "Lightning-fast Core Web Vitals",
                    "Conversion-optimised layouts",
                    "Ongoing maintenance & support",
                ]}
                accentColor="#00A6FB"
            />
            <CTA />
        </>
    );
}
