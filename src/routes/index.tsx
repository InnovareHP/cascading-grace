import AboutHighlights from "@/components/LandingPage/AboutUsSection/AboutHighlights";
import AboutUsSection from "@/components/LandingPage/AboutUsSection/AboutUsSection";
import ContactUsSection from "@/components/LandingPage/ContactUsSection/ContactUsSection";
import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import ServicesSection from "@/components/LandingPage/ServicesSection/ServicesSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <AboutHighlights />
      <ContactUsSection />
    </>
  );
}
