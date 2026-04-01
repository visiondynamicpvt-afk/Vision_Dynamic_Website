import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, FolderKanban, Star, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Happy Clients",
    description: "Trusted by businesses worldwide",
  },
  {
    icon: FolderKanban,
    value: 200,
    suffix: "+",
    label: "Projects Completed",
    description: "Delivered with excellence",
  },
  {
    icon: Star,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Client satisfaction guaranteed",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Awards Won",
    description: "Industry recognition",
  },
];

const Counter = ({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span className="stat-value">
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-card/30 relative overflow-hidden">
      {/* Static background blobs — removed useScroll parallax (was forcing repaint every scroll tick) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6"
              >
                <stat.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <div className="mb-2">
                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
