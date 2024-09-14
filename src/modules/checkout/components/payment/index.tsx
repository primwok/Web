"use client";

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ErrorMessage from "@/modules/checkout/components/error-message";
import { Cart } from "@medusajs/medusa";
import PaymentContainer from "@/modules/checkout/components/payment-container";
import { setPaymentMethod } from "@/modules/checkout/actions";
import { paymentInfoMap } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, CreditCard } from "lucide-react";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Payment = ({
  cart,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total"> | null;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cardBrand, setCardBrand] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isOpen = searchParams.get("step") === "payment";

  const paidByGiftcard =
    cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0;

  const paymentReady =
    (cart?.payment_session && cart?.shipping_methods.length !== 0) ||
    paidByGiftcard;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const set = async (providerId: string) => {
    setIsLoading(true);
    await setPaymentMethod(providerId)
      .catch((err: any) => setError(err.toString()))
      .finally(() => {
        if (providerId === "paypal") return;
        setIsLoading(false);
      });
  };

  const handleChange = (providerId: string) => {
    setError(null);
    set(providerId);
  };

  const handleEdit = () => {
    router.push(pathname + "?" + createQueryString("step", "payment"), {
      scroll: false,
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    router.push(pathname + "?" + createQueryString("step", "review"), {
      scroll: false,
    });
  };

  useEffect(() => {
    setIsLoading(false);
    setError(null);
  }, [isOpen]);

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <div
          className={cn(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none":
                !isOpen && !paymentReady,
            }
          )}
        >
          Payment
          {!isOpen && paymentReady && <CheckCircle />}
        </div>
        {!isOpen && paymentReady && (
          <button
            onClick={handleEdit}
            className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
            data-testid="edit-payment-button"
          >
            Edit
          </button>
        )}
      </div>
      <div>
        <div className={isOpen ? "block" : "hidden"}>
          {!paidByGiftcard && cart?.payment_sessions?.length ? (
            <RadioGroup
              defaultValue={cart.payment_session?.provider_id || ""}
              onValueChange={(value: string) => handleChange(value)}
            >
              {cart.payment_sessions
                .sort((a, b) => {
                  return a.provider_id > b.provider_id ? 1 : -1;
                })
                .map((paymentSession) => {
                  return (
                    <PaymentContainer
                      paymentInfoMap={paymentInfoMap}
                      paymentSession={paymentSession}
                      key={paymentSession.id}
                      selectedPaymentOptionId={
                        cart.payment_session?.provider_id || null
                      }
                    />
                  );
                })}
            </RadioGroup>
          ) : paidByGiftcard ? (
            <div className="flex flex-col w-1/3">
              <p className="txt-medium-plus text-ui-fg-base mb-1">
                Payment method
              </p>
              <p
                className="txt-medium text-ui-fg-subtle"
                data-testid="payment-method-summary"
              >
                Gift card
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-16 text-ui-fg-base">
              {/* tailwind spinner */}
              <p className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></p>
            </div>
          )}

          <ErrorMessage
            error={error}
            data-testid="payment-method-error-message"
          />

          <Button
            size="default"
            className="mt-6"
            onClick={handleSubmit}
            disabled={!cart?.payment_session && !paidByGiftcard}
            data-testid="submit-payment-button"
          >
            {isLoading ? "Loading..." : "Continue to review"}
          </Button>
        </div>

        <div className={isOpen ? "hidden" : "block"}>
          {cart && paymentReady && cart.payment_session ? (
            <div className="flex items-start gap-x-1 w-full">
              <div className="flex flex-col w-1/3">
                <p className="txt-medium-plus text-ui-fg-base mb-1">
                  Payment method
                </p>
                <p
                  className="txt-medium text-ui-fg-subtle"
                  data-testid="payment-method-summary"
                >
                  {paymentInfoMap[cart.payment_session.provider_id]?.title ||
                    cart.payment_session.provider_id}
                </p>
              </div>
              <div className="flex flex-col w-1/3">
                <p className="txt-medium-plus text-ui-fg-base mb-1">
                  Payment details
                </p>
                <div
                  className="flex gap-2 txt-medium text-ui-fg-subtle items-center"
                  data-testid="payment-details-summary"
                >
                  <div className="flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover">
                    {paymentInfoMap[cart.payment_session.provider_id]?.icon || (
                      <CreditCard />
                    )}
                  </div>
                  <p>
                    {cart.payment_session.provider_id === "stripe" && cardBrand
                      ? cardBrand
                      : "Another step will appear"}
                  </p>
                </div>
              </div>
            </div>
          ) : paidByGiftcard ? (
            <div className="flex flex-col w-1/3">
              <p className="txt-medium-plus text-ui-fg-base mb-1">
                Payment method
              </p>
              <p
                className="txt-medium text-ui-fg-subtle"
                data-testid="payment-method-summary"
              >
                Gift card
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <Separator className="mt-8" />
    </div>
  );
};

export default Payment;
