export type Project = {
  title: string;
  roles: string[];
  technologies: string[];
  year: string;
  website: string;
  github: string;
  duration: string;
  description: string[];
  portrait_images: string[];
  landscape_images: string[];
};

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}