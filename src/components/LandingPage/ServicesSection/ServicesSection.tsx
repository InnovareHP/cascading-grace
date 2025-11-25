import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import React from "react";

interface Service {
  title: string;
  image: string;
  content: string;
  bulletPoints?: string[];
}

interface ServiceCardProps {
  service: Service;
  gradientClass: string;
}

const services: Service[] = [
  {
    title: "24/7 Personalized Support",
    image: "/assets/image/services-images/service-1.jpg",
    content:
      "Our trained caregivers are present around the clock to offer attentive, respectful assistance that meets each resident's unique needs.",
    bulletPoints: [
      "Assistance with bathing, dressing, grooming, and toileting",
      "Medication management and administration",
      "Mobility support and safe transfers",
      "Gentle cueing, redirection, and routine guidance",
      "Emotional reassurance and companionship",
    ],
  },
  {
    title: "Daily Living & Household Services",
    image: "/assets/image/services-images/service-2.jpg",
    content:
      "We ensure residents feel at home, supported, and relaxed with comprehensive daily living support.",
    bulletPoints: [
      "Home-cooked meals and nutritious snacks tailored to dietary needs",
      "Housekeeping and room tidying",
      "Laundry services",
      "Warm, structured daily routines that create stability and peace",
    ],
  },
  {
    title: "Health & Wellness Support",
    image: "/assets/image/services-images/service-3.jpg",
    content:
      "We partner with families and healthcare providers to support overall well-being through coordinated care.",
    bulletPoints: [
      "Coordination with doctors, specialists, and therapists",
      "Appointment reminders and scheduling assistance",
      "Access to home health, therapy services, and visiting professionals",
      "Monitoring of health changes with compassionate communication to families",
    ],
  },
  {
    title: "Faith-Inspired Emotional & Social Enrichment",
    image: "/assets/image/services-images/service-4.jpg",
    content:
      "Because connection and spiritual grounding matter, we offer opportunities for meaningful engagement.",
    bulletPoints: [
      "Daily conversation and gentle companionship",
      "Devotional reflection for those who desire it",
      "Music, arts, crafts, and sensory activities",
      "Walks, garden time, or quiet outdoor relaxation",
      "Outings, celebrations, birthdays, and seasonal events that bring joy",
      "All activities are adapted to each resident's abilities and comfort level",
    ],
  },
  {
    title: "Safe, Comfortable Living Spaces",
    image: "/assets/image/services-images/service-5.jpg",
    content:
      "Cascading Grace provides a warm, peaceful home environment designed for comfort, accessibility, and ease of care.",
    bulletPoints: [
      "Bright, cozy private bedrooms",
      "Inviting common areas for conversation and relaxation",
      "A quiet, safe neighborhood setting",
      "Thoughtfully maintained interior and exterior spaces",
      "Wheelchair accessible entrances/exits",
      "Elevator from 1st to 2nd floor",
      "ADA accessible bathroom with heated floors",
      "Rehabilitation pool",
    ],
  },
  {
    title: "Specialized Support for Developmental Disabilities",
    image: "/assets/image/services-images/service-6.jpg",
    content:
      "Our team is trained to support residents with diverse developmental needs, offering personalized care and understanding.",
    bulletPoints: [
      "Gentle structure and routine",
      "Support with communication and expression",
      "Encouragement in daily skills",
      "Patience, understanding, and consistency",
      "Activities that promote stimulation, growth, and confidence",
    ],
  },
  {
    title: "Respite & Short-Term Stays",
    image: "/assets/image/services-images/service-7.jpg",
    content:
      "Cascading Grace may offer short-term stays based on availability. This service provides caregivers a much-needed break while ensuring their loved one receives safe, compassionate care.",
    bulletPoints: [],
  },
  {
    title: "Our Approach to Care",
    image: "/assets/image/services-images/service-8.jpg",
    content:
      "At Cascading Grace, our services are grounded in compassion, shaped by connection, and delivered with unwavering commitment. We provide individualized support for older adults and individuals with developmental disabilities in a peaceful, family-like environment where dignity, comfort, and belonging come first.",
    bulletPoints: [
      "Every aspect of our care is designed to nurture the whole person — body, mind, and spirit",
    ],
  },
];

