"use client";

import { getRegions } from "@/app/api/regions/actions";
import { useRegionsQuery } from "@/app/api/regions/query";
import { useRegions } from "@/lib/contexts/region.context";
import { CSelect } from "@/components/ui/custom/select";
import { Select } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { useFormState } from "react-dom";
// import { useRegions } from "medusa-react";
import { FormProvider, useForm } from "react-hook-form";

export const Regions = () => {
  const regions = useRegionsQuery();
  const state = useRegions();
  const form = useForm();
  const selectedRegion = form.watch("regions");

  useEffect(() => {
    if (selectedRegion) {
      state?.setRegion(selectedRegion);
    }
  }, [selectedRegion]);

  return (
    <div>
      {/* {isLoading && <span>Loading...</span>} */}
      <FormProvider {...form}>
        <form>
          <CSelect
            options={regions?.data?.regions?.map((region) => ({
              value: region.id,
              label: region.name,
            }))}
            default={state?.state.region ?? undefined}
            // label="Regions"
            name="regions"
            placeholder="Select a region"
          />
        </form>
      </FormProvider>
    </div>
  );
};
