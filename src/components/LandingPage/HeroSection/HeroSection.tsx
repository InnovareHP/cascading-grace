import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 opacity-90 animate-pulse-slow"
        style={{ backgroundImage: "url('/assets/image/hero-section.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-6"
        >
          <p className="tracking-widest text-sm uppercase text-gray-300">
            Vibrant Senior Living
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Let Us Be Your Trusted Guide
          </h1>

          <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
            We’re here for you along your senior living journey. Discover a
            community that feels like home—and learn about our seasonal
            offerings.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl"
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl px-8 py-6 text-lg font-semibold text-black border-black hover:bg-white/20"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  );
};

export default HeroSection;
