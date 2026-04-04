import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="section-container max-w-4xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80"
          >
            <h1 className="text-4xl font-bold mb-8 font-display">Privacy Policy</h1>
            <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              At Vision Dynamic, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our IT solutions and digital services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. This includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Name and Contact Data (email address, phone number)</li>
              <li>Business Information (company name, role)</li>
              <li>Communication History</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the personal information collected via our website for a variety of business purposes described below:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>To provide and deliver products/services you request.</li>
              <li>To respond to your inquiries and offer support.</li>
              <li>To send administrative information to you.</li>
              <li>To improve our digital services and website functionality.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
            <p className="mb-4">
              If you have questions or comments about this privacy policy, you may email us at <strong>visiondynamicpvt@gmail.com</strong> or contact us directly.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;