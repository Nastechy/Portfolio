import { motion } from "framer-motion";
import profileImg from "@/assets/profile-placeholder.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="text-primary font-mono text-lg">01.</span> About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-muted-foreground leading-relaxed flex-1"
          >
            <p>
              I'm a frontend engineer who enjoys building accessible, pixel-perfect user interfaces 
              that live at the intersection of thoughtful design and solid engineering. My experience 
              spans enterprise gas distribution platforms, energy CRMs, construction project management 
              tools, and more.
            </p>
            <p>
              I've worked extensively in regulated and enterprise environments, collaborating with 
              cross-functional teams to deliver secure, production-grade applications. I focus on{" "}
              <span className="text-foreground">performance optimization</span>,{" "}
              <span className="text-foreground">modular architecture</span>, and{" "}
              <span className="text-foreground">role-based access systems</span>.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to team processes, 
              and continuously refining my craft.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group shrink-0 mx-auto md:mx-0"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded overflow-hidden">
              <img
                src={profileImg}
                alt="Ibini Chinasa Joy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-300 rounded" />
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
