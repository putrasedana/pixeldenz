import Link from "next/link";
import Image from "next/image";
import { Template } from "@/data/templates";
import { ExternalLink } from "lucide-react";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const defaultWhatsappMessage = `Hi! I'm interested in purchasing the ${template.name} template. Can you provide more details?`;
  const whatsappUrl =
    template.whatsappUrl ||
    `https://wa.me/1234567890?text=${encodeURIComponent(
      defaultWhatsappMessage
    )}`;

  const hasDemo = Boolean(template.demoUrl);

  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-700">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden rounded-xl mb-4 border border-gray-700 group-hover:border-primary transition-colors bg-gradient-to-br">
        <Image
          src={template.image}
          alt={template.name}
          fill
          className="object-cover object-center"
        />

        {template.badge && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {template.badge}
          </span>
        )}
      </div>

      {/* Template Info */}
      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
        {template.name}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {template.description}
      </p>

      {/* Tech Stack Images - Added inline between description and price */}
      {template.techStack && template.techStack.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-2">
          {template.techStack.map((techImage, index) => (
            <div key={index} className="relative w-6 h-6 flex-shrink-0">
              <Image
                src={techImage}
                alt={`Tech stack ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      )}

      {/* Price + Demo + Buttons */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-primary text-lg">
            ${template.price}
          </span>

          {hasDemo && (
            <Link
              href={template.demoUrl as string}
              className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        <p className="text-xs text-muted-foreground text-center uppercase tracking-wide">
          Buy Now On
        </p>

        <div className="flex gap-2">
          {template.gumroadUrl && (
            <Link
              href={template.gumroadUrl}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold border border-gray-700 hover:border-blue-600 hover:bg-blue-600 text-white rounded-md transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gumroad
            </Link>
          )}

          <Link
            href={whatsappUrl}
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold border border-gray-700 hover:border-blue-600 hover:bg-blue-600 text-white rounded-md transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
