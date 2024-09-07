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

// const data: PageData[] = [
//   {
//     title: "Category 1",
//     type: "simple",
//     item: {
//       productName: "Item 1",
//       image:
//         "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       type: "simple",
//       new: true,
//       button: {
//         title: "Shop Now",
//         url: "#",
//       },
//       incentive: "Save up to 50%.",
//       offer: "Buy 1 get 1 free",
//     },
//   },
//   {
//     title: "Category 2",
//     type: "image-background",
//     item: {
//       productName: "Item 2",
//       image:
//         "https://images.unsplash.com/photo-1512429234305-12fe5b0b0f07?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       type: "image-background",
//       new: true,
//       button: {
//         title: "Shop Now",
//         url: "#",
//       },
//       incentive: "Save up to 50%.",
//       offer: "Buy 1 get 1 free",
//     },
//   },
//   {
//     title: "Category 3",
//     type: "simple",
//     item: {
//       productName: "Item 3",
//       image:
//         "https://images.unsplash.com/photo-1546868871-08b8ebc35c09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8g",
//       type: "simple",
//       new: true,
//       button: {
//         title: "Shop Now",
//         url: "#",
//       },
//       incentive: "Save up to 50%.",
//       offer: "Buy 1 get 1 free",
//     },
//   },
//   {
//     title: "Category 4",
//     type: "image-background",
//     item: {
//       productName: "Item 4",
//       image:
//         "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       type: "image-background",

//       new: true,
//       button: {
//         title: "Shop Now",
//         url: "#",
//       },
//       incentive: "Save up to 50%.",
//       offer: "Buy 1 get 1 free",
//     },
//   },
//   {
//     title: "Category 5",
//     type: "simple",
//     item: {
//       productName: "Item 1",
//       image:
//         "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       type: "simple",
//       new: true,
//       button: {
//         title: "Shop Now",
//         url: "#",
//       },
//       incentive: "Save up to 50%.",
//       offer: "Buy 1 get 1 free",
//     },
//   },
// ];

export const ContentOverlayCarousel: React.FC<{
  data: PageData[];
}> = ({ data }) => {
  const [active, setActive] = React.useState(0);
  const controls = data.map((_, index) => (
    <div
      key={index}
      onClick={() => {
        setActive(index);
      }}
      className={`control cursor-pointer font-medium w-fit text-nowrap px-3 py-4 ${
        active === index ? "text-blue-500" : "text-black"
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
        className={`min-h-[40vw] py-3 `}
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
            className="controls flex gap-8 overflow-x-scroll
    items-center justify-start md:justify-center scrollbar-hide my-6 max-w-[90%] mx-auto
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
              placement="center"
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
