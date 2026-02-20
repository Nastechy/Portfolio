import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="container mx-auto max-w-5xl pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-mono text-primary mb-5 text-sm md:text-base"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-3 font-heading"
        >
          Ibini Chinasa Joy.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-muted-foreground mb-8 font-heading"
        >
          I build things for the web.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-12"
        >
          Frontend Engineer with 4+ years of experience building scalable SaaS and enterprise 
          web platforms across energy, construction, and workforce management. Specializing in{" "}
          <span className="text-primary">React</span>,{" "}
          <span className="text-primary">Next.js</span>, and{" "}
          <span className="text-primary">TypeScript</span>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <a
            href="#experience"
            className="border border-primary text-primary px-8 py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors inline-block"
          >
            Check out my work →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
