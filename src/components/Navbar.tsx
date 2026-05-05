import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MAIN_NAV_LINKS } from "@/config/navigation";
import { scrollToSectionByHref } from "@/lib/scroll";
import vdLogo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollToSectionByHref(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? "glass bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="section-container relative">
        <div className="w-full h-20 md:h-24 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <motion.img
                src={vdLogo}
                alt="Company Logo"
                className="h-28 w-28 object-contain"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {MAIN_NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    onClick={() => {
                      if (link.href === "/") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors link-underline py-1 text-sm font-medium"
                  >
                    <motion.span whileHover={{ y: -2 }}>
                      {link.name}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors link-underline py-1 text-sm font-medium"
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="rounded-full"
            >
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10, transformOrigin: "top right" }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute right-4 top-20 w-40 px-2 py-3 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl flex flex-col z-50"
            >
              <div className="flex flex-col gap-0 items-center">
                {MAIN_NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * index }}
                    className="w-full"
                  >
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          if (link.href === "/") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium text-center py-2 block w-full"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium text-center py-2 block w-full"
                      >
                        {link.name}
                      </button>
                    )}
                  </motion.div>
                ))}
                <div className="h-px w-[80%] bg-border/50 my-2" />
                <Button
                  variant="hero"
                  size="sm"
                  className="w-[90%] rounded-xl"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
