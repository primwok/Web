import { Text, clx } from "@medusajs/ui";

import { PriceType } from "../product-actions";
import numeral from "numeral";

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <>
      <div className="prices flex flex-row items-end justify-between w-full">
        <div className="flex flex-col gap-2 items-start">
          <h6 className="text-base font-medium">
            $ {numeral(price.calculated_price).format("0,0.00") || 0}
          </h6>
          {price.price_type === "sale" && (
            <h6 className="line-through text-gray-500 text-sm px-[.4rem]">
              $ {numeral(price.original_price).format("0,0.00") || 0}
            </h6>
          )}
        </div>
        {price.price_type === "sale" && (
          <p className="text-orange-600 text-sm font-medium">
            Save{" "}
            {numeral(
              parseFloat(price.original_price as string) -
                parseFloat(price.calculated_price as string)
            ).format("0.00")}
          </p>
        )}
      </div>
      {/* {price.price_type === "sale" && (
        <Text className="line-through text-ui-fg-muted" data-testid="original-price">
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("text-ui-fg-muted", {
          "text-ui-fg-interactive": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text> */}
    </>
  );
}
