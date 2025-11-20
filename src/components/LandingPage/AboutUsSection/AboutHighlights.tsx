import { motion } from "framer-motion";
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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-6xl mx-auto px-6 space-y-24">
        {/* WHO WE SERVE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Who We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg mx-auto md:mx-0">
              Cascading Grace provides a nurturing, relationship-centered home
              environment, serving individuals with care, dignity, and
              personalized attention.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {whoWeServe.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white shadow-sm rounded-2xl p-6 border border-gray-100"
              >
                <CheckCircle className="h-7 w-7 text-primary shrink-0" />
                <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* WHY CHOOSE US */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Why Families Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg mx-auto md:mx-0">
              Families trust Cascading Grace because we offer more than care —
              we provide belonging, stability, and deep relational support, all
              within an intimate 6-resident home setting.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white shadow-sm rounded-2xl p-6 border border-gray-100"
              >
                <CheckCircle className="h-7 w-7 text-primary shrink-0" />
                <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHighlights;
