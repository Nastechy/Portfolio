import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Nastechy", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ibini-chinasa-joy-431a59269", label: "LinkedIn" },
  { icon: Mail, href: "mailto:Ibinichinasajoy@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-8 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-xs font-mono text-muted-foreground">
          Built by Ibini Chinasa Joy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
