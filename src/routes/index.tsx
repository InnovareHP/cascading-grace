import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import ServicesSection from "@/components/LandingPage/ServicesSection/ServicesSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
    </>
  );
}
