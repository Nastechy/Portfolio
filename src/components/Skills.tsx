import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "SQL"],
  },
  {
    title: "Styling",
    skills: ["CSS3", "Tailwind CSS", "SCSS", "Bootstrap", "Material UI", "Ant Design", "Chakra UI"],
  },
  {
    title: "State & Data",
    skills: ["Redux", "React Query", "Axios", "REST APIs", "API Consumption"],
  },
  {
    title: "Testing",
    skills: ["Jest", "Cypress", "Mocha", "Chai"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Jira", "Agile"],
  },
  {
    title: "Concepts",
    skills: ["OOP", "RBAC", "Modular Architecture", "Performance Optimization"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="text-primary font-mono text-lg">04.</span> Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <h3 className="font-mono text-sm text-primary mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-mono rounded-sm hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
