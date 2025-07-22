import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Folder, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "My_Portfolio",
      description: "Personal portfolio website built with React showcasing skills, projects, and professional experience. Features responsive design and modern UI components.",
      image: "/api/placeholder/600/400",
      tech: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
      githubUrl: "https://github.com/Narayan201120/My_Portfolio",
      liveUrl: "https://narayan201120.github.io/My_Portfolio",
      featured: true,
      stars: 0
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analysis using Python and Flask. Features real-time data processing and business intelligence insights.",
      image: "/api/placeholder/600/400",
      tech: ["Python", "Flask", "SQL", "Power BI", "Data Analytics"],
      githubUrl: "https://github.com/Narayan201120/data-analytics-dashboard",
      liveUrl: "https://analytics-dashboard-demo.com",
      featured: true,
      stars: 0
    },
    {
      title: "Machine Learning Classifier",
      description: "Python-based machine learning project implementing various classification algorithms. Includes data preprocessing, model training, and performance evaluation.",
      image: "/api/placeholder/600/400",
      tech: ["Python", "Machine Learning", "Data Science", "SQL"],
      githubUrl: "https://github.com/Narayan201120/ml-classifier",
      liveUrl: "https://ml-classifier-demo.com",
      featured: false,
      stars: 0
    },
    {
      title: "Flask Web Application",
      description: "Full-stack web application built with Flask framework. Features user authentication, database integration, and RESTful API endpoints.",
      image: "/api/placeholder/600/400", 
      tech: ["Python", "Flask", "SQL", "HTML", "Web Development"],
      githubUrl: "https://github.com/Narayan201120/flask-web-app",
      liveUrl: "https://flask-app-demo.com",
      featured: false,
      stars: 0
    },
    {
      title: "Data Visualization Tool",
      description: "Interactive data visualization tool using Python and Power BI. Transforms raw data into meaningful insights with dynamic charts and reports.",
      image: "/api/placeholder/600/400",
      tech: ["Python", "Power BI", "Data Analytics", "SQL"],
      githubUrl: "https://github.com/Narayan201120/data-viz-tool",
      liveUrl: "https://dataviz-demo.com",
      featured: false,
      stars: 0
    },
    {
      title: "Docker Containerized App",
      description: "Containerized application demonstrating Docker best practices. Includes multi-stage builds, environment configuration, and deployment strategies.",
      image: "/api/placeholder/600/400",
      tech: ["Docker", "Python", "Flask", "Containerization"],
      githubUrl: "https://github.com/Narayan201120/docker-app",
      liveUrl: "https://docker-app-demo.com",
      featured: false,
      stars: 0
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <Folder className="h-4 w-4" />
            <span className="text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects That{" "}
            <span className="gradient-text">Matter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in building scalable, user-focused applications across different domains.
          </p>
        </div>

        {/* Featured projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Star className="h-6 w-6 text-accent" />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover-lift bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-secondary rounded-t-lg flex items-center justify-center">
                    <div className="text-6xl opacity-20">🚀</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Star className="h-4 w-4" />
                        <span>{project.stars} stars</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      Featured
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:scale-105 transition-smooth"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Other Notable Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover-lift bg-card/30 backdrop-blur-sm border border-border/30 overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3" />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="flex-1 h-8 text-xs"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8 text-xs"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View more projects */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 border-primary/50 hover:bg-primary/10 transition-smooth"
            asChild
          >
            <a href="https://github.com/Narayan201120" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
