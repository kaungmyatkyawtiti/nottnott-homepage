'use client'

import { useDismiss } from '@/hooks/useDismiss';
import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface ImageModalProps {
  src: string;
  alt?: string;
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
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
    >
      <div
        ref={containerRef}
        className="relative max-h-[80vh] max-w-[80vw] "
      >
        <Image
          src={src}
          alt={alt ?? 'Artwork'}
          width={1200}
          height={1200}
          className="h-auto w-auto rounded-lg"
          priority
        />
      </div>
    </div>
  )
}
