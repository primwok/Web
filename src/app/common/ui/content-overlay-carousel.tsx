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
import { CText } from "./text-block";

interface PageData {
  title: string;
  type: "image-background" | "simple";
  item: GridItem;
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
    item: {
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
  {
    title: "Category 2",
    type: "image-background",
    item: {
      productName: "Item 2",
      image:
        "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
      type: "image-background",
      new: true,
      button: {
        title: "Shop Now",
        url: "#",
      },
      incentive: "Save up to 50%.",
      offer: "Buy 1 get 1 free",
    },
  },
  {
    title: "Category 3",
    type: "simple",
    item: {
      productName: "Item 3",
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
  {
    title: "Category 4",
    type: "image-background",
    item: {
      productName: "Item 4",
      image:
        "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
      type: "image-background",

      new: true,
      button: {
        title: "Shop Now",
        url: "#",
      },
      incentive: "Save up to 50%.",
      offer: "Buy 1 get 1 free",
    },
  },
  {
    title: "Category 5",
    type: "simple",
    item: {
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

export const ContentOverlayCarousel: React.FC = () => {
  const [active, setActive] = React.useState(0);
  const controls = data.map((_, index) => (
    <div
      key={index}
      onClick={() => {
        setActive(index);
      }}
      className={`control cursor-pointer ${
        active === index ? "text-blue-500" : "text-gray-500"
      }`}
    >
      {" "}
      {_.title}
    </div>
  ));

  const activePageImg = data[active]?.item.image;
  return (
    <PageWidth>
      <div
        className={`h-[35vw] py-3 min-h-fit`}
        style={{
          backgroundImage:
            data[active].item.type === "image-background"
              ? `url(${activePageImg})`
              : "none",
        }}
      >
        <CText
          tag="h2"
          content="Shop all latest offers and innovations"
          spacingT="5x"
          type="text"
        />
        <div className="flex flex-col justify-between">
          <div
            className="controls flex gap-4 overflow-x-scroll
					items-center justify-center scrollbar-hide py-2
				"
          >
            {controls}
          </div>
          <div className="rail w-full">
            {data
              .filter((_, index) => active === index)
              .map((_, index) => (
                <Page key={index} data={_} active={active === index} />
              ))}
          </div>
        </div>
      </div>
    </PageWidth>
  );
};

const Page: React.FC<{
  data: PageData;
  active: boolean;
}> = ({ data }) => {
  return (
    <div className={`h-full w-full`}>
      <GridItem item={data.item} />
    </div>
  );
};

const GridItem: React.FC<{ item: GridItem }> = ({ item }) => {
  return (
    <Card
      className={`
		shadow-none border-0  bg-transparent h-full flex flex-col items-center justify-between
`}
    >
      {item.type === "simple" ? (
        <CardContent>
          <Image
            src={item.image}
            alt={item.productName}
            width={300}
            height={300}
          />
        </CardContent>
      ) : null}
      <CardFooter className="mt-auto h-full">
        <div className="grid grid-rows-3 w-full items-center jutify-center gap-4">
          <div className="title-container flex justify-center items-center">
            <CText
              tag="h3"
              content={item.productName}
              orientation="center"
              type="text"
            >
              {item.productName}
            </CText>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <p className="text-sm font-medium text-blue-500">
              {item.incentive}
            </p>
            <p className="text-sm font-normal">{item.offer}</p>
          </div>
          <div
            className="w-full flex items-center justify-center
		  "
          >
            <Button className=" w-fit">{item.button.title}</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
