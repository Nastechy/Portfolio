import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Ibini Chinasa Joy - Frontend Engineer Resume",
};

const experienceSummary =
  "Frontend Engineer with 4+ years of experience building scalable SaaS and enterprise web platforms across energy, construction, workforce management, e-commerce, and auction systems. Strong expertise in React, Next.js, and TypeScript with a focus on performance optimization, modular architecture, role-based access systems, and high-volume operational dashboards.";

const experienceItems = [
  {
    company: "NGML (NNPC Subsidiary: Gas Distribution & Operations Platform)",
    role: "Front-End Engineer",
    duration: "Oct 2023 - Jan 2026",
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
    company: "A4NT Energy: Multi-Role Energy CRM & Sales Platform",
    role: "Front-End Engineer",
    duration: "Oct 2023 - Jan 2026",
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
    company: "Inreli Energy: CRM & Operations Platform",
    role: "Front-End Engineer",
    duration: "Oct 2023 - Jan 2026",
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
    company: "BrissTruct: Construction Project Management SaaS",
    role: "Front-End Developer",
    duration: "Jan 2022 - Sep 2023",
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
    company: "E-commerce Platform",
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
] as const;

const skillGroups = [
  {
    title: "Core",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "SQL", "Redux", "React Query"],
  },
  {
    title: "UI & Styling",
    items: ["HTML", "CSS", "Tailwind CSS", "SCSS", "Bootstrap", "Material UI", "Ant Design", "Chakra UI"],
  },
  {
    title: "Testing",
    items: ["Jest", "Cypress", "Mocha", "Chai"],
  },
  {
    title: "Tools",
    items: ["Git", "Jira", "Agile", "AWS", "Docker", "Axios", "API Consumption", "Documentation"],
  },
] as const;

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold tracking-wide text-white">
            Frontend Resume
          </span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl space-y-10 px-4 py-8 md:space-y-12 md:px-8 md:py-12">
        <header className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-sm">
          <div className="space-y-6 p-6 md:p-8">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Ibini Chinasa Joy</p>
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Frontend Engineer</h1>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">{experienceSummary}</p>
            </div>
            <div className="grid gap-3 text-sm md:grid-cols-2">
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                href="https://github.com/Nastechy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                github.com/Nastechy
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                href="https://www.linkedin.com/in/ibini-chinasa-joy-431a59269"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                linkedin.com/in/ibini-chinasa-joy-431a59269
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                href="mailto:Ibinichinasajoy@gmail.com"
              >
                <Mail className="h-4 w-4" />
                Ibinichinasajoy@gmail.com
              </a>
              <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700">
                <MapPin className="h-4 w-4" />
                Abuja, Nigeria
              </span>
            </div>
          </div>
        </header>

        <section className="space-y-5">
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">Professional Experience</h2>
          <div className="space-y-5">
            {experienceItems.map((item) => (
              <article key={item.company} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">{item.company}</h3>
                    <p className="text-sm font-medium text-slate-700">{item.role}</p>
                    <p className="text-sm text-slate-600">{item.org}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-600">{item.duration}</p>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <h2 className="mb-4 text-xl font-bold tracking-tight">Skills</h2>
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.title} className="space-y-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="space-y-5">
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <h2 className="mb-4 text-xl font-bold tracking-tight">Certifications</h2>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
                <li>The Complete JavaScript Course: From Zero to Expert!</li>
                <li>React JS - Complete Guide for Frontend Web Development</li>
                <li>Advanced CSS and Sass: Flexbox, Grid, Animations and More!</li>
                <li>TypeScript: The Complete Developer&apos;s Guide</li>
                <li>React Testing with Jest and Testing Library</li>
                <li>Next.js: The Complete Guide</li>
              </ul>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <h2 className="mb-2 text-xl font-bold tracking-tight">Languages</h2>
              <p className="text-sm text-slate-700">English</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
