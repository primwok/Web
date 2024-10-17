"use client";

import React from "react";
import { ICartStore } from "./stores/cart-store";
import { Cart } from "medusa-react";
import { LineItem } from "@medusajs/medusa";

export interface CartState {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">;
}

interface CartContext {
  state: CartState;
  createCart: (cart: CartState["cart"]) => void;
}

type CartAction =
  | { type: "CREATE_CART"; payload: CartState["cart"] }
  | { type: "ADD_LINE_ITEM"; payload: LineItem };

export const CartContext = React.createContext<CartContext>(null!);

const CartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "CREATE_CART":
      console.log("setting cart", action.payload);
      return {
        ...state,
        cart: { ...action.payload },
      };
    case "ADD_LINE_ITEM":
      const { cart } = state;
      return {
        ...state,
        cart: {
          ...cart,
          line_items: [...(cart?.items as LineItem[]), action.payload],
        },
      };
    default:
      return state;
  }
};

export const CartProvider: React.FC<
  React.PropsWithChildren<{ store: ICartStore }>
> = ({ children, store }) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<CartState, CartAction>
  >(CartReducer, {
    cart: store.get() as any,
  });

  const stateCopy = Object.assign({}, state);

  const createCart = (cart: CartState["cart"]) => {
    store.set(cart);
    console.log("storing cart on client", cart);
    dispatch({ type: "CREATE_CART", payload: cart as any });
  };

  const addLineItem = (lineItem: any) => {
    dispatch({ type: "ADD_LINE_ITEM", payload: lineItem as any });
  };

  return (
    <CartContext.Provider value={{ createCart, state: stateCopy }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return React.useContext(CartContext);
};
