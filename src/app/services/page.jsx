import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
    return (
        <div className="flex flex-col gap-0 overflow-x-hidden pt-24">
            <Services />
            <CTA />
            <Footer />
        </div>
    );
}
