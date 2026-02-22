"use client";

import { ImageModal } from "@/components/ImageModal";
import { WorkImage } from "@/components/ui/work";
import { useBoundStore } from "@/lib/useBoundStore";
import { ProjectGallery } from "@/types";
import { AnimatePresence } from "motion/react";

interface ProjectImageGalleryProps {
  gallerys: ProjectGallery[];
}

export default function ProjectImageGallery({ gallerys }: ProjectImageGalleryProps) {
  const { closeModal } = useBoundStore();
  const activeImage = useBoundStore(state => state.activeImage);

  return (
    <>
      {gallerys.map((item, i) => (
        <WorkImage
          key={i}
          image={item.image}
          title={item.title}
        />
      ))}

      <AnimatePresence initial={false}>
        {activeImage && (
          <ImageModal
            image={activeImage.image}
            title={activeImage.title}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  )
}

