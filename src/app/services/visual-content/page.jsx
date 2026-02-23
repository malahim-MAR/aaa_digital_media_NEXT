import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import CTA from "@/components/sections/CTA";
import { Camera } from "lucide-react";

export const metadata = {
    title: "Visual Content | AAA Digital Media",
    description: "Scroll-stopping reels, branded videos, motion graphics, and social content that converts viewers into customers.",
};

export default function VisualContentPage() {
    return (
        <>
            <ServicePageTemplate
                icon={<Camera size={28} />}
                title="Visual"
                subtitle="Content"
                desc="Scroll-stopping reels, branded videos, motion graphics, and social content that converts viewers into customers. We craft visual stories that make your brand impossible to ignore."
                tags={["Reels & Short-form", "Brand Videos", "Motion Graphics", "Social Content"]}
                benefits={[
                    "Cinematic-quality production",
                    "Platform-optimised formats",
                    "Fast 3–5 day delivery",
                    "Unlimited revision rounds",
                ]}
                accentColor="#00A6FB"
            />
            <CTA />
        </>
    );
}
