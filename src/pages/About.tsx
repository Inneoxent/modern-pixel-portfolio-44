import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  { category: "Frameworks", items: ["React", "Vue.js", "Next.js", "Angular", "Svelte"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "Flask"] },
  { category: "Tools", items: ["Git", "VS Code", "Webpack", "Vite"] },
];

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20" />
            <img
              src={profileImage}
              alt="Profile"
              className="relative rounded-2xl w-full max-w-md mx-auto shadow-2xl border-2 border-primary/20 glow-effect"
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium mb-2">About Me</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Fresh Graduate</span> Ready to Innovate
              </h1>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with expertise in modern web technologies.
                Despite being a fresh graduate with no professional experience yet, I've dedicated
                countless hours to mastering the craft of web development.
              </p>
              <p>
                My journey in programming has equipped me with proficiency in HTML, CSS, JavaScript,
                TypeScript, Python, and all major JavaScript frameworks including React, Vue, Next.js,
                Angular, and Svelte.
              </p>
              <p>
                I'm eager to contribute to innovative projects and grow alongside a dynamic team.
                My goal is to create impactful digital experiences that solve real-world problems.
              </p>
            </div>

            <Button 
              size="lg" 
              onClick={handleDownloadResume}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-secondary p-6 rounded-xl border border-border hover:border-primary transition-all hover:glow-effect"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Education & Learning</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Self-Taught Developer</h3>
                  <p className="text-primary">Continuous Learning</p>
                </div>
                <span className="text-muted-foreground">2020 - Present</span>
              </div>
              <p className="text-muted-foreground">
                Dedicated to mastering web development through online courses, documentation,
                personal projects, and community engagement. Focused on building a strong
                foundation in both frontend and backend technologies.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Recent Graduate</h3>
                  <p className="text-primary">Computer Science</p>
                </div>
                <span className="text-muted-foreground">2024</span>
              </div>
              <p className="text-muted-foreground">
                Completed comprehensive studies in computer science fundamentals,
                algorithms, data structures, and software engineering principles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
