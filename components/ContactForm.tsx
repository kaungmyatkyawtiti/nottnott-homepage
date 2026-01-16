"use client"

import { sendEmail } from "@/lib/actions/email";
import cn from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RiUser3Line,
  RiMailLine,
  RiSendPlane2Fill,
  RiMessageLine,
} from "@remixicon/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const contactSchema = z.object({
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

export type ContactFormInputs = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      letter: '',
    },
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      await sendEmail(data);
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      reset(
        { name: "", email: "", letter: "" },
        { keepErrors: true }
      );
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 my-10"
    >
      <div>
        <label className={cn("form-label", errors.name && "text-destructive")}>
          <RiUser3Line size={18} />
          Name
        </label>
        <input
          {...register("name")}
          placeholder="Your name*"
          className={cn(
            "form-input",
            errors.name && "error"
          )}
        />
        <p className="form-error">
          {errors.name?.message}
        </p>
      </div>

      <div>
        <label className={cn("form-label", errors.email && "text-destructive")}>
          <RiMailLine size={18} />
          Email
        </label>
        <input
          {...register("email")}
          placeholder="johndoe@example.com"
          className={cn(
            "form-input",
            errors.email && "error"
          )}
        />
        <p className="form-error">
          {errors.email?.message}
        </p>
      </div>

      <div>
        <label className={cn("form-label", errors.letter && "text-destructive")}>
          <RiMessageLine size={18} />
          Message
        </label>
        <textarea
          {...register("letter")}
          rows={5}
          placeholder="Your message*"
          className={cn(
            "form-input resize-none",
            errors.letter && "error"
          )}
        />
        <p className="form-error">
          {errors.letter?.message}
        </p>
      </div>

      <button
        className="btn-primary"
        type="submit"
        form="contact-form"
      >
        Send message
        <RiSendPlane2Fill size={20} />
      </button>
    </form>
  )
}
