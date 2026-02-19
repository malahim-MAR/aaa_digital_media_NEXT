import Work from "@/components/sections/Work";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
    return (
        <div className="flex flex-col gap-0 overflow-x-hidden pt-24">
            <Work />
            <CTA />
            <Footer />
        </div>
    );
}
