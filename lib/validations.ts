import z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(5, "Please enter your full name (minimum 5 characters)")
    .max(100, "Your name is super long"),

  email: z
    .email("Please enter valid email address"),

  letter: z
    .string()
    .min(5, "Please enter your message (minimum 5 characters)")
    .max(100, "A lot of text! Can you keep it under 100 characters"),
})

