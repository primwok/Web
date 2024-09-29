import RefinementList from "@/modules/store/components/refinement-list";
import { SortOptions } from "@/modules/store/components/refinement-list/sort-products";
import PaginatedProducts from "@/modules/store/templates/paginated-products";
import LocalizedClientLink from "@/modules/common/components/localized-client-link";
import { PageWidth } from "@/modules/common/components/page-width";
import { Suspense } from "react";
import SkeletonProductGrid from "@/modules/skeletons/templates/skeleton-product-grid";
import { FilterHeaderComponent } from "@/modules/products-initial/filter";

type SearchResultsTemplateProps = {
  query: string;
  ids: string[];
  sortBy?: SortOptions;
  page?: string;
  countryCode: string;
};

const SearchResultsTemplate = ({
  query,
  ids,
  sortBy,
  page,
  countryCode,
}: SearchResultsTemplateProps) => {
  const pageNumber = page ? parseInt(page) : 1;

  return (
    <div className="bg-gray-100 flex flex-col gap-4 pb-[15rem]">
      <PageWidth>
        <div className="flex justify-between border-b w-full p-[1rem] items-center bg-white mt-1">
          <div className="flex items-center gap-3">
            <h2 className="text-sm">
              Found <strong>{ids.length}</strong> results for:
            </h2>
            <p className="text-sm font-semibold">{decodeURI(query)}</p>
          </div>
          <LocalizedClientLink
            href="/store"
            className="text-sm font-semibold hover:underline"
          >
            Clear
          </LocalizedClientLink>
        </div>
      </PageWidth>
      {/* <FilterHeaderComponent /> */}

      <PageWidth>
        <div className="content grid grid-cols-12 gap-4">
          {ids.length > 0 ? (
            <>
              <div className="md:col-span-3 hidden md:flex  relative h-full">
                <div className="sticky top-[4rem] h-fit w-full flex ">
                  <RefinementList sortBy={sortBy || "created_at"} search />
                </div>
              </div>
              <div className="col-span-12 md:col-span-9 flex flex-col gap-8">
                <Suspense fallback={<SkeletonProductGrid />}>
                  <PaginatedProducts
                    productsIds={ids}
                    sortBy={sortBy}
                    page={pageNumber}
                    countryCode={countryCode}
                  />
                </Suspense>
              </div>
            </>
          ) : (
            <PageWidth>
              <h2 className="ml-8 sm:ml-14 mt-3">No results.</h2>
            </PageWidth>
          )}
        </div>
      </PageWidth>
    </div>
  );
};

export default SearchResultsTemplate;
