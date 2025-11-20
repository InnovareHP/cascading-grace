import { CheckCircle } from "lucide-react";

const AboutHighlights = () => {
  const whoWeServe = [
    "Older adults seeking a peaceful, supportive home environment",
    "Individuals with developmental disabilities who benefit from personalized, respectful care",
    "Residents who thrive with structure, companionship, and a deeply relational approach",
  ];

  const whyChooseUs = [
    "Small resident capacity (6) for highly personal attention",
    "Faith-guided, heart-centered care philosophy",
    "Relationship-focused environment designed for connection",
    "High emotional and physical support rooted in compassion",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6 space-y-24">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">Who We Serve</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Cascading Grace provides a nurturing, relationship-centered home
              environment, serving individuals with care, dignity, and
              personalized attention.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {whoWeServe.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">
              Why Families Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Families trust Cascading Grace because we offer more than care —
              we provide belonging, stability, and deep relational support, all
              within an intimate 6-resident home setting.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHighlights;
