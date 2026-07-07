import { PageFade } from "@/components/common/PageFade";
import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/hero/About";
import { Skills } from "@/components/skills/Skills";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <PageFade>
      <Nav />
      <main className="min-w-0">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Contact />
        <Footer />
      </main>
    </PageFade>
  );
}
