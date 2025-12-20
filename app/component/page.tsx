import FilterableComponents from "@/components/FilterableComponents";
import { fetchComponents } from "@/lib/supabase/data-fetching";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Components - Pixeldenz",
  description:
    "Get free, copy and paste ready components for your Next.js or React projects. Includes buttons, cards, navigation, forms, and more.",
  keywords: [
    "Free Next.js components",
    "React components",
    "Tailwind CSS components",
    "Pixeldenz free components",
  ],
};

export const dynamic = "force-dynamic";

async function getComponents() {
  return await fetchComponents();
}

export default async function ComponentsPage() {
  const componentsData = await getComponents();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/20 border-b-2 border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Free <span className="text-primary">Components</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use, components to enhance your React or Next.js
              projects. Copy, paste, and customize.
            </p>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-20 md:py-28">
        <FilterableComponents components={componentsData} />
      </section>
    </div>
  );
}
