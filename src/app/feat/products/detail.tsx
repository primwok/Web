"use client";
import { useCartUtil } from "@/app/api/cart/hooks";
import { useProductByIdQuery } from "@/app/api/products/query";
import { PageWidth } from "@/app/common/ui/page-width";
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

  const handleAddToCart = async () => {
    await addToCart({
      quantity: 1,
      variant_id: data?.product.variants.at(0)?.id ?? "",
    });
  };
  return (
    <PageWidth>
      <div className="flex min-h-screen w-full flex-col">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Product Detail
        </h1>
        {isLoading && <span>Loading...</span>}
        {data ? (
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
        )}
      </div>
    </PageWidth>
  );
};
