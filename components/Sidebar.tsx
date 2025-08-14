"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { Separator } from "./ui/separator";
import PriceRange from "./PriceRange";
import SIzeRange from "./SIzeRange";
import { productCategories } from "@/app/shared/types";
import ProductFilter from "./ProductFilter";

export default function Sidebar() {
  const params = useSearchParams();
  const active = params.get("cat") ?? "all";

  return (
    <div className="rounded-xl border p-4 sticky top-24 space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <SlidersHorizontal size={20} />
      </div>

      <Separator />
      <ProductFilter />

      {/*       <div className="space-y-1">
        {productCategories.map((c) => {
          const href = c.key === "all" ? "/products" : `/products?cat=${c.key}`;
          const isActive = active === c.key;
          return (
            <Link
              key={c.key}
              href={href}
              className={`block rounded-md px-3 py-2 text-xs border ${
                isActive ? "bg-transparent text-black" : "bg-white"
              }`}
            >
              {c.label}

            </Link>
          );
        })}
      </div> */}

      <Separator />
      <PriceRange />
      <Separator />
      <SIzeRange />
    </div>
  );
}
