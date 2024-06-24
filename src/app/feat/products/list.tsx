"use client";

import { useProducts } from "medusa-react";
import { Product } from "@medusajs/medusa";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const ProductList = () => {
  const { products, isLoading } = useProducts({
    // category_id: ["cat_123"],
  });

  return (
    <section>
      {isLoading && <span>Loading...</span>}
      {products && !products.length && <span>No Products</span>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.length > 0 &&
          products?.map((product) => (
            <Card key={product.id}>
              <CardContent></CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <h6>{product.title}</h6>
                  <h6>{product.variants.at(0)?.calculated_price_incl_tax}</h6>
                </div>
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  );
};

export default ProductList;
