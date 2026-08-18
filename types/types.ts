import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  roles: string[];
  technologies: string[];
  year: string;
  website: string;
  github?: string;
  duration: string;
  descriptions: string[];
  images: ProjectImages;
};

export type ProjectImages = {
  landscape: StaticImageData[];
  portrait: StaticImageData[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}