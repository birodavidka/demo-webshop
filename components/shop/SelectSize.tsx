// components/shop/select-size.tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SelectSize({ sizes }: { sizes: string[] }) {
  const [sel, setSel] = useState<string | null>(sizes[1] ?? sizes[0] ?? null);

  return (
    <div className="flex flex-wrap gap-3">
      {sizes.map((s) => {
        const active = s === sel;
        return (
          <button
            key={s}
            onClick={() => setSel(s)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              active
                ? "bg-foreground text-background"
                : "bg-background hover:bg-muted"
            )}
            aria-pressed={active}
          >
            {s}
          </button>
        );
      })}
    </div>
  );
}
