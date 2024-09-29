import { PaymentSession } from "@medusajs/medusa";
import React from "react";

import PaymentTest from "../payment-test";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Tooltip } from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PaymentContainerProps = {
  paymentSession: PaymentSession;
  selectedPaymentOptionId: string | null;
  disabled?: boolean;
  paymentInfoMap: Record<string, { title: string; icon: JSX.Element }>;
  handleChange: (providerId: string) => void;
};

const PaymentContainer: React.FC<PaymentContainerProps> = ({
  paymentSession,
  selectedPaymentOptionId,
  paymentInfoMap,
  disabled = false,
  handleChange,
}) => {
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <>
      <div
        key={paymentSession.id}
        className={cn(
          "flex flex-col gap-y-2 text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:bg-sky-100",
          {
            "border border-sky-500":
              selectedPaymentOptionId === paymentSession.provider_id,
          }
        )}
        onClick={() => handleChange(paymentSession.provider_id)}
      >
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-4">
            <RadioGroupItem
              disabled={disabled}
              value={paymentSession.provider_id}
              checked={selectedPaymentOptionId === paymentSession.provider_id}
            />
            <p className="text-base-regular text-sm">
              {paymentInfoMap[paymentSession.provider_id]?.title ||
                paymentSession.provider_id}
            </p>
            {/* {process.env.NODE_ENV === "development" &&
              !Object.hasOwn(paymentInfoMap, paymentSession.provider_id) && (
                <Tooltip
                  content="You can add a user-friendly name and icon for this payment provider in 'src/modules/checkout/components/payment/index.tsx'"
                  className="min-w-fit"

                >
                  <InfoIcon color="var(--fg-muted)" />
                </Tooltip>
              )} */}

            {paymentSession.provider_id === "manual" && isDevelopment && (
              <PaymentTest className="hidden sm:block" />
            )}
          </div>
          <span className="justify-self-end text-ui-fg-base">
            {paymentInfoMap[paymentSession.provider_id]?.icon}
          </span>
        </div>
        {paymentSession.provider_id === "manual" && isDevelopment && (
          <PaymentTest className="sm:hidden text-[10px]" />
        )}
      </div>
    </>
  );
};

export default PaymentContainer;
