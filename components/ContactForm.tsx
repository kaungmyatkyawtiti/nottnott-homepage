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
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import InteractiveBtn from "./animations/InteractiveBtn";

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

const defaultValues = {
  name: '',
  email: '',
  letter: '',
}

export default function ContactForm() {
  const [shakeTrigger, setShakeTrigger] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      const result = await sendEmail(data);
      console.log('Contact submit result', result);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.log("Contact submit error", error)
      toast.error("Something went wrong");
    } finally {
      reset(
        defaultValues,
        { keepErrors: true }
      );
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(
        onSubmit,
        () => { setShakeTrigger((prev) => prev + 1) }
      )}
      className="space-y-7"
    >
      <div className="contact-group">
        <label className={cn(
          "form-label",
          errors.name && "text-destructive"
        )}>
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

        <ErrorTooltip
          error={errors.name?.message}
          shakeTrigger={shakeTrigger}
        />
      </div>

      <div className="contact-group">
        <label className={cn(
          "form-label",
          errors.email && "text-destructive"
        )}>
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

        <ErrorTooltip
          error={errors.email?.message}
          shakeTrigger={shakeTrigger}
        />
      </div>

      <div className="contact-group">
        <label className={cn(
          "form-label",
          errors.letter && "text-destructive"
        )}>
          <RiMessageLine size={18} />
          Message
        </label>
        <textarea
          {...register("letter")}
          rows={5}
          placeholder="Your message*"
          className={cn(
            "form-input resize-none mb-0",
            errors.letter && "error"
          )}
        />

        <ErrorTooltip
          error={errors.letter?.message}
          shakeTrigger={shakeTrigger}
        />
      </div>

      <InteractiveBtn
        type="submit"
        form="contact-form"
      >
        Send message
        <RiSendPlane2Fill size={20} />
      </InteractiveBtn>
    </form>
  )
}

interface ErrorTooltipProps {
  error?: string;
  shakeTrigger: number;
}

function ErrorTooltip({
  error,
  shakeTrigger
}: ErrorTooltipProps) {
  return (
    <AnimatePresence
      initial={false}
      mode="popLayout"
    >
      {error && (
        <motion.span
          key={shakeTrigger}
          className="error-tooltip"
          initial={{ opacity: 0, y: -4 }}
          animate={{
            opacity: 1,
            x: [0, -4, 4, -3, 3, -2, 2, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
        >
          {error}
        </motion.span>)}
    </AnimatePresence>
  );
}
