import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ - Pixeldenz",
  description: "Frequently asked questions about the Pixeldenz templates.",
  keywords: [
    "Pixeldenz FAQ",
    "Pixeldenz support",
    "Frequently asked questions about Pixeldenz website templates",
  ],
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What do I get after purchasing?",
      answer:
        "If you purchase through Gumroad, you'll receive instant access to download the full template ZIP file. If you prefer manual payment via WhatsApp, we will send the files directly to you once the payment is confirmed.",
    },
    {
      question: "What is the license?",
      answer:
        "You get a single-use license that allows you to use the template for personal or commercial projects, including client work. You are allowed to modify it freely. However, you may not resell, redistribute, or share the template files. Each final project requires one license.",
    },
    {
      question: "Is there support?",
      answer:
        "Yes, basic support is available through WhatsApp for installation issues or questions. For customization or full setup, you can request the Professional Setup service. Even without support, the template is clean, organized, and easy to understand.",
    },
    {
      question: "What tech stack do I need to use this?",
      answer:
        "You'll need Node.js (version 18 or higher). The template uses Next.js (App Router), React, TypeScript, and Tailwind CSS. Basic knowledge of React/Next.js is recommended, but the structure is beginner-friendly.",
    },
    {
      question: "How do I customize the template?",
      answer:
        "All components are modular and use Tailwind CSS for styling. You can easily customize colors, fonts, spacing, and layout through Tailwind classes or the Tailwind config. Every part of the template is built to be editable and flexible.",
    },
    {
      question: "Can I use this for commercial projects?",
      answer:
        "Yes! You can use the template for personal websites, client work, or business projects. The only restriction is that you cannot resell or share the template itself.",
    },
    {
      question: "Does it work with the latest version of Next.js?",
      answer:
        "Yes. The template is built using the latest Next.js App Router and follows current best practices. It will continue receiving updates to stay compatible.",
    },
    {
      question: "Is the template responsive?",
      answer:
        "Absolutely. Every page and component is fully responsive and mobile-first. The layout adapts beautifully to all screen sizes.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Because this is a low-cost digital product with instant delivery, refunds are not offered. Please check the preview and details before purchasing. If you have questions, feel free to contact us on WhatsApp first.",
    },
    {
      question: "Will there be updates?",
      answer:
        "Yes. All buyers—whether via Gumroad or WhatsApp—receive free lifetime updates whenever improvements or compatibility fixes are released.",
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
              Everything you need to know about the Pizeldenz template
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
    </div>
  );
}
