"use client";

import React from "react";

export const CartContext = React.createContext({});

export const CartProvider: React.FC<
  React.PropsWithChildren<{ store: any }>
> = ({ children, store }) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return React.useContext(CartContext);
};
