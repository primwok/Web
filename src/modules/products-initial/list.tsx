"use client";

import { RegionContext, useRegions } from "@/lib/contexts/region.context";
import { useProductsQuery } from "@/app/api/products/query";
import { PageWidth } from "@/modules/common/components/page-width";
import { PaginationDemo } from "@/modules/common/components/pagintaion";
import React from "react";
import { ProductCard } from "@/modules/common/components/product-cards/product-card";
import { FilterMenu, FilterHeaderComponent, FIlterItem } from "./filter";

export const ProductList = () => {
  const { state } = useRegions() as RegionContext;
  const { data, isLoading } = useProductsQuery({
    region_id: state.region as string,
  });
  const products = data?.products;

  return (
    <div className="bg-slate-100 flex flex-col gap-4 pb-[15rem]">
      <FilterHeaderComponent />
      <PageWidth>
        <div className="content grid grid-cols-12 gap-4">
          <div className="md:col-span-3 hidden md:flex  relative h-full">
            <div className="sticky top-[4rem] h-fit w-full flex ">
              <FilterMenu />
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 flex flex-col gap-8">
            <section>
              {isLoading && <span>Loading...</span>}
              {products && !products.length && <span>No Products</span>}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4  px-3 lg:px-0">
                {products &&
                  products.length > 0 &&
                  products?.map((product, key) => (
                    <ProductCard key={key} product={product} />
                  ))}
              </div>
            </section>
            <div className="flex w-full">
              <PaginationDemo />
            </div>
          </div>
        </div>
      </PageWidth>
    </div>
  );
};

export default ProductList;
