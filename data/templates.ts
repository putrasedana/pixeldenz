interface Template {
  name: string;
  description: string;
  price: string | number;
  image: string;
  demoUrl?: string;
  gumroadUrl?: string;
  whatsappUrl?: string;
  framework: string;
  styling: string;
  category: string;
  features: string[];
  is_featured?: boolean;
  slug: string;
}

const templatesData: Template[] = [
  {
    name: "Blog Template A01",
    description:
      "A minimalist and fully responsive blog template designed for writers, developers, and content creators. This template features a clean layout with intuitive navigation, letting your audience explore articles by category, browse recent posts, and learn more about you. It includes essential pages such as Home, Blog, Category, About, Contact, and even an Admin section for managing users. With support for social links and a simple email contact area, this template is ideal for personal blogs, tech journals, or lifestyle sites that focus on readability and engagement. Perfect for anyone who wants a fast-loading, elegant blogging experience without unnecessary complexity.\n\nNote:\nTo keep the template framework-agnostic and easy to maintain, comments and content management are not implemented by default. We recommend integrating a third-party comment system and a headless CMS to handle dynamic content, moderation, and scalability without adding backend complexity.",
    price: 1,
    image: "/assets/blog-template-a01.png",
    demoUrl: "https://blog-template-a01.vercel.app",
    gumroadUrl: "https://pixeldenz.gumroad.com/l/BlogTemplateA01",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want the Blog Template A01",
    framework: "Next.js",
    styling: "Tailwind CSS",
    category: "blog",
    features: [
      "Clean and modern blog layout",
      "Fully responsive on all devices",
      "Category-based article browsing",
      "Dedicated pages for About, Contact, and Blog",
      "Optimized for readability and content focus",
      "Fast performance and lightweight structure",
      "SEO-friendly page structure",
      "Easy to customize and extend",
      "Built with modern frontend best practices",
      "Ready-to-use admin section for users management",
    ],
    is_featured: true,
    slug: "blog-template-a01",
  },
  {
    name: "Portfolio Template A03",
    description:
      "A sleek and modern portfolio template crafted for creatives, freelancers, and professionals. This template features a clean, minimalist layout that highlights your work, skills, and personal brand with clarity and style. It includes essential sections like Hero, About, Projects, Skills, Testimonials, and Contact, making it easy for visitors and potential clients to explore your work and connect with you. Fully responsive and optimized for performance, this portfolio template ensures your content looks great on all devices.",
    price: "Free",
    image: "/assets/portfolio-template-a03.png",
    demoUrl: "https://portfolio-template-a03.netlify.app/",
    gumroadUrl: "https://pixeldenz.gumroad.com/l/PortfolioTemplateA03",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want the Portfolio Template A03",
    framework: "Next.js",
    styling: "Tailwind CSS",
    category: "portfolio",
    features: [
      "Modern and clean design",
      "Responsive and mobile-friendly",
      "Project and skills showcase",
      "Fast and lightweight",
      "Easy customization",
      "SEO-ready structure",
    ],
    is_featured: false,
    slug: "portfolio-template-a03",
  },
];
