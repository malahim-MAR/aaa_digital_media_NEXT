import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import Stats from "@/components/sections/Stats";
import LogoWall from "@/components/ui/LogoWall";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services"; // Acts as Skills/Capabilities
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      <Hero />
      <Marquee items={["Visual Content", "Motion Graphics", "Web Development", "React Native", "Performance Marketing", "Meta Ads", "Google Ads", "Product Photography", "Brand Strategy", "UI/UX Design", "Shopify", "Next.js"]} />
      <Stats />
      <LogoWall />
      <Work />
      <Services />
      <Process />
      <About />
    </div>
  );
}
