import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, checkout, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "bg-gradient-to-br from-primary to-accent"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task tracker with real-time updates and team features.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather data visualization with forecasts and alerts.",
    tech: ["React", "TypeScript", "Chart.js", "API"],
    image: "bg-gradient-to-br from-cyan-500 to-blue-600"
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support and SEO optimization.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    image: "bg-gradient-to-br from-green-500 to-emerald-600"
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics across platforms.",
    tech: ["React", "Python", "FastAPI", "D3.js"],
    image: "bg-gradient-to-br from-pink-500 to-rose-600"
  },
  {
    id: 6,
    title: "Portfolio Generator",
    description: "Automated portfolio website generator with customizable themes.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "bg-gradient-to-br from-orange-500 to-red-600"
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-card border-border hover:border-primary transition-all hover:glow-effect group overflow-hidden">
                <div className={`h-48 ${project.image} opacity-50 group-hover:opacity-70 transition-opacity`} />
                
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary/10">
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                      <ExternalLink className="mr-2" size={16} />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
