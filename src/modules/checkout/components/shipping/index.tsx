"use client";

import { Cart } from "@medusajs/medusa";
import { PricedShippingOption } from "@medusajs/medusa/dist/types/pricing";
import { formatAmount } from "@/lib/util/prices";
import { setShippingMethod } from "@/modules/checkout/actions";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ErrorMessage from "../error-message";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type ShippingProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">;
  availableShippingMethods: PricedShippingOption[] | null;
};

const Shipping: React.FC<ShippingProps> = ({
  cart,
  availableShippingMethods,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isOpen = searchParams.get("step") === "delivery";

  const handleEdit = () => {
    router.push(pathname + "?step=delivery", { scroll: false });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    router.push(pathname + "?step=payment", { scroll: false });
  };

  const set = async (id: string) => {
    setIsLoading(true);
    await setShippingMethod(id)
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
      });
  };

  const handleChange = (value: string) => {
    set(value);
  };

  useEffect(() => {
    setIsLoading(false);
    setError(null);
  }, [isOpen]);

  return (
    <div className="bg-white p-2">
      <div className="flex flex-row items-center justify-between mb-6">
        <h2
          className={cn(
            "flex flex-row text-3xl-regular gap-x-2 items-center font-medium ",
            {
              "opacity-50 pointer-events-none select-none":
                !isOpen && cart.shipping_methods.length === 0,
            }
          )}
        >
          Delivery
          {!isOpen && cart.shipping_methods.length > 0 && (
            <CheckCircle className="h-[1rem] text-sky-500" />
          )}
        </h2>
        {!isOpen &&
          cart?.shipping_address &&
          cart?.billing_address &&
          cart?.email && (
            <button
              onClick={handleEdit}
              className="text-sm font-medium text-ui-primary underline hover:underline hover:text-sky-500"
              data-testid="edit-delivery-button"
            >
              Edit
            </button>
          )}
      </div>
      {isOpen ? (
        <div data-testid="delivery-options-container">
          <div className="pb-8">
            <RadioGroup
              defaultValue={cart.shipping_methods[0]?.shipping_option_id}
              // onValueChange={(value) => handleChange(value)}
            >
              {availableShippingMethods ? (
                availableShippingMethods.map((option) => {
                  return (
                    <div
                      key={option.id}
                      // value={option.id}
                      data-testid="delivery-option-radio"
                      className={cn(
                        "flex items-center justify-between text-sm cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:bg-sky-100",
                        {
                          "border border-sky-500":
                            option.id ===
                            cart.shipping_methods[0]?.shipping_option_id,
                        }
                      )}
                      onClick={() => handleChange(option.id as string)}
                    >
                      <div className="flex items-center gap-x-4">
                        <RadioGroupItem
                          value={option.id as string}
                          checked={
                            option.id ===
                            cart.shipping_methods[0]?.shipping_option_id
                          }
                        />
                        <span className="text-base-regular">{option.name}</span>
                      </div>
                      <span className="justify-self-end text-ui-fg-base">
                        {formatAmount({
                          amount: option.amount!,
                          region: cart?.region,
                          includeTaxes: false,
                        })}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center px-4 py-8 text-ui-fg-base">
                  {/* tailwind spiinner */}
                  <p className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-ui-fg-base"></p>
                </div>
              )}
            </RadioGroup>
          </div>

          <ErrorMessage
            error={error}
            data-testid="delivery-option-error-message"
          />

          <Button
            size="default"
            className="mt-6 bg-sky-600"
            onClick={handleSubmit}
            disabled={!cart.shipping_methods[0]}
            data-testid="submit-delivery-option-button"
          >
            {isLoading ? "Loading" : "Continue to payment"}
          </Button>
        </div>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart && cart.shipping_methods.length > 0 && (
              <div className="flex flex-col w-1/3">
                <p className="font-medium text-sky-600 text-sm mb-1">Method</p>
                <p className="text-sm text-gray-500">
                  {cart.shipping_methods[0].shipping_option.name} (
                  {formatAmount({
                    amount: cart.shipping_methods[0].price,
                    region: cart.region,
                    includeTaxes: false,
                  })
                    .replace(/,/g, "")
                    .replace(/\./g, ",")}
                  )
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      <Separator className="mt-8" />
    </div>
  );
};

export default Shipping;
