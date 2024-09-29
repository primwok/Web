"use client";

import { Popover, Transition } from "@headlessui/react";
import { Cart } from "@medusajs/medusa";
import { useParams, usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

import { formatAmount } from "@/lib/util/prices";
import DeleteButton from "@/modules/common/components/delete-button";
import LineItemOptions from "@/modules/common/components/line-item-options";
import LineItemPrice from "@/modules/common/components/line-item-price";
import LocalizedClientLink from "@/modules/common/components/localized-client-link";
import Thumbnail from "@/modules/products/components/thumbnail";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const CartDropdown = ({
  cart: cartState,
}: {
  cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null;
}) => {
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
    undefined
  );
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);

  const { countryCode } = useParams();

  const open = () => setCartDropdownOpen(true);
  const close = () => setCartDropdownOpen(false);

  const totalItems =
    cartState?.items?.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0) || 0;

  const itemRef = useRef<number>(totalItems || 0);

  const timedOpen = () => {
    open();

    const timer = setTimeout(close, 5000);

    setActiveTimer(timer);
  };

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer as any);
    }

    open();
  };

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer as any);
      }
    };
  }, [activeTimer]);

  const pathname = usePathname();

  // open cart dropdown when modifying the cart items, but only if we're not on the cart page
  useEffect(() => {
    if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
      timedOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems, itemRef.current]);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href="/cart" passHref data-testid="nav-cart-link">
          <div className="relative ml-auto mr-2 md:mr-0 pr-4">
            <span className="absolute -top-2 left-2 bg-primary text-white text-xs font-semibold rounded-full px-2">
              {totalItems}
            </span>

            <ShoppingBag className={`w-5 h-5`} />
          </div>
        </Link>
      </HoverCardTrigger>

      <HoverCardContent className="hidden md:block w-[30rem]">
        <div
          // static
          className="w-full flex flex-col "
          data-testid="nav-cart-dropdown"
        >
          <div className="p-4 flex items-center justify-center">
            <h3 className="font-semibold text-sm">Cart</h3>
          </div>
          {cartState && cartState.items?.length ? (
            <>
              <ScrollArea className="max-h-[402px] px-4 grid grid-cols-1 gap-y-8 no-scrollbar p-p">
                {cartState.items
                  .sort((a, b) => {
                    return a.created_at > b.created_at ? -1 : 1;
                  })
                  .map((item) => (
                    <div
                      className="grid grid-cols-[122px_1fr] gap-x-4"
                      key={item.id}
                      data-testid="cart-item"
                    >
                      <Link
                        href={`/products/${item.variant.product.handle}`}
                        className="w-24"
                      >
                        <Thumbnail thumbnail={item.thumbnail} size="square" />
                      </Link>
                      <div className="flex flex-col justify-between flex-1">
                        <div className="flex flex-col flex-1">
                          <div className="flex items-start justify-between">
                            <div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-full">
                              <h3 className="text-base-regular overflow-hidden text-ellipsis">
                                <Link
                                  href={`/products/${item.variant.product.handle}`}
                                  data-testid="product-link"
                                  className="text-sm font-semibold "
                                >
                                  {item.title}
                                </Link>
                              </h3>
                              <LineItemOptions
                                variant={item.variant}
                                data-testid="cart-item-variant"
                                data-value={item.variant}
                              />
                              <span
                                data-testid="cart-item-quantity"
                                data-value={item.quantity}
                                className="font-normal text-sm"
                              >
                                Quantity: {item.quantity}
                              </span>
                            </div>
                            <div className="flex justify-end">
                              <LineItemPrice
                                region={cartState.region}
                                item={item}
                                style="tight"
                              />
                            </div>
                          </div>
                        </div>
                        <DeleteButton
                          id={item.id}
                          className="mt-1 text-sm"
                          data-testid="cart-item-remove-button"
                        >
                          Remove
                        </DeleteButton>
                      </div>
                    </div>
                  ))}
              </ScrollArea>
              <div className="p-4 flex flex-col gap-y-4 text-small-regular">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    Subtotal <span className="font-normal">(excl. taxes)</span>
                  </span>
                  <span
                    className="text-sm font-semibold"
                    data-testid="cart-subtotal"
                    data-value={cartState.subtotal || 0}
                  >
                    {formatAmount({
                      amount: cartState.subtotal || 0,
                      region: cartState.region,
                      includeTaxes: false,
                    })}
                  </span>
                </div>
                <LocalizedClientLink href="/cart" passHref>
                  <Button
                    className="w-full"
                    size="sm"
                    data-testid="go-to-cart-button"
                  >
                    Go to cart
                  </Button>
                </LocalizedClientLink>
              </div>
            </>
          ) : (
            <div>
              <div className="flex py-5 flex-col gap-y-4 items-center justify-center">
                <span className="text-sm font-normal">
                  Your shopping bag is empty.
                </span>
                <div className="w-full">
                  <Link href="/store">
                    <>
                      <span className="sr-only">Go to all products page</span>
                      <Button size="sm" className="w-full" onClick={close}>
                        Explore products
                      </Button>
                    </>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CartDropdown;
