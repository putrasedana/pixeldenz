import type { Metadata } from "next";
import LandingPageContent from "./LandingPageContent";
import { fetchFeaturedTemplates } from "@/lib/supabase/data-fetching";

export const metadata: Metadata = {
  title: "Professional Website Templates for $1 | Pixeldenz",
  description:
    "Get production-ready Next.js website templates for only $1. Modern designs, clean code, and everything you need to launch fast.",
  keywords: [
    "$1 Next.js template",
    "Next.js templates for $1",
    "Pixeldenz templates",
    "website launch fast",
  ],
  openGraph: {
    title: "Professional Website Templates for $1 | Pixeldenz",
    description:
      "Get production-ready Next.js website templates for only $1. Special Deal! Pricing goes up soon.",
    images: [
      {
        url: "/assets/landing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pixeldenz Template Showcase",
      },
    ],
    type: "website",
    url: "https://pixeldenz.store/landing",
  },
};

async function getTemplates() {
  return await fetchFeaturedTemplates();
}

export default async function LandingPage() {
  const featuredTemplates = await getTemplates();
  return <LandingPageContent featuredTemplates={featuredTemplates} />;
}
