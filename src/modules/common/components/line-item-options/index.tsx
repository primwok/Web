import { ProductVariant } from "@medusajs/medusa";

type LineItemOptionsProps = {
  variant: ProductVariant;
  "data-testid"?: string;
  "data-value"?: ProductVariant;
};

const LineItemOptions = ({
  variant,
  "data-testid": dataTestid,
  "data-value": dataValue,
}: LineItemOptionsProps) => {
  return (
    <p
      data-testid={dataTestid}
      data-value={dataValue}
      className="inline-block text-sm font-medium w-full overflow-hidden text-ellipsis"
    >
      Variant: {variant.title}
    </p>
  );
};

export default LineItemOptions;
