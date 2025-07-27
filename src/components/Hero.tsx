import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                Staff Software Engineer
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Satwik Bh
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                8.5 Years of Engineering Excellence
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Badge variant="outline">ML Engineer • 3 years</Badge>
              <Badge variant="outline">SRE • 4 years</Badge>
              <Badge variant="outline">Staff Engineer • 1.5 years</Badge>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate about building scalable systems, machine learning solutions, and 
              site reliability engineering. Currently working as a Staff Software Engineer, 
              driving technical excellence and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/satwikbh" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/satwikbh/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src={profilePhoto} 
                alt="Satwik Bh - Staff Software Engineer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-elegant border-4 border-background"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;