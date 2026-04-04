export function scrollToSectionByHref(href: string) {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });

    // Optional glow effect for targeted elements (like specific service cards)
    if (href.startsWith("#service-")) {
      setTimeout(() => {
        element.classList.add(
          "ring-4", 
          "ring-primary", 
          "ring-offset-4", 
          "ring-offset-background",
          "scale-105",
          "z-50"
        );
        
        setTimeout(() => {
          element.classList.remove(
            "ring-4", 
            "ring-primary", 
            "ring-offset-4", 
            "ring-offset-background",
            "scale-105",
            "z-50"
          );
        }, 1500); // Glow lasts 1.5 seconds
      }, 500); // Wait for scroll to finish
    }
  }
}
