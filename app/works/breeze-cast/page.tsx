import ProjectImageGallery from "@/components/ProjectImageGallery";
import { Badge, Meta, Title } from "@/components/ui/work";
import { BREEZE_CAST_GALLERYS } from "@/constants";
import { RiExternalLinkLine } from "@remixicon/react";
import { Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
  title: "Breeze Cast",
};

export default function BreezeCastPage() {
  return (
    <main className="page-container space-y-4 relative">
      <Title>
        Breeze Cast <Badge>2024</Badge>
      </Title>

      <p className="para">
        Weather dashboard designed for a clean and fast user experience.
        It allows users to track real-time weather data for their current location while providing a powerful search tool to explore cities worldwide.
      </p>
      <p className="para">
        The app features a personalized favorites system and recent searches history, making it easy to switch between saved locations.
        With detailed data points like humidity, wind speed, and a 5-day forecast—all visualized through sleek cards and
        interactive charts—it combines high-level functionality with a professional, minimal design.
      </p>
      <ul className="my-5 ml-4 space-y-2">
        <li>
          <Meta>Live</Meta>
          <Link
            href="https://www.breeze-cast.app/"
            className="text-secondary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.breeze-cast.app/
            <RiExternalLinkLine size={20} className="ml-2 inline-block" />
          </Link>
        </li>

        <li>
          <Meta>Platform</Meta>
          <span>Web</span>
        </li>

        <li>
          <Meta>Stack</Meta>
          <span>Next.js, Shadcn</span>
        </li>

        <li>
          <Meta>Inspiration</Meta>
          <Link
            href="https://github.com/kaungmyatkyawtiti/weather-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            https://www.youtube.com/watch?v=BCp_5PoKrvI
            <RiExternalLinkLine size={20} className="ml-2 inline-block" />
          </Link>
        </li>

        <li>
          <Meta>source</Meta>
          <Link
            href="https://github.com/kaungmyatkyawtiti/weather-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            https://github.com/kaungmyatkyawtiti/weather-dashboard
            <RiExternalLinkLine size={20} className="ml-2 inline-block" />
          </Link>
        </li>
      </ul>

      <ProjectImageGallery gallerys={BREEZE_CAST_GALLERYS} />
    </main>
  )
}
