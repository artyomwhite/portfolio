export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  image: string;
  techStack: string[];
  github: string | null;
  liveDemo: string | null;
  liveDemoLabel?: string;
  apiDocs: string | null;
  apiDocsLabel?: string;
  healthUrl: string | null;
  featured: boolean;
}
