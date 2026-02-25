import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import LogoWall from "@/components/ui/LogoWall";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      <Hero />
      <Stats />
      <LogoWall />
      <Work />
      <Services />
      <Process />
      <About />
    </div>
  );
}
