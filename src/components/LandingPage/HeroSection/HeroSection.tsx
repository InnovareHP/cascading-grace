import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 opacity-90 animate-pulse-slow"
        style={{ backgroundImage: "url('/assets/image/hero-section.jpg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/20" />

      <div className="relative z-10 max-w-7xl mx-[5%] lg:mx-auto px-6 py-24 text-white flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl space-y-2">
            <span className="block">Welcome to</span>
            <span className="block font-handwriting text-[#4e9e45] text-6xl md:text-8xl">
              Cascading Grace
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl leading-relaxed">
            Cascading Grace is a warm and compassionate senior living community
            dedicated to helping families find a place that truly feels like
            home.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-6 flex flex-wrap gap-4"
        >
          <Button
            size="lg"
            className="rounded-2xl px-10 py-6 text-xl font-semibold text-white bg-[#4e9e45]"
            asChild
          >
            <a href="#contact-us">Schedule a Tour</a>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
};

export default HeroSection;
