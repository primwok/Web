import {
  PricedProduct,
  PricedVariant,
} from "@medusajs/medusa/dist/types/pricing";
import { clx } from "@medusajs/ui";

import { getProductPrice } from "@/lib/util/get-product-price";
import { RegionInfo } from "@/types/global";
import numeral from "numeral";

export default function ProductPrice({
  product,
  variant,
  region,
}: {
  product: PricedProduct;
  variant?: PricedVariant;
  region: RegionInfo;
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
    region,
  });

  const selectedPrice = variant ? variantPrice : cheapestPrice;

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />;
  }

  return (
    <>
      <div className="flex flex-col  items-center">
        <h6 className="text-base font-medium">
          {selectedPrice.calculated_price}
        </h6>
        {selectedPrice.price_type === "sale" && (
          <h6 className="line-through text-gray-500 text-sm px-[.4rem]">
            {selectedPrice.original_price}
          </h6>
        )}
      </div>
      {selectedPrice.price_type === "sale" && (
        <p className="text-orange-600 text-sm font-medium">
          Save -{selectedPrice.percentage_diff}%
        </p>
      )}
    </>
  );
}
