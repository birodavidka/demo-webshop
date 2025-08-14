// components/shop/add-to-cart-button.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function AddToCartButton({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  async function handleAdd() {
    try {
      setLoading(true);
      // TODO: ide jön majd a valódi kosár művelet (server action / API)
      await new Promise((r) => setTimeout(r, 600));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      className={cn("h-12 rounded-full text-base", className)}
      onClick={handleAdd}
      disabled={loading}
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      {loading ? "Adding…" : "Add to Cart"}
    </Button>
  );
}
