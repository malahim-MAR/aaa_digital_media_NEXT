import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";

export const metadata = {
    title: "Our Services | AAA Digital Media",
    description: "Discover our range of services including visual content creation, website development, mobile apps, and performance marketing.",
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col gap-0 overflow-x-hidden pt-24">
            <Services />
            <CTA />
        </div>
    );
}
