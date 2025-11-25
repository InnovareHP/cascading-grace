import ContactSubmissionEmail from "@/components/Email/ContactEmail";
import { ResendService } from "@/services/resend/resend";
import { createFileRoute } from "@tanstack/react-router";
import { createMiddleware, json } from "@tanstack/react-start";
import React from "react";
import { z } from "zod";

const zodSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  phone: z.number().min(1),
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
          from: "contact@cascadinggrace.com",
          to: ["swcareservices@gmail.com"],
          subject: "Contact Form Submission from Cascading Grace",
          react: React.createElement(ContactSubmissionEmail, {
            name,
            email,
            phone,
            message,
          }),
        });

        return json(response);
      },
    },
  },
});
