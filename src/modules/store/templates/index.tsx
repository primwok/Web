import { Suspense } from "react";

import SkeletonProductGrid from "@/modules/skeletons/templates/skeleton-product-grid";
import RefinementList from "@/modules/store/components/refinement-list";
import { SortOptions } from "@/modules/store/components/refinement-list/sort-products";

import PaginatedProducts from "./paginated-products";
import { FilterHeaderComponent } from "@/modules/products-initial/filter";
import { PageWidth } from "@/modules/common/components/page-width";

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions;
  page?: string;
  countryCode: string;
}) => {
  const pageNumber = page ? parseInt(page) : 1;

  return (
    <div className="bg-slate-100 flex flex-col gap-4 pb-[15rem]">
      <FilterHeaderComponent />
      <PageWidth>
        <div className="content grid grid-cols-12 gap-4">
          <div className="md:col-span-3 hidden md:flex  relative h-full">
            <div className="sticky top-[4rem] h-fit w-full flex ">
              <RefinementList sortBy={sortBy || "created_at"} />
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 flex flex-col gap-8">
            <Suspense fallback={<SkeletonProductGrid />}>
              <PaginatedProducts
                sortBy={sortBy || "created_at"}
                page={pageNumber}
                countryCode={countryCode}
              />
            </Suspense>
          </div>
        </div>
      </PageWidth>
      {/* <div
        className="flex flex-col small:flex-row small:items-start py-6 content-container"
        data-testid="category-container"
      >
        <RefinementList sortBy={sortBy || "created_at"} />
        <div className="w-full">
          <div className="mb-8 text-2xl-semi">
            <h1 data-testid="store-page-title">All products</h1>
          </div>
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sortBy || "created_at"}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div> */}
    </div>
  );
};

export default StoreTemplate;
