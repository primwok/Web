"use client";

import { useCart } from "@/lib/contexts/cart.context";

export const CartList: React.FC = () => {
  const { state } = useCart();
  return (
    <div className="h-full">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Cart</h1>
      {state.cart ? (
        <div className="flex flex-col gap-2">
          {state.cart.items.map((item) => (
            <div key={item.id} className="grid grid-cols-5">
              <img src={item.thumbnail as string} alt={item.title} />
              <h6>{item.title}</h6>
              <h6>{item.variant.title}</h6>
              <h6>{item.quantity}</h6>
              <h6>{item.total}</h6>
            </div>
          ))}
        </div>
      ) : (
        <span>No items in cart</span>
      )}
    </div>
  );
};
