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
  techStack: string[];
}

export const featuredTemplates: Template[] = [
  {
    id: "bakery-template-a01",
    name: "Bakery Template A01",
    description:
      "A cozy and elegant website design for bakeries and pastry shops.",
    price: 1,
    image: "/assets/bakery-template-a01.webp",
    demoUrl: "https://bakery-template-a01.netlify.app",
    gumroadUrl: "https://pixeldenz.gumroad.com/l/BakeryTemplateA01",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Bakery Template A01",
    techStack: ["react.webp", "tailwind.webp"],
  },
  {
    id: "bakery-template-a02",
    name: "Bakery Template A02",
    description: "A clean, modern layout ideal for bakeries or dessert shops.",
    price: 1,
    image: "/assets/bakery-template-a02.webp",
    demoUrl: "https://bakery-template-a02.netlify.app",
    gumroadUrl: "https://pixeldenz.gumroad.com/l/BakeryTemplateA02",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Bakery Template A02",
    techStack: ["react.webp", "tailwind.webp"],
  },
  {
    id: "coffeeshop-template-a01",
    name: "Coffeeshop Template A01",
    description: "A stylish and elegant website for coffee shops or cafés.",
    price: 1,
    image: "/assets/coffeeshop-template-a01.webp",
    demoUrl: "https://coffeeshop-template-a01.netlify.app",
    gumroadUrl: "https://pixeldenz.gumroad.com/l/CoffeeshopTemplateA01",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Coffeeshop Template A01",
    techStack: ["react.webp", "tailwind.webp"],
  },
  {
    id: "gym-template-a01",
    name: "Gym Template A01",
    description: "A bold and energetic website template perfect for gyms.",
    price: 1,
    image: "/assets/gym-template-a01.webp",
    demoUrl: "https://gym-template-a01.netlify.app",
    gumroadUrl: "https://pixeldenz.gumroad.com/l/GymTemplateA01",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Gym Template A01",
    techStack: ["react.webp", "tailwind.webp"],
  },
  {
    id: "restaurant-template-a01",
    name: "Restaurant Template A01",
    description: "A modern and sleek template for restaurants and fine dining.",
    price: 1,
    image: "/assets/restaurant-template-a01.webp",
    demoUrl: "https://restaurant-template-a01.netlify.app",
    gumroadUrl: "https://pixeldenz.gumroad.com/l/RestaurantTemplateA01",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Restaurant Template A01",
    techStack: ["react.webp", "tailwind.webp"],
  },
  {
    id: "portfolio-template-a01",
    name: "Portfolio Template A01",
    description:
      "A clean, minimal design perfect for showcasing photography portfolios.",
    price: 1,
    image: "/assets/portfolio-template-a01.webp",
    demoUrl: "https://portfolio-template-a01.netlify.app",
    gumroadUrl: "https://pixeldenz.gumroad.com/l/PortfolioTemplateA01",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Portfolio Template A01",
    featured: true,
    techStack: ["react.webp", "tailwind.webp"],
  },
  {
    id: "restaurant-template-a02",
    name: "Restaurant Template A02",
    description:
      "A sleek, elegant design perfect for showcasing restaurant menus and gourmet experiences.",
    price: 1,
    image: "/assets/restaurant-template-a02.webp",
    demoUrl: "https://restaurant-template-a02.netlify.app",
    gumroadUrl: "https://pixeldenz.gumroad.com/l/RestaurantTemplateA02",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Restaurant Template A02",
    featured: true,
    techStack: ["react.webp", "tailwind.webp"],
  },
  {
    id: "babershop-template-a01",
    name: "Babershop Template A01",
    description:
      "Clean, modern layout perfect for showcasing your barbershop services and style.",
    price: 1,
    image: "/assets/barbershop-template-a01.webp",
    demoUrl: "https://babershop-template-a01.netlify.app",
    gumroadUrl: "https://pixeldenz.gumroad.com/l/BabershopTemplateA01",
    whatsappUrl:
      "https://wa.me/6285600488795?text=Hi! I want to buy the Babershop Template A01",
    featured: true,
    techStack: ["react.webp", "tailwind.webp"],
  },
];
