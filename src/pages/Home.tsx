import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.jpg";

const Home = () => {
  const handleDownloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Full Stack
                <span className="block text-gradient">Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Passionate about creating elegant solutions with modern web technologies.
                Specializing in React, TypeScript, Python, and all JavaScript frameworks.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
                  View My Work
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleDownloadResume}
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-8 text-sm">
              <div>
                <p className="text-3xl font-bold text-gradient">15+</p>
                <p className="text-muted-foreground">Blog Posts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">Fresh</p>
                <p className="text-muted-foreground">Graduate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">100%</p>
                <p className="text-muted-foreground">Dedication</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse" />
              <img
                src={profileImage}
                alt="Profile"
                className="relative rounded-2xl w-full shadow-2xl border-2 border-primary/20 glow-effect"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Python"].map((skill) => (
              <div
                key={skill}
                className="bg-secondary p-6 rounded-xl border border-border hover:border-primary transition-all hover:glow-effect group cursor-pointer"
              >
                <p className="text-center font-semibold group-hover:text-primary transition-colors">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to bring your project to life?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's collaborate and create something amazing together.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
              Get In Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
