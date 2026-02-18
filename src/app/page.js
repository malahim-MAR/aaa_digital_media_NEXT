import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services"; // Acts as Skills/Capabilities
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer"; // Acts as Contact/Footer

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      <Hero />
      <Work />
      <Services />
      <About />
      <Footer />
    </div>
  );
}
