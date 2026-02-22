import { Art, ContactInfo, ProjectGallery, Work } from "@/types";
import {
  RiGithubFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiFacebookBoxFill,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
} from "@remixicon/react"

export const NAV_LINKS = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Works",
    href: "/works"
  },
  {
    name: "Contact",
    href: "/contact"
  },
  {
    name: "Digital Arts",
    href: "/digital-arts"
  },
]

export const CONTACT_INFOS: ContactInfo[] = [
  {
    icon: RiMailLine,
    label: "Email",
    value: "eucalyptustiti2003@gmail.com",
  },
  {
    icon: RiPhoneLine,
    label: "Phone",
    value: "09 787 484 437",
  },
  {
    icon: RiMapPinLine,
    label: "Location",
    value: "Yangon, Myanmar",
  },
];

export const BIO_TIMELINES = [
  {
    year: 2003,
    description: "Born in Kyonpyaw, Ayeyarwady Region, Myanmar.",
  },
  {
    year: 2019,
    description: "Completed Grade 10, and then continued outside formal schooling during the COVID-19 era.",
  },
  {
    year: 2023,
    description: "Trained in web development at Fairway Technology.",
  },
  {
    year: "2025–Present",
    description: "Working as a freelancer.",
  },
];

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/kaungmyatkyawtiti",
    icon: RiGithubFill,
    label: "@kaungmyatkyawtiti",
  },
  {
    href: "https://twitter.com/inkdrop_app",
    icon: RiFacebookBoxFill,
    label: "@NottNott",
  },
  {
    href: "https://x.com",
    icon: RiTwitterXFill,
    label: "@kmktitit2003@gmail.com",
  },
  {
    href: "https://instagram.com",
    icon: RiInstagramFill,
    label: "@nottnott2003",
  },
];

export const ARTS: Art[] = [
  {
    title: "Portfolio Website",
    year: 2024,
    thumbnail: "/images/contents/youtube-how-to-build-portfolio.jpg",
  },
  {
    title: "Markdown Notes",
    year: 2024,
    thumbnail: "/images/contents/youtube-how-to-use-inkdrop.jpg",
  },
  {
    title: "Fish Workflow",
    year: 2023,
    thumbnail: "/images/contents/youtube-fish-workflow.jpg",
  },
  {
    title: "Desk Setup",
    year: 2020,
    thumbnail: "/images/contents/youtube-my-desk-setup.jpg",
  },
  {
    title: "500 Paid Users Story",
    year: 2022,
    thumbnail: "/images/contents/blog-500-paid-users.jpg",
  },
  {
    title: "No Financial Goal",
    year: 2022,
    thumbnail: "/images/contents/blog-financial-goal.png",
  },
  {
    title: "Freelance Pricing",
    year: 2023,
    thumbnail: "/images/contents/blog-how-to-price-yourself.jpg",
  },
  {
    title: "React Native Speedup",
    year: 2023,
    thumbnail: "/images/contents/youtube-50x-faster.jpg",
  },
]

export const WORKS: Work[] = [
  {
    link: "breeze-cast",
    title: "Breeze Cast",
    thumbnail: "/images/works/weather.png",
    description: "Weather dashboard for viewing forecasts and searching city weather worldwide",
    type: "web",
  },
  {
    link: "simple-blog",
    title: "Simple Blog",
    thumbnail: "/images/works/blog.png",
    description: "A real-time social blogging platform.",
    type: "web",
  },
  {
    link: "fourpainters",
    title: "The four painters",
    thumbnail: "/images/works/the-four-painters_eyecatch.jpg",
    description: "A video work generated with deep learning, imitating famous four painters like Van Gogh",
    type: "video",
  },
  {
    link: "menkiki",
    title: "Menkiki",
    thumbnail: "/images/works/menkiki_eyecatch.png",
    description: "An app that suggests ramen shops based on a photo",
    type: "mobile",
  },
  {
    link: "margelo",
    title: "Margelo",
    thumbnail: "/images/works/margelo_eyecatch.png",
    description: "Elite app development agency based in Austria",
    type: "web",
  },
  {
    link: "modetokyo",
    title: "mode.tokyo",
    thumbnail: "/images/works/modetokyo_eyecatch.png",
    description: "A magazine to personally enjoy Japan",
    type: "web",
  },
  {
    link: "styly",
    title: "Styly",
    thumbnail: "/images/works/styly_eyecatch.png",
    description: "VR creative tools for fashion brands",
    type: "vr",
  },
  {
    link: "pichu2",
    title: "Pichu*Pichu",
    thumbnail: "/images/works/pichu2_eyecatch.png",
    description: "Twitter client app for iPhone Safari",
    type: "mobile",
  },
  {
    link: "freedbtagger",
    title: "freeDBTagger",
    thumbnail: "/images/works/freedbtagger_eyecatch.png",
    description: "Automatic audio file tagging tool for Windows",
    type: "tool",
  },
  {
    link: "amembo",
    title: "Amembo",
    thumbnail: "/images/works/amembo_eyecatch.png",
    description: "P2P private file sharing tool for Windows",
    type: "tool",
  },
];

export const WORK_TABS = [
  "all",
  "web",
  "mobile",
  "video",
  "vr",
  "tool",
] as const;

export const BREEZE_CAST_GALLERYS: ProjectGallery[] = [
  {
    image: "/images/works/weather.png",
    title: "Weather Dashboard",
  },
  {
    image: "/images/works/weather2.png",
    title: "Weather Dashboard 2",
  },
];

export const SIMPLE_BLOG_GALLERYS: ProjectGallery[] = [
  {
    image: "/images/works/blog.png",
    title: "Blog",
  },
  {
    image: "/images/works/blog2.png",
    title: "Blog 2",
  },
];

