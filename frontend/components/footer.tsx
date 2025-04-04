'use client';

import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <div className={cn("h-12 w-full text-center flex items-center justify-center", className)}>
      <p className="hidden sm:block text-xs text-muted-foreground opacity-70">
        Made with ❤️ by <a href="https://www.linkedin.com/in/maxtkacz/" className="hover:underline" target="_blank" rel="noopener noreferrer">Max</a> and <a href="https://www.linkedin.com/in/oumnyabenhassou/" className="hover:underline" target="_blank" rel="noopener noreferrer">Oumnya</a>
      </p>
    </div>
  );
} 