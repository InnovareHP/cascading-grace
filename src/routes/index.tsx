import AboutHighlights from "@/components/LandingPage/AboutUsSection/AboutHighlights";
import AboutUsSection from "@/components/LandingPage/AboutUsSection/AboutUsSection";
import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <AboutHighlights />
    </>
  );
}
