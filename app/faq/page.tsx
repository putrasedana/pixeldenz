import Link from "next/link";
import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ - Pixeldenz",
  description:
    "Frequently asked questions about the Pixeldenz Next.js template.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What do I get after purchasing?",
      answer:
        "After purchase, you'll receive access to the complete template source code as a ZIP file. This includes all pages, components, styles, and configuration files. You can then set it up locally and customize it to fit your needs.",
    },
    {
      question: "What is the license?",
      answer:
        "You receive a single-use license that allows you to use the template for personal projects or client work. You can modify and customize it freely. However, you cannot resell, redistribute, or share the template files. Each project/site requires one license.",
    },
    {
      question: "Is there support?",
      answer:
        "While we don't offer dedicated support for the $1 price point, the code is well-documented and follows best practices. The template uses standard, widely-documented technologies (React, Next.js, Tailwind CSS) so you'll find plenty of community resources available.",
    },
    {
      question: "What tech stack do I need to use this?",
      answer:
        "You'll need Node.js (version 18 or higher) installed on your computer. The template uses Next.js 14, React 18, TypeScript, and Tailwind CSS. Basic knowledge of React and Next.js is recommended, but the clean code structure makes it beginner-friendly.",
    },
    {
      question: "How do I customize the template?",
      answer:
        "The template is built with customization in mind. Colors, fonts, and spacing use Tailwind CSS classes and CSS variables that can be easily modified. All components are modular and well-organized. Simply edit the Tailwind config for global styles, or modify individual components as needed.",
    },
    {
      question: "Can I use this for commercial projects?",
      answer:
        "Yes! You can use this template for both personal and commercial projects, including client work. The only restriction is that you cannot resell or redistribute the template itself.",
    },
    {
      question: "Is the template responsive?",
      answer:
        "Absolutely! Every component and page is fully responsive and mobile-first. The design looks great on smartphones, tablets, and desktop screens of all sizes.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Given the $1 price point and instant digital delivery nature of the product, we don't offer refunds. However, we encourage you to review the template details and preview pages before purchasing to ensure it meets your needs.",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/20 border-b-2 border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the Pixeldenz template
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
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
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground">
              We’re here to help! If you didn’t find the answer you were looking
              for, feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link
                href="https://wa.me/6285600488795?text=Hi!%20I’m%20interested%20in%20your%20template%20and%20have%20some%20questions."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600  rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  Chat on WhatsApp
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
