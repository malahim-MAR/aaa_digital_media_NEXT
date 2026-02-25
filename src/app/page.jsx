import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import LogoWall from "@/components/ui/LogoWall";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}>
      <Hero />
      <Stats />
      <LogoWall />
      <Work />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
