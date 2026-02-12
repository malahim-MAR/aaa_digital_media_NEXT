import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import GlobalImpact from "@/components/sections/GlobalImpact";
import FeaturedWork from "@/components/sections/FeaturedWork";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <GlobalImpact />
        <FeaturedWork />
        <WhyChooseUs />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
