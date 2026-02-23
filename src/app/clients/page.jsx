import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export const metadata = {
    title: "Our Clients | AAA Digital Media",
    description: "See what our clients say about us. We pride ourselves on delivering exceptional results and building long-lasting partnerships.",
};

export default function ClientsPage() {
    return (
        <div className="flex flex-col gap-0 overflow-x-hidden pt-24">
            <Testimonials />
            <CTA />
        </div>
    );
}
