"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const items = [
  {
    id: "1",
    title: "Size",
  },
];

const sizes = [
  {
    id: "1",
    title: "1g",
  },
  {
    id: "2",
    title: "3g",
  },
  {
    id: "3",
    title: "5g",
  },
];

const SIzeRange = (props: Props) => {
  return (
    <div className="space-y-4 w-full items-center">
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-4">
            <AccordionTrigger className="py-2 text-lg font-bold leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="p-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      className="border rounded-md px-3 py-1 hover:bg-gray-100"
                    >
                      {size.title}
                    </button>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SIzeRange;
