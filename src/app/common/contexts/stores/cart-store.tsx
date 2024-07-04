"use client";
export const CART_STORE_KEY = "cart";

export class CartStore {
  constructor(private key: string) {}

  get() {
    return localStorage.getItem(this.key);
  }

  set(value: string) {
    return localStorage.setItem(this.key, value);
  }
}

export const CartStorage = new CartStore(CART_STORE_KEY);
