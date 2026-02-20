import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "NGML Gas Distribution Platform",
    description:
      "Enterprise-grade gas distribution and billing system with role-based dashboards, customer onboarding, invoicing, and daily gas reading systems for NNPC subsidiary.",
    tech: ["React", "TypeScript", "Redux", "Ant Design", "REST APIs"],
    image: null,
  },
  {
    title: "A4NT Energy CRM",
    description:
      "Multi-role energy CRM with Admin, Agent, and Installer dashboards. Features sales tracking, wallet top-up integration, commission monitoring, and analytics.",
    tech: ["React", "TypeScript", "Material UI", "React Query"],
    image: null,
  },
  {
    title: "BrissTruct – Construction SaaS",
    description:
      "Construction project management platform with multi-project dashboards for budgeting, procurement, inventory tracking, and multi-stage approval workflows.",
    tech: ["React", "Next.js", "Tailwind CSS", "Redux", "REST APIs"],
    image: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="text-primary font-mono text-lg">03.</span> Featured Projects
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`relative grid md:grid-cols-12 items-center gap-4 ${
                i % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 rounded overflow-hidden ${
                  i % 2 === 1 ? "md:col-start-6 md:row-start-1" : ""
                }`}
              >
                <div className="relative group">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover rounded"
                    />
                  ) : (
                    <div className="w-full h-64 md:h-80 bg-secondary rounded flex items-center justify-center border border-border">
                      <span className="text-muted-foreground font-mono text-sm">
                        Project Screenshot
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-300 rounded" />
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`md:col-span-6 md:row-start-1 relative z-10 ${
                  i % 2 === 1 ? "md:col-start-1 md:text-left" : "md:col-start-6 md:text-right"
                }`}
              >
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-xl font-bold text-foreground mb-4 font-heading">
                  {project.title}
                </h3>
                <div className="bg-card p-5 rounded shadow-lg glow-sm mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 font-mono text-xs text-muted-foreground mb-4 ${
                    i % 2 === 1 ? "" : "md:justify-end"
                  }`}
                >
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    i % 2 === 1 ? "" : "md:justify-end"
                  }`}
                >
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
