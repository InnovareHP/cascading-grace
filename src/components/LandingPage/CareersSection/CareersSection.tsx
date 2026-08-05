import { motion } from "framer-motion";
import { HeartHandshake, Mail, Users } from "lucide-react";
import CareersForm from "./CareersForm";

const CAREERS_EMAIL = "smwcareservices@gmail.com";

const CareersSection = () => {
  const highlights = [
    {
      icon: HeartHandshake,
      title: "Purpose-Driven Work",
      text: "Serve residents with dignity in a faith-guided, heart-centered home.",
    },
    {
      icon: Users,
      title: "Small, Close-Knit Team",
      text: "With only 6 residents, every caregiver builds real relationships.",
    },
    {
      icon: Mail,
      title: "Simple Application",
      text: "Attach your resume to the form below — we review every application personally.",
    },
  ];

  return (
    <section
      className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
      id="careers"
    >
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>

      <div className="max-w-7xl mx-[5%] lg:mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-5 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight text-center sm:text-start">
            Join Our Team,
            <br />
            <span className="text-[#4e9e45]">BUILD A CAREER THAT MATTERS</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
            We are always looking for compassionate caregivers who want to make
            a difference in the lives of our residents. Reach out to learn about
            current openings at Cascading Grace.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {highlights.map(({ icon: Icon, title, text }, i) => (
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
              <div className="relative flex flex-col gap-4 bg-white shadow-lg shadow-slate-200/50 rounded-3xl p-8 border border-slate-200/60 hover:border-blue-200 transition-all duration-300 h-full">
                <Icon className="w-8 h-8 text-[#4e9e45]" />
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-slate-700 leading-relaxed text-base font-medium">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 bg-white shadow-lg shadow-slate-200/50 rounded-3xl border border-slate-200/60 p-8 md:p-10 space-y-8"
        >
          <div className="text-center space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Apply Now
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you as soon
              as possible.
            </p>
          </div>

          <CareersForm />

          <p className="text-center text-gray-600">
            Prefer to email us directly?{" "}
            <a
              href={`mailto:${CAREERS_EMAIL}?subject=Career%20Inquiry%20-%20Cascading%20Grace`}
              className="font-semibold text-[#4e9e45] underline inline-flex items-center gap-1"
            >
              <Mail className="w-4 h-4" />
              {CAREERS_EMAIL}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
