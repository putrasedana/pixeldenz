import Link from "next/link";
import { Zap, Smartphone, Wrench, TrendingUp } from "lucide-react";
import { featuredTemplates } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              The <span className="text-primary">$1 Website Template</span>
              <br />
              That Doesn&apos;t Look Like It
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A premium-quality template with modern design, responsive layout,
              and everything you need to launch fast. For the price of a
              coffee... but way cheaper.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/template" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-blue-600 text-white bg-blue-600 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  View Template
                </button>
              </Link>

              <Link href="/service" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  View Service
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Build Fast
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium features without the premium price tag
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Blazing Fast</h3>
              <p className="text-muted-foreground">
                Optimized for maximum performance and excellent SEO results
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fully Responsive</h3>
              <p className="text-muted-foreground">
                Looks perfect on every device, from mobile to desktop
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Easy to Customize</h3>
              <p className="text-muted-foreground">
                Clean, well-structured code with Tailwind CSS and components
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Templates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover fresh, professionally designed templates to help you
              launch your website quickly and beautifully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredTemplates
              .slice(-6)
              .reverse()
              .map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              For just $1, you get access to a professional template that would
              typically cost $30+. No subscriptions, no hidden fees.
            </p>
            <div className="pt-4">
              <Link href="/template">
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  View All Templates
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
