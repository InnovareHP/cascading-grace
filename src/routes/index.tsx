import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <>
      <HeroSection />
    </>
  );
}
