import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Heading, Text } from "@medusajs/ui";
import LocalizedClientLink from "@/modules/common/components/localized-client-link";

type ProductInfoProps = {
  product: PricedProduct;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-semibold">Description</h4>
        <p className="text-sm text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
