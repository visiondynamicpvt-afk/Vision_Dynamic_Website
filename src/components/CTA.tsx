import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-sky-500/5" />
      
      {/* Animated decorative elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"
      />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Let's Build Something Amazing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="section-title"
          >
            Ready to Transform Your
            <span className="text-gradient italic"> Digital Future?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="section-subtitle mx-auto mt-6 mb-12"
          >
            Partner with Vision Dynamic and unlock the full potential of your
            business. Let's create innovative solutions that drive growth and
            success together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-5"
          >
            <Button
              variant="hero"
              size="xl"
              className="group rounded-full"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Your Project
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="rounded-full"
              onClick={() =>
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
