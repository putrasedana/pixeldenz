import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Template } from "@/types/database";

interface TemplateCardProps {
  template: Template;
  priority?: boolean;
}

export function TemplateCard({ template, priority = false }: TemplateCardProps) {
  return (
    <Link href={`/template/${template.slug}`}>
      <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-700 cursor-pointer">
        <div className="relative aspect-video overflow-hidden rounded-t-2xl border-b border-gray-700 group-hover:border-primary transition-colors">
          <Image
            src={template.image}
            alt={template.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center"
            priority={priority}
          />
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base truncate max-w-[80%]" title={template.name}>
              {template.name}
            </h3>
            <Badge variant="secondary" className="bg-blue-600/20 text-white rounded-sm text-sm font-normal capitalize">
              {!isNaN(Number(template.price)) && template.price !== "" ? `$${template.price}` : template.price}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}
