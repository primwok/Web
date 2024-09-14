"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { PlusIcon, MinusIcon, ListFilter } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { PageWidth } from "@/modules/common/components/page-width";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CartButton } from "../cart/cartButton";
import { MobileSheetMenuContent } from "@/modules/common/components/main-navigation";
import { SearchTriggerBtn } from "./search-button";
import { SearchOverlayComponent } from "./search-overlay";

export const FIlterItem = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="flex flex-col bg-white p-4 w-full">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between">
          {/* <CText tag="h6" content="Price" placement="left" type="text" /> */}
          <h6 className="text-sm font-bold text-gray-900 uppercase">Price</h6>
          <CollapsibleTrigger>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              {isOpen ? <MinusIcon /> : <PlusIcon />}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="flex flex-col gap-2 p-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-center justify-between">
                <Checkbox className="rounded-full" />
                <p className="text-sm">N 1000 - N 2000</p>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export const FilterHeaderComponent = () => {
  const [isVisible, setIsVisible] = useState<null | boolean>(null);

  useEffect(() => {
    const target = document.querySelector(".main-menu");

    if (target) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null, // Observes the viewport
          rootMargin: "0px",
          threshold: 0.1, // Trigger when 10% of the element is visible
        }
      );

      observer.observe(target);

      return () => {
        if (target) {
          observer.unobserve(target);
        }
      };
    }
  }, []);

  return (
    <PageWidth>
      <div className="filter-buttons my-4 lg:h-[4rem] bg-white sticky  top-0 z-[1]">
        <div className="flex items-center justify-between h-full p-4 border-box sticky top-0">
          <div className="flex items-center justify-between gap-4">
            {/* SMall devices */}
            <Sheet>
              <SheetTrigger asChild>
                <div
                  className="h-fit flex items-center justify-start lg:hidden bg-white 
				px-[1.5rem] py-[.2rem] border-box h-[3rem] gap-2 rounded-lg border border-dashed border-gray-500 focus:border-orange-500"
                >
                  <ListFilter className="h-4 w-4" />
                  <h4 className="font-semibold text-sm uppercase">Filter</h4>
                  <span className="sr-only">Toggle</span>
                </div>
              </SheetTrigger>
              <SheetContent side="left" className="">
                <SheetHeader>
                  <SheetTitle>Filter</SheetTitle>
                  <SheetDescription>Filter your search</SheetDescription>
                  <Separator />
                  <FilterMenu />
                </SheetHeader>
              </SheetContent>
            </Sheet>
            {/*  large devices */}

            <h4 className="font-bold text-sm  text-gray-800 hidden lg:block">
              FILTERS
            </h4>
            <Separator
              orientation="vertical"
              className="h-[1rem] bg-gray-500"
            />
            <h4 className="font-medium text-sm  text-sky-800 hidden lg:block uppercase underline underline-offset-2">
              SORT BY
            </h4>
            <p className="font-medium text-sm text-sky-800  hidden lg:block uppercase underline underline-offset-2">
              Clear All
            </p>
          </div>
          {isVisible === false && (
            <div className="flex flex-row gap-5 items-center">
              <SearchOverlayComponent />
              <CartButton height={6} width={6} />
              <div className="xl:hidden">
                <MobileSheetMenuContent />
              </div>
            </div>
          )}
        </div>
      </div>
    </PageWidth>
  );
};

export const FilterMenu = () => {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)] w-full flex flex-col gap-2 pb-4 bg-white w-full">
      <FIlterItem />
      <Separator />
      <FIlterItem />
      <Separator />
      <FIlterItem />
      <Separator />
      <FIlterItem />
      <Separator />
      <FIlterItem />
      <Separator />
      <FIlterItem />
      <Separator />
      <FIlterItem />
      <Separator />
      <FIlterItem />
      <Separator />
      <FIlterItem />
      <Separator />
      <FIlterItem />
      <Separator />
      <FIlterItem />
      <Separator />
      <FIlterItem />
      <Separator />
    </ScrollArea>
  );
};
