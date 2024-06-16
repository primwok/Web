"use client";

import { MedusaProvider } from "medusa-react";
import { ToasterProvider } from "./toast-notification.provider";
// import Storefront from "./Storefront"
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { API_URL } from "@/lib/secrets";

const queryClient = new QueryClient();

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={API_URL ?? ""}
    >
      {children}
      {/* <ToasterProvider /> */}
    </MedusaProvider>
  );
};
