"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export default function CuteGirlGif() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      className="absolute inset-0"
      style={{ y: smoothY }}
    >
      <Image
        src="https://media.tenor.com/Lu3ZB5FTDdwAAAAi/duong2.gif"
        alt="Anime Girl"
        fill
        loading="eager"
        className="aspect-video"
        unoptimized
      />
    </motion.div>
  )
}

