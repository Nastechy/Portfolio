import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
}

const projects: Project[] = [
  {
    title: "NGML Gas Distribution Platform",
    description:
      "Enterprise-grade gas distribution and billing system with role-based dashboards, customer onboarding, invoicing, and daily gas reading systems for NNPC subsidiary.",
    tech: ["React", "TypeScript", "Redux", "Ant Design", "REST APIs"],
    images: [],
  },
  {
    title: "A4NT Energy CRM",
    description:
      "Multi-role energy CRM with Admin, Agent, and Installer dashboards. Features sales tracking, wallet top-up integration, commission monitoring, and analytics.",
    tech: ["React", "TypeScript", "Material UI", "React Query"],
    images: [],
  },
  {
    title: "BrissTruct – Construction SaaS",
    description:
      "Construction project management platform with multi-project dashboards for budgeting, procurement, inventory tracking, and multi-stage approval workflows.",
    tech: ["React", "Next.js", "Tailwind CSS", "Redux", "REST APIs"],
    images: [],
  },
];

const ImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) {
    return (
      <div className="w-full h-64 md:h-80 bg-secondary rounded flex flex-col items-center justify-center border border-border gap-2">
        <span className="text-muted-foreground font-mono text-sm">Project Screenshots</span>
        <span className="text-muted-foreground/50 font-mono text-xs">Coming soon</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 md:h-80 rounded overflow-hidden group">
      <img
        src={images[current]}
        alt={`${title} screenshot ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1))}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === current ? "bg-primary" : "bg-foreground/30"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-2 md:py-16 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="text-primary font-mono text-lg">03.</span> Featured Projects
        </motion.h2>

        <div className="space-y-14 md:space-y-24">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative grid md:grid-cols-12 items-center gap-4"
            >
              {/* Project Images */}
              <div className="md:col-span-7 rounded overflow-hidden">
                <div className="relative">
                  <ImageCarousel images={project.images} title={project.title} />
                  <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-300 rounded pointer-events-none" />
                </div>
              </div>

              {/* Project Info */}
              <div className="md:col-span-6 md:row-start-1 relative z-10 mt-4 md:mt-0 md:col-start-6 md:text-right">
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 font-heading">
                  {project.title}
                </h3>
                <div className="bg-card p-4 md:p-5 rounded shadow-lg glow-sm mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-muted-foreground mb-4 md:justify-end">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="flex gap-4 md:justify-end">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
