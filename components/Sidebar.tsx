"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { Separator } from "./ui/separator";
import PriceRange from "./PriceRange";

const categories = [
  { key: "men-clothes", label: "Men" },
  { key: "women-clothes", label: "Women" },
  { key: "accessories", label: "Accessories" },
];

export default function Sidebar() {
  const params = useSearchParams();
  /*  const active = params.get("cat") ?? "men-clothes"; */

  return (
    <div className="rounded-xl border p-4 sticky top-24 space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <SlidersHorizontal size={20} />
      </div>
      <Separator />
      <div className="space-y-1">
        {categories.map((c) => {
          const href = `/products?cat=${c.key}`;
          /*  const isActive = active === c.key; */
          return (
            <Link
              key={c.key}
              href={href}
              className={`block rounded-md px-3 py-2`}
            >
              {c.label}
            </Link>
          );
        })}
      </div>
      <Separator />
      {/* ide jöhet ár csúszka, méret, szín, stb. */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Price</h2>
        <PriceRange />
      </div>
      <Separator />
    </div>
  );
}
