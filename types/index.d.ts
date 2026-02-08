export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}

export type WorkType = "web" | "mobile" | "video" | "vr" | "tool" | "other";

export interface Work {
  link: string;
  title: string;
  thumbnail: string;
  description: string;
  type: WorkType;
};

export interface Art {
  title: string;
  year: number;
  thumbnail: string;
};

export interface ModalImage {
  src: string;
  alt: string;
}
