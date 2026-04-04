import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CookiePolicy = () => {
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
            <h1 className="text-4xl font-bold mb-8 font-display">Cookie Policy</h1>
            <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. What are Cookies?</h2>
            <p className="mb-4">
              Cookies are small pieces of data, stored in text files, that are stored on your computer or other device when websites are loaded in a browser. They are widely used to "remember" you and your preferences, either for a single visit (through a "session cookie") or for multiple repeat visits (using a "persistent cookie").
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">
              At Vision Dynamic, we use cookies for various purposes. These include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Understanding how you navigate our site.</li>
              <li>Analyzing our site traffic and performance (like Google Analytics).</li>
              <li>Providing you with a more personalized experience.</li>
              <li>Making our website easier for you to use.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
            <p className="mb-4">
              <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features.
            </p>
            <p className="mb-4">
              <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
            </p>
            <p className="mb-4">
              <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
            <p className="mb-4">
              You can decline the use of cookies at any time by changing your browser settings. However, doing so may impact your experience on our site and limit the services that we can provide.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or other technologies, please email us at <strong>visiondynamicpvt@gmail.com</strong>.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;