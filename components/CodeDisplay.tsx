"use client";

import { useState } from "react";
import { Copy, Check, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeDisplayProps {
  componentCode: string;
}

export function CodeDisplay({ componentCode }: CodeDisplayProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFileName = () => {
    const exportMatch = componentCode.match(
      /export\s+(default\s+)?(function|const|class)\s+(\w+)/
    );
    const componentName = exportMatch ? exportMatch[3] : "Component";
    return `${componentName}.tsx`;
  };

  return (
    <div className="space-y-4 mb-16">
      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <FileCode className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <h3 className="text-sm sm:text-base font-semibold truncate">
              {getFileName()}
            </h3>
          </div>

          <Button
            onClick={copyCode}
            className="text-white bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 whitespace-nowrap flex-shrink-0"
            size="sm"
          >
            {copied ? (
              <span className="flex items-center">
                <Check className="w-4 h-4 mr-2" />
                <span>Copied!</span>
              </span>
            ) : (
              <span className="flex items-center">
                <Copy className="w-4 h-4 mr-2" />
                <span>Copy Component</span>
              </span>
            )}
          </Button>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-gray-900">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Next.js</span>
            <span className="text-gray-600">•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

        <div className="relative">
          <SyntaxHighlighter
            language="typescript"
            style={vs2015}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              backgroundColor: "transparent",
              fontSize: "0.875rem",
              lineHeight: "1.5",
            }}
            showLineNumbers={true}
            wrapLongLines={true}
          >
            {componentCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
