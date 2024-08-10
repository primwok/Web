"use client";

import { Button } from "@/components/ui/button";
import { PageWidth } from "./page-width";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "lucide-react";
import Image from "next/image";

interface PageData {
  title: string;
  type: "image-background" | "simple";
  items: GridItem;
}

interface GridItem {
  productName: string;
  image: string;
  type: string;
  new: boolean;
  button: {
    title: string;
    url: string;
  };
  incentive: string | null;
  offer: string;
  offerImages?: string[];
}

const data: PageData[] = [
  {
    title: "Category 1",
    type: "simple",
    items: {
      productName: "Item 1",
      image:
        "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
      type: "simple",
      new: true,
      button: {
        title: "Shop Now",
        url: "#",
      },
      incentive: "Save up to 50%.",
      offer: "Buy 1 get 1 free",
    },
  },
];

export const ContentOverlayCarousel: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="relative w-full h-[40vw]">
      <div className="w-full h-full relative">{children}</div>
    </div>
  );
};
