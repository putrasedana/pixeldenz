export interface Template {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  demoUrl?: string;
  gumroadUrl?: string;
  whatsappUrl?: string;
  featured?: boolean;
  badge?: string;
  techStack: string[]; // 🆕 array of icon paths
}

export const featuredTemplates: Template[] = [
  {
    id: "bakery-template-a01",
    name: "Bakery Template A01",
    description:
      "A cozy and elegant website design for bakeries and pastry shops.",
    price: 1,
    image: "/assets/bakery-template-a01.png",
    demoUrl: "https://bakery-template-a01.netlify.app",
    gumroadUrl: "https://yourgumroad.com/bakery-template-a01",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Bakery Template A01",
    techStack: ["react.png", "tailwind.png"],
  },
  {
    id: "bakery-template-a02",
    name: "Bakery Template A02",
    description: "A clean, modern layout ideal for bakeries or dessert shops.",
    price: 1,
    image: "/assets/bakery-template-a02.png",
    demoUrl: "https://bakery-template-a02.netlify.app",
    gumroadUrl: "https://yourgumroad.com/bakery-template-a02",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Bakery Template A02",
    techStack: ["react.png", "tailwind.png"],
  },
  {
    id: "coffeeshop-template-a01",
    name: "Coffeeshop Template A01",
    description: "A stylish and elegant website for coffee shops or cafés.",
    price: 1,
    image: "/assets/coffeeshop-template-a01.png",
    demoUrl: "https://coffeeshop-template-a01.netlify.app",
    gumroadUrl: "https://yourgumroad.com/coffeeshop-template-a01",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Coffeeshop Template A01",
    techStack: ["react.png", "tailwind.png"],
  },
  {
    id: "gym-template-a01",
    name: "Gym Template A01",
    description: "A bold and energetic landing page for gyms.",
    price: 1,
    image: "/assets/gym-template-a01.png",
    demoUrl: "https://gym-template-a01.netlify.app",
    gumroadUrl: "https://yourgumroad.com/gym-template-a01",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Gym Template A01",
    techStack: ["react.png", "tailwind.png"],
  },
  {
    id: "restaurant-template-a01",
    name: "Restaurant Template A01",
    description: "A modern and sleek template for restaurants and fine dining.",
    price: 1,
    image: "/assets/restaurant-template-a01.png",
    demoUrl: "https://restaurant-template-a01.netlify.app",
    gumroadUrl: "https://yourgumroad.com/restaurant-template-a01",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Restaurant Template A01",
    techStack: ["react.png", "tailwind.png"],
  },
  {
    id: "portfolio-template-a01",
    name: "Portfolio Template A01",
    description: "A clean, minimal design perfect for personal portfolios.",
    price: 1,
    image: "/assets/portfolio-template-a01.png",
    demoUrl: "https://portfolio-template-a01.netlify.app",
    gumroadUrl: "https://yourgumroad.com/portfolio-template-a01",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Portfolio Template A01",
    featured: true,
    techStack: ["html.png", "tailwind.png", "javascript.png"],
  },
];
