import { supabase } from "./client";
import {
  DatabaseTemplate,
  DatabaseComponent,
  Template,
  Component,
} from "@/types/database";

// Transform database template to frontend template
function transformTemplate(dbTemplate: DatabaseTemplate): Template {
  return {
    id: dbTemplate.id,
    slug: dbTemplate.slug,
    name: dbTemplate.name,
    description: dbTemplate.description,
    price: dbTemplate.price,
    image: dbTemplate.image,
    demoUrl: dbTemplate.demo_url,
    gumroadUrl: dbTemplate.gumroad_url,
    whatsappUrl: dbTemplate.whatsapp_url,
    framework: dbTemplate.framework,
    styling: dbTemplate.styling,
    category: dbTemplate.category,
    features: dbTemplate.features,
    createdAt: dbTemplate.created_at,
    updatedAt: dbTemplate.updated_at,
    isFeatured: dbTemplate.is_featured,
  };
}

// Transform database component to frontend component
function transformComponent(dbComponent: DatabaseComponent): Component {
  return {
    id: dbComponent.id,
    slug: dbComponent.slug,
    name: dbComponent.name,
    description: dbComponent.description,
    category: dbComponent.category,
    previewImage: dbComponent.preview_image,
    componentCode: dbComponent.component_code,
    createdAt: dbComponent.created_at,
    updatedAt: dbComponent.updated_at,
  };
}

// Fetch all templates
export async function fetchTemplates(): Promise<Template[]> {
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching templates:", error);
    return [];
  }

  return (data || []).map(transformTemplate);
}

// lib/supabase/data-fetching.ts
export async function fetchFeaturedTemplates(): Promise<Template[]> {
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("is_featured", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching featured templates:", error);
    return [];
  }

  return (data || []).map(transformTemplate);
}

// Fetch all components
export async function fetchComponents(): Promise<Component[]> {
  const { data, error } = await supabase
    .from("components")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching components:", error);
    return [];
  }

  return (data || []).map(transformComponent);
}
