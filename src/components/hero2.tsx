import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBackground from "@assets/generated_images/hero_background.png";
import wellnessImage from "@assets/generated_images/wellness.png";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.9]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            scale,
            transformOrigin: "center center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </motion.div>
      </div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 h-full flex items-start lg:items-center pt-24 sm:pt-28 lg:pt-0"
        style={{ opacity }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-16">
            
            {/* Text Content */}
            <div className="flex-1 space-y-3 sm:space-y-4 lg:space-y-8 text-center lg:text-left max-w-2xl lg:mb-16 pb-8 lg:pb-0">
              <motion.h1 
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white leading-tight" 
                data-testid="heading-hero"
                initial={{ opacity: 0, y: 40 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Find Your Inner Peace
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed" 
                data-testid="text-hero-subtitle"
                initial={{ opacity: 0, y: 40 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Journey into tranquility through guided meditation, transformative yoga, and holistic healing practices
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-4 lg:justify-start justify-center"
                initial={{ opacity: 0, y: 40 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  data-testid="button-hero-cta"
                >
                  Begin Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToServices}
                  className="w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-transparent backdrop-blur-md border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  data-testid="button-hero-explore"
                >
                  Explore Services
                </Button>
              </motion.div>
            </div>

            {/* Wellness Image - Desktop (Absolute positioned from bottom) */}
            <motion.div
              className="hidden lg:block absolute right-0 lg:right-[8%] xl:right-[12%] bottom-0 pointer-events-none"
              initial={{ opacity: 0, y: 100 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src={wellnessImage}
                alt="Wellness Guide"
                className="h-[90vh] w-auto object-contain object-bottom drop-shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
              />
            </motion.div>

            {/* Wellness Image - Mobile/Tablet */}
            <motion.div
              className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none"
              initial={{ opacity: 0, y: 60 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              <img
                src={wellnessImage}
                alt="Wellness Guide"
                className="h-[50vh] sm:h-[60vh] w-auto object-contain object-bottom drop-shadow-2xl"
              />
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToServices}
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 z-20"
          aria-label="Scroll to services"
          data-testid="button-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1, y: [0, 10, 0] } : {}}
          transition={{ 
            opacity: { duration: 0.8, delay: 1.2 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ChevronDown className="h-8 w-8 md:h-10 md:w-10" />
        </motion.button>
      </motion.div>
    </section>
  );
}