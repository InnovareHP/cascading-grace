import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { CreateContactEmail } from "@/services/contact/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email"),
  phone: z.number().min(7, "Phone number is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function ContactUsSection() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: 0,
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await CreateContactEmail(
        values.name,
        values.email,
        values.phone,
        values.message
      );

      form.reset();
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <section
      className="w-full bg-blue-900 py-20 px-6 md:px-16 lg:px-32"
      id="contact-us"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold tracking-tight text-white mb-3">
          Schedule a Tour
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          We’d love to show you around. Contact us for a tour, inquiries, or
          more information.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          {/* 2-column visual cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Email */}

            <Card className="shadow-md rounded-2xl border-none hover:shadow-lg transition">
              <CardContent className="p-6 flex items-start gap-4">
                <User className="w-8 h-8 text-blue-800" />
                <div>
                  <h4 className="font-semibold text-blue-800 text-lg">
                    Contact Person
                  </h4>
                  <p className="text-blue-800">Michelle Williams</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md rounded-2xl border-none hover:shadow-lg transition">
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="w-8 h-8 text-blue-800" />
                <div>
                  <h4 className="font-semibold text-blue-800 text-lg">Email</h4>
                  <a
                    href="mailto:info@yourcompany.com"
                    className="text-blue-800 underline"
                  >
                    smwcareservices@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="shadow-md rounded-2xl border-none hover:shadow-lg transition">
              <CardContent className="p-6 flex items-start gap-4">
                <Phone className="w-8 h-8 text-blue-800" />
                <div>
                  <h4 className="font-semibold text-blue-800 text-lg">Phone</h4>
                  <a
                    href="tel:+15551234567"
                    className="text-blue-800 underline"
                  >
                    574-276-8612
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md rounded-2xl border-none hover:shadow-lg transition">
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="w-8 h-8 text-blue-800" />
                <div>
                  <h4 className="font-semibold text-blue-800 text-lg">
                    Address
                  </h4>
                  <p className="text-blue-800">
                    5563 Cascade Road SE, Grand Rapids, MI 49546
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20 h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.9336049103854!2d-85.53353072386076!3d42.93752657114518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88185343853026ab%3A0x4c39044f9961a647!2sPax%20et%20Cura%20of%20Cascade!5e0!3m2!1sen!2sph!4v1763988166041!5m2!1sen!2sph"
              width="1000"
              height="450"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-100"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-xl h-12 text-black"
                        placeholder="Your Name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-xl h-12 text-black"
                        placeholder="Your Email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-xl h-12 text-black"
                        placeholder="Your Phone Number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="rounded-xl min-h-[150px] text-black"
                        placeholder="Your Message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-12 rounded-xl text-lg font-medium bg-[#4e9e45] text-white"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? <Spinner /> : "Send Message"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
