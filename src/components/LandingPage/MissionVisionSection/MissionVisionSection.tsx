const MissionVisionSection = () => {
  return (
    <section
      className="py-21 px-[1.575rem] lg:py-20 lg:px-6 bg-blue-900"
      id="mission-vision"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-cascading-white flex items-center gap-4">
            <img
              src="/assets/image/leaves-icon.svg"
              alt="Leaves icon"
              className="w-10 h-10 md:w-12 md:h-12 shrink-0"
            />
            Mission, Vision & Values
          </h2>
          <div className="max-w-4xl">
            <p className="text-xl text-gray-300 leading-relaxed">
              Welcome to Cascading Grace, a place where compassion flows freely
              and care is grounded in faith. Here, every resident is embraced
              with dignity, respect, and love. Our home offers a peaceful
              setting filled with warmth, purpose, and a true sense of
              belonging, which is a reflection of grace in everyday living.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side - Image with Overlay */}
          <div className="relative w-full h-[500px] lg:h-[650px] rounded-lg overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('/assets/image/services-images/service-1.jpg')",
              }}
            >
              {/* Gradient Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div
                className="w-16 md:w-24 lg:w-32 h-1.5 mb-5 transition-all duration-300"
                style={{ backgroundColor: "#4E9E45" }}
              ></div>
              <p className="text-cascading-white text-3xl md:text-4xl lg:text-5xl font-serif leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Faith, compassion, and unwavering commitment.
              </p>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-10 lg:pt-4">
            {/* Mission Section */}
            <div className="space-y-5 pb-8 border-b border-gray-200">
              <h4 className="text-xl uppercase tracking-wider font-sans font-semibold text-cascading-white">
                OUR MISSION
              </h4>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our mission grows from a place of faith and deep compassion for
                those we serve. We provide tender, respectful care to a diverse
                population of older adults and those with developmental
                disabilities. Through connection, understanding, and unwavering
                commitment, we create a home where every resident feels
                supported and cherished for who they are.
              </p>
            </div>

            {/* Vision Section */}
            <div className="space-y-5">
              <h4 className="text-xl uppercase tracking-wider font-sans font-semibold text-cascading-white">
                OUR VISION
              </h4>
              <p className="text-xl text-gray-300 leading-relaxed">
                We envision a home where residents feel known, valued, and truly
                cared for. Guided by faith and anchored in Compassion,
                Connection, and Commitment, we strive to create a peaceful
                environment where dignity is honored, belonging is nurtured, and
                each day is filled with purpose, comfort, and grace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
