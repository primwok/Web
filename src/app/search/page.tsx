"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PageWidth } from "../common/ui/page-width";
import Image from "next/image";
import { CText } from "../common/ui/text-block";

import { CFooter } from "../common/ui/footer";
import { CNotificationBar } from "../common/ui/notification-bar";
import { CMainNavigationMenu } from "../common/ui/main-navigation-menu";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Plus, X } from "lucide-react";
import React from "react";
import { PaginationDemo } from "../common/ui/pagintaion";
import { CInput } from "@/components/ui/custom/input";
import { Input } from "@/components/ui/input";

export const SearchPage = () => {
  return (
    <div>
      <CNotificationBar content="This is a notification" type="info" />
      <CMainNavigationMenu />
      <PageWidth>
        <div className="search-bar bg-white flex items-center justify-center py-6">
          <Input
            placeholder="Search for products"
            // icon={<Plus />}
            // iconPosition="left"
            className="w-full"
          />
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <X className="h-4 w-4" />
            <span className="sr-only">Clear</span>
          </Button>
        </div>
      </PageWidth>
      <div className="bg-gray-100 py-4">
        <PageWidth>
          <div className="filter-container flex flex-col gap-4">
            <div className="filter-buttons">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between gap-4">
                  {/* <h4 className="font-medium">FILTERS</h4>
					<p className="font-xs">Clear All</p> */}
                  <CText
                    tag="h6"
                    content="FILTERS"
                    orientation="left"
                    type="text"
                  />
                  <CText
                    tag="p"
                    content="Clear All"
                    orientation="left"
                    type="text"
                  />
                </div>
                <CText
                  tag="p"
                  content="Sort by"
                  orientation="left"
                  type="text"
                />
              </div>
            </div>
            <div className="filter-grid grid grid-cols-12 gap-4">
              <div className="hidden md:flex md:flex-col gap-2 md:col-span-3">
                <FIlterItem />
                <FIlterItem />
                <FIlterItem />
                <FIlterItem />
              </div>
              <div className="col-span-12 md:col-span-9 flex flex-col gap-3">
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <div className="flex items-right justify-right w-full">
                  <PaginationDemo />
                </div>
              </div>
            </div>
          </div>
        </PageWidth>
      </div>
      <CFooter />
    </div>
  );
};

export default SearchPage;

const FIlterItem = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="flex flex-col bg-white p-3 w-full">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between">
          <CText tag="h6" content="Price" orientation="left" type="text" />
          <CollapsibleTrigger>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

const GridItem = () => {
  return (
    <div className="product bg-white grid grid-cols-12 p-2">
      <div className="col-span-3">
        <Image
          src="https://image-us.samsung.com/us/smartphones/galaxy-z-fold6/gallery/01-Q6-Navy-1600x1200.jpg?$default-400-jpg$"
          alt="product"
          width={200}
          height={200}
        />
      </div>
      <div className="col-span-9 p-2 flex flex-col gap-2 justify-center">
        <h5>Product name</h5>
        <div className="flex flex-col md:flex-row items-start md:justify-start gap-3 w-full">
          <CText tag="h6" content="$18.44" orientation="left" type="text" />
          <CText tag="h6" content="In Stock" orientation="left" type="text" />
        </div>
        <div className="hidden md:flex md:flex-row gap-3">
          <CText tag="p" type="link" content="Learn more" orientation="left" />
          <CText tag="p" type="link" content="Buy now" orientation="left" />
        </div>
      </div>
      <div className="col-span-12 flex flex-col gap-2 items-center md:hidden">
        <Button className="">Buy now</Button>
        <CText tag="p" type="link" content="Learn more" orientation="left" />
      </div>
    </div>
  );
};
