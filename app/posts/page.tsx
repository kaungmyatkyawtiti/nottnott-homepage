// import { GridItem } from '@/components/GridItem'
// import { artworks } from '@/constants'
//
// const PostPage = () => (
//   <main title="Artworks">
//     <div className="max-w-5xl mx-auto px-5 py-10">
//       <h3 className="text-xl font-semibold mb-4">My Artworks</h3>
//
//       <section>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 space-y-6">
//           {artworks.map((artwork, index) => (
//             <GridItem
//               key={index}
//               description={artwork.description}
//               thumbnail={artwork.thumbnail}
//               href={artwork.href}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   </main>
// )
//
// export default PostPage
//
'use client'

import { useState } from 'react'
import { GridItem } from '@/components/GridItem'
import { artworks } from '@/constants'
import { ImageModal } from '@/components/ImageModal'

const PostPage = () => {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <main title="Artworks">
      <div className="max-w-5xl mx-auto px-5 py-10">
        <h3 className="text-xl font-semibold mb-4">My Artworks</h3>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {artworks.map((artwork, index) => (
              <GridItem
                key={index}
                thumbnail={artwork.thumbnail}
                description={artwork.description}
                onClick={() => setActiveImg(artwork.thumbnail)}
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

export default PostPage
