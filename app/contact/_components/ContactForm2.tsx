"use client"

import InteractiveBtn from "@/components/animations/InteractiveBtn";
import { sendEmailAction } from "@/lib/actions/email-send-action";
import cn from "@/lib/utils";
import { contactSchema } from "@/lib/validations";
import {
  RiLoader2Fill,
  RiSendPlane2Fill,
} from "@remixicon/react";
import { useForm } from "@tanstack/react-form";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [shakeTrigger, setShakeTrigger] = useState(0);

  const defaultValues = {
    name: '',
    email: '',
    letter: '',
  }

  const handleShake = () => {
    setShakeTrigger(prev => prev + 1);
  }

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("Send email submit data", value);

      try {
        const result = await sendEmailAction(value);
        console.log('Send email result', result);
        toast.success("Message sent successfully!");
        form.reset()
      } catch (err) {
        console.log("Send email error", err)
        const errMsg = err instanceof Error
          ? err.message
          : "Something went wrong";
        toast.error(errMsg);
      }
    },
  })

  return (
    <form
      id="contact-form"
      className="space-y-7"
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit(),
          handleShake
      }}
    >
      <form.Field
        name="name"
      >
        {(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid

          const error = field.state.meta.errors?.[0]?.message

          return (
            <div className="contact-group">
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                aria-invalid={isInvalid}
                placeholder="your name"
                autoComplete="off"
                className={cn(
                  "contact-input",
                  error && "error"
                )}
              />

              <ErrorTooltip
                error={isInvalid ? error : undefined}
                shakeTrigger={error ? error.length : 0}
              />
            </div>
          )
        }}
      </form.Field>

      <form.Field
        name="email"
      >
        {(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid

          const error = field.state.meta.errors?.[0]?.message

          return (
            <div className="contact-group">
              <input
                value={field.state.value}
                name={field.name}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                aria-invalid={isInvalid}
                placeholder="your@email.com"
                autoComplete="off"
                className={cn(
                  "contact-input",
                  error && "error"
                )}
              />

              <ErrorTooltip
                error={isInvalid ? error : undefined}
                shakeTrigger={shakeTrigger}
              />

            </div>
          )
        }}
      </form.Field>

      <form.Field
        name="letter"
      >
        {(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid

          const error = field.state.meta.errors?.[0]?.message

          return (
            <div className="contact-group">
              <textarea
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                aria-invalid={isInvalid}
                placeholder="write something"
                autoComplete="off"
                className={cn(
                  "contact-input resize-none",
                  error && "error"
                )}
              />

              <ErrorTooltip
                error={isInvalid ? error : undefined}
                shakeTrigger={error ? error.length : 0}
              />
            </div>
          )
        }}
      </form.Field>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {
          ([canSubmit, isSubmitting]) => (
            <InteractiveBtn
              type="submit"
              form="contact-form"
              className="mt-10"
              disabled={!canSubmit}
            >
              {isSubmitting
                && <RiLoader2Fill className="animate-spin" />
              }
              Send message
              <RiSendPlane2Fill size={20} />
            </InteractiveBtn>
          )
        }
      </form.Subscribe>
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
