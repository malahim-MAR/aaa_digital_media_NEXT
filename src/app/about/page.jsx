import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

export const metadata = {
    title: "About Us | AAA Digital Media",
    description: "Learn about AAA Digital Media, a full-service digital agency delivering world-class visuals, web dev, and performance marketing.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-0 overflow-x-hidden pt-24">
            <About />
            <Stats />
            <CTA />
        </div>
    );
}
