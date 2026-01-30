import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowUp,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
    { name: "IT Consulting", href: "#services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border/50 backdrop-blur-sm">
      <div className="section-container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="inline-block mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-2xl font-bold font-display">
                <span className="text-gradient">Vision</span>
                <span className="text-foreground"> Dynamic</span>
              </span>
            </motion.a>
            <p className="text-muted-foreground max-w-xs mb-8 leading-relaxed">
              Transforming businesses through innovative technology solutions.
              Your trusted partner for digital excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border/50"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Vision Dynamic. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
            >
              Back to top
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
