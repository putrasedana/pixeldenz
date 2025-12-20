"use client";

import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DependencyCopyButtonProps {
  dependencies: string[];
}

export function DependencyCopyButton({
  dependencies,
}: DependencyCopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(`npm install ${dependencies.join(" ")}`);
  };

  return (
    <Button variant="ghost" size="sm" onClick={handleCopy}>
      <Copy className="w-4 h-4" />
    </Button>
  );
}
