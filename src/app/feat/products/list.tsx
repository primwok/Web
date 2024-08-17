"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { listProducts } from "@/app/api/products/action";
import {
  RegionContext,
  useRegions,
} from "@/app/common/contexts/region.context";
import { useProductsQuery } from "@/app/api/products/query";
import Image from "next/image";
import Link from "next/link";

export const ProductList = () => {
  // const { products, isLoading } = useProducts({
  //   // category_id: ["cat_123"],
  // });
  const { state } = useRegions() as RegionContext;
  const { data, isLoading } = useProductsQuery({
    region_id: state.region as string,
  });
  const products = data?.products;

  return (
    <section>
      {isLoading && <span>Loading...</span>}
      {products && !products.length && <span>No Products</span>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.length > 0 &&
          products?.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <Card key={product.id}>
                <CardContent>
                  <Image
                    width={200}
                    height={200}
                    src={
                      product.thumbnail ? product.thumbnail : "/no-image.png"
                    }
                    alt={product.title || "Product Image"}
                  />
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <h6>{product.title}</h6>
                    <h6>{product.variants.at(0)?.calculated_price_incl_tax}</h6>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default ProductList;
