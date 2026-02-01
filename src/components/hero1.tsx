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
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center md:bg-center bg-[center_30%]"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            scale,
            transformOrigin: "center center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </motion.div>
      </div>

      <motion.div 
        className="relative z-10 flex items-center justify-center h-full px-6 md:px-8 lg:px-12"
        style={{ opacity }}
      >
        <div className="max-w-4xl space-y-8 text-center md:text-left lg:mr-16">
          <motion.h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight" 
            data-testid="heading-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Find Your Inner Peace
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl md:mx-0 mx-auto" 
            data-testid="text-hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Journey into tranquility through guided meditation, transformative yoga, and holistic healing practices
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 md:justify-start justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="text-base md:text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              data-testid="button-hero-cta"
            >
              Begin Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="text-base md:text-lg px-8 py-6 bg-transparent backdrop-blur-md border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
              data-testid="button-hero-explore"
            >
              Explore Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="hidden lg:block flex-shrink-0 ml-8"
          initial={{ opacity: 0, x: 50 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <img
            src={wellnessImage}
            alt="Wellness"
            className="h-[90vh] max-h-[90vh] w-auto object-contain"
          />
        </motion.div>

        <motion.button
          onClick={scrollToServices}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300"
          aria-label="Scroll to services"
          data-testid="button-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1, y: [0, 10, 0] } : {}}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.8 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}
