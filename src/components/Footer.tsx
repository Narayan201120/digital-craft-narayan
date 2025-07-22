import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/20 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Main footer text */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-primary" />
            <span>by Narayan</span>
          </div>

          {/* Tech stack */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground/80 mb-6">
            <span>Made with React, TypeScript, Tailwind CSS</span>
            <Coffee className="h-4 w-4" />
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground/60">
            © {currentYear} Narayan. All rights reserved.
          </div>

          {/* Fun message */}
          <div className="mt-4 text-xs text-muted-foreground/40">
            Thanks for visiting! Let's build something amazing together.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;