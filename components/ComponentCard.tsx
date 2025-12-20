import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Component } from "@/types/database";

interface ComponentCardProps {
  component: Component;
}

export function ComponentCard({ component }: ComponentCardProps) {
  return (
    <Link href={`/component/${component.slug}`}>
      <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-700 cursor-pointer">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden rounded-t-2xl border-b border-gray-700 group-hover:border-blue-600 transition-colors">
          <Image
            src={component.previewImage}
            alt={component.name}
            fill
            className="object-contain object-center"
          />
        </div>

        {/* Title and Badge Container */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3
              className="text-base font-semibold truncate max-w-[70%]"
              title={component.name}
            >
              {component.name}
            </h3>
            <Badge
              variant="secondary"
              className="bg-blue-600/20 text-white rounded-sm text-sm font-normal capitalize"
            >
              {component.category}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}
