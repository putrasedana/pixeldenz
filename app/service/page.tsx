import Link from "next/link";
import { Check, Shield, Settings, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Pixeldenz",
  description:
    "Professional template setup, customization, and hosting services. Let's discuss your requirements and budget.",
};

export default function ServicePage() {
  const services = [
    {
      icon: Settings,
      title: "Template Setup",
      description:
        "We'll set up the template with your data, content, and branding.",
    },
    {
      icon: Check,
      title: "Custom Editing",
      description:
        "Modify the template to match your specific requirements and preferences.",
    },
    {
      icon: Globe,
      title: "Hosting & Domain",
      description:
        "Optional hosting with a custom domain name, or use your existing setup.",
    },
  ];

  const process = [
    "Contact us via WhatsApp to discuss your requirements.",
    "We'll provide a customized quote based on your needs.",
    "Once agreed, we start the setup and customization.",
    "We deliver your fully functional website.",
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/20 border-b-2 border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Professional <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let us handle the technical setup while you focus on your business.
          </p>
        </div>
      </section>

      {/* MAIN SERVICE DETAILS */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* LEFT: Main Service Card */}
            <div className="lg:col-span-2">
              <div className="bg-card border rounded-2xl p-8 md:p-10 shadow-lg space-y-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      Template Setup Services
                    </h2>
                    <p className="text-muted-foreground">
                      Complete setup, customization, and hosting solutions.
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-2xl font-bold text-primary">
                      Custom Pricing
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on requirements
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-semibold text-lg">
                    Our Services Include:
                  </h3>
                  <div className="grid gap-4">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg border bg-background/50 hover:shadow-md transition-shadow"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <service.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">
                            {service.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-8">
                  <Link
                    href="https://wa.me/6285600488795?text=Hi!%20I'm%20interested%20in%20your%20template%20setup%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    Discuss on WhatsApp
                  </Link>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Let&apos;s discuss your requirements and budget.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Highlights */}
            <div className="space-y-6">
              {[
                {
                  icon: Settings,
                  title: "Custom Work",
                  desc: "Tailored to your specific needs.",
                },
                {
                  icon: Shield,
                  title: "Professional Quality",
                  desc: "Clean code and best practices.",
                },
                {
                  icon: Check,
                  title: "Flexible Pricing",
                  desc: "Matched to your budget and goals.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CALL TO ACTION */}
          <div className="mt-16 text-center space-y-4">
            <p className="text-muted-foreground">Want to see our work first?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/templates">
                <button className="inline-flex items-center justify-center px-6 py-3 font-medium border rounded-lg hover:bg-accent transition-colors">
                  View Templates
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="inline-flex items-center justify-center px-6 py-3 font-medium border rounded-lg hover:bg-accent transition-colors">
                  See Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            How It Works
          </h2>

          <div className="space-y-4">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-background border"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to get started? Contact us today to discuss your project!
            </p>
            <Link
              href="https://wa.me/6285600488795?text=Hi!%20I'm%20interested%20in%20your%20template%20setup%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:scale-105 rounded-lg transition-all shadow-lg hover:shadow-xl">
                Chat on WhatsApp
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
