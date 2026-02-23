"use client"

import InteractiveBtn from "@/components/animations/InteractiveBtn";
import { sendEmailAction } from "@/lib/actions/email-send-action";
import cn from "@/lib/utils";
import { contactSchema } from "@/lib/validations";
import { ContactFormInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RiLoader2Fill,
  RiSendPlane2Fill,
} from "@remixicon/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ContactForm() {
  const [shakeTrigger, setShakeTrigger] = useState(0);

  const defaultValues = {
    name: '',
    email: '',
    letter: '',
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onBlur"
  })

  const handleShake = () => setShakeTrigger(prev => prev + 1);

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    console.log("Send email submit data", data);

    try {
      const result = await sendEmailAction(data);
      console.log('Send email result', result);
      toast.success("Message sent successfully!");
      reset(defaultValues);
    } catch (err) {
      console.log("Send email error", err)
      const errMsg = err instanceof Error
        ? err.message
        : "Something went wrong";
      toast.error(errMsg);
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(
        onSubmit,
        handleShake,
      )}
      className="space-y-7"
    >
      <div className="contact-group">
        <input
          {...register("name")}
          placeholder="your name"
          className={cn(
            "contact-input",
            errors.name && "error"
          )}
        />

        <ErrorTooltip
          error={errors.name?.message}
          shakeTrigger={shakeTrigger}
        />
      </div>

      <div className="contact-group">
        <input
          {...register("email")}
          placeholder="your@email.com"
          className={cn(
            "contact-input",
            errors.email && "error"
          )}
        />

        <ErrorTooltip
          error={errors.email?.message}
          shakeTrigger={shakeTrigger}
        />
      </div>

      <div className="contact-group">
        <textarea
          {...register("letter")}
          placeholder="send something"
          className={cn(
            "contact-input resize-none",
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
        className="mt-10"
        disabled={isSubmitting}
      >
        {isSubmitting
          && <RiLoader2Fill className="animate-spin" />
        }
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
          className="error-tooltip scroll-smooth scrollbar-hidden"
          initial={{ opacity: 0, y: -4 }}
          exit={{ opacity: 0, y: 4 }}
          animate={{
            opacity: 1,
            x: [0, -4, 4, -3, 3, -2, 2, 0],
          }}
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
