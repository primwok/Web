"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import SortProducts, { SortOptions } from "./sort-products";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

type RefinementListProps = {
  sortBy: SortOptions;
  search?: boolean;
  "data-testid"?: string;
};

const RefinementList = ({
  sortBy,
  "data-testid": dataTestId,
}: RefinementListProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value);
    router.push(`${pathname}?${query}`);
  };

  return (
    // <div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]">
    <ScrollArea className="h-[calc(100vh-4rem)] w-full flex flex-col gap-2 pb-4 bg-white w-full">
      <SortProducts
        sortBy={sortBy}
        setQueryParams={setQueryParams}
        data-testid={dataTestId}
      />
      <Separator />
    </ScrollArea>
    // </div>
  );
};

export default RefinementList;
