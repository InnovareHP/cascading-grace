import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { CreateCareerEmail } from "@/services/career/career";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const POSITIONS = [
  "Caregiver",
  "Direct Support Professional",
  "Registered Nurse / LPN",
  "Housekeeping & Meal Support",
  "Other / General Application",
];

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email"),
  phone: z.string().min(7, "Phone number is required"),
  position: z.string().min(1, "Please select a position"),
  message: z.string().min(5, "Tell us a bit about your experience"),
});

const CareersForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await CreateCareerEmail(
        values.name,
        values.email,
        values.phone,
        values.position,
        values.message
      );

      form.reset();
      toast.success("Application sent successfully");
    } catch (error) {
      toast.error("Failed to send application");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Full Name</FormLabel>
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

        <div className="grid sm:grid-cols-2 gap-6">
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
        </div>

        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Position of Interest</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="rounded-xl !h-12 w-full text-black">
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {POSITIONS.map((position) => (
                    <SelectItem key={position} value={position}>
                      {position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                Experience & Availability
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="rounded-xl min-h-[150px] text-black"
                  placeholder="Tell us about your experience, certifications, and availability"
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
          {form.formState.isSubmitting ? <Spinner /> : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
};

export default CareersForm;
