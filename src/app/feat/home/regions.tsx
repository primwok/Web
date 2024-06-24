"use client";

import { CSelect } from "@/components/ui/custom/select";
import { Select } from "@/components/ui/select";
import { useRegions } from "medusa-react";
import { FormProvider, useForm } from "react-hook-form";

export const Regions = () => {
  const { regions, isLoading } = useRegions();
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      {isLoading && <span>Loading...</span>}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CSelect
            options={regions?.map((region) => ({
              value: region.id,
              label: region.name,
            }))}
            // label="Regions"
            name="regions"
            placeholder="Select a region"
          />
        </form>
      </FormProvider>
    </div>
  );
};
