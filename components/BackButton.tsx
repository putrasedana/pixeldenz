"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function BackButton({ title }: { title: ReactNode }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex items-center text-foreground/90 hover:text-primary transition-colors"
    >
      <ChevronLeft className="w-6 h-6" />
      {title}
    </button>
  );
}
