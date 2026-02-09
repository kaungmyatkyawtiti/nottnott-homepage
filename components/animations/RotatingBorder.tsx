"use client";

import { motion, useTime, useTransform } from "motion/react";
import cn from "@/lib/utils";
import { ReactNode } from "react";

interface RotatingBorderProps {
  children: ReactNode;
  className?: string;
}

export default function RotatingBorder({
  children,
  className,
}: RotatingBorderProps) {
  const time = useTime();

  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotate, (deg) => {
    return `conic-gradient(
      from ${deg}deg,
      var(--gradient-1),
      var(--gradient-2),
      var(--gradient-3),
      var(--gradient-4)
    )`;
  });

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{
          background: rotatingBg,
        }}
        className="absolute inset-0 rounded-[inherit] bg-background"
      />
      <div className="relative z-10 bg-background rounded-[inherit]">
        {children}
      </div>
    </div>
  );
}
