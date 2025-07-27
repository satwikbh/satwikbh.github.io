import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to top */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>

          {/* Logo */}
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Satwik Bh
            </h3>
            <p className="text-muted-foreground mt-2">
              Staff Software Engineer • ML • SRE
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/satwikbh" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/satwikbh/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:satwikbh@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8 w-full">
            <p>
              © {new Date().getFullYear()} Satwik Bh. All rights reserved.
            </p>
            <p className="mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;