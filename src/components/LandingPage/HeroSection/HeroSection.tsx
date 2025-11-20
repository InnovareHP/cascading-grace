const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/image/hero-section.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/60 from-black/70 via-black/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:flex md:items-center h-screen">
        <div className="max-w-xl text-white">
          <p className="tracking-wide text-sm uppercase opacity-75 mb-2">
            Vibrant Senior Living
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Let Us Be Your Trusted Guide
          </h1>

          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            We’re here for you along your senior living journey. Find a
            community and ask about our seasonal pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
