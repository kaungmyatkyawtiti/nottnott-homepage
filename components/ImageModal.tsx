'use client'

import { useDismiss } from '@/hooks/useDismiss';
import { motion } from 'motion/react';
import Image from 'next/image'
import { useRef } from 'react'

interface ImageModalProps {
  image: string;
  title: string;
  onClose: () => void;
}

export const ImageModal = ({
  image,
  title,
  onClose
}: ImageModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useDismiss(containerRef, onClose);

  return (
    <motion.div
      key="backdrop" initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-0 z-150 bg-black/80 flex-center"
    >
      {/* <motion.div */}
      {/*   ref={containerRef} */}
      {/*   initial={{ scale: 0.8, opacity: 0 }} */}
      {/*   animate={{ scale: 1, opacity: 1 }} */}
      {/*   exit={{ scale: 0.8, opacity: 0 }} */}
      {/*   transition={{ duration: 0.25, ease: "easeOut" }} */}
      {/*   className="relative aspect-video w-[90vw] max-w-[90vw] max-h-[85vh] rounded-lg overflow-hidden" */}
      {/*   style={{ maxWidth: 'calc(85vh * 16 / 9)' }} */}
      {/* > */}
      {/*   <Image */}
      {/*     alt={alt} */}
      {/*     src={src} */}
      {/*     fill */}
      {/*     sizes="(min-width: 768px) 80vw, 90vw" */}
      {/*     loading='eager' */}
      {/*     className="object-cover rounded-lg" */}
      {/*   /> */}
      {/* </motion.div> */}

      <motion.div
        ref={containerRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-[90vw] max-w-[90vw] max-h-[90vh] bg-card rounded-2xl overflow-hidden flex flex-col shadow-md p-5 lg:p-10 space-y-6"
        style={{ maxWidth: 'calc(85vh * 16 / 9)' }}
      >

        {/* Header Bar */}
        <div className="flex items-center justify-between">
          <p className="text-[15px] lg:text-[18px] font-semibold font-mplus">{title}</p>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-destructive text-white rounded-sm text-xs lg:text-sm font-mplus"
          >
            ESC
          </button>
        </div>

        {/* Image Container */}
        <div className="w-full aspect-video relative shadow-inner overflow-hidden rounded-xl border-2 border-secondary">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 80vw, 90vw"
            loading='eager'
            className="object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
