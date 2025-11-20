const AboutUsSection = () => {
  return (
    <section className="py-28" id="about-us">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cascading-deep-navy ">
            ABOUT US
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Cascading Grace is a faith-guided Adult Foster Care home devoted to
            serving older adults and individuals with developmental disabilities
            with compassion, dignity, and genuine human connection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-28">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif italic mb-6 text-cascading-deep-navy ">
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
            <h2 className="text-3xl md:text-4xl font-serif italic mb-6 text-cascading-deep-navy ">
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

        <div className="bg-muted p-12 rounded-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cascading-deep-navy ">
              Why Cascading Grace?
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
              We are more than a care home—we are a place of belonging, a
              sanctuary of peace, and a community built on faith, dignity, and
              heartfelt service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif italic mb-6 text-cascading-deep-navy ">
                Compassion
              </h3>
              <p className="text-muted-foreground text-sm">
                Care that honors the whole person with gentleness and empathy.
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-serif italic mb-6 text-cascading-deep-navy ">
                Connection
              </h3>
              <p className="text-muted-foreground text-sm">
                Real relationships built through presence, listening, and
                community.
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-serif italic mb-6 text-cascading-deep-navy ">
                Commitment
              </h3>
              <p className="text-muted-foreground text-sm">
                Reliable, faith-guided support that residents and families can
                trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
