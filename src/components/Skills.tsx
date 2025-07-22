import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Server, 
  Smartphone, 
  GitBranch, 
  Cloud,
  Palette,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C", "C++", "Java", "Python", "HTML Basics"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Development", 
      icon: Server,
      skills: ["Python", "Flask", "HTML", "Web Applications", "Backend Development"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database & Analytics",
      icon: Database,
      skills: ["SQL", "Data Analytics", "Power BI", "Data Visualization", "Business Intelligence"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Machine Learning & AI",
      icon: Zap,
      skills: ["Machine Learning", "Data Science", "Python ML Libraries", "Predictive Analytics"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      skills: ["Docker Desktop", "Power BI", "Development Tools", "Version Control"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Soft Skills",
      icon: Palette,
      skills: ["Communication", "Quick Learner", "Problem Solving", "Self Driven", "Creative", "Adaptability", "Good Listener"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">Skills & Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I Bring to the{" "}
            <span className="gradient-text">Table</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of modern technologies and tools that I use to build exceptional digital experiences.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={category.title}
                className="group hover-lift bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardContent className="p-6">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 text-xs font-medium bg-secondary/70 hover:bg-secondary transition-smooth"
                        style={{
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </Card>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "20+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover-glow transition-smooth"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;