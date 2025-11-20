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
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We're here to help. Whether you have questions, feedback, or a project
          idea—reach out and we'll respond shortly.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <Card className="shadow-md rounded-2xl border-none">
            <CardContent className="p-6 flex items-start gap-4">
              <Mail className="w-8 h-8 text-gray-700" />
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Email</h4>
                <p className="text-gray-600">support@example.com</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl border-none">
            <CardContent className="p-6 flex items-start gap-4">
              <Phone className="w-8 h-8 text-gray-700" />
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl border-none">
            <CardContent className="p-6 flex items-start gap-4">
              <MapPin className="w-8 h-8 text-gray-700" />
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">
                  Location
                </h4>
                <p className="text-gray-600">
                  123 Elegant Ave, Suite 500, Manila
                </p>
              </div>
            </CardContent>
          </Card>
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
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-xl h-12"
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-xl h-12"
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
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-xl h-12"
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="rounded-xl min-h-[150px]"
                        placeholder="Your Message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-12 rounded-xl text-lg font-medium"
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
