"use client";
import React, { useState } from "react";
import {
  useSearchParams,
  useRouter,
  usePathname,
  useParams,
} from "next/navigation";
import { Cart, Customer } from "@medusajs/medusa";
import { Separator } from "@/components/ui/separator";
import BillingAddress from "../billing_address";
import ShippingAddress from "../shipping-address";
import { setAddresses } from "../../actions";
import { useFormState } from "react-dom";
import ErrorMessage from "../error-message";
import compareAddresses from "@/lib/util/compare-addresses";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Addresses = ({
  cart,
  customer,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total"> | null;
  customer: Omit<Customer, "password_hash"> | null;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const countryCode = params.countryCode as string;

  const isOpen = searchParams.get("step") === "address";

  const [sameAsSBilling, toggleSameAsBilling] = useState(
    cart?.shipping_address && cart?.billing_address
      ? compareAddresses(cart?.shipping_address, cart?.billing_address)
      : true
  );

  const handleEdit = () => {
    router.push(pathname + "?step=address");
  };

  const [message, formAction] = useFormState(setAddresses, null);

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <h2 className="flex flex-row text-3xl-regular gap-x-2 items-baseline">
          Shipping Address
          {!isOpen && <CheckCircle />}
        </h2>
        {!isOpen && cart?.shipping_address && (
          <button
            onClick={handleEdit}
            className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
            data-testid="edit-address-button"
          >
            Edit
          </button>
        )}
      </div>
      {isOpen ? (
        <form action={formAction}>
          <div className="pb-8">
            <ShippingAddress
              customer={customer}
              countryCode={countryCode}
              checked={sameAsSBilling}
              onChange={() => toggleSameAsBilling(!sameAsSBilling)}
              cart={cart}
            />

            {!sameAsSBilling && (
              <div>
                <h2 className="text-3xl-regular gap-x-4 pb-6 pt-8">
                  Billing address
                </h2>

                <BillingAddress cart={cart} countryCode={countryCode} />
              </div>
            )}
            <Button className="mt-6" data-testid="submit-address-button">
              Continue to delivery
            </Button>
            <ErrorMessage error={message} data-testid="address-error-message" />
          </div>
        </form>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart && cart.shipping_address ? (
              <div className="flex items-start gap-x-8">
                <div className="flex items-start gap-x-1 w-full">
                  <div
                    className="flex flex-col w-1/3"
                    data-testid="shipping-address-summary"
                  >
                    <h2 className="txt-medium-plus text-ui-fg-base mb-1">
                      Shipping Address
                    </h2>
                    <p className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.first_name}{" "}
                      {cart.shipping_address.last_name}
                    </p>
                    <p className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.address_1}{" "}
                      {cart.shipping_address.address_2}
                    </p>
                    <p className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.postal_code},{" "}
                      {cart.shipping_address.city}
                    </p>
                    <p className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.country_code?.toUpperCase()}
                    </p>
                  </div>

                  <div
                    className="flex flex-col w-1/3 "
                    data-testid="shipping-contact-summary"
                  >
                    <p className="txt-medium-plus text-ui-fg-base mb-1">
                      Contact
                    </p>
                    <p className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.phone}
                    </p>
                    <p className="txt-medium text-ui-fg-subtle">{cart.email}</p>
                  </div>

                  <div
                    className="flex flex-col w-1/3"
                    data-testid="billing-address-summary"
                  >
                    <h2 className="txt-medium-plus text-ui-fg-base mb-1">
                      Billing Address
                    </h2>

                    {sameAsSBilling ? (
                      <p className="txt-medium text-ui-fg-subtle">
                        Billing- and delivery address are the same.
                      </p>
                    ) : (
                      <>
                        <p className="txt-medium text-ui-fg-subtle">
                          {cart.billing_address.first_name}{" "}
                          {cart.billing_address.last_name}
                        </p>
                        <p className="txt-medium text-ui-fg-subtle">
                          {cart.billing_address.address_1}{" "}
                          {cart.billing_address.address_2}
                        </p>
                        <p className="txt-medium text-ui-fg-subtle">
                          {cart.billing_address.postal_code},{" "}
                          {cart.billing_address.city}
                        </p>
                        <p className="txt-medium text-ui-fg-subtle">
                          {cart.billing_address.country_code?.toUpperCase()}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {/* // tailwind css spinner */}
                <p className="animate-spin">Loading...</p>
              </div>
            )}
          </div>
        </div>
      )}
      <Separator className="mt-8" />
    </div>
  );
};

export default Addresses;
