"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import React from "react";
import numeral from "numeral";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { ProductRating } from "./rating";

export const ProductCard: React.FC<{
  product: PricedProduct;
}> = ({ product }) => {
  return (
    <Card
      key={product.id}
      className="rounded-sm shadow-none border-none min-h[20rem]"
    >
      <CardHeader className="flex flex-row justify-between items-center py-2 px-3 border-box">
        <span className="rounded-lg px-[.6rem] py-[.2rem] text-xs border-box bg-sky-600 text-white font-medium">
          New
        </span>
        <HeartIcon className="h-4 w-4 cursor-pointer p-0" />
      </CardHeader>
      <CardContent className="relative overflow-hidden">
        <Link
          href={`/products/${product.id}`}
          // href={`/products/${product.metadata.slug}`}
          key={product.id}
          className="w-full bg-red-200"
        >
          <div className="h-[15rem] w-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={product.thumbnail ? product.thumbnail : "/no-image.png"}
              alt={product.title || "Product Image"}
              className="hover:scale-125 transition-transform duration-700"
            />
          </div>
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between items-center py-4">
        <div className="flex flex-col gap-2 w-full">
          <h6 className="text-lg font-semibold">{product.title}</h6>
          <ProductRating
            ratings={Array.from({ length: 5 }).map(
              (_, item) => Math.floor(Math.random() * 5) + 1
            )}
          />
          <div className="prices flex flex-row items-end justify-between w-full">
            <div className="flex flex-col gap-2 items-start">
              <h6 className="text-base font-medium">
                ${" "}
                {numeral(product.variants.at(0)?.calculated_price).format(
                  "0,0.00"
                ) || 0}
              </h6>
              {/* <h6 className="line-through text-gray-500 text-sm px-[.4rem]">
                ${" "}
                {numeral(product.variants.at(0)?.original_price).format(
                  "0,0.00"
                ) || 0}
              </h6> */}
            </div>
            <p className="text-orange-600 text-sm font-medium">
              Save{" "}
              {numeral(
                (product.variants.at(0)?.original_price as number) ??
                  ((0 -
                    product?.variants?.at(0)?.calculated_price!) as number) ??
                  0
              ).format("0.00")}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between w-full px-[.2rem] py-[.8rem]">
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
      </CardFooter>
    </Card>
  );
};
