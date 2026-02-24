"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";

export default function HomeBanner() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <div className="relative aspect-square max-w-sm mx-auto overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothY }}
      >
        <Image
          src="https://media.tenor.com/Lu3ZB5FTDdwAAAAi/duong2.gif"
          alt="Anime Girl"
          fill
          loading="eager"
          unoptimized
        />
      </motion.div>
    </div>
  )
}
