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

type Props = {};

const items = [
  {
    id: "1",
    title: "",
  },
];

const PriceRange = (props: Props) => {
  const [value, setValue] = useState([25, 75]);
  return (
    <div className="space-y-4 w-full items-end">
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="">
              <div className="space-y-4">
                <Slider
                  value={value}
                  onValueChange={setValue}
                  aria-label="Dual range slider with output"
                />
                <div className="flex items-center justify-between gap-2">
                  <output className="text-sm font-medium tabular-nums">
                    {value[0]} - {value[1]}
                  </output>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PriceRange;
