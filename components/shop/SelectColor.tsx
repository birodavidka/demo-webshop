// components/shop/select-color.tsx
"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Color = { key: string; hex: string };

export default function SelectColor({ colors }: { colors: Color[] }) {
  const [sel, setSel] = useState<string | null>(colors[0]?.key ?? null);

  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((c) => (
        <button
          key={c.key}
          onClick={() => setSel(c.key)}
          className={cn(
            "relative h-9 w-9 rounded-full border shadow-sm transition",
            "ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          )}
          style={{ backgroundColor: c.hex }}
          aria-pressed={sel === c.key}
          aria-label={c.key}
        >
          {sel === c.key && (
            <span className="absolute inset-0 flex items-center justify-center">
              <Check className="h-4 w-4 text-white" />
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
