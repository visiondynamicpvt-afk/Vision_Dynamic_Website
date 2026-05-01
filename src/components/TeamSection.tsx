import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import TeamCard from "@/components/TeamCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import rajnishImage from "@/assets/images/rajnish.jpeg";
import pratikImage from "@/assets/images/team-2.JPG.jpeg";
import srijanImage from "@/assets/images/team-6.jpeg";
import utsavImage from "@/assets/images/image.png";
import animeshImage from "@/assets/images/team-4.jpeg";
import sajanImage from "@/assets/images/IMG_1756.PNG";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  email?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rajnish Chaudhary",
    position: "CEO & Founder",
    department: "Leadership",
    email: "visiondynamicrajnishchaudhary@gmail.com",
    linkedin: "https://www.linkedin.com/in/rajnishchaudhary?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/_rajnishchaudhary_?igsh=dHBtb3Z1NWh6Ymox",
    facebook: "https://www.facebook.com/share/1GQm25xiqn/",
    image: rajnishImage,
  },
  {
    id: 2,
    name: "Pratik Chaudhary",
    position: "Co-Founder/Full Stack Developer",
    department: "Engineering",
    email: "visiondynamicpratikchaudhary@gmail.com",
    linkedin: "http://linkedin.com/in/pratik-chaudhary-web",
    instagram: "https://www.instagram.com/ig_pratik0p?igsh=MWVrZGI4Mm8wMHl6NA%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1GQhzwfbq7/?mibextid=wwXIfr",
    image: pratikImage,
  },
  {
    id: 6,
    name: "Sajan Amatya",
    position: "Project Manager/Frontend Lead",
    department: "Management",
    email: "visiondynamicsajanamatya@gmail.com",
    linkedin: "https://www.linkedin.com/in/sajan-amatya-web?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram: "https://www.instagram.com/sazen_29?igsh=enZuOGMzN2VrYzRy&utm_source=qr",
    facebook: "https://www.facebook.com/share/186gPEYExq/?mibextid=wwXIfr",
    image: sajanImage,
  },
  {
    id: 3,
    name: "Srijan Rijal",
    position: "Frontend Developer/QA Engineer",
    department: "Engineering",
    email: "visiondynamicsrijanrijal@gmail.com",
    linkedin: "https://www.linkedin.com/in/srijan-rijal-264a64259/",
    instagram: "https://www.instagram.com/the.srjn/",
    facebook: "https://www.facebook.com/srijan.rijal.825991",
    image: srijanImage,
  },
  {
    id: 4,
    name: "Utsav Shrestha",
    position: "Backend Developer/Security Engineer",
    department: "Engineering",
    email: "visiondynamicutsavshrestha@gmail.com",
    linkedin: 'https://www.linkedin.com/in/utsav-stha-b378b5259/', 
    instagram: 'https://www.instagram.com/uts4v_shrestha?igsh=NXRuNG91dTA1b2Y5', 
    facebook: 'https://www.facebook.com/utsav.shrestha.7' ,
    image: utsavImage,
  },
  {
    id: 5,
    name: "Animesh Pyakurel",
    position: "UI/UX Designer/Frontend Developer",
    department: "Design",
    email: "visiondynamicanimeshpyakurel@gmail.com",
    linkedin: "https://www.linkedin.com/in/animesh-pyakurel-6178b1259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/ani.mesh_19?utm_source=qr&igsh=N3hxbmZhYTc3NjVp",
    facebook: "https://www.facebook.com/share/1BgK86N3V4/",
    image: animeshImage,
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-16 md:py-28 bg-background relative" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-semibold mb-4 tracking-widest uppercase text-sm">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            Meet our <span className="text-gradient">Founder</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary behind Vision Dynamic. Passionate about driving innovation, 
            excellence, and scaling digital ecosystems for your success.
          </p>
        </motion.div>

        {/* CEO Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-lg mt-8"
        >
          <div className="flex flex-col md:flex-row">
            {/* CEO Image */}
            <div className="w-full h-[400px] md:h-auto md:w-2/5 md:min-h-[500px] relative overflow-hidden group">
              <img 
                src={rajnishImage} 
                alt="Rajnish Chaudhary - CEO" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-6 md:p-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">Rajnish Chaudhary</h3>
                  <p className="text-primary font-medium md:text-lg mt-1">CEO & Founder</p>
                </div>
              </div>
            </div>
            
            {/* CEO Message & Details */}
            <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-12 flex flex-col justify-center space-y-6 text-left">
              <div className="relative">
                <span className="text-6xl text-primary/20 absolute -top-4 -left-4 font-serif">"</span>
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground relative z-10 italic">
                  At Vision Dynamic, our goal is to bridge the gap between imagination and reality. We build digital ecosystems that scale with your ambitions.
                </p>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed pt-4 border-t border-border">
                <p>
                  As the founding visionary of the company, Rajnish brings strategic foresight and an unwavering commitment to innovative technology. His career has been defined by a passion for solving complex business challenges across full-stack paradigms.
                </p>
                <p>
                  Under his leadership, Vision Dynamic is navigating the future of tech, fostering an environment where a highly-skilled team can deliver groundbreaking platforms, robust web presence, and exceptional user experiences.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <a href={teamMembers[0].linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Carousel (Hidden for now but preserved for future use) */}
        {false && (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={member.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <TeamCard member={member} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12 h-10 w-10 md:h-12 md:w-12" />
            <CarouselNext className="hidden sm:flex -right-4 md:-right-12 h-10 w-10 md:h-12 md:w-12" />
          </Carousel>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-card border border-border text-center"
          >
            <p className="text-4xl font-bold text-gradient mb-2">
              {teamMembers.length}+
            </p>
            <p className="text-muted-foreground">Team Members</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-card border border-border text-center"
          >
            <p className="text-4xl font-bold text-gradient mb-2">5+</p>
            <p className="text-muted-foreground">Departments</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-card border border-border text-center"
          >
            <p className="text-4xl font-bold text-gradient mb-2">100%</p>
            <p className="text-muted-foreground">Dedicated</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
