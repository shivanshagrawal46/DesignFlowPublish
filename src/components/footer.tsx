import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Brand and Social */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <h3 className="font-serif text-xl md:text-2xl font-light text-foreground">Swara Vigyan</h3>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10"
                aria-label="YouTube"
                data-testid="link-youtube"
              >
                <Youtube className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-sm text-muted-foreground">
            <p>© 2024 Swara Vigyan Wellness.</p>
            <div className="flex items-center gap-4 md:gap-6">
              <button className="hover:text-foreground transition-colors" data-testid="link-privacy">
                Privacy Policy
              </button>
              <button className="hover:text-foreground transition-colors" data-testid="link-terms">
                Terms of Service
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
