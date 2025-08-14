// components/shop/qty-stepper.tsx
"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function QtyStepper() {
  const [qty, setQty] = useState(5);

  return (
    <div className="flex items-center gap-2 rounded-full border bg-muted/40 px-2 py-2">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setQty((q) => Math.max(1, q - 1))}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <div className="w-10 text-center text-base font-medium">{qty}</div>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setQty((q) => q + 1)}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
