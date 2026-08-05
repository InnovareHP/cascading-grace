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
import { useState } from "react";
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

// Keep in sync with MAX_RESUME_SIZE in routes/api/career.ts
const MAX_RESUME_SIZE = 4 * 1024 * 1024;

const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email"),
  phone: z.string().min(7, "Phone number is required"),
  position: z.string().min(1, "Please select a position"),
  message: z.string().min(5, "Tell us a bit about your experience"),
  resume: z
    .custom<File | undefined>()
    .optional()
    .refine(
      (file) => !file || file.size <= MAX_RESUME_SIZE,
      "Resume must be 4MB or smaller"
    )
    .refine(
      (file) => !file || ACCEPTED_RESUME_TYPES.includes(file.type),
      "Resume must be a PDF or Word document"
    ),
});

const fileToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });

const CareersForm = () => {
  // Bumped on reset so the native file input clears its selection
  const [fileInputKey, setFileInputKey] = useState(0);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      resume: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const resume = values.resume
        ? {
            filename: values.resume.name,
            content: await fileToBase64(values.resume),
          }
        : undefined;

      await CreateCareerEmail({
        name: values.name,
        email: values.email,
        phone: values.phone,
        position: values.position,
        message: values.message,
        resume,
      });

      form.reset();
      setFileInputKey((key) => key + 1);
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

        <FormField
          control={form.control}
          name="resume"
          render={({ field: { onChange, ref } }) => (
            <FormItem>
              <FormLabel className="text-black">
                Resume{" "}
                <span className="text-gray-500 font-normal">
                  (PDF or Word, max 4MB)
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  key={fileInputKey}
                  ref={ref}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="rounded-xl h-12 py-3 text-black file:text-black file:mr-4"
                  onChange={(event) =>
                    onChange(event.target.files?.[0] ?? undefined)
                  }
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
