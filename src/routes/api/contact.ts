import { ResendService } from "@/services/resend/resend";
import { createFileRoute } from "@tanstack/react-router";
import { createMiddleware, json } from "@tanstack/react-start";
import { z } from "zod";

const zodSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  message: z.string().min(1),
});

const testParentMiddleware = createMiddleware().server(async ({ next }) => {
  console.info("In: testParentMiddleware");
  const result = await next();
  result.response.headers.set("x-test-parent", "true");
  console.info("Out: testParentMiddleware");
  return result;
});

export const Route = createFileRoute("/api/contact")({
  server: {
    middleware: [testParentMiddleware],
    handlers: {
      POST: async ({ request }) => {
        const { name, email, phone, message } = await request.json();

        const validatedData = zodSchema.parse({ name, email, phone, message });

        if (!validatedData) {
          return json({ error: "Invalid data" }, { status: 400 });
        }

        const response = await ResendService.emails.send({
          from: "<contact@cascadinggrace.com>",
          to: [email],
          subject: "Contact Form Submission from Cascading Grace",
          html: `<p>Name: ${name}</p>
          <p>Phone: ${phone}</p>
          <p>Message: ${message}</p>`,
        });

        return json(response);
      },
    },
  },
});
