"use client";
import {
  useAddShippingMethodMutation,
  useListShippingOptionsQuery,
} from "@/app/api/checkout/query";
import { useCart } from "@/app/common/contexts/cart.context";
import { PageWidth } from "@/app/common/ui/page-width";
import { CInput } from "@/components/ui/custom/input";
import { CSelect } from "@/components/ui/custom/select";
import { use, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const CheckoutForms: React.FC = () => {
  return (
    <PageWidth>
      <div>
        <DeliveryForm />
        <ShippingOptions />
      </div>
    </PageWidth>
  );
};

export const DeliveryForm: React.FC = () => {
  const form = useForm();
  return (
    <FormProvider {...form}>
      <form action="">
        <CInput name="company" label="Company" type="text" />
        <div className="flex flex-col md:flex-row gap-2">
          <CInput name="first_name" label="First Name" type="text" />
          <CInput name="last_name" label="Last Name" type="text" />
        </div>
        <CInput name="phone" label="Phone" type="text" />
        <CInput name="address1" label="Address" type="text" />
        <CInput name="address2" label="Address 2" type="text" />
        <div className="flex flex-col md:flex-row gap-2">
          <CInput name="country_code" label="Country" type="text" />
          <CInput name="city" label="City" type="text" />
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <CInput name="province" label="Province" type="text" />
          <CInput name="postal_code" label="Zip" type="text" />
        </div>
      </form>
    </FormProvider>
  );
};

export const ShippingOptions: React.FC = () => {
  const { state: CartState } = useCart();
  const shippingOptions = useListShippingOptionsQuery(CartState.cart?.id ?? "");
  const addShippingMethod = useAddShippingMethodMutation();

  const form = useForm();
  const selectedOption = form.watch("shipping_option");

  useEffect(() => {
    if (selectedOption) {
      addShippingMethod.mutateAsync({
        cart_id: CartState.cart?.id ?? "",
        shipping_option_id: selectedOption,
      });
    }
  }, [selectedOption]);

  return (
    <div>
      <h1>Shipping Options</h1>
      <FormProvider {...form}>
        <form
        // onSubmit={form.handleSubmit(async (data) => {
        //   const res = await addShippingMethod.mutateAsync({
        //     cart_id: CartState.cart?.id ?? "",
        //     shipping_option_id: data.shipping_option,
        //   });
        //   console.log("res", res);
        // })}
        >
          {
            // @ts-ignore
            shippingOptions.isLoading && <p>Loading...</p>
          }
          {shippingOptions.data?.shipping_options && (
            <CSelect
              name="shipping_option"
              label="Shipping Option"
              options={shippingOptions.data?.shipping_options.map((option) => ({
                value: option.id as string,
                label: option.name as string,
              }))}
            />
          )}
        </form>
      </FormProvider>
    </div>
  );
};
