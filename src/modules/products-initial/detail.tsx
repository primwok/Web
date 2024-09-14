"use client";
import { useCartUtil } from "@/app/api/cart/hooks";
import { useProductByIdQuery } from "@/app/api/products/query";
import { PageWidth } from "@/modules/common/components/page-width";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
export const ProductDetail = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const { data, isLoading } = useProductByIdQuery(id);
  const { addToCart } = useCartUtil();

  const OPTIONS: any = {};
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const handleAddToCart = async () => {
    await addToCart({
      quantity: 1,
      variant_id: data?.product.variants.at(0)?.id ?? "",
    });
  };
  return (
    <div className="flex flex-col gap-4 pb-[10rem]">
      <PageWidth>
        <div className="py-4 px-2 flex flex-col gap-3">
          <Separator />

          <BreadcrumbDemo />
          <Separator />
        </div>
      </PageWidth>
      <FloatingCartAction
        product={data?.product}
        handleAddToCart={handleAddToCart}
      />
      <PageWidth>
        {isLoading && <span>Loading...</span>}
        <div className="grid grid-cols-12 md:gap-12 px-3 lg:px-0">
          <div className="col-span-12 md:col-span-6 relative">
            <div className="w-full sticky top-0 h-fit md:pt-[3rem]">
              <EmblaCarousel
                slides={(data?.product.images as any) ?? []}
                options={OPTIONS}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col gap-6 p-2 lg:p-o">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">{data?.product.title}</h1>
                <ProductRating
                  ratings={Array.from({ length: 5 }).map(
                    (_, item) => Math.floor(Math.random() * 5) + 1
                  )}
                />
                <div className="prices flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col  items-center">
                    <h6 className="text-base font-medium">
                      ${" "}
                      {numeral(
                        data?.product.variants.at(0)?.prices.at(0)?.amount
                      ).format("0,0.00") || 0}
                    </h6>
                    {/* <h6 className="line-through text-gray-500 text-sm px-[.4rem]">
                      ${" "}
                      {numeral(
                        data?.product.variants.at(0)?.original_price
                      ).format("0,0.00") || 0}
                    </h6> */}
                  </div>
                  {/* <p className="text-orange-600 text-sm font-medium">
                    Save{" "}
                    {numeral(
                      (data?.product.variants.at(0)
                        ?.original_price as number) ??
                        ((0 -
                          data?.product?.variants?.at(0)
                            ?.calculated_price!) as number) ??
                        0
                    ).format("0.00")}
                  </p> */}
                  <Button
                    className="cart-button"
                    onClick={() => handleAddToCart()}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="options flex flex-col gap-4">
                {data?.product.options?.map((option) => (
                  <div key={option.id} className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold">{option.title}</h4>
                    <div className="grid  grid-cols-2 gap-3">
                      {option.values.map((value) => (
                        <Card
                          key={value.id}
                          className="p-0 cursor-pointer rounded-md border border-gray-400"
                        >
                          <CardContent className="flex flex-row items-center justify-between h-[3rem] bg-sky-50 p-0 px-4 rounded-md">
                            <h6 className="text-sm text-gray-600 font-medium p-0 m-o">
                              {value.value}
                            </h6>
                            <Checkbox />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold">Variants</h4>
                <div className="grid grid-cols-2 gap-3">
                  {data?.product.variants.map((variant) => (
                    <Card
                      key={variant.id}
                      className="p-0 cursor-pointer rounded-md border border-gray-400"
                    >
                      <CardContent className="flex flex-row items-center justify-between h-[3rem] bg-sky-50 p-0 px-4 rounded-md">
                        <h6 className="text-sm text-gray-600 font-medium p-0 m-0">
                          {variant.title}
                        </h6>
                        <Checkbox />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold">Description</h4>
                <p className="text-sm text-gray-600">
                  {data?.product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageWidth>
      {/* {data ? (
          <Card>
            <CardContent>
              <Image
                src={data?.product.thumbnail ?? ""}
                alt={data?.product.title ?? "image"}
                width={300}
                height={300}
              />
            </CardContent>
            <CardFooter>
              <h6>{data?.product.title}</h6>
              <h6>{data?.product.variants.at(0)?.calculated_price_incl_tax}</h6>
              <Button onClick={() => handleAddToCart()}>Buy</Button>
            </CardFooter>
          </Card>
        ) : (
          <span>No Product</span>
        )} */}
    </div>
  );
};

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EmblaCarousel from "@/modules/common/components/embla-carousel/carousel";
import { Check } from "typeorm";
import { Checkbox } from "@/components/ui/checkbox";
import { ProductRating } from "@/modules/common/components/product-cards/rating";
import numeral from "numeral";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

const FloatingCartAction: React.FC<{
  product: any;
  handleAddToCart: () => void;
}> = ({ product, handleAddToCart }) => {
  const [isVisible, setIsVisible] = useState<null | boolean>(null);

  useEffect(() => {
    const target = document.querySelector(".cart-button");

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
      {/* <div className="flex relative bg-red-200  h-fit"> */}
      <div
        className={`floating-cart-action  ${
          isVisible === false ? "" : "hidden"
        }  p-4 sticky top-0 z-[10] bg-white shadow-md w-full flex items-center justify-between`}
      >
        <h4 className="text-base font-bold">{product?.title}</h4>
        <Button onClick={() => handleAddToCart()}>Add To Cart</Button>
      </div>
      {/* </div> */}
    </PageWidth>
  );
};
