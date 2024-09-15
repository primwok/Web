import { Text } from "@medusajs/ui";

import { ProductPreviewType } from "@/types/global";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { retrievePricedProductById } from "@/lib/data";
import { getProductPrice } from "@/lib/util/get-product-price";
import { Region } from "@medusajs/medusa";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import React from "react";
import numeral from "numeral";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import LocalizedClientLink from "@/modules/common/components/localized-client-link";
import Thumbnail from "../thumbnail";
import PreviewPrice from "./price";
import { ProductRating } from "@/modules/common/components/product-cards/rating";

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType;
  isFeatured?: boolean;
  region: Region;
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product);

  if (!pricedProduct) {
    return null;
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  });

  return (
    <Card
      // key={product.id}
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
          href={`/products/${productPreview.handle}`}
          key={productPreview.id}
          className="w-full"
        >
          <div className="h-[15rem] w-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={
                productPreview.thumbnail
                  ? productPreview.thumbnail
                  : "/no-image.png"
              }
              alt={productPreview.title || "Product Image"}
              className="hover:scale-125 transition-transform duration-700"
            />
          </div>
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between items-center py-4">
        <div className="flex flex-col gap-2 w-full">
          <h6 className="text-lg font-semibold">{productPreview.title}</h6>
          {/* <ProductRating
            ratings={Array.from({ length: 5 }).map(
              (_, item) => Math.floor(Math.random() * 5) + 1
            )}
          /> */}
          {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          <div className="flex flex-row items-center justify-between w-full px-[.2rem] py-[.8rem]">
            <p className="max-h-[1.5rem] rounded-lg text-sky-700 text-sm font-medium uppercase underline underline-offset-2">
              Compare
            </p>
            <Link href={`/products/${productPreview.handle}`}>
              <Button
                className="bg-sky-700 uppercase rounded-3xl px-[2rem] py-[1.3rem] font-semibold"
                size="sm"
              >
                Buy now
              </Button>
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
    // <LocalizedClientLink
    //   href={`/products/${productPreview.handle}`}
    //   className="group"
    // >
    //   <div data-testid="product-wrapper">
    //     <Thumbnail
    //       thumbnail={productPreview.thumbnail}
    //       size="full"
    //       isFeatured={isFeatured}
    //     />
    //     <div className="flex txt-compact-medium mt-4 justify-between">
    //       <Text className="text-ui-fg-subtle" data-testid="product-title">
    //         {productPreview.title}
    //       </Text>
    //       <div className="flex items-center gap-x-2">
    //         {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
    //       </div>
    //     </div>
    //   </div>
    // </LocalizedClientLink>
  );
}
