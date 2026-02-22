'use client'

import { ArtGridItem } from '@/components/GridItem'
import { ARTS } from '@/constants'
import { ImageModal } from '@/components/ImageModal'
import { SubTitle } from '@/components/ui/text'
import { AnimatePresence } from 'motion/react'
import { useBoundStore } from '@/lib/useBoundStore'

export default function DigitalArtsSection() {
  const { closeModal } = useBoundStore();
  const activeImage = useBoundStore(state => state.activeImage);
  console.log("activeImage", activeImage);

  return (
    <section>
      <SubTitle className='mb-6'>My Digital Arts</SubTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ARTS.map((art, index) => (
          <ArtGridItem
            key={index + `${art.thumbnail}`}
            art={art}
          />
        ))}
      </div>

      <AnimatePresence initial={false}>
        {activeImage && (
          <ImageModal
            image={activeImage.image}
            title={activeImage.title}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </section>

  )
}

