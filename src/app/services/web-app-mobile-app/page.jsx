import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import CTA from "@/components/sections/CTA";
import { Smartphone } from "lucide-react";

export const metadata = {
    title: "Web App & Mobile App | AAA Digital Media",
    description: "Custom web applications and cross-platform mobile apps that solve real problems and scale with your business.",
};

export default function WebAppMobileAppPage() {
    return (
        <>
            <ServicePageTemplate
                icon={<Smartphone size={28} />}
                title="Web App &"
                subtitle="Mobile App"
                desc="Custom web applications and cross-platform mobile apps that solve real problems and scale with your business. From idea to launch — we build products that users love."
                tags={["React / Next.js", "React Native", "UI/UX Design", "API Integration"]}
                benefits={[
                    "Scalable, clean architecture",
                    "Cross-platform compatibility",
                    "Intuitive UX design process",
                    "Post-launch support & updates",
                ]}
                accentColor="#3B82F6"
            />
            <CTA />
        </>
    );
}
