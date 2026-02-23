import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import CTA from "@/components/sections/CTA";
import { Camera } from "lucide-react";

export const metadata = {
    title: "Photography | AAA Digital Media",
    description: "Professional product, brand, and lifestyle photography that elevates your visual identity across every channel.",
};

export default function PhotographyPage() {
    return (
        <>
            <ServicePageTemplate
                icon={<Camera size={28} />}
                title="Brand"
                subtitle="Photography"
                desc="Professional product, brand, and lifestyle photography that elevates your visual identity across every channel. We create imagery that stops the scroll and communicates your brand's premium value."
                tags={["Product Photography", "Brand Shoots", "Lifestyle", "Post-production"]}
                benefits={[
                    "Studio & on-location shoots",
                    "Expert retouching & editing",
                    "Full commercial licensing",
                    "Same-week delivery",
                ]}
                accentColor="#D4AF37"
            />
            <CTA />
        </>
    );
}
