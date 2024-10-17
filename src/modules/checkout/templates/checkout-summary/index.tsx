import ItemsPreviewTemplate from "@/modules/cart/templates/preview";
import DiscountCode from "@/modules/checkout/components/discount-code";
import CartTotals from "@/modules/common/components/cart-totals";
import { cookies } from "next/headers";
import { getCart } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

const CheckoutSummary = async () => {
  const cartId = cookies().get("_medusa_cart_id")?.value;

  if (!cartId) {
    return null;
  }

  const cart = await getCart(cartId).then((cart) => cart);

  if (!cart) {
    return null;
  }

  return (
    <div className="sticky top-0 flex flex-col-reverse sm:flex-col gap-y-8 py-8 sm:py-0 ">
      <div className="w-full bg-white flex flex-col">
        <Separator className="my-6 sm:hidden" />
        <div className="flex flex-row text-3xl-regular items-baseline">
          In your Cart
        </div>
        <Separator className="my-6" />
        <CartTotals data={cart} />
        <ItemsPreviewTemplate region={cart?.region} items={cart?.items} />
        <div className="my-6">
          <DiscountCode cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