const gradientColors = [
  "from-blue-500 via-blue-600 to-indigo-700",
  "from-emerald-500 via-teal-600 to-cyan-700",
  "from-rose-500 via-pink-600 to-red-700",
  "from-purple-500 via-violet-600 to-indigo-700",
  "from-amber-500 via-orange-600 to-yellow-700",
  "from-green-500 via-emerald-600 to-teal-700",
  "from-sky-500 via-blue-600 to-cyan-700",
  "from-slate-500 via-gray-600 to-zinc-700",
];

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  gradientClass,
}) => {
  const [imageError, setImageError] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const getSectionLabel = (title: string) => {
    switch (title) {
      case "24/7 Personalized Support":
        return "Support may include:";
      case "Daily Living & Household Services":
        return "We ensure residents feel at home with:";
      case "Health & Wellness Support":
        return "We partner with families through:";
      case "Faith-Inspired Emotional & Social Enrichment":
        return "We offer opportunities such as:";
      case "Safe, Comfortable Living Spaces":
        return "Residents enjoy:";
      case "Specialized Support for Developmental Disabilities":
        return "Our team offers:";
      default:
        return "Features:";
    }
  };

  return (
    <>
      {/* Service Card */}
      <div
        className="relative aspect-[4/3] sm:aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundImage: !imageError ? `url(${service.image})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Fallback gradient when image fails to load */}
          {imageError && (
            <div
              className={`absolute inset-0 bg-linear-to-br ${gradientClass}`}
            />
          )}

          {/* Hidden image to detect load errors */}
          {!imageError && (
            <img
              src={service.image}
              alt=""
              className="absolute opacity-0 pointer-events-none"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 z-10" />

        {/* Service Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
          <h3 className=" text-lg md:text-xl lg:text-2xl font-bold text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight text-white">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className="!left-6 !right-6 !top-[50%] !translate-y-[-50%] !translate-x-0 !w-auto !max-w-none sm:!left-6 sm:!right-6 md:!left-8 md:!right-8 lg:!left-[50%] lg:!right-auto lg:!translate-x-[-50%] lg:!max-w-3xl max-h-[95vh] sm:max-h-[90vh] p-0 border-2 border-[var(--cascading-medium-blue)] overflow-hidden shadow-2xl"
          showCloseButton={false}
        >
          <DialogHeader
            className="p-4 sm:p-6 pb-3 sm:pb-4 border-b-4 border-[var(--cascading-light-blue)] relative"
            style={{
              background: `linear-gradient(to right, var(--cascading-deep-navy), var(--cascading-medium-blue))`,
            }}
          >
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-cascading-white pr-10 sm:pr-12 leading-tight">
              {service.title}
            </DialogTitle>
            <DialogClose className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full bg-white/10 hover:bg-white/20 text-cascading-white p-1.5 sm:p-2 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cascading-light-blue focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer">
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>

          <ScrollArea className="max-h-[calc(95vh-100px)] sm:max-h-[calc(90vh-120px)] px-4 sm:px-6 py-3 sm:py-4 bg-white">
            <div className="pr-2 sm:pr-4">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg md:text-xl text-cascading-deep-navy leading-relaxed">
                  {service.content}
                </p>

                {service.bulletPoints && service.bulletPoints.length > 0 && (
                  <div className="mt-3 sm:mt-4">
                    <p className="font-semibold text-cascading-medium-blue mb-2 sm:mb-3 text-base sm:text-lg">
                      {getSectionLabel(service.title)}
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-base sm:text-lg md:text-xl text-cascading-deep-navy pl-1 sm:pl-2">
                      {service.bulletPoints.map((point, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-blue-900" id="services">
      <div className="max-w-7xl mx-[5%] lg:mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cascading-white ">
            Services
          </h2>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="col-span-full">
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-5 font-light">
                At Cascading Grace, our services are grounded in compassion,
                shaped by connection, and delivered with unwavering commitment.
                We provide individualized support for older adults and
                individuals with developmental disabilities in a peaceful,
                family-like environment where dignity, comfort, and belonging
                come first.
              </p>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-light">
                Every aspect of our care is designed to nurture the whole person
                — body, mind, and spirit.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              gradientClass={gradientColors[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
