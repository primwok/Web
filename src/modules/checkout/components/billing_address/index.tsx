import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import CountrySelect from "../country-select";
import { Cart } from "@medusajs/medusa";
import { Label } from "@/components/ui/label";

const BillingAddress = ({
  cart,
  countryCode,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total"> | null;
  countryCode: string;
}) => {
  const [formData, setFormData] = useState({
    "billing_address.first_name": cart?.billing_address?.first_name || "",
    "billing_address.last_name": cart?.billing_address?.last_name || "",
    "billing_address.address_1": cart?.billing_address?.address_1 || "",
    "billing_address.company": cart?.billing_address?.company || "",
    "billing_address.postal_code": cart?.billing_address?.postal_code || "",
    "billing_address.city": cart?.billing_address?.city || "",
    "billing_address.country_code":
      cart?.billing_address?.country_code || countryCode || "",
    "billing_address.province": cart?.billing_address?.province || "",
    "billing_address.phone": cart?.billing_address?.phone || "",
  });

  useEffect(() => {
    setFormData({
      "billing_address.first_name": cart?.billing_address?.first_name || "",
      "billing_address.last_name": cart?.billing_address?.last_name || "",
      "billing_address.address_1": cart?.billing_address?.address_1 || "",
      "billing_address.company": cart?.billing_address?.company || "",
      "billing_address.postal_code": cart?.billing_address?.postal_code || "",
      "billing_address.city": cart?.billing_address?.city || "",
      "billing_address.country_code": cart?.billing_address?.country_code || "",
      "billing_address.province": cart?.billing_address?.province || "",
      "billing_address.phone": cart?.billing_address?.phone || "",
    });
  }, [cart?.billing_address]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="billing-first-name-input">First name</Label>
          <Input
            name="billing_address.first_name"
            autoComplete="given-name"
            value={formData["billing_address.first_name"]}
            onChange={handleChange}
            required
            data-testid="billing-first-name-input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="billing-last-name-input">Last name</Label>
          <Input
            name="billing_address.last_name"
            autoComplete="family-name"
            value={formData["billing_address.last_name"]}
            onChange={handleChange}
            required
            data-testid="billing-last-name-input"
          />
        </div>

        <div className="flex flex-col col-span-2 gap-2">
          <Label htmlFor="billing-address-input">Address</Label>
          <Input
            name="billing_address.address_1"
            autoComplete="address-line1"
            value={formData["billing_address.address_1"]}
            onChange={handleChange}
            required
            data-testid="billing-address-input"
          />
        </div>

        <div className="flex flex-col col-span-2 gap-2">
          <Label htmlFor="billing-company-input">Company</Label>
          <Input
            name="billing_address.company"
            value={formData["billing_address.company"]}
            onChange={handleChange}
            autoComplete="organization"
            data-testid="billing-company-input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="billing-postal-input">Postal code</Label>
          <Input
            name="billing_address.postal_code"
            autoComplete="postal-code"
            value={formData["billing_address.postal_code"]}
            onChange={handleChange}
            required
            data-testid="billing-postal-input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="billing-city-input">City</Label>
          <Input
            name="billing_address.city"
            autoComplete="address-level2"
            value={formData["billing_address.city"]}
            onChange={handleChange}
            required
            data-testid="billing-city-input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="billing-country-select">Country</Label>
          <CountrySelect
            name="billing_address.country_code"
            // autoComplete="country"
            region={cart?.region}
            value={formData["billing_address.country_code"]}
            onChange={handleChange}
            required
            data-testid="billing-country-select"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="billing-province-input">State / Province</Label>
          <Input
            name="billing_address.province"
            autoComplete="address-level1"
            value={formData["billing_address.province"]}
            onChange={handleChange}
            data-testid="billing-province-input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="billing-phone-input">Phone</Label>
          <Input
            name="billing_address.phone"
            autoComplete="tel"
            value={formData["billing_address.phone"]}
            onChange={handleChange}
            data-testid="billing-phone-input"
          />
        </div>
      </div>
    </>
  );
};

export default BillingAddress;
