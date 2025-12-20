import { notFound } from "next/navigation";
import Image from "next/image";
import { CodeDisplay } from "@/components/CodeDisplay";
import { fetchComponents } from "@/lib/supabase/data-fetching";
import { Component } from "@/types/database";
import BackButton from "@/components/BackButton";

export const revalidate = false;

async function getComponents() {
  return await fetchComponents();
}

interface ComponentDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const componentsData = await getComponents();
  return componentsData.map((component) => ({
    slug: component.slug,
  }));
}

export default async function ComponentDetailPage({
  params,
}: ComponentDetailPageProps) {
  const { slug } = await params;
  const componentsData = await getComponents();
  const component = componentsData.find((c: Component) => c.slug === slug);

  if (!component) {
    notFound();
  }

  return (
    <div className="bg-secondary/20 py-8 sm:py-12 md:py-20 lg:py-28">
      {/* Navigation */}
      <div className="max-w-5xl mx-auto border-b border-gray-700">
        <div className="py-3 sm:py-4 px-4 sm:px-6 lg:px-0">
          <div className="flex items-center justify-between">
            <BackButton
              title={
                <>
                  <span className="hidden sm:inline">Back to Components</span>
                  <span className="sm:hidden inline">Back</span>
                </>
              }
            />
            <h1 className="text-lg sm:text-xl font-semibold">
              Component Details
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              {component.name}
            </h2>
          </div>
        </div>

        {/* Component Preview */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <div className="bg-card border border-gray-700 rounded-xl sm:rounded-2xl">
            <div className="relative aspect-[4/3] sm:h-[550px] w-full">
              <Image
                src={component.previewImage}
                alt={component.name}
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>

        {/* Component Code Section */}
        <div className="mb-8 sm:mb-10">
          <CodeDisplay componentCode={component.componentCode} />
        </div>
      </div>
    </div>
  );
}
