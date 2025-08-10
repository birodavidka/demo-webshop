"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { Separator } from "./ui/separator";
import PriceRange from "./PriceRange";
import SIzeRange from "./SIzeRange";
import { navItems } from "@/app/shared/types";

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
        {navItems.map((navItem) => {
          const href = `/products?cat=${navItem.key}`;
          /*  const isActive = active === c.key; */
          return (
            <Link
              key={navItem.key}
              href={href}
              className={`block rounded-md px-3 py-2 text-xs`}
            >
              {navItem.label}
            </Link>
          );
        })}
      </div>
      <Separator />

      {/* PRICE RANGE PICKER */}
      <PriceRange />
      <Separator />
      {/* SIZE RANGE PICKER */}
      <SIzeRange />
    </div>
  );
}
