import { Resend } from "resend";

export const ResendService = new Resend(process.env.RESEND_API_KEY);
