import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="section-container max-w-4xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground"
          >
            <h1 className="text-4xl font-bold mb-8 font-display">Terms of Service</h1>
            <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the Vision Dynamic website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services Provided</h2>
            <p className="mb-4">
              Vision Dynamic provides IT solutions, including software development, web development, mobile app development, and cloud services. The materials and services on this website are provided "as is" and without warranties of any kind.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Conduct</h2>
            <p className="mb-4">
              Users agree to use our website and services only for lawful purposes. You agree not to take any action that might compromise the security of the site, render the site inaccessible to others, or otherwise cause damage to the site or the content on it.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              All content included on this site, such as text, graphics, logos, images, digital downloads, and software, is the property of Vision Dynamic or its content suppliers and protected by copyright laws. You may not duplicate, copy, or reuse any portion without our permission.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              Vision Dynamic shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Information</h2>
            <p className="mb-4">
              For any questions regarding these Terms of Service, please contact us at <strong>visiondynamicpvt@gmail.com</strong>.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;