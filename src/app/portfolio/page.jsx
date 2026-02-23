import Work from "@/components/sections/Work";
import CTA from "@/components/sections/CTA";

export const metadata = {
    title: "Portfolio | AAA Digital Media",
    description: "Explore our selected works in visual content, web development, and performance marketing.",
};

export default function PortfolioPage() {
    return (
        <div className="flex flex-col gap-0 overflow-x-hidden pt-24">
            <Work />
            <CTA />
        </div>
    );
}
