"use client";

import { LineItem, Region } from "@medusajs/medusa";

import CartItemSelect from "@/modules/cart/components/cart-item-select";
import DeleteButton from "@/modules/common/components/delete-button";
import LineItemOptions from "@/modules/common/components/line-item-options";
import LineItemPrice from "@/modules/common/components/line-item-price";
import LineItemUnitPrice from "@/modules/common/components/line-item-unit-price";
import Thumbnail from "@/modules/products/components/thumbnail";
import { updateLineItem } from "@/modules/cart/actions";
import Spinner from "@/modules/common/icons/spinner";
import { useState } from "react";
import ErrorMessage from "@/modules/checkout/components/error-message";
import LocalizedClientLink from "@/modules/common/components/localized-client-link";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">;
  region: Region;
  type?: "full" | "preview";
};

const Item = ({ item, region, type = "full" }: ItemProps) => {
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { handle } = item.variant.product;

  const changeQuantity = async (quantity: number) => {
    setError(null);
    setUpdating(true);

    const message = await updateLineItem({
      lineId: item.id,
      quantity,
    })
      .catch((err) => {
        return err.message;
      })
      .finally(() => {
        setUpdating(false);
      });

    message && setError(message);
  };

  return (
    <TableRow className="w-full" data-testid="product-row">
      <TableCell className="!pl-0 p-4 w-24">
        <LocalizedClientLink
          href={`/products/${handle}`}
          className={cn("flex", {
            "w-16": type === "preview",
            "sm:w-24 w-12": type === "full",
          })}
        >
          <Thumbnail thumbnail={item.thumbnail} size="square" />
        </LocalizedClientLink>
      </TableCell>

      <TableCell className="text-left">
        <h2 className="font-medium text-sm" data-testid="product-title">
          {item.title}
        </h2>
        <LineItemOptions variant={item.variant} data-testid="product-variant" />
      </TableCell>

      {type === "full" && (
        <TableCell>
          <div className="flex gap-2 items-center w-28">
            <DeleteButton id={item.id} data-testid="product-delete-button" />
            <CartItemSelect
              value={item.quantity}
              onChange={(value) => changeQuantity(parseInt(value.target.value))}
              className="w-14 h-10 p-4"
              data-testid="product-select-button"
            >
              {Array.from(
                {
                  length: Math.min(
                    item.variant.inventory_quantity > 0
                      ? item.variant.inventory_quantity
                      : 10,
                    10
                  ),
                },
                (_, i) => (
                  <option value={i + 1} key={i}>
                    {i + 1}
                  </option>
                )
              )}
            </CartItemSelect>
            {updating && <Spinner />}
          </div>
          <ErrorMessage error={error} data-testid="product-error-message" />
        </TableCell>
      )}

      {type === "full" && (
        <TableCell className="hidden sm:table-cell">
          <LineItemUnitPrice item={item} region={region} style="tight" />
        </TableCell>
      )}

      <TableCell className="!pr-0">
        <span
          className={cn("!pr-0", {
            "flex flex-col items-end h-full justify-center": type === "preview",
          })}
        >
          {type === "preview" && (
            <span className="flex gap-x-1 ">
              <p className="text-ui-fg-muted">{item.quantity}x </p>
              <LineItemUnitPrice item={item} region={region} style="tight" />
            </span>
          )}
          <LineItemPrice item={item} region={region} style="tight" />
        </span>
      </TableCell>
    </TableRow>
  );
};

export default Item;
