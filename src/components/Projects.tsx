import { useEffect, useState, type CSSProperties } from "react";
import { motion, AnimatePresence, type Variants, type Transition, type TargetAndTransition } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

type SwipeEffect = "tilt" | "zoom" | "drift" | "flip";

interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  effect: SwipeEffect;
}

const swipeConfidenceThreshold = 9000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

interface MotionPreset {
  variants: Variants;
  transition: Transition;
  whileDrag: TargetAndTransition;
  style: CSSProperties;
}

const projects: Project[] = [
  {
    title: "NGML Gas Distribution Platform",
    description:
      "Enterprise-grade gas distribution and billing system with role-based dashboards, customer onboarding, invoicing, and daily gas reading systems for NNPC subsidiary.",
    tech: ["React", "TypeScript", "Redux", "Ant Design", "REST APIs"],
    images: [
      "https://picsum.photos/seed/ngml-1/1200/800",
      "https://picsum.photos/seed/ngml-2/1200/800",
      "https://picsum.photos/seed/ngml-3/1200/800",
    ],
    effect: "tilt",
  },
  {
    title: "A4NT Energy CRM",
    description:
      "Multi-role energy CRM with Admin, Agent, and Installer dashboards. Features sales tracking, wallet top-up integration, commission monitoring, and analytics.",
    tech: ["React", "TypeScript", "Material UI", "React Query"],
    images: [
      "https://picsum.photos/seed/a4nt-1/1200/800",
      "https://picsum.photos/seed/a4nt-2/1200/800",
      "https://picsum.photos/seed/a4nt-3/1200/800",
    ],
    effect: "zoom",
  },
  {
    title: "BrissTruct – Construction SaaS",
    description:
      "Construction project management platform with multi-project dashboards for budgeting, procurement, inventory tracking, and multi-stage approval workflows.",
    tech: ["React", "Next.js", "Tailwind CSS", "Redux", "REST APIs"],
    images: [
      "https://picsum.photos/seed/brisstruct-1/1200/800",
      "https://picsum.photos/seed/brisstruct-2/1200/800",
      "https://picsum.photos/seed/brisstruct-3/1200/800",
    ],
    effect: "drift",
  },
  {
    title: "E-commerce Platform",
    description:
      "Modern e-commerce web application for fashion retail with product discovery, cart and checkout workflows, and scalable storefront architecture.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "REST APIs"],
    images: [
      "https://picsum.photos/seed/ecommerce-1/1200/800",
      "https://picsum.photos/seed/ecommerce-2/1200/800",
      "https://picsum.photos/seed/ecommerce-3/1200/800",
    ],
    effect: "flip",
  },
];

