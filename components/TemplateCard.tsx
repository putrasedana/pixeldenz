import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Template } from "@/types/database";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link href={`/template/${template.slug}`}>
      <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-700 cursor-pointer">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden rounded-t-2xl border-b border-gray-700 group-hover:border-primary transition-colors">
          <Image
            src={template.image}
            alt={template.name}
            fill
            className="object-contain object-center"
          />
        </div>

        {/* Title and Price Container */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            {/* Title with character limit */}
            <h3
              className="text-base truncate max-w-[70%]"
              title={template.name} // Show full title on hover
            >
              {template.name.length > 30
                ? `${template.name.substring(0, 30)}...`
                : template.name}
            </h3>

            {/* Price - aligned inline with title */}
            <Badge
              variant="secondary"
              className="bg-blue-600/20 text-white rounded-sm text-sm font-normal capitalize"
            >
              {!isNaN(Number(template.price)) && template.price !== ""
                ? `$${template.price}`
                : template.price}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}
