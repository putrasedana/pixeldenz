export interface DatabaseTemplate {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: string | number;
  image: string;
  demo_url?: string;
  gumroad_url?: string;
  whatsapp_url?: string;
  framework: string;
  styling: string;
  category: string;
  features: string[];
  created_at: string;
  updated_at: string;
  is_featured?: boolean;
}

export type Template = Omit<
  DatabaseTemplate,
  | "demo_url"
  | "gumroad_url"
  | "whatsapp_url"
  | "created_at"
  | "updated_at"
  | "is_featured"
> & {
  demoUrl?: string;
  gumroadUrl?: string;
  whatsappUrl?: string;
  createdAt: string;
  updatedAt: string;
  isFeatured?: boolean;
};

export interface DatabaseComponent {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  preview_image: string;
  component_code: string;
  created_at: string;
  updated_at: string;
}

export type Component = Omit<
  DatabaseComponent,
  "preview_image" | "component_code" | "created_at" | "updated_at"
> & {
  previewImage: string;
  componentCode: string;
  createdAt: string;
  updatedAt: string;
};
