"use client";

import { AnimatePresence, HTMLMotionProps, motion } from "motion/react"
import InteractiveBtn from "./animations/InteractiveBtn"
import { RiLoader2Fill, RiSendPlane2Fill } from "@remixicon/react";
import { ReactNode } from "react";

interface LoadingButtonProps extends HTMLMotionProps<"button"> {
  isSubmitting: boolean;
  children: ReactNode;
}

const LoadingButton = ({
  isSubmitting,
  children,
  ...props
}: LoadingButtonProps) => {
  return (
    <InteractiveBtn
      type="submit"
      disabled={isSubmitting}
      {...props}
    >
      {children}
      <AnimatePresence mode="wait" initial={false}>
        {isSubmitting ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              rotate: {
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              },
              duration: 0.2,
            }}
          >
            <RiLoader2Fill size={20} />
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <RiSendPlane2Fill size={20} />
          </motion.span>
        )}
      </AnimatePresence>
    </InteractiveBtn>
  )
}

export default LoadingButton;
