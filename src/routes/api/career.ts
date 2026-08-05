import CareerSubmissionEmail from "@/components/Email/CareerEmail";
import { ResendService } from "@/services/resend/resend";
import { createFileRoute } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";
import React from "react";
import { z } from "zod";

// Keep in sync with MAX_RESUME_SIZE in CareersForm.tsx
const MAX_RESUME_SIZE = 4 * 1024 * 1024;

const zodSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  phone: z.string().min(7),
  position: z.string().min(1),
  message: z.string().min(1),
  resume: z
    .object({
      filename: z.string().min(1),
      // base64 encoded file, ~4/3 the size of the raw bytes
      content: z.string().min(1).max(Math.ceil(MAX_RESUME_SIZE * 1.4)),
    })
    .optional(),
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

        const { name, email, phone, position, message, resume } = parsed.data;

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
            resumeName: resume?.filename,
          }),
          attachments: resume
            ? [{ filename: resume.filename, content: resume.content }]
            : undefined,
        });

        return json(response);
      },
    },
  },
});