const ImageCarousel = ({
  images,
  title,
  effect,
}: {
  images: string[];
  title: string;
  effect: SwipeEffect;
}) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = (nextDirection: number) => {
    setDirection(nextDirection);
    setCurrent((prev) => {
      if (nextDirection > 0) return prev === images.length - 1 ? 0 : prev + 1;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const timer = setInterval(() => paginate(1), 3500);
    return () => clearInterval(timer);
  }, [images.length, isPaused]);

  if (images.length === 0) {
    return (
      <div className="w-full h-64 md:h-80 bg-secondary rounded flex flex-col items-center justify-center border border-border gap-2">
        <span className="text-muted-foreground font-mono text-sm">Project Screenshots</span>
        <span className="text-muted-foreground/50 font-mono text-xs">Coming soon</span>
      </div>
    );
  }

  const motionPreset: MotionPreset =
    effect === "zoom"
      ? {
          variants: {
            enter: (_dir: number) => ({ opacity: 0, scale: 1.14, filter: "blur(10px)" }),
            center: { opacity: 1, scale: 1, filter: "blur(0px)" },
            exit: (_dir: number) => ({ opacity: 0, scale: 0.9, filter: "blur(10px)" }),
          },
          transition: {
            scale: { type: "spring" as const, stiffness: 220, damping: 24 },
            opacity: { duration: 0.26 },
            filter: { duration: 0.3 },
          },
          whileDrag: { scale: 0.98 },
          style: { transformOrigin: "50% 50%" as const },
        }
      : effect === "drift"
        ? {
            variants: {
              enter: (dir: number) => ({
                x: dir > 0 ? 80 : -80,
                y: dir > 0 ? -40 : 40,
                opacity: 0,
                scale: 1.02,
              }),
              center: { x: 0, y: 0, opacity: 1, scale: 1 },
              exit: (dir: number) => ({
                x: dir < 0 ? 80 : -80,
                y: dir < 0 ? -40 : 40,
                opacity: 0,
                scale: 0.98,
              }),
            },
            transition: {
              x: { type: "spring" as const, stiffness: 230, damping: 22 },
              y: { type: "spring" as const, stiffness: 180, damping: 20 },
              opacity: { duration: 0.22 },
              scale: { duration: 0.22 },
            },
            whileDrag: { y: -8, scale: 0.97 },
            style: { transformOrigin: "50% 55%" as const },
          }
        : effect === "flip"
          ? {
              variants: {
                enter: (dir: number) => ({
                  x: dir > 0 ? 120 : -120,
                  rotateY: dir > 0 ? 16 : -16,
                  opacity: 0,
                }),
                center: { x: 0, rotateY: 0, opacity: 1 },
                exit: (dir: number) => ({
                  x: dir < 0 ? 120 : -120,
                  rotateY: dir < 0 ? 16 : -16,
                  opacity: 0,
                }),
              },
              transition: {
                x: { type: "spring" as const, stiffness: 250, damping: 24 },
                rotateY: { duration: 0.32 },
                opacity: { duration: 0.22 },
              },
              whileDrag: { rotateY: direction >= 0 ? 4 : -4, scale: 0.97 },
              style: { transformOrigin: "50% 50%" as const },
            }
          : {
              variants: {
                enter: (dir: number) => ({
                  x: dir > 0 ? 180 : -180,
                  y: dir > 0 ? 24 : -24,
                  opacity: 0,
                  scale: 0.92,
                  rotateZ: dir > 0 ? 3 : -3,
                  filter: "blur(8px)",
                }),
                center: { x: 0, y: 0, opacity: 1, scale: 1, rotateZ: 0, filter: "blur(0px)" },
                exit: (dir: number) => ({
                  x: dir < 0 ? 180 : -180,
                  y: dir < 0 ? 24 : -24,
                  opacity: 0,
                  scale: 0.92,
                  rotateZ: dir < 0 ? 3 : -3,
                  filter: "blur(8px)",
                }),
              },
              transition: {
                x: { type: "spring" as const, stiffness: 240, damping: 24 },
                y: { type: "spring" as const, stiffness: 220, damping: 22 },
                rotateZ: { duration: 0.34 },
                filter: { duration: 0.28 },
                opacity: { duration: 0.28 },
                scale: { duration: 0.28 },
              },
              whileDrag: { scale: 0.96, rotateZ: direction >= 0 ? 1.5 : -1.5 },
              style: { transformOrigin: "50% 60%" as const },
            };

  return (
    <div
      className="relative w-full h-64 md:h-80 rounded overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={`${images[current]}-${current}`}
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          custom={direction}
          variants={motionPreset.variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={motionPreset.transition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.9}
          whileDrag={motionPreset.whileDrag}
          onDragEnd={(_, info) => {
            const swipe = swipePower(info.offset.x, info.velocity.x);
            if (swipe < -swipeConfidenceThreshold) paginate(1);
            else if (swipe > swipeConfidenceThreshold) paginate(-1);
          }}
          className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
          style={motionPreset.style}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
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
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projects[activeProjectIndex];

  return (
    <section id="projects" className="perf-section py-12 px-2 md:py-16 lg:py-24 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading" data-reveal
        >
          <span className="text-primary font-mono text-lg">03.</span> Featured Projects
        </motion.h2>

        <div className="space-y-6" data-reveal>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setActiveProjectIndex(index)}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-mono transition-colors ${
                  activeProjectIndex === index
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"
                }`}
                aria-label={`Show project ${project.title}`}
              >
                {project.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="relative grid md:grid-cols-12 items-center gap-4 md:gap-6"
            >
              <div className="md:col-span-7 rounded overflow-hidden">
                <div className="relative">
                  <ImageCarousel
                    images={activeProject.images}
                    title={activeProject.title}
                    effect={activeProject.effect}
                  />
                  <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-300 rounded pointer-events-none" />
                </div>
              </div>

              <div className="md:col-span-6 md:row-start-1 relative z-10 mt-4 md:mt-0 md:col-start-6 md:text-right">
                <p className="font-mono text-primary text-sm mb-2">
                  Featured Project {String(activeProjectIndex + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 font-heading">
                  {activeProject.title}
                </h3>
                <div className="bg-card p-4 md:p-5 rounded shadow-lg glow-sm mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-muted-foreground mb-4 md:justify-end">
                  {activeProject.tech.map((t) => (
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
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
