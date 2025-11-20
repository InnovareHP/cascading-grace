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
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 space-y-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-5 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Compassionate Care for
              <br />
              <span className="text-blue-600">THOSE WHO MATTER MOST</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Cascading Grace provides a nurturing, relationship-centered home
              environment, serving individuals with care, dignity, and
              personalized attention.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {whoWeServe.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-start gap-5 bg-white shadow-lg shadow-slate-200/50 rounded-3xl p-8 border border-slate-200/60 hover:border-blue-200 transition-all duration-300 h-full">
                  <div className="mt-1">
                    <CheckCircle
                      className="h-7 w-7 text-blue-600 shrink-0"
                      strokeWidth={2.5}
                    />
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base font-medium">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-5 w-full flex flex-col justify-end items-end">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight text-end">
              Built on Trust,
              <br />
              <span className="text-blue-600">ROOTED IN COMPASSION</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed text-end">
              Families trust Cascading Grace because we offer more than care —
              we provide belonging, stability, and deep relational support, all
              within an intimate 6-resident home setting.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-12">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-start gap-5 bg-white shadow-lg shadow-slate-200/50 rounded-3xl p-8 border border-slate-200/60 hover:border-purple-200 transition-all duration-300 h-full">
                  <div className="mt-1">
                    <CheckCircle
                      className="h-7 w-7 text-blue-600 shrink-0"
                      strokeWidth={2.5}
                    />
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base font-medium">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHighlights;
