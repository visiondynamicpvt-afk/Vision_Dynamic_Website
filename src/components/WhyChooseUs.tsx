import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Clock, Trophy, Target, Heart } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We deliver projects on time without compromising quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of industry experience.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support for all your technical needs.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "Consistent success across hundreds of projects.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "We focus on achieving your business objectives.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your satisfaction is our top priority.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" className="py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-primary font-semibold mb-4 tracking-widest uppercase text-sm">
              Why Choose Us
            </p>
            <h2 className="section-title">
              Your Trusted Partner for
              <span className="text-gradient italic"> Digital Excellence</span>
            </h2>
            <p className="section-subtitle mt-6">
              We combine innovation, expertise, and dedication to deliver
              solutions that exceed expectations. Here's why businesses choose
              Vision Dynamic.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="flex gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                >
                  <reason.icon className="h-7 w-7 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-lg">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
