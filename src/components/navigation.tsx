import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex-shrink-0">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex flex-col items-start hover-elevate active-elevate-2 rounded-md px-2 py-1 transition-colors duration-500 text-foreground"
                data-testid="link-logo"
              >
                <span className="font-serif text-2xl md:text-3xl font-light leading-tight">
                  Swara Vigyan
                </span>
                <span className="text-[9px] md:text-[10px] font-light text-muted-foreground tracking-wide leading-tight mt-0.5">
                  The path to divine Success
                </span>
              </button>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              <Button
                variant="ghost"
                size="default"
                onClick={() => scrollToSection("services")}
                className="transition-colors duration-500 text-foreground hover:text-foreground/80"
                data-testid="link-services"
              >
                Services
              </Button>
              <Button
                variant="ghost"
                size="default"
                onClick={() => scrollToSection("programs")}
                className="transition-colors duration-500 text-foreground hover:text-foreground/80"
                data-testid="link-programs"
              >
                Programs
              </Button>
              <Button
                variant="ghost"
                size="default"
                onClick={() => scrollToSection("about")}
                className="transition-colors duration-500 text-foreground hover:text-foreground/80"
                data-testid="link-about"
              >
                About
              </Button>
              <Button
                variant="default"
                size="default"
                onClick={() => scrollToSection("contact")}
                className="transition-all duration-300"
                data-testid="button-begin-journey"
              >
                Begin Journey
              </Button>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-colors duration-500 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-6 px-8">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("services")}
              className="text-xl w-full"
              data-testid="link-services-mobile"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("programs")}
              className="text-xl w-full"
              data-testid="link-programs-mobile"
            >
              Programs
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("about")}
              className="text-xl w-full"
              data-testid="link-about-mobile"
            >
              About
            </Button>
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-xl w-full"
              data-testid="button-begin-journey-mobile"
            >
              Begin Journey
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
