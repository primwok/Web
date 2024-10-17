"use client";

import { Region } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { isEqual } from "lodash";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { useIntersection } from "@/lib/hooks/use-in-view";
import { addToCart } from "@/modules/cart/actions";
import Divider from "@/modules/common/components/divider";
import OptionSelect from "@/modules/products/components/option-select";

import MobileActions from "../mobile-actions";
import ProductPrice from "../product-price";
import { Separator } from "@/components/ui/separator";
import { ProductRating } from "@/modules/common/components/product-cards/rating";
import { Button } from "@/components/ui/button";
import LocalizedClientLink from "@/modules/common/components/localized-client-link";
import FloatingCartAction from "../floating-cart-action";

type ProductActionsProps = {
  product: PricedProduct;
  region: Region;
  disabled?: boolean;
};

export type PriceType = {
  calculated_price: string;
  original_price?: string;
  price_type?: "sale" | "default";
  percentage_diff?: string;
};

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string>>({});
  const [isAdding, setIsAdding] = useState(false);

  const countryCode = useParams().countryCode as string;

  const variants = product.variants;

  // initialize the option state
  useEffect(() => {
    const optionObj: Record<string, string> = {};

    for (const option of product.options || []) {
      Object.assign(optionObj, { [option.id]: undefined });
    }

    setOptions(optionObj);
  }, [product]);

  // memoized record of the product's variants
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {};

    for (const variant of variants) {
      if (!variant.options || !variant.id) continue;

      const temp: Record<string, string> = {};

      for (const option of variant.options) {
        temp[option.option_id] = option.value;
      }

      map[variant.id] = temp;
    }

    return map;
  }, [variants]);

  // memoized function to check if the current options are a valid variant
  const variant = useMemo(() => {
    let variantId: string | undefined = undefined;

    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key;
      }
    }

    return variants.find((v) => v.id === variantId);
  }, [options, variantRecord, variants]);

  // if product only has one variant, then select it
  useEffect(() => {
    if (variants.length === 1 && variants[0].id) {
      setOptions(variantRecord[variants[0].id]);
    }
  }, [variants, variantRecord]);

  // update the options when a variant is selected
  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update });
  };

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (variant && !variant.manage_inventory) {
      return true;
    }

    // If we allow back orders on the variant, we can add to cart
    if (variant && variant.allow_backorder) {
      return true;
    }

    // If there is inventory available, we can add to cart
    if (variant?.inventory_quantity && variant.inventory_quantity > 0) {
      return true;
    }

    // Otherwise, we can't add to cart
    return false;
  }, [variant]);

  const actionsRef = useRef<HTMLDivElement>(null);

  // const inView = useIntersection(actionsRef, "0px");

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!variant?.id) return null;

    setIsAdding(true);

    await addToCart({
      variantId: variant.id,
      quantity: 1,
      countryCode,
    });

    setIsAdding(false);
  };
  // console.log("reloading 1");
  // console.log("variant", variant);
  // console.log("inStock", inStock);
  // console.log("disabled", disabled);
  // console.log("isAdding", isAdding);

  return (
    <>
      <FloatingCartAction
        product={product}
        handleAddToCart={handleAddToCart}
        variant={variant}
        inStock={inStock}
        isAdding={isAdding}
        disabled={disabled}
      />
      {/* <div className="flex flex-col gap-y-2" ref={actionsRef}> */}
      {/* Product title rating and price */}
      <div className="flex flex-col gap-2">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="font-medium text-sm text-sky-700 hover:text-sky-600"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <h1 className="text-xl font-bold">{product.title}</h1>
        <ProductRating
          ratings={Array.from({ length: 5 }).map(
            (_, item) => Math.floor(Math.random() * 5) + 1
          )}
        />
        <div className="flex flex-row items-center justify-between w-full">
          <ProductPrice product={product} variant={variant} region={region} />
          <Button
            onClick={handleAddToCart}
            disabled={!inStock || !variant || !!disabled || isAdding}
            // variant="primary"
            className="cart-button w-fit"
            // isLoading={isAdding}
            data-testid="add-product-button"
          >
            {!variant
              ? "Select options"
              : !inStock
              ? "Out of stock"
              : "Add to cart"}
          </Button>
        </div>
      </div>
      <Separator />
      {/* options */}
      {product.variants.length > 1 && (
        <div className="options flex flex-col gap-4">
          {(product.options || []).map((option) => {
            return (
              <div key={option.id}>
                <OptionSelect
                  option={option}
                  current={options[option.id]}
                  updateOption={updateOptions}
                  title={option.title}
                  data-testid="product-options"
                  disabled={!!disabled || isAdding}
                />
              </div>
            );
          })}
        </div>
      )}
      {/* <MobileActions
          product={product}
          variant={variant}
          region={region}
          options={options}
          updateOptions={updateOptions}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          show={!inView}
          optionsDisabled={!!disabled || isAdding}
        /> */}
      {/* </div> */}
    </>
  );
}
