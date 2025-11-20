import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import MissionVisionSection from "@/components/LandingPage/MissionVisionSection/MissionVisionSection";
import ServicesSection from "@/components/LandingPage/ServicesSection/ServicesSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <>
      <HeroSection />
      <MissionVisionSection />
      <ServicesSection />
    </>
  );
}
