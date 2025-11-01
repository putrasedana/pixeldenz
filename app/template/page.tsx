import Link from "next/link";
import { Palette, Smartphone, Zap } from "lucide-react";
import type { Metadata } from "next";
import { featuredTemplates } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";

export const metadata: Metadata = {
  title: "Template Details - Pixeldenz",
  description:
    "Detailed overview of the Pixeldenz Next.js template features, technology stack, and what's included.",
};

export default function TemplatePage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/20 border-b-2 border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Overview
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The template features a clean, modern design that’s ideal for
                  marketing websites, landing pages, portfolios, or any project
                  that requires a polished and professional appearance. Its
                  flexible layout and thoughtful aesthetics ensure your content
                  stands out from day one.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Smartphone className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Mobile, tablet, and desktop optimized
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Palette className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Beautiful design and color scheme
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Lightning-fast page loads
                    </p>
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary rounded-xl flex items-center justify-center border-2 border-dashed border-primary/30">
                <div className="text-center space-y-3">
                  <div className="text-7xl">🖥️</div>
                  <p className="text-muted-foreground font-medium">
                    Desktop View
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 aspect-[9/16] max-w-xs mx-auto bg-gradient-to-br from-primary/20 to-secondary rounded-3xl flex items-center justify-center border-2 border-dashed border-primary/30">
                <div className="text-center space-y-3">
                  <div className="text-6xl">📱</div>
                  <p className="text-muted-foreground font-medium">
                    Mobile View
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Mobile First
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Every component is designed mobile-first, ensuring your site
                  looks perfect on smartphones and scales beautifully to larger
                  screens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ All Templates Section */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Templates</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through every Pixeldenz template available — crafted for
              speed, design, and simplicity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get access to this complete code-based website template for just
              $1
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* ✅ Gumroad Button */}
              <Link
                href="https://pixeldenz.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  Buy on Gumroad
                </button>
              </Link>

              {/* ✅ WhatsApp Button */}
              <Link
                href="https://wa.me/6285600488795?text=Hi!%20I'm%20interested%20in%20purchasing%20your%20$1%20website%20template."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  Buy on WhatsApp
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
