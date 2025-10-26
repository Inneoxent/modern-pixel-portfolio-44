export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a modern React project with TypeScript for type-safe development.",
    content: "React and TypeScript together provide an excellent development experience. TypeScript adds static typing to your React components, catching errors early and improving code quality. In this post, we'll explore how to set up a new project, configure TypeScript, and write type-safe components.",
    date: "2024-01-15",
    category: "React",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Mastering CSS Grid Layout",
    excerpt: "A comprehensive guide to creating responsive layouts with CSS Grid.",
    content: "CSS Grid is a powerful layout system that makes creating complex responsive layouts easier than ever. We'll cover grid containers, grid items, template areas, and advanced techniques for building modern web layouts.",
    date: "2024-01-20",
    category: "CSS",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "JavaScript ES6+ Features You Should Know",
    excerpt: "Essential modern JavaScript features that every developer should master.",
    content: "ES6 and beyond introduced many powerful features to JavaScript. From arrow functions and destructuring to async/await and modules, these features make JavaScript more expressive and easier to work with.",
    date: "2024-02-01",
    category: "JavaScript",
    readTime: "8 min read"
  },
  {
    id: 4,
    title: "Building REST APIs with Node.js",
    excerpt: "Learn to create scalable REST APIs using Node.js and Express.",
    content: "Node.js is perfect for building fast, scalable REST APIs. We'll explore Express.js, middleware, routing, authentication, and best practices for API development.",
    date: "2024-02-10",
    category: "Node.js",
    readTime: "10 min read"
  },
  {
    id: 5,
    title: "Python for Web Development",
    excerpt: "Discover how Python powers modern web applications.",
    content: "Python offers excellent frameworks like Django and Flask for web development. We'll look at Python's strengths in web development, from rapid prototyping to production-ready applications.",
    date: "2024-02-15",
    category: "Python",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Understanding React Hooks",
    excerpt: "Deep dive into React Hooks and how they transform functional components.",
    content: "React Hooks revolutionized how we write React components. Learn about useState, useEffect, useContext, and custom hooks to write cleaner, more maintainable code.",
    date: "2024-02-20",
    category: "React",
    readTime: "9 min read"
  },
  {
    id: 7,
    title: "Responsive Design Best Practices",
    excerpt: "Create websites that look great on all devices.",
    content: "Responsive design is crucial in today's multi-device world. We'll cover mobile-first design, breakpoints, flexible layouts, and testing strategies.",
    date: "2024-02-25",
    category: "CSS",
    readTime: "6 min read"
  },
  {
    id: 8,
    title: "TypeScript Advanced Types",
    excerpt: "Leverage TypeScript's powerful type system for better code.",
    content: "TypeScript's type system is incredibly powerful. Learn about generics, union types, intersection types, and advanced patterns for type-safe code.",
    date: "2024-03-01",
    category: "TypeScript",
    readTime: "11 min read"
  },
  {
    id: 9,
    title: "State Management in React",
    excerpt: "Compare different state management solutions for React applications.",
    content: "From Context API to Redux, Zustand, and Jotai, there are many ways to manage state in React. We'll compare approaches and help you choose the right solution.",
    date: "2024-03-05",
    category: "React",
    readTime: "8 min read"
  },
  {
    id: 10,
    title: "Next.js for Production",
    excerpt: "Build production-ready applications with Next.js.",
    content: "Next.js is a powerful React framework for production. Learn about server-side rendering, static generation, API routes, and deployment strategies.",
    date: "2024-03-10",
    category: "Next.js",
    readTime: "10 min read"
  },
  {
    id: 11,
    title: "Vue.js 3 Composition API",
    excerpt: "Explore Vue 3's Composition API for better code organization.",
    content: "Vue 3's Composition API offers a more flexible way to organize component logic. We'll explore reactive refs, computed properties, and lifecycle hooks.",
    date: "2024-03-15",
    category: "Vue.js",
    readTime: "7 min read"
  },
  {
    id: 12,
    title: "Testing React Applications",
    excerpt: "Best practices for testing React components and applications.",
    content: "Testing is crucial for reliable applications. Learn about Jest, React Testing Library, and strategies for testing components, hooks, and user interactions.",
    date: "2024-03-20",
    category: "React",
    readTime: "9 min read"
  },
  {
    id: 13,
    title: "GraphQL vs REST",
    excerpt: "Understanding when to use GraphQL and when to stick with REST.",
    content: "GraphQL offers flexibility but comes with complexity. We'll compare GraphQL and REST, exploring use cases, trade-offs, and implementation strategies.",
    date: "2024-03-25",
    category: "APIs",
    readTime: "8 min read"
  },
  {
    id: 14,
    title: "Web Performance Optimization",
    excerpt: "Techniques to make your web applications blazingly fast.",
    content: "Performance matters. Learn about code splitting, lazy loading, caching strategies, and tools to measure and improve your application's performance.",
    date: "2024-04-01",
    category: "Performance",
    readTime: "12 min read"
  },
  {
    id: 15,
    title: "Modern DevOps Practices",
    excerpt: "Streamline your development workflow with modern DevOps tools.",
    content: "DevOps practices improve development speed and reliability. Explore CI/CD pipelines, containerization with Docker, and cloud deployment strategies.",
    date: "2024-04-05",
    category: "DevOps",
    readTime: "10 min read"
  }
];
