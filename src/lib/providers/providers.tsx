"use client";

import { MedusaProvider } from "medusa-react";
import { ToasterProvider } from "./toast-notification.provider";
// import Storefront from "./Storefront"
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { API_URL } from "@/lib/secrets";
import { AuthProvider } from "../contexts/auth.context";
import { RegionProvider } from "../contexts/region.context";
import { RegionStorage } from "../contexts/stores/region-store";
import { CartStorage } from "../contexts/stores/cart-store";
import { AuthStorage } from "../contexts/stores/auth-store";
import { CartProvider } from "../contexts/cart.context";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={API_URL ?? ""}
    >
      <TooltipProvider>
        <AuthProvider store={AuthStorage}>
          <RegionProvider store={RegionStorage}>
            <CartProvider store={CartStorage}>{children}</CartProvider>
          </RegionProvider>
        </AuthProvider>
      </TooltipProvider>
    </MedusaProvider>
  );
};
