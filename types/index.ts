import { contactSchema } from "@/lib/validations";
import { RemixiconComponentType } from "@remixicon/react";
import z from "zod";

export interface SocialLink {
  href: string;
  icon: RemixiconComponentType;
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

export interface ContactInfo {
  icon: RemixiconComponentType;
  label: string;
  value: string;
}

export type ContactFormInputs = z.infer<typeof contactSchema>;

export interface ProjectGallery {
  image: string;
  title: string;
}
