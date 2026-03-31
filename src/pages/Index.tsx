import { lazy, Suspense, type ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const Projects = lazy(() => import("@/components/Projects"));
const CTA = lazy(() => import("@/components/CTA"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = ({ minHeight = "min-h-[360px]" }: { minHeight?: string }) => (
  <section className={`w-full ${minHeight} relative overflow-hidden bg-background`} aria-hidden="true">
    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-background via-muted/30 to-background" />
  </section>
);

const LazySection = ({
  children,
  minHeight,
}: {
  children: ReactNode;
  minHeight?: string;
}) => (
  <Suspense fallback={<SectionSkeleton minHeight={minHeight} />}>
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  </Suspense>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LazySection>
        <About />
      </LazySection>
      <LazySection>
        <Services />
      </LazySection>
      <LazySection>
        <Projects />
      </LazySection>
      <LazySection>
        <WhyChooseUs />
      </LazySection>
      <LazySection minHeight="min-h-[280px]">
        <CTA />
      </LazySection>
      <LazySection>
        <TeamSection />
      </LazySection>
      <LazySection minHeight="min-h-[420px]">
        <Contact />
      </LazySection>
      <LazySection minHeight="min-h-[260px]">
        <Footer />
      </LazySection>
    </div>
  );
};

export default Index;
