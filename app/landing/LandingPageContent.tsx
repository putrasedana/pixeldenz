"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  Zap,
  Sparkles,
  ArrowRight,
  Rocket,
  Settings,
  Code,
} from "lucide-react";
import { TemplateCard } from "@/components/TemplateCard";
import { fadeUp, fadeDelayed } from "@/components/animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage({
  featuredTemplates,
}: {
  featuredTemplates: any[];
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 text-foreground">
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-gray-800 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Special Launch Offer</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            The <span className="text-primary">$1 Next.js Template</span>
            <br />
            That Doesn&apos;t Look Like It
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            A premium-quality template with modern design, responsive layout,
            and everything you need to launch fast. For the price of a coffee...
            but way cheaper.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/template"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-blue-600 text-white bg-blue-600 rounded-lg transition-all shadow-lg hover:shadow-xl hover:bg-blue-700 hover:border-blue-700"
            >
              <span>Browse Templates</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/service"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gray-700 bg-transparent font-semibold hover:text-accent-foreground transition-all hover:border-blue-600 text-white"
            >
              <Rocket className="mr-2 w-5 h-5" />
              <span>Professional Setup</span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>100% Responsive</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>SEO Optimized</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Free Updates</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="px-4 sm:px-6 lg:px-8 py-28 border-t border-gray-800 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Pixeldenz Templates?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine beautiful design with developer-friendly code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Blazing Fast",
                description:
                  "Built with Next.js 16 for optimal performance and Core Web Vitals.",
                color: "text-yellow-500",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Modern Design",
                description:
                  "Clean, minimalist layouts designed for high conversion rates.",
                color: "text-purple-500",
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Easy Customization",
                description:
                  "Well‑structured code using Tailwind CSS for quick edits.",
                color: "text-green-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeDelayed}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="bg-card border border-gray-700 rounded-2xl p-8 hover:border-blue-600 hover:shadow-lg transition-all text-center">
                  <div
                    className={`flex items-center mx-auto justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6 ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="px-4 sm:px-6 lg:px-8 py-28 border-t border-gray-800 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium Templates, Simple Price
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of professionally designed templates.
            </p>
          </div>

          {featuredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {featuredTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  variants={fadeDelayed}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <TemplateCard template={template} />
                </motion.div>
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

      {/* FREE COMPONENTS SECTION - UPDATED */}
      <section className="px-4 sm:px-6 lg:px-8 py-28 border-t border-gray-800 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Free Resource</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready-to-Use Free Components
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Copy complete components directly into your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "Hero Sections",
                icon: <Rocket className="w-6 h-6" />,
                description:
                  "Complete hero sections with CTAs, images, and animations",
                examples: "Landing page heroes, product intros",
                color: "from-blue-500/20 to-blue-600/20",
                iconColor: "text-blue-400",
              },
              {
                name: "Feature Sections",
                icon: <Zap className="w-6 h-6" />,
                description:
                  "Feature grids, comparison tables, and benefit showcases",
                examples: "Feature lists, pricing comparisons",
                color: "from-purple-500/20 to-purple-600/20",
                iconColor: "text-purple-400",
              },
              {
                name: "Testimonial Sections",
                icon: <Sparkles className="w-6 h-6" />,
                description:
                  "Customer reviews, testimonials, and case study sections",
                examples: "Review carousels, client logos",
                color: "from-pink-500/20 to-pink-600/20",
                iconColor: "text-pink-400",
              },
              {
                name: "Contact Sections",
                icon: <Settings className="w-6 h-6" />,
                description:
                  "Complete contact forms with validation and styling",
                examples: "Contact forms, newsletter signups",
                color: "from-green-500/20 to-green-600/20",
                iconColor: "text-green-400",
              },
            ].map((component, index) => (
              <motion.div
                key={index}
                variants={fadeDelayed}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="group bg-card border border-gray-700 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300 text-center">
                  <div
                    className={`flex mx-auto items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${component.color} mb-4`}
                  >
                    <div className={component.iconColor}>{component.icon}</div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {component.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {component.description}
                  </p>
                  <div className="text-xs font-medium text-primary">
                    {component.examples}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-card border border-gray-700 rounded-2xl p-8 md:p-10 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full -translate-y-32 translate-x-32" />

            <div className="grid lg:grid-cols-2 gap-10 items-center relative">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Complete Sections, Not Just Pieces
                </h3>
                <p className="text-muted-foreground mb-6">
                  Components that you can copy and paste directly into your
                  React or Next.js projects. Each component includes proper
                  styling, responsiveness, and functionality.
                </p>

                <ul className="space-y-3">
                  {[
                    "Complete sections",
                    "Fully responsive designs",
                    "Copy & paste ready code",
                    "TypeScript included",
                    "Regularly updated",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center lg:text-right">
                <div className="inline-block bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8 mb-6">
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                    FREE
                  </div>
                  <p className="text-muted-foreground">
                    Complete section components
                  </p>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/component"
                    className="inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Code className="mr-2 w-5 h-5" />
                    <span>Browse All Components</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Section Types */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold mb-6">
              Plus Many More Section Types:
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "CTA Sections",
                "Team Sections",
                "FAQ Sections",
                "Pricing Tables",
                "Portfolio Grids",
                "Blog Sections",
                "Etc...",
              ].map((section, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-primary text-sm font-medium border border-blue-500/20"
                >
                  <Check className="w-3 h-3 mr-2" />
                  {section}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Setup Service CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <section className="px-4 sm:px-6 lg:px-8 py-28 border-t border-gray-800 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-gray-700 rounded-2xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Professional Service
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Help with Setup?
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Our team can handle template setup, customization, and
                deployment so you can focus on your business.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
                {[
                  "Template Installation",
                  "Domain & Hosting Setup",
                  "Content Integration",
                  "SEO Optimization",
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <section className="px-4 sm:px-6 lg:px-8 py-28 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Website?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Launch your website faster with templates designed for performance
              and conversions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/template"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-blue-600 text-white bg-blue-600 rounded-lg transition-all shadow-lg hover:shadow-xl hover:bg-blue-700 hover:border-blue-700"
              >
                <span>Browse All Templates</span>
              </Link>

              <Link
                href="/service"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gray-700 bg-transparent font-semibold hover:text-accent-foreground transition-all hover:border-blue-600 text-white"
              >
                <span>View Setup Service</span>
              </Link>
            </div>
          </div>
        </section>
      </motion.div>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-28 border-t border-gray-800 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know before getting started.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How do I receive the template after purchase?",
                answer:
                  "If you buy through Gumroad, you'll instantly receive a download link. If you buy manually via WhatsApp, I will send the files to you directly after payment.",
              },
              {
                question: "Is the $1 template beginner-friendly?",
                answer:
                  "Yes. All templates are clean, well-structured, and easy to customize—perfect for beginners and advanced users.",
              },
              {
                question: "Can I modify the design and components?",
                answer:
                  "Absolutely. Everything is built with Tailwind CSS, so making changes is fast and flexible.",
              },
              {
                question: "Do I get updates?",
                answer:
                  "Yes. Whether you buy via Gumroad or WhatsApp, you will receive free lifetime updates for the template.",
              },
              {
                question: "What if I need help setting things up?",
                answer:
                  "You can contact us directly via WhatsApp for support or request the Professional Setup service if you want us to handle the installation and customization.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold pr-4">{faq.question}</span>
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
