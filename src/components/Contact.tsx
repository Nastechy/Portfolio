import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-2 md:py-16 md:px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-primary text-sm mb-4"
        >
          05. What's Next?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 md:mb-6 font-heading"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-8 md:mb-12 leading-relaxed"
        >
          I'm currently open to new opportunities. Whether you have a question or just want to 
          say hi, my inbox is always open and I'll get back to you!
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href="mailto:Ibinichinasajoy@gmail.com"
          className="border border-primary text-primary px-5 py-3 md:px-8 md:py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors inline-block w-full sm:w-auto text-center"
        >
          Say Hello
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
