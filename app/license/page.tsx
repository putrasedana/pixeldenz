import { Check, X } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "License - Pixeldenz",
  description:
    "License terms and usage rights for the Pixeldenz website template.",
  keywords: [
    // Short-tail keywords
    "Pixeldenz license",

    // Long-tail keywords
    "license terms and conditions for Pixeldenz website template",
    "usage rights for purchasing Pixeldenz web template",
    "what you can and cannot do with Pixeldenz template",
  ],
};

export default function LicensePage() {
  const allowed = [
    "Use the template for personal projects",
    "Use the template for client projects",
    "Modify and customize the code freely",
    "Use in commercial applications",
    "Create multiple websites (one license per site)",
    "Remove or modify branding and attribution",
  ];

  const notAllowed = [
    "Resell or redistribute the template",
    "Share the template files with others",
    "Create derivative templates to sell",
    "Make the template available for download",
    "Use across multiple projects with one license",
  ];

  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/20 border-b-2 border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              License <span className="text-primary">Terms</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Simple, straightforward usage rights
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border rounded-2xl p-8 md:p-10 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                License Overview
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  When you purchase the Pixeldenz template, you receive a
                  single-use license that grants you the right to use the
                  template for one project. This license is designed to be
                  straightforward and developer-friendly.
                </p>
                <p>
                  You are free to modify, customize, and adapt the template to
                  fit your needs. Use it for personal projects, client work, or
                  commercial applications. The code is yours to work with once
                  purchased.
                </p>
                <p>
                  The only restriction is that you cannot redistribute or resell
                  the template itself. Each end product (website or application)
                  requires its own license.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">What You Can Do</h3>
                </div>
                <ul className="space-y-3">
                  {allowed.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <X className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">What You Cannot Do</h3>
                </div>
                <ul className="space-y-3">
                  {notAllowed.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-secondary/50 border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Detailed Terms</h3>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    1. Grant of License
                  </h4>
                  <p>
                    Upon purchase, you are granted a non-exclusive,
                    non-transferable license to use the Pixeldenz template to
                    create one end product (website or application) for yourself
                    or a client.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    2. Permitted Uses
                  </h4>
                  <p>
                    You may use the template to create a website or application
                    for personal use or for a single client. You may charge your
                    client for your services. You may modify the template files
                    and create derivative works for your specific project.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    3. Restrictions
                  </h4>
                  <p>
                    You may not redistribute, resell, lease, license, or
                    sub-license the template or any modified version of it. You
                    may not make the template files available for download,
                    either as-is or with modifications. You may not use the
                    template to create derivative templates for sale or
                    distribution.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    4. Multiple Projects
                  </h4>
                  <p>
                    If you want to use the template for multiple projects, you
                    need to purchase a separate license for each project. A
                    project is defined as a single end product (one website or
                    application).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    5. Ownership
                  </h4>
                  <p>
                    Pixeldenz retains ownership of the template. Your license is
                    for use only, not ownership. All intellectual property
                    rights remain with Pixeldenz.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    6. No Warranty
                  </h4>
                  <p>
                    The template is provided as-is without warranty of any kind.
                    We are not responsible for any damages resulting from the
                    use of this template.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
