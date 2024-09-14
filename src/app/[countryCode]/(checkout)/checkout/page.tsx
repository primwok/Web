import { getCart } from "@/lib/data";
import { enrichLineItems } from "@/modules/cart/actions";
import CheckoutForm from "@/modules/checkout/templates/checkout-form";
import CheckoutSummary from "@/modules/checkout/templates/checkout-summary";
import { LineItem } from "@medusajs/medusa";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Checkout",
};

const fetchCart = async () => {
  const cartId = cookies().get("_medusa_cart_id")?.value;

  if (!cartId) {
    return notFound();
  }

  const cart = await getCart(cartId).then(({ data }) => data?.cart);

  if (cart?.items.length) {
    const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id);
    cart.items = enrichedItems as LineItem[];
  }

  return cart;
};

export default async function Checkout() {
  const cart = await fetchCart();

  if (!cart) {
    return notFound();
  }

  return (
    <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
      <CheckoutForm />
      <CheckoutSummary />
    </div>
  );
}
