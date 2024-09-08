import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { SearchTriggerBtn } from "./search-button";
import { Input } from "@/components/ui/input";
import { Plus, Search, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const SearchOverlayComponent: React.FC = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <SearchTriggerBtn />
      </DrawerTrigger>
      <DrawerContent className="h-[calc(100vh-4rem)]">
        <DrawerHeader className="flex flex-col items-center">
          <DrawerTitle>Search </DrawerTitle>
          <DrawerDescription>Search for products</DrawerDescription>
          <div className="flex flex-col gap-[2rem] h-full">
            <div
              className="search-bar bg-white flex gap-2 items-center justify-center border border-gray-500 group rounded-2xl
					px-[1rem] md:w-[60vw] has-[:focus]:border-sky-500 
					has-[:focus]:ring-ring has-[:focus]:ring-sky-200  has-[:focus]:ring-1 h-[3rem] mx-auto
		   "
            >
              <Search className="w-5 h-5" />
              <Separator orientation="vertical" />
              <Input
                placeholder="Search for products"
                className="border-0 focus-visible:border-none focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-none focus-visible:ring-0"
              />
              <Separator orientation="vertical" />
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <X className="h-4 w-4" />
                <span className="sr-only">Clear</span>
              </Button>
            </div>
            <div className="filter-container flex wrap justify-center gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  className="border border-gray-500 font-normal  rounded-full px-[1rem] py-1 text-xs"
                  key={index}
                >
                  Item {index}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-3">
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
              <Button>GO</Button>
            </div>
          </div>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
