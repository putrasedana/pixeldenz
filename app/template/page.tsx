import type { Metadata } from "next";
import FilterableTemplates from "@/components/FilterableTemplates";
import { fetchTemplates } from "@/lib/supabase/data-fetching";

export const metadata: Metadata = {
  title: "Templates - Pixeldenz",
  description:
    "Detailed overview of the Pixeldenz website template features, technology stack, and what's included.",
  keywords: ["Pixeldenz templates", "Next.js website templates for $1"],
};

async function getTemplates() {
  return await fetchTemplates();
}

export default async function TemplatePage() {
  const templates = await getTemplates();

  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/20 border-b-2 border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              All <span className="text-primary">Templates</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fully customizable, responsive, and optimized templates to
              jumpstart your project.
            </p>
          </div>
        </div>
      </section>

      {/* All Templates Section */}
      <section className="py-20 md:py-28">
        <FilterableTemplates templates={templates} />
      </section>
    </div>
  );
}
