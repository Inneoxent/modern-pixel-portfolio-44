import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

// Import all blog images
import reactTypeScriptImg from "@/assets/blog/react-typescript.jpg";
import cssGridImg from "@/assets/blog/css-grid.jpg";
import javascriptEs6Img from "@/assets/blog/javascript-es6.jpg";
import nodejsApiImg from "@/assets/blog/nodejs-api.jpg";
import pythonWebImg from "@/assets/blog/python-web.jpg";

const blogImages: Record<string, string> = {
  "react-typescript": reactTypeScriptImg,
  "css-grid": cssGridImg,
  "javascript-es6": javascriptEs6Img,
  "nodejs-api": nodejsApiImg,
  "python-web": pythonWebImg,
};

const Blog = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="h-full bg-card border-border hover:border-primary transition-all hover:glow-effect cursor-pointer group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blogImages[post.image]}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
