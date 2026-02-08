"use client";

import { ImageModal } from "@/components/ImageModal";
import { Badge, Meta, Title, WorkImage } from "@/components/ui/work";
import { useImageModal } from "@/hooks/useImageModal";
import { RiExternalLinkLine } from "@remixicon/react";
import { AnimatePresence } from "motion/react";
import Link from "next/link"

const IMAGES = [
  {
    src: "/images/works/blog.png",
    alt: "Blog",
  },
  {
    src: "/images/works/blog2.png",
    alt: "Blog 2",
  },
];

export default function SimpleBlogPage() {
  const { activeImage, openImageModal, closeImageModal } = useImageModal()

  const handleOpenModal = (img: { src: string, alt: string }) => () => {
    openImageModal(img);
  };

  return (
    <main className="space-y-4 page-container relative">
      <Title>
        Simple Blog<Badge>2024</Badge>
      </Title>

      <p className="para">
        Social blogging platform designed for seamless real-time interaction and community engagement.
        It allows users to share thoughts through sleekly designed posts, offering a streamlined experience for both creators and readers.
      </p>
      <p className="para">
        The app features a robust real-time interaction system, including instant like and unlike functionality, commenting, and a live notification engine.
        Built with a focus on high performance and minimal design,
        it provides a professional environment for digital storytelling and instant social feedback.
      </p>
      <ul className="my-5 ml-4 space-y-2">
        <li>
          <Meta>Live</Meta>
          <Link
            href="https://www.simple-blog.app/"
            className="text-secondary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.simple-blog.app/
            <RiExternalLinkLine size={20} className="ml-2 inline-block" />
          </Link>
        </li>

        <li>
          <Meta>Platform</Meta>
          <span>Web</span>
        </li>

        <li>
          <Meta>Stack</Meta>
          <span>Next.js, Express.js, Postgresql, Prisma, Shadcn</span>
        </li>

        <li>
          <Meta>Inspiration</Meta>
          <span>Ei Maung Rockstar Developer Book 2025</span>
        </li>

      </ul>

      {IMAGES.map((img, i) => (
        <WorkImage
          key={i}
          src={img.src}
          alt={img.alt}
          onClick={handleOpenModal(img)}
        />
      ))}

      <AnimatePresence initial={false}>
        {activeImage && (
          <ImageModal
            src={activeImage.src}
            alt={activeImage.alt}
            onClose={closeImageModal}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
