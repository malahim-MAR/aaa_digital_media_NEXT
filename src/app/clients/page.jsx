import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function ClientsPage() {
    return (
        <div className="flex flex-col gap-0 overflow-x-hidden pt-24">
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
}
