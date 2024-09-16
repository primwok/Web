"use client";

import { Cart } from "@medusajs/medusa";
import React, { useMemo } from "react";
import { useFormState } from "react-dom";
import ErrorMessage from "@/modules/checkout/components/error-message";
import {
  removeDiscount,
  removeGiftCard,
  submitDiscountForm,
} from "@/modules/checkout/actions";
import { formatAmount } from "@/lib/util/prices";
import { InfoIcon, Trash } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type DiscountCodeProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">;
};

const DiscountCode: React.FC<DiscountCodeProps> = ({ cart }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { discounts, gift_cards, region } = cart;

  const appliedDiscount = useMemo(() => {
    if (!discounts || !discounts.length) {
      return undefined;
    }

    switch (discounts[0].rule.type) {
      case "percentage":
        return `${discounts[0].rule.value}%`;
      case "fixed":
        return `- ${formatAmount({
          amount: discounts[0].rule.value,
          region: region,
        })}`;

      default:
        return "Free shipping";
    }
  }, [discounts, region]);

  const removeGiftCardCode = async (code: string) => {
    await removeGiftCard(code, gift_cards);
  };

  const removeDiscountCode = async () => {
    await removeDiscount(discounts[0].code);
  };

  const [message, formAction] = useFormState(submitDiscountForm, null);

  return (
    <div className="w-full bg-white flex flex-col">
      <div className="txt-medium">
        {gift_cards.length > 0 && (
          <div className="flex flex-col mb-4">
            <h2 className="text-sm font-medium">Gift card(s) applied:</h2>
            {gift_cards?.map((gc) => (
              <div
                className="flex items-center justify-between text-sm"
                key={gc.id}
                data-testid="gift-card"
              >
                <div className="flex gap-x-1 items-baseline">
                  <span>Code: </span>
                  <span className="truncate" data-testid="gift-card-code">
                    {gc.code}
                  </span>
                </div>
                <div
                  className="font-semibold"
                  data-testid="gift-card-amount"
                  data-value={gc.balance}
                >
                  {formatAmount({
                    region: region,
                    amount: gc.balance,
                    includeTaxes: false,
                  })}
                </div>
                <button
                  className="flex items-center gap-x-2 !background-transparent !border-none"
                  onClick={() => removeGiftCardCode(gc.code)}
                  data-testid="remove-gift-card-button"
                >
                  <Trash size={14} />
                  <span className="sr-only">Remove gift card from order</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {appliedDiscount ? (
          <div className="w-full flex items-center">
            <div className="flex flex-col w-full">
              <h2 className="font-medium text-sm">Discount applied:</h2>
              <div
                className="flex items-center justify-between w-full max-w-full"
                data-testid="discount-row"
              >
                <div className="flex gap-x-1 items-baseline txt-small-plus w-4/5 pr-1">
                  <span>Code:</span>
                  <span className="truncate" data-testid="discount-code">
                    {discounts[0].code}
                  </span>
                  <span
                    className="min-w-fit"
                    data-testid="discount-amount"
                    data-value={discounts[0].rule.value}
                  >
                    ({appliedDiscount})
                  </span>
                </div>
                <button
                  className="flex items-center"
                  onClick={removeDiscountCode}
                  data-testid="remove-discount-button"
                >
                  <Trash size={14} />
                  <span className="sr-only">
                    Remove discount code from order
                  </span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form action={formAction} className="w-full">
            <Label className="flex gap-x-1 my-2 items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="font-medium text-sky-600 hover:text-sky-700"
                data-testid="add-discount-button"
              >
                Add gift card or discount code
              </button>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoIcon className="text-gray-500 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  You can add multiple gift cards, but only one discount code.
                </TooltipContent>
              </Tooltip>
            </Label>
            {isOpen && (
              <>
                <div className="flex flex-row w-full gap-x-2 items-end my-3">
                  <div className="flex flex-col gap-2">
                    <Label className="txt-small-plus">
                      Gift card or discount code
                    </Label>
                    <Input
                      name="code"
                      type="text"
                      autoFocus={false}
                      data-testid="discount-input"
                    />
                  </div>

                  <Button
                    variant="secondary"
                    data-testid="discount-apply-button"
                    type="submit"
                  >
                    Apply
                  </Button>
                </div>
                <ErrorMessage
                  error={message}
                  data-testid="discount-error-message"
                />
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default DiscountCode;
