import Link from "next/link";
import { Shield, Settings, Globe, Brush, Wrench, DollarSign } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Pixeldenz",
  description:
    "Professional template setup, customization, and hosting services. Let's discuss your requirements and budget.",
  keywords: [
    "Pixeldenz services",
    "Next.js template setup services",
    "Professional Next.js template setup and customization service",
  ],
};

export default function ServicePage() {
  const services = [
    {
      icon: Settings,
      title: "Template Setup",
      description: "We set up the template using your text, images, and branding.",
    },
    {
      icon: Brush,
      title: "Design Tweaks",
      description: "We adjust colors, layout, and style to match your look.",
    },
    {
      icon: Wrench,
      title: "Extra Features",
      description: "We add special features or functions you need.",
    },
    {
      icon: Globe,
      title: "Hosting & Domain",
      description: "We can provide hosting and a domain, or use your own.",
    },
    {
      icon: Shield,
      title: "Professional Quality",
      description: "Clean, fast, and well-built for long-term use.",
    },
    {
      icon: DollarSign,
      title: "Flexible Pricing",
      description: "Prices that fit your budget and project size.",
    },
  ];

  const process = [
    "Message us on WhatsApp to share what you need.",
    "We send you a simple quote based on your request.",
    "After you agree, we start working on your website.",
    "We finish and deliver your ready-to-use website.",
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Professional <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            High‑quality setup, customization, and hosting for your Next.js templates.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 sm:mb-10 md:mb-12">
            What You Get
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl border bg-background/40 hover:bg-background/60 transition-all duration-200"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-1.5">{service.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 px-4">
            Tell us your budget & needs — we will adjust the offer.
          </p>
        </div>
      </section>
      {/* PROCESS SECTION */}
      <section className="py-24 bg-secondary/20 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 sm:mb-10 md:mb-12">
            How It Works
          </h2>

          <div className="space-y-5 text-left">
            {process.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-xl bg-background border hover:bg-background/70 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="text-muted-foreground text-base">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">Ready to Elevate Your Digital Presence?</p>
            <Link
              href="https://wa.me/6285600488795?text=Hi!%20I'm%20interested%20in%20your%20template%20setup%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              WhatsApp us now!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
