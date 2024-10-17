"use client";

import { clear } from "console";
import { Cart } from "medusa-react";
import { CartState } from "../cart.context";

export const CART_STORE_KEY = "cart";

export interface ICartStore {
  get: () => string | null;
  set: (value: CartState["cart"]) => void;
  clear: () => void;
}

export class CartStore implements ICartStore {
  constructor(private key: string) {}

  get() {
    if (typeof window !== "undefined") {
      try {
        const cart = localStorage.getItem(this.key);
        return JSON.parse(cart as string);
      } catch (error) {
        console.error("Error getting cart", error);
      }
    }
    return null;
  }

  set(value: CartState["cart"]) {
    if (typeof window !== "undefined") {
      try {
        const cart = JSON.stringify(value);
        return localStorage.setItem(this.key, cart);
      } catch (error) {
        console.error("Error setting cart", error);
      }
    }
  }

  clear() {
    return localStorage.removeItem(this.key);
  }
}

export const CartStorage = new CartStore(CART_STORE_KEY);
