'use client'

import { ArtGridItem } from '@/components/GridItem'
import { ARTS } from '@/constants'
import { ImageModal } from '@/components/ImageModal'
import { SubTitle } from '@/components/ui/text'
import { AnimatePresence } from 'motion/react'
import { useImageModal } from '@/hooks/useImageModal'

const ArtPage = () => {
  const { activeImage, openImageModal, closeImageModal } = useImageModal()

  const handleOpenModal = (src: string, alt: string) => () => {
    openImageModal({ src, alt });
  };

  return (
    <main className='page-container' title="Arts">
      <section>
        <SubTitle className='mb-6'>My Digital Arts</SubTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ARTS.map((art, index) => (
            <ArtGridItem
              key={index + `${art.thumbnail}`}
              art={art}
              onClick={handleOpenModal(art.thumbnail, art.title)}
            />
          ))}
        </div>

        <AnimatePresence initial={false}>
          {activeImage && (
            <ImageModal
              src={activeImage.src}
              alt={activeImage.alt}
              onClose={closeImageModal}
            />
          )}
        </AnimatePresence>
      </section>
    </main>
  )
}

export default ArtPage;
