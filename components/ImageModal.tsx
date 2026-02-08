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
      className="fixed inset-0 z-150 bg-black/80 flex-center"
    >
      <motion.div
        ref={containerRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative aspect-video w-[90vw] max-w-[90vw] max-h-[85vh] rounded-lg overflow-hidden"
        style={{ maxWidth: 'calc(85vh * 16 / 9)' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 80vw, 90vw"
          loading='eager'
          className="object-cover rounded-lg"
        />
      </motion.div>
    </motion.div>
  )
}
