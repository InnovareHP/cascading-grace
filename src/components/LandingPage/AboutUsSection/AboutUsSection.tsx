const AboutUsSection = () => {
  return (
    <section id="about-us" className="relative min-h-screen">
      <div className="container py-28 max-w-6xl mx-[5%] lg:mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cascading-deep-navy ">
            About Us
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Cascading Grace is a faith-guided Adult Foster Care home devoted to
            serving older adults and individuals with developmental disabilities
            with compassion, dignity, and genuine human connection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-28">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#4e9e45] ">
              Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Rooted in a calling to care, we provide a peaceful,
              family-centered environment where every person is honored,
              supported, and deeply valued.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that every resident deserves to experience comfort,
              purpose, and belonging. Our approach blends high-quality care with
              heartfelt presence—creating a home where grace is lived out in
              everyday moments like shared meals, quiet conversations, laughter,
              gentle encouragement, and companionship.
            </p>
          </div>

          <div>
            <img
              src="https://adagraceafc.com/_assets/media/f5cc2ee74d7ddaf5dae7bbd51815f6f5.png"
              alt="Residents and caregivers"
              className="rounded-xl object-cover w-full h-[450px]"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-28">
          <img
            src="https://adagraceafc.com/_assets/media/5d678b6b5632e9a07c1b4d2b7ab8fbd0.jpg"
            alt="Cascading Grace Home"
            className="rounded-xl object-cover w-full h-[450px] order-2 lg:order-1"
          />

          <div className="order-1 lg:order-2 flex flex-col space-y-6">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#4e9e45] ">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cascading Grace was founded on the belief that great care begins
              with great love. Inspired by a desire to offer a small, nurturing,
              faith-based home for those who need meaningful support, we opened
              our doors to create a place where life slows down, relationships
              deepen, and each resident is welcomed like family.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our name reflects our philosophy: grace that flows, compassion
              that uplifts, and care that grows stronger through connection.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The home itself—once known as{" "}
              <span className="italic font-medium">Pax et Cura</span>
              ("Peace and Care")—carries forward this legacy of serenity and
              warmth, now infused with our pillars of Compassion, Connection,
              and Commitment.
            </p>
          </div>
        </div>
      </div>

      {/* new */}
      <div className="bg-muted p-12 mx-[5%] lg:mx-0 rounded-xl relative overflow-hidden  sm:h-[70vh] h-auto flex flex-col justify-center items-center ">
        {/* Shape Divider */}
        <div className="custom-shape-divider-top-1763973809 sm:block hidden">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cascading-deep-navy tracking-tight">
            Why Cascading Grace?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-lg">
            Because care should feel human. At Cascading Grace, we offer more
            than assistance — we offer belonging, connection, and a home where
            each resident is lovingly supported with purpose and dignity.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* Card 1 */}
          <div className="group relative bg-white p-10 rounded-2xl shadow-md border border-slate-200 hover:border-cascading-light-blue/40 transition-all duration-300 hover:shadow-2xl">
            <div className="absolute inset-0 bg-cascading-light-blue/10 opacity-0 blur-xl rounded-2xl group-hover:opacity-100 transition duration-500"></div>

            <h3 className="relative text-3xl md:text-4xl mb-4 text-[#4e9e45]">
              Compassion
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed relative">
              Gentle, wholehearted care that honors identity, emotion, and the
              sacred worth of every individual.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white p-10 rounded-2xl shadow-md border border-slate-200 hover:border-cascading-light-blue/40 transition-all duration-300 hover:shadow-2xl">
            <div className="absolute inset-0 bg-cascading-light-blue/10 opacity-0 blur-xl rounded-2xl group-hover:opacity-100 transition duration-500"></div>

            <h3 className="relative text-3xl md:text-4xl mb-4 text-[#4e9e45]">
              Connection
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed relative">
              A family-like environment built through presence, listening,
              warmth, and truly shared life.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white p-10 rounded-2xl shadow-md border border-slate-200 hover:border-cascading-light-blue/40 transition-all duration-300 hover:shadow-2xl">
            <div className="absolute inset-0 bg-cascading-light-blue/10 opacity-0 blur-xl rounded-2xl group-hover:opacity-100 transition duration-500"></div>

            <h3 className="relative text-3xl md:text-4xl mb-4 text-[#4e9e45]">
              Commitment
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed relative">
              Faith-led dedication to safety, stability, and unwavering support
              — every single day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
