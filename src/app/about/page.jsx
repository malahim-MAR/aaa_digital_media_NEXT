import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-0 overflow-x-hidden pt-24">
            <About />
            <Stats />
            <CTA />
            <Footer />
        </div>
    );
}
