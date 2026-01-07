import Image from "next/image"
import Link from "next/link"
import {
  RiGithubFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiArrowRightLine,
  RiMailLine,
  RiFacebookBoxFill,
} from "@remixicon/react"
import { SubTitle } from "@/components/ui/text"

const bioTimelines = [
  {
    year: 1984,
    description: "Born in Osaka (大阪), Japan.",
  },
  {
    year: 2010,
    description: "Completed the Master's Program in the Graduate School of Information Science at Nara Institute of Science and Technology.",
  },
  {
    year: 2010,
    description: "Worked at Yahoo! Japan.",
  },
  {
    year: "2012–Present",
    description: "Working as a freelancer.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* Intro */}
      <div className="mb-6 rounded-lg bg-white/45 p-3 text-center backdrop-blur-md dark:bg-white/5">
        Hello, I&apos;m an indie app developer based in Japan!
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start gap-5">
        <div className="flex-1">
          <h1 className="text-4xl font-bold font-mplus">Kaung Myat Kyaw</h1>
          <p className="mt-1">
            Digital Craftsman ( Artist / Developer / Designer )
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/globe.svg"
            alt="Profile image"
            width={100}
            height={100}
            className="overflow-hidden rounded-full border border-white"
            loading="eager"
          />
        </div>
      </div>

      {/* Work */}
      <section className="mt-8">
        <SubTitle>Work</SubTitle>
        <p className="leading-relaxed">
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{" "}
          <Link
            href="/works/inkdrop"
            className="font-medium text-teal-500 hover:underline"
          >
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called{" "}
          <Link
            href="https://www.youtube.com/devaslife"
            target="_blank"
            className="font-medium text-teal-500 hover:underline"
          >
            Dev as Life
          </Link>{" "}
          has more than 100k subscribers.
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 rounded-md bg-teal-500 px-4 py-2 font-semibold text-white hover:bg-teal-600"
          >
            My portfolio
            <RiArrowRightLine size={20} />
          </Link>
        </div>
      </section>

      {/* Bio */}
      <section className="mt-8">
        <SubTitle>Bio</SubTitle>

        <ul className="space-y-2">
          {
            bioTimelines.map(bt => (
              <li key={`${bt.year}-${bt.description}`} className="flex gap-4">
                <span className="font-bold">{bt.year}</span>
                <span>{bt.description}</span>
              </li>
            ))
          }
        </ul>
      </section>

      {/* I Love */}
      <section className="mt-8">
        <SubTitle>I ♥</SubTitle>
        <p>
          Art, Music,{" "}
          <Link
            href="https://illust.odoruinu.net/"
            target="_blank"
            className="text-teal-500 hover:underline"
          >
            Drawing
          </Link>
          , Playing Drums,{" "}
          <Link
            href="https://500px.com/p/craftzdog"
            target="_blank"
            className="text-teal-500 hover:underline"
          >
            Photography
          </Link>
          , Leica, Machine Learning
        </p>
      </section>

      {/* Web */}
      <section className="mt-8">
        <SubTitle>On Social</SubTitle>

        <ul className="space-y-2">
          <li>
            <SocialLink
              href="https://github.com/craftzdog"
              icon={<RiGithubFill />}
              label="@craftzdog"
            />
          </li>
          <li>
            <SocialLink
              href="https://twitter.com/inkdrop_app"
              icon={<RiFacebookBoxFill />}
              label="@inkdrop_app (English)"
            />
          </li>
          <li>
            <SocialLink
              href="https://twitter.com/craftzdog"
              icon={<RiTwitterXFill />}
              label="@craftzdog (日本語)"
            />
          </li>
          <li>
            <SocialLink
              href="https://instagram.com/craftzdog"
              icon={<RiInstagramFill />}
              label="@craftzdog"
            />
          </li>
        </ul>
      </section>

      {/* Newsletter */}
      <section className="mt-8">
        <SubTitle>Newsletter</SubTitle>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <div className="mt-4 text-center">
          <Link
            href="https://www.devas.life/"
            className="inline-flex items-center gap-2 rounded-md bg-teal-500 px-4 py-2 font-semibold text-white hover:bg-teal-600"
          >
            <RiMailLine size={20} />
            Sign up my newsletter here
          </Link>
        </div>
      </section>
    </main>
  )
}

/* Helper */
function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-teal-500 hover:bg-teal-500/10"
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}
