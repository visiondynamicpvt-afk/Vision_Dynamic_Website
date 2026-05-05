/**
 * Navigation Configuration
 * Centralized navigation structure for consistent routing across the app
 */

import type { LucideIcon } from "lucide-react";

export interface NavLink {
  name: string;
  href: string;
  isRoute?: boolean; // true for page routes, false for scroll links
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/", isRoute: true },
  { name: "About", href: "#about", isRoute: false },
  { name: "Services", href: "#services", isRoute: false },
  { name: "Projects", href: "#projects", isRoute: false },
  { name: "Careers", href: "#careers", isRoute: false },
  { name: "Contact", href: "#contact", isRoute: false },
];

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { name: "Home", href: "/", isRoute: true },
  { name: "About Us", href: "#about", isRoute: false },
  { name: "Services", href: "#services", isRoute: false },
  { name: "Careers", href: "#careers", isRoute: false },
];

export const FOOTER_SERVICES_LINKS: NavLink[] = [
  { name: "Web Development", href: "#service-web-development", isRoute: false },
  { name: "Mobile Apps", href: "#service-mobile-apps", isRoute: false },
  { name: "Cloud Solutions", href: "#service-cloud-solutions", isRoute: false },
  { name: "Digital Marketing and IT Consulting", href: "#service-digital-marketing-and-it-consulting", isRoute: false },
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { name: "Privacy Policy", href: "/privacy-policy", isRoute: true },
  { name: "Terms of Service", href: "/terms-of-service", isRoute: true },
  { name: "Cookie Policy", href: "/cookie-policy", isRoute: true },
];

export interface SocialLink {
  icon: LucideIcon; // Lucide icon component
  href: string;
  label: string;
}
