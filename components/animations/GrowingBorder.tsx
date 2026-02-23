"use client";

import { motion, useTime, useTransform } from "motion/react";
import cn from "@/lib/utils";
import { ReactNode } from "react";

interface GrowingBorderProps {
  children: ReactNode;
  className?: string;
}

export default function GrowingBorder({
  children,
  className,
}: GrowingBorderProps) {
  const time = useTime();

  const rotate = useTransform(time, [0, 6000], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotate, (deg) => {
    return `conic-gradient(
      from ${deg}deg,
      transparent 0deg,
      transparent 250deg,
      var(--secondary) 320deg,
      transparent 360deg
    )`;
  });

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{
          background: rotatingBg,
        }}
        className="absolute inset-0 rounded-[inherit] bg-background -z-1"
      />
      <div className="relative bg-background rounded-[inherit]">
        {children}
      </div>
    </div>
  );
}
