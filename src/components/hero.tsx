import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import wellnessImage from "@assets/generated_images/wellness.png";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

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
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[hsl(40,20%,97%)] via-[hsl(40,25%,95%)] to-[hsl(40,30%,92%)]">
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(145,30%,45%) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      {/* Elegant Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[hsl(145,30%,45%)] to-transparent opacity-40" />

      {/* Desktop Layout */}
      <div className="hidden lg:block h-screen">
        <div className="h-full max-w-[1600px] mx-auto px-8 lg:px-16 xl:px-24">
          <div className="h-full grid grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="col-span-6 xl:col-span-5 space-y-8 py-24">
              
              {/* Elegant Label */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-12 h-[1px] bg-[hsl(145,30%,45%)]" />
                <span className="text-xs tracking-[0.3em] uppercase text-[hsl(145,30%,38%)] font-medium">
                  Wellness & Meditation
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 
                  className="font-serif text-6xl xl:text-7xl font-light text-[hsl(30,8%,20%)] leading-[1.1] tracking-tight"
                  data-testid="heading-hero"
                >
                  Find Your
                </h1>
                <h1 className="font-serif text-6xl xl:text-7xl font-light text-[hsl(30,8%,20%)] leading-[1.1] tracking-tight">
                  <span className="text-[hsl(145,30%,40%)]">Inner</span> Peace
                </h1>
              </motion.div>

              {/* Elegant Divider */}
              <motion.div
                className="flex items-center gap-4 py-2"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="w-16 h-[1px] bg-gradient-to-r from-[hsl(145,30%,45%)] to-transparent" />
                <div className="w-2 h-2 rounded-full border border-[hsl(145,30%,45%)]" />
              </motion.div>

              {/* Subtitle */}
              <motion.p 
                className="text-lg xl:text-xl text-[hsl(30,6%,40%)] font-light leading-relaxed max-w-md"
                data-testid="text-hero-subtitle"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Journey into tranquility through guided meditation, transformative yoga, and holistic healing practices designed for your well-being.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex items-center gap-5 pt-6"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="text-sm tracking-wider px-8 py-6 bg-[hsl(145,30%,45%)] text-white hover:bg-[hsl(145,30%,38%)] border-0 rounded-sm font-medium transition-colors duration-300 shadow-lg shadow-[hsl(145,30%,45%)]/25"
                  data-testid="button-hero-cta"
                >
                  Begin Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToServices}
                  className="text-sm tracking-wider px-8 py-6 bg-transparent border border-[hsl(145,30%,45%)]/40 text-[hsl(30,8%,25%)] hover:bg-[hsl(145,30%,45%)]/10 hover:border-[hsl(145,30%,45%)] rounded-sm font-medium transition-colors duration-300"
                  data-testid="button-hero-explore"
                >
                  Explore Services
                </Button>
              </motion.div>

              {/* Stats/Trust Indicators */}
              <motion.div 
                className="flex items-center gap-12 pt-12 border-t border-[hsl(40,12%,85%)] mt-8"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-serif text-[hsl(30,8%,20%)]">15+</div>
                  <div className="text-xs tracking-wider uppercase text-[hsl(145,30%,40%)] mt-1">Years Experience</div>
                </div>
                <div className="w-[1px] h-12 bg-[hsl(40,12%,85%)]" />
                <div className="text-center">
                  <div className="text-3xl font-serif text-[hsl(30,8%,20%)]">2000+</div>
                  <div className="text-xs tracking-wider uppercase text-[hsl(145,30%,40%)] mt-1">Students Guided</div>
                </div>
                <div className="w-[1px] h-12 bg-[hsl(40,12%,85%)]" />
                <div className="text-center">
                  <div className="text-3xl font-serif text-[hsl(30,8%,20%)]">50+</div>
                  <div className="text-xs tracking-wider uppercase text-[hsl(145,30%,40%)] mt-1">Programs</div>
                </div>
              </motion.div>
            </div>

            {/* Right - Image Section */}
            <div className="col-span-6 xl:col-span-7 h-full flex items-end justify-center relative">
              
              {/* Decorative Elements Behind Image */}
              <div className="absolute bottom-16 right-[10%] w-[400px] h-[500px] bg-gradient-to-t from-[hsl(145,30%,45%)]/15 to-transparent rounded-t-full blur-3xl" />
              <div className="absolute bottom-16 right-[15%] w-[300px] h-[400px] border border-[hsl(145,30%,45%)]/20 rounded-t-full" />
              
              {/* Main Image - Shifted Up */}
              <motion.div
                className="relative z-10 mb-8"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <img
                  src={wellnessImage}
                  alt="Wellness Guide"
                  className="h-[82vh] w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(76,114,91,0.25)]"
                />
              </motion.div>

              {/* Floating Quote Card - Shifted Up */}
              <motion.div 
                className="absolute left-0 xl:left-8 top-[22%] bg-white/90 backdrop-blur-sm p-6 max-w-[240px] shadow-xl shadow-[hsl(145,30%,45%)]/10 border border-[hsl(40,15%,90%)] rounded-sm"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-[hsl(145,30%,45%)] text-4xl font-serif leading-none mb-3">"</div>
                <p className="text-sm text-[hsl(30,6%,35%)] italic leading-relaxed">
                  The present moment is filled with joy and happiness. If you are attentive, you will see it.
                </p>
                <div className="mt-4 pt-3 border-t border-[hsl(40,15%,90%)]">
                  <span className="text-xs tracking-wider uppercase text-[hsl(145,30%,40%)]">Dr. Rishi Narayan Shambharkar</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen flex flex-col">
        
        {/* Top Content */}
        <div className="flex-1 flex flex-col justify-center px-6 pt-24 pb-8">
          
          {/* Elegant Label */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-8 h-[1px] bg-[hsl(145,30%,45%)]" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-[hsl(145,30%,38%)] font-medium">
              Wellness & Meditation
            </span>
            <div className="w-8 h-[1px] bg-[hsl(145,30%,45%)]" />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 
              className="font-serif text-4xl sm:text-5xl font-light text-[hsl(30,8%,20%)] leading-[1.15] tracking-tight"
              data-testid="heading-hero-mobile"
            >
              Find Your <span className="text-[hsl(145,30%,40%)]">Inner</span> Peace
            </h1>
          </motion.div>

          {/* Elegant Divider */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[hsl(145,30%,45%)] to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full border border-[hsl(145,30%,45%)]" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent via-[hsl(145,30%,45%)] to-transparent" />
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-base text-[hsl(30,6%,40%)] font-light leading-relaxed text-center max-w-sm mx-auto mb-8"
            data-testid="text-hero-subtitle-mobile"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Journey into tranquility through guided meditation and holistic healing practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto text-sm tracking-wider px-8 py-5 bg-[hsl(145,30%,45%)] text-white hover:bg-[hsl(145,30%,38%)] border-0 rounded-sm font-medium transition-colors duration-300 shadow-lg shadow-[hsl(145,30%,45%)]/25"
              data-testid="button-hero-cta-mobile"
            >
              Begin Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="w-full sm:w-auto text-sm tracking-wider px-8 py-5 bg-transparent border border-[hsl(145,30%,45%)]/40 text-[hsl(30,8%,25%)] hover:bg-[hsl(145,30%,45%)]/10 rounded-sm font-medium transition-colors duration-300"
              data-testid="button-hero-explore-mobile"
            >
              Explore Services
            </Button>
          </motion.div>
        </div>

        {/* Bottom Image Section */}
        <motion.div
          className="relative flex-shrink-0 z-0"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Decorative Arc */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-gradient-to-t from-[hsl(145,30%,45%)]/10 to-transparent rounded-t-full blur-2xl" />
          
          {/* Image */}
          <div className="relative flex justify-center -mb-12">
            <img
              src={wellnessImage}
              alt="Wellness Guide"
              className="h-[42vh] sm:h-[48vh] w-auto object-contain object-bottom drop-shadow-[0_15px_40px_rgba(76,114,91,0.2)]"
            />
          </div>
        </motion.div>

        {/* Mobile Stats Bar */}
        <motion.div 
          className="relative z-10 bg-[hsl(145,30%,38%)] py-4 px-6"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex items-center justify-around max-w-md mx-auto">
            <div className="text-center">
              <div className="text-xl font-serif text-white">15+</div>
              <div className="text-[9px] tracking-wider uppercase text-white/70">Years</div>
            </div>
            <div className="w-[1px] h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-xl font-serif text-white">2000+</div>
              <div className="text-[9px] tracking-wider uppercase text-white/70">Students</div>
            </div>
            <div className="w-[1px] h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-xl font-serif text-white">50+</div>
              <div className="text-[9px] tracking-wider uppercase text-white/70">Programs</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <motion.button
        onClick={scrollToServices}
        className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 text-[hsl(145,30%,40%)] hover:text-[hsl(145,30%,30%)] transition-colors duration-300 z-20"
        aria-label="Scroll to services"
        data-testid="button-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Discover</span>
        <ChevronDown className="h-5 w-5" />
      </motion.button>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[hsl(145,30%,45%)]/30 to-transparent" />
    </section>
  );
}
