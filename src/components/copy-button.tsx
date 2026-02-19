
"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  value: string;
  className?: string;
}

export function CopyButton({ value, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className={cn(
        "transition-all duration-300 gap-2 h-8 px-3 rounded-full",
        copied ? "bg-green-50 text-green-600 border-green-200" : "bg-background",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="h-3 w-3" />
          <span className="text-xs font-medium">¡Copiado!</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          <span className="text-xs font-medium">Copiar</span>
        </>
      )}
    </Button>
  );
}
