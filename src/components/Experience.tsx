import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "NGML (NNPC)",
    role: "Front-End Engineer",
    // duration: "Oct 2023 — Jan 2026",
    org: "Skillz System Ltd (Abuja)",
    points: [
      "Built enterprise-grade dashboards for gas distribution monitoring and operational reporting.",
      "Developed customer onboarding flows for both new and existing enterprise clients.",
      "Engineered daily gas reading input systems with validation and secure submission workflows.",
      "Implemented invoicing and billing interfaces integrated with backend financial services.",
      "Designed role-based access control systems for finance, operations, and administrative users.",
      "Optimized high-volume dashboards for performance and data-heavy usage.",
    ],
  },
  {
    company: "A4NT Energy",
    role: "Front-End Engineer",
    // duration: "Oct 2023 — Jan 2026",
    org: "Skillz System Ltd (Abuja)",
    points: [
      "Developed multi-role (Admin, Agent, Installer) dashboards with RBAC implementation.",
      "Built customer, agent, and installer onboarding workflows.",
      "Engineered sales tracking, analytics dashboards, and operational reporting modules.",
      "Integrated wallet top-up system with Ogaranya payment services.",
      "Implemented commission tracking and sales performance monitoring interfaces.",
      "Designed scalable component architecture for growing user base and transactions.",
    ],
  },
  {
    company: "Inreli Energy",
    role: "Front-End Engineer",
    // duration: "Oct 2023 — Jan 2026",
    org: "Skillz System Ltd (Abuja)",
    points: [
      "Built structured onboarding workflows for customers, agents, and installers.",
      "Developed reporting dashboards, analytics views, and configuration panels.",
      "Implemented wallet management interfaces and transaction history modules.",
      "Optimized dashboard-heavy interfaces for high transactional data environments.",
      "Collaborated with backend teams to ensure API consistency and secure integration.",
    ],
  },
  {
    company: "BrissTruct",
    role: "Front-End Developer",
    // duration: "Jan 2022 — Sep 2023",
    org: "Brissas Technologies (Abuja)",
    points: [
      "Built multi-project dashboards for budgeting, procurement, and inventory tracking.",
      "Developed structured material request workflows and multi-stage approval systems.",
      "Engineered budgeting modules with cost tracking and financial reporting views.",
      "Designed reusable UI component systems for scalable deployment.",
      "Optimized performance for high-data operational dashboards.",
    ],
  },
  {
    company: "E-commerce",
    role: "Front-End Developer",
    duration: "E-commerce Product Build",
    org: "Fashion E-commerce Platform",
    points: [
      "Built a responsive fashion storefront with product listing, filtering, and detailed product pages.",
      "Implemented cart and checkout workflows focused on conversion and usability.",
      "Integrated product and order APIs to support dynamic catalog and transaction flows.",
      "Improved mobile shopping experience with performance-focused UI rendering and optimization.",
      "Developed reusable components to support rapid iteration across shopping and account flows.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="perf-section py-12 px-2 md:py-16 lg:py-24 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading" data-reveal
        >
          <span className="text-primary font-mono text-lg">02.</span> Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6" data-reveal
        >
          {/* Tabs */}
          <div className="grid grid-cols-2 md:flex md:flex-col border-b md:border-b-0 md:border-l border-border w-full md:w-56 md:shrink-0">
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(i)}
                className={`px-3 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-mono text-left transition-all ${
                  activeTab === i
                    ? "text-primary bg-primary/5 border-b-2 md:border-b-0 md:border-l-2 border-primary md:-ml-px"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5 border-b-2 md:border-b-0 md:border-l-2 border-transparent md:-ml-px"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-0 md:min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {experiences[activeTab].role}{" "}
                  <span className="text-primary">@ {experiences[activeTab].company}</span>
                </h3>
                <p className="font-mono text-sm text-muted-foreground mb-1">
                  {experiences[activeTab].duration}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  {experiences[activeTab].org}
                </p>
                <ul className="space-y-3">
                  {experiences[activeTab].points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-1.5 text-xs">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
