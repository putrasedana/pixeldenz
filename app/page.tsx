import Link from "next/link";
import { Zap, Smartphone, Wrench, TrendingUp } from "lucide-react";
import { TemplateCard } from "@/components/TemplateCard";
import { fetchFeaturedTemplates } from "@/lib/supabase/data-fetching";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixeldenz - Next.js Template for $1",
  description:
    "Get a production-ready, code-based website template for only $1. Fully responsive, well-structured, and designed to be easily customized for any project.",
  keywords: [
    "Pixeldenz store",
    "Buy $1 Next.js website template",
    "Best Next.js website templates for small businesses",
    "Next.js templates and components for developers",
    "Next.js website template setup and customization services",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

async function getTemplates() {
  return await fetchFeaturedTemplates();
}

export default async function Home() {
  const featuredTemplates = await getTemplates();

  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 lg:py-40 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Professional{" "}
              <span className="text-primary">Next.js Templates</span>
              <br />
              for Only $1
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Production‑ready Next.js templates with clean code, modern design,
              and everything you need to launch fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/template" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-blue-600 text-white bg-blue-600 rounded-lg transition-all shadow-lg hover:shadow-xl hover:bg-blue-700 hover:border-blue-700"
                >
                  View Template
                </button>
              </Link>

              <Link href="/service" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-blue-600 text-white rounded-lg transition-all shadow-lg hover:shadow-xl hover:bg-blue-700 hover:border-blue-700"
                >
                  View Service
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Build Fast
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium features without the premium price tag
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 rounded-lg border border-gray-700 bg-card hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Blazing Fast</h3>
              <p className="text-muted-foreground">
                Built on Next.js 16 with App Router for optimal performance and
                SEO
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg border border-gray-700 bg-card hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fully Responsive</h3>
              <p className="text-muted-foreground">
                Looks perfect on every device, from mobile to desktop
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg border border-gray-700 bg-card hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Easy to Customize</h3>
              <p className="text-muted-foreground">
                Clean, well-structured code with Tailwind CSS and UI components
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg border border-gray-700 bg-card hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">SEO Ready</h3>
              <p className="text-muted-foreground">
                Optimized for search engines with proper meta tags and structure
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Templates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our hand-picked selection of premium templates to kickstart your
              next project with style and functionality.
            </p>
          </div>

          {featuredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {featuredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No featured templates available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              For just $1, you get instant access to a professional Next.js
              template that would typically cost $30+. No subscriptions, no
              hidden fees.
            </p>
            <div className="pt-4">
              <Link href="/template">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg transition-all shadow-lg hover:shadow-xl hover:bg-blue-700"
                >
                  Get the Template
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
