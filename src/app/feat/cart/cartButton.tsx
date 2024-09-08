import { useCart } from "@/app/common/contexts/cart.context";
import { ShoppingBag } from "lucide-react";

export const CartButton: React.FC<{
  height?: number;
  width?: number;
}> = ({ height, width }) => {
  const cart = useCart();

  return (
    <div className="relative ml-auto mr-2 md:mr-0">
      <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold rounded-full px-2">
        {cart?.state?.cart?.items?.length ?? 0}
      </span>

      <ShoppingBag className={`w-${width ?? 5} h-${height ?? 5}`} />
    </div>
  );
};
