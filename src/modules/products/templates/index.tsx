import { Region } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import React, { Suspense } from "react";

import ImageGallery from "@/modules/products/components/image-gallery";
import ProductActions from "@/modules/products/components/product-actions";
import ProductOnboardingCta from "@/modules/products/components/product-onboarding-cta";
import ProductTabs from "@/modules/products/components/product-tabs";
import RelatedProducts from "@/modules/products/components/related-products";
import ProductInfo from "@/modules/products/templates/product-info";
import SkeletonRelatedProducts from "@/modules/skeletons/templates/skeleton-related-products";
import { notFound } from "next/navigation";
import ProductActionsWrapper from "./product-actions-wrapper";
import { PageWidth } from "@/modules/common/components/page-width";
import { Button } from "@/components/ui/button";
import EmblaCarousel from "@/modules/common/components/embla-carousel/carousel";
import { ProductRating } from "@/modules/common/components/product-cards/rating";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import numeral from "numeral";
import { BreadcrumbDemo } from "@/modules/products-initial/detail";
import FloatingCartAction from "../components/floating-cart-action";

type ProductTemplateProps = {
  product: PricedProduct;
  region: Region;
  countryCode: string;
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  const OPTIONS: any = {};

  if (!product || !product.id) {
    return notFound();
  }

  return (
    <>
      <div className="flex flex-col gap-4 pb-[10rem]">
        <PageWidth>
          <div className="py-4 px-2 flex flex-col gap-3">
            <Separator />
            <BreadcrumbDemo />
            <Separator />
          </div>
        </PageWidth>
        <PageWidth>
          <div className="grid grid-cols-12 md:gap-12 px-3 lg:px-0">
            <div className="col-span-12 md:col-span-6 relative">
              <div className="w-full sticky top-0 h-fit md:pt-[3rem]">
                <EmblaCarousel
                  slides={(product.images as any) ?? []}
                  options={OPTIONS}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex flex-col gap-6 p-2 lg:p-o">
                <Suspense
                  fallback={
                    <ProductActions
                      disabled={true}
                      product={product}
                      region={region}
                    />
                  }
                >
                  <ProductActionsWrapper id={product.id} region={region} />
                </Suspense>
                <Separator />

                <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
                  <ProductInfo product={product} />
                  <ProductTabs product={product} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-container my-16 sm:my-32"
            data-testid="related-products-container"
          >
            <Suspense fallback={<SkeletonRelatedProducts />}>
              <RelatedProducts product={product} countryCode={countryCode} />
            </Suspense>
          </div>
        </PageWidth>
      </div>
    </>
  );
};

export default ProductTemplate;
