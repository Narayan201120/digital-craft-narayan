import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const skills = ["Python", "Java", "C++", "Machine Learning", "Data Analytics", "Flask"];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Narayan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
              Software Developer & Problem Solver
            </h2>
          </div>

          {/* Description */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating efficient, scalable solutions and bringing ideas to life through code. 
              I love working with modern technologies and building applications that make a difference.
            </p>
          </div>

          {/* Skills badges */}
          <div className="animate-fade-in mb-8" style={{animationDelay: '0.4s'}}>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium hover-glow transition-smooth"
                  style={{animationDelay: `${0.6 + index * 0.1}s`}}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center" style={{animationDelay: '0.8s'}}>
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg font-semibold bg-gradient-primary hover:scale-105 transition-smooth shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg font-semibold border-primary/50 hover:bg-primary/10 hover:scale-105 transition-smooth"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social links */}
          <div className="animate-fade-in mt-12 flex justify-center gap-6" style={{animationDelay: '1s'}}>
            <a 
              href="https://github.com/Narayan201120" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:scale-110 transition-smooth"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/narayan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:scale-110 transition-smooth"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:narayan@example.com"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:scale-110 transition-smooth"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;