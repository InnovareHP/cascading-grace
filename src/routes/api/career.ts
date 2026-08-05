import CareerSubmissionEmail from "@/components/Email/CareerEmail";
import { ResendService } from "@/services/resend/resend";
import { createFileRoute } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";
import React from "react";
import { z } from "zod";

const zodSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  phone: z.string().min(7),
  position: z.string().min(1),
  message: z.string().min(1),
});

export const Route = createFileRoute("/api/career")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json();

        const parsed = zodSchema.safeParse(body);

        if (!parsed.success) {
          return json({ error: "Invalid data" }, { status: 400 });
        }

        const { name, email, phone, position, message } = parsed.data;

        const response = await ResendService.emails.send({
          from: "contact@cascadinggrace.com",
          to: ["smwcareservices@gmail.com"],
          subject: `Career Application - ${position}`,
          react: React.createElement(CareerSubmissionEmail, {
            name,
            email,
            phone,
            position,
            message,
          }),
        });

        return json(response);
      },
    },
  },
});
