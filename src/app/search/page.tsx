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
import {
  CMainNavigationMenu,
  MobileSheetMenuContent,
} from "../common/ui/main-navigation-menu";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, ListFilter, Plus, Search, X } from "lucide-react";
import React, { useState } from "react";
import { PaginationDemo } from "../common/ui/pagintaion";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FilterHeaderComponent, FilterMenu } from "../feat/products/filter";
import { useProductsQuery } from "../common/api/products/query";
import { RegionContext, useRegions } from "../common/contexts/region.context";
import numeral from "numeral";
import { ProductRating } from "../common/ui/product-cards/rating";

export const SearchPage = () => {
  const { state } = useRegions() as RegionContext;
  const { data, isLoading } = useProductsQuery({
    region_id: state.region as string,
  });
  const products = data?.products;

  return (
    <div className="flex flex-col min-h-screen relative">
      <CNotificationBar content="This is a notification" type="info" />
      <CMainNavigationMenu />
      <section className="bg-white py-5 border-box flex flex-col jsutify-center items-center px-3">
        <PageWidth>
          <div
            className="search-bar bg-white flex gap-2 items-center justify-center border border-gray-500 group rounded-2xl
            px-[1rem] md:w-[40vw] has-[:focus]:border-sky-500 
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
        </PageWidth>
      </section>
      <div className="bg-gray-100 flex flex-col gap-4 pb-[15rem]">
        <FilterHeaderComponent />
        <PageWidth>
          <div className="content grid grid-cols-12 gap-4">
            <div className="md:col-span-3 hidden md:flex  relative h-full">
              <div className="sticky top-[4rem] h-fit w-full flex ">
                <FilterMenu />
              </div>
            </div>
            <div className="col-span-12 md:col-span-9 flex flex-col gap-8">
              <section className="flex flex-col gap-4 px-3 lg:px-0">
                {isLoading && <span>Loading...</span>}
                {products && !products.length && <span>No Products</span>}
                {products &&
                  products.length > 0 &&
                  products?.map((product, key) => (
                    <GridItem product={product} key={key} />
                  ))}
              </section>
              <div className="flex w-full">
                <PaginationDemo />
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

const GridItem: React.FC<{
  product: any;
}> = ({ product }) => {
  if (!product) {
    return null;
  }
  return (
    <div className="product bg-white grid grid-cols-12 p-2">
      <div className="col-span-2">
        <div className="h-full w-full relative">
          <Image
            src={product.thumbnail || "/no-image.png"}
            alt="product"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="col-span-10 p-2 flex flex-col gap-2 justify-center">
        <h6 className="text-lg font-semibold">{product.title}</h6>
        <div className="prices flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8 w-full">
          <div className="flex flex-row gap-2 items-center">
            <h6 className="text-base font-medium">
              ${" "}
              {numeral(product.variants.at(0)?.calculated_price).format(
                "0,0.00"
              ) || 0}
            </h6>
            <h6 className="line-through text-gray-500 text-sm px-[.4rem] py-0">
              ${" "}
              {numeral(product.variants.at(0)?.original_price).format(
                "0,0.00"
              ) || 0}
            </h6>
          </div>
          <ProductRating
            ratings={Array.from({ length: 5 }).map(
              (_, item) => Math.floor(Math.random() * 5) + 1
            )}
          />
        </div>

        <div className="hidden md:flex md:flex-row items-center gap-[4rem] w-full px-[.2rem] py-[.8rem]">
          <p className="max-h-[1.5rem] rounded-lg text-sky-700 text-sm font-medium uppercase underline underline-offset-2">
            Compare
          </p>
          <Button
            className="bg-sky-700 uppercase rounded-3xl px-[2rem] py-[1.3rem] font-semibold"
            size="sm"
          >
            Buy now
          </Button>
        </div>
      </div>
      <div className="col-span-12 flex flex-col gap-3 items-center justify-center md:hidden my-[2rem]">
        <Button
          className="bg-sky-700 uppercase rounded-3xl px-[2rem] py-[1.3rem] font-semibold w-full"
          size="sm"
        >
          Buy now
        </Button>
        <p className="max-h-[1.5rem] rounded-lg text-sky-700 text-sm font-medium uppercase underline underline-offset-2">
          Compare
        </p>
      </div>
    </div>
  );
};
