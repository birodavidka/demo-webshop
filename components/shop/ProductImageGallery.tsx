// components/shop/product-image-gallery.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductGallery({
  images,
  thumbPosition = "left",
}: {
  images: string[];
  thumbPosition?: "left" | "top";
}) {
  const [active, setActive] = useState(0);

  return (
    <div
      className={cn(
        "grid gap-4",
        thumbPosition === "left"
          ? "grid-cols-[72px_1fr]"
          : "grid-rows-[72px_1fr]"
      )}
    >
      {/* Thumbs */}
      <div
        className={cn(
          "flex gap-2 overflow-auto",
          thumbPosition === "left" ? "flex-col" : "flex-row"
        )}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "relative h-16 w-16 overflow-hidden rounded-xl border transition",
              i === active
                ? "ring-2 ring-primary"
                : "opacity-80 hover:opacity-100"
            )}
            aria-label={`Show image ${i + 1}`}
          >
            <Image src={src} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-muted">
        <Image src={images[active]} alt="" fill className="object-contain" />
      </div>
    </div>
  );
}
