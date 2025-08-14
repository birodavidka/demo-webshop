"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { productCategories } from "@/app/shared/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const items = [
  {
    id: "1",
    title: "Filters",
  },
];

type Props = {};

const ProductFilter = (props: Props) => {
  const params = useSearchParams();
  const active = params.get("cat") ?? "all";
  return (
    <div className="space-y-4 w-full items-center">
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-4">
            <AccordionTrigger className="py-2 text-lg font-bold leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="p-4">
              {productCategories.map((c) => {
                const href =
                  c.key === "all" ? "/products" : `/products?cat=${c.key}`;
                const isActive = active === c.key;
                return (
                  <Link
                    key={c.key}
                    href={href}
                    className={`block rounded-md px-3 py-2 text-xs gap-4 hover:border bg-muted ${
                      isActive ? "bg-transparent text-black" : "bg-white"
                    }`}
                  >
                    {c.label}
                  </Link>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ProductFilter;
