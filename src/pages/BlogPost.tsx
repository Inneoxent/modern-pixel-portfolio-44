import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
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

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <article className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 hover:text-primary">
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Button>
          </Link>

          <div className="space-y-6">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-xl overflow-hidden border border-border">
              <img
                src={blogImages[post.image]}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-px bg-border" />

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">Key Takeaways</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Master the fundamentals before moving to advanced concepts</li>
                  <li>Practice regularly with real-world projects</li>
                  <li>Stay updated with the latest best practices</li>
                  <li>Join developer communities and learn from others</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="flex gap-4">
                <Link to="/blog" className="flex-1">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    More Articles
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
