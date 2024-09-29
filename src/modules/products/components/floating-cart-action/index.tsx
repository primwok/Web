"use client";

import { Button } from "@/components/ui/button";
import { PageWidth } from "@/modules/common/components/page-width";
import { PricedVariant } from "@medusajs/medusa/dist/types/pricing";
import { useEffect, useState } from "react";

const FloatingCartAction: React.FC<{
  product: any;
  handleAddToCart: () => void;
  variant?: PricedVariant;
  inStock?: boolean;
  disabled?: boolean;
  isAdding?: boolean;
}> = ({
  product,
  variant,
  inStock,
  disabled,
  isAdding,

  handleAddToCart,
}) => {
  const [isVisible, setIsVisible] = useState<null | boolean>(null);
  // console.log("reloading 2");
  // console.log("variant", variant);
  // console.log("inStock", inStock);
  // console.log("disabled", disabled);
  // console.log("isAdding", isAdding);

  useEffect(() => {
    const target = document.querySelector(".cart-button");
    // console.log("target", target);

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
    <div
      className={`

     absolute top-0 left-0 w-full z-[100]`}
    >
      <div className="flex justify-center items-center">
        <PageWidth>
          <div
            className={`floating-cart-action  ${
              isVisible === false ? "" : "hidden"
            }  p-4 fixed mx-auto top-0 z-[10] bg-white shadow-md w-full flex items-center justify-between`}
          >
            <h4 className="text-base font-bold">{product?.title}</h4>
            <Button
              onClick={handleAddToCart}
              disabled={!inStock || !variant || !!disabled || isAdding}
              // variant="primary"
              className="w-fit"
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
        </PageWidth>
      </div>
    </div>
  );
};

export default FloatingCartAction;
