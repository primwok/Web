import { getProductsListWithSort, getRegion } from "@/lib/data";
import ProductPreview from "@/modules/products/components/product-preview";
import { Pagination } from "@/modules/store/components/pagination";
import { SortOptions } from "@/modules/store/components/refinement-list/sort-products";

const PRODUCT_LIMIT = 4;

type PaginatedProductsParams = {
  limit: number;
  collection_id?: string[];
  category_id?: string[];
  id?: string[];
};

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
}: {
  sortBy?: SortOptions;
  page: number;
  collectionId?: string;
  categoryId?: string;
  productsIds?: string[];
  countryCode: string;
}) {
  const region = await getRegion(countryCode);

  if (!region) {
    return null;
  }

  const queryParams: PaginatedProductsParams = {
    limit: PRODUCT_LIMIT,
  };

  if (collectionId) {
    queryParams["collection_id"] = [collectionId];
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId];
  }

  if (productsIds) {
    queryParams["id"] = productsIds;
  }

  const {
    response: { products, count },
  } = await getProductsListWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  });

  const totalPages = Math.ceil(count / PRODUCT_LIMIT);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  px-3 lg:px-0">
        {products.map((p) => {
          return (
            <div key={p.id}>
              <ProductPreview productPreview={p} region={region} />
            </div>
          );
        })}
      </div>
      {totalPages > 1 && (
        <div className="flex w-full">
          <Pagination
            data-testid="product-pagination"
            page={page}
            totalPages={totalPages}
          />
        </div>
      )}
    </>
  );
}
