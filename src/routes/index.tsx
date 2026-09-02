import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { portfolio } from "@/data/portfolio";
import { BentoGrid, ContactSection } from "@/sections/BentoGrid";
import { ProjectsSection } from "@/sections/ProjectsSection";

const title = `${portfolio.personal.name} — ${portfolio.personal.role}`;
const description = portfolio.personal.bio;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <BentoGrid />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
