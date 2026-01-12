'use client'

import { useState } from 'react'
import { GridItem } from '@/components/GridItem'
import { arts } from '@/constants'
import { ImageModal } from '@/components/ImageModal'

const ArtPage = () => {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <main title="Arts">
      <div className="max-w-5xl mx-auto px-5 py-10">
        <h3 className="text-xl font-semibold mb-4">My Digital Arts</h3>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {arts.map((art, index) => (
              <GridItem
                key={index}
                thumbnail={art.thumbnail}
                description={art.description}
                onClick={() => setActiveImg(art.thumbnail)}
              />
            ))}
          </div>
        </section>
      </div>

      {
        activeImg && (
          <ImageModal
            src={activeImg}
            onClose={() => setActiveImg(null)}
          />
        )
      }
    </main>
  )
}

export default ArtPage;
