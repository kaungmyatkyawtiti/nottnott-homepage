'use client'

import { useDismiss } from '@/hooks/useDismiss';
import { motion } from 'motion/react';
import Image from 'next/image'
import { useRef } from 'react'

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export const ImageModal = ({
  src,
  alt,
  onClose
}: ImageModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useDismiss(containerRef, onClose);

  return (
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-0 z-150 bg-black/80 flex items-center justify-center"
    >
      <motion.div
        ref={containerRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-[80vw] aspect-video md:aspect-square max-h-[80vh] rounded-lg overflow-hidden py-20"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          loading='eager'
          className="object-cover rounded-lg"
        />
      </motion.div>
    </motion.div>
  )
}
