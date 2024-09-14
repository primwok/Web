import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";

import { Region } from "@medusajs/medusa";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectContent, SelectGroup, SelectItem } from "@radix-ui/react-select";

const CountrySelect = forwardRef<
  HTMLSelectElement,
  {
    name: string;
    region?: Region;
    defaultValue?: string;
    placeholder?: string;
    onChange?: (
      value: React.ChangeEvent<
        HTMLInputElement | HTMLInputElement | HTMLSelectElement
      >
    ) => void;
    value?: string;
    required?: boolean;
  }
>(({ placeholder = "Country", region, defaultValue, ...props }, ref) => {
  const innerRef = useRef<HTMLSelectElement>(null);

  useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
    ref,
    () => innerRef.current
  );

  const countryOptions = useMemo(() => {
    if (!region) {
      return [];
    }

    return region.countries.map((country) => ({
      value: country.iso_2,
      label: country.display_name,
    }));
  }, [region]);

  return (
    <Select
      // ref={innerRef}
      defaultValue={defaultValue}
      {...props}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {countryOptions.map(({ value, label }, index) => (
            <SelectItem key={index} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});

CountrySelect.displayName = "CountrySelect";

export default CountrySelect;
