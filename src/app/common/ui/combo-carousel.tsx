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
  type: "grid-simple" | "grid-type-1";
  items: GridItem[];
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
    type: "grid-simple",
    items: [
      {
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
      {
        productName: "Item 2",
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
      {
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
      {
        productName: "Item 4",
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
      {
        productName: "Item 5",
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
      {
        productName: "Item 6",
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
    ],
  },
  {
    title: "Category 2",
    type: "grid-type-1",
    items: [
      {
        productName: "Item 1",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 2",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "main-image-1",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 3",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 4",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 5",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 6",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
    ],
  },
  {
    title: "Category 3",
    type: "grid-type-1",
    items: [
      {
        productName: "Item 1",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 2",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "main-image-2",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 3",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 4",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 5",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 6",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
    ],
  },
  {
    title: "Category 4",
    type: "grid-type-1",
    items: [
      {
        productName: "Item 1",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 2",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "main-image-2",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 3",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 4",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 5",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 6",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
    ],
  },
  {
    title: "Category 5",
    type: "grid-type-1",
    items: [
      {
        productName: "Item 1",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 2",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "main-image-3",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
        offerImages: [
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        ],
      },
      {
        productName: "Item 3",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 4",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 5",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
    ],
  },
  {
    title: "Category 6",
    type: "grid-type-1",
    items: [
      {
        productName: "Item 1",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 2",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "main-image-3",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
        offerImages: [
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        ],
      },
      {
        productName: "Item 3",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 4",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      {
        productName: "Item 5",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
    ],
  },
];

export const ComboCarousel = () => {
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
  return (
    <PageWidth>
      <div className="w-full h-full">
        <div
          className="controls flex gap-4 overflow-x-scroll
			items-center justify-center scrollbar-hide my-6
		"
        >
          {controls}
        </div>
        <div className="rail">
          {data
            .filter((_, index) => active === index)
            .map((_, index) => (
              <Page key={index} data={_} active={active === index} />
            ))}
        </div>
      </div>
    </PageWidth>
  );
};

const Page: React.FC<{
  data: PageData;
  active: boolean;
}> = ({ data, active }) => {
  const type = data.type;
  const gridColumns = type === "grid-simple" ? "grid-cols-3" : "grid-cols-4";
  const gridRows = "grid-rows-2";
  const gridGap = "gap-4";

  return (
    <div className={`grid ${gridColumns} ${gridRows} ${gridGap}`}>
      {data.items
        .sort((a, b) => (a.type !== "simple" ? -1 : 1))
        .map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
    </div>
  );
};

const GridItem: React.FC<{ item: GridItem }> = ({ item }) => {
  switch (item.type) {
    case "simple":
      return <SimpleItem item={item} />;
    case "main-image-1":
      return <MainImage1 item={item} border />;
    case "main-image-2":
      return <MainImage1 item={item} />;
    case "main-image-3":
      return <MainImage3 item={item} />;
    case "main-image-4":
      return <MainImage4 item={item} />;
    default:
      return null;
  }
};

const SimpleItem: React.FC<{ item: GridItem }> = ({ item }) => {
  return (
    <Card
      className={`group bg-gray-200 cursor-pointer
			${
        item.type === "simple"
          ? "row-span-1 col-span-1 col-span-1"
          : "row-span-2 col-span-2"
      }
	   grid-rows-5
		`}
    >
      <CardHeader className="row-span-1">
        {item.new && (
          <span className="rounded-lg py-1 px-2 border-box text-xs bg-blue-500 text-white w-fit">
            New
          </span>
        )}
      </CardHeader>
      <CardContent className="row-span-3">
        <div className="flex flex-col gap-4 justify-center items-center">
          <Image
            src={item.image}
            alt={item.productName}
            width={150}
            height={150}
          />
        </div>
      </CardContent>
      <CardFooter className="row-span-2">
        <div className="grid grid-rows-3 w-full items-center jutify-center ">
          <div className="title-container flex justify-center items-center">
            <h5 className="text-lg font-medium row-span-1">
              {item.productName}
            </h5>
          </div>
          <div
            className="flex flex-col gap-1 items-center justify-center group-hover:hidden
		 	row-span-2 
		  "
          >
            <p className="text-sm font-medium text-blue-500">
              {item.incentive}
            </p>
            <p className="text-sm font-normal">{item.offer}</p>
          </div>
          <div
            className="hidden group-hover:flex w-full  items-center justify-center
		 	group-hover:row-span-2 
		  "
          >
            <Button className=" w-fit">{item.button.title}</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

/**
 *
 * @param item
 * This is the main image component
 * It is used to display the main image in the grid with
 * text section as a footer
 *  it has a space between the image and the text sections
 */
const MainImage1: React.FC<{ item: GridItem; border?: boolean }> = ({
  item,
  border,
}) => {
  return (
    <Card
      className="group bg-gray-200 cursor-pointer row-span-2 col-span-2
		grid grid-rows-7
	"
    >
      <CardHeader className="row-span-1">
        {item.new && (
          <span className="rounded-lg py-1 px-2 border-box text-xs bg-blue-500 text-white w-fit">
            New
          </span>
        )}
      </CardHeader>
      <CardContent
        className={`row-span-4  ${border ? "border-b border-white" : ""}`}
      >
        <div
          className="image-container h-full w-full flex flex-col gap-4 justify-center items-center
		"
        >
          <Image
            src={item.image}
            alt={item.productName}
            width={150}
            height={150}
          />
        </div>
      </CardContent>
      <CardFooter className="row-span-2">
        <div className="grid grid-rows-3 w-full items-center jutify-center ">
          <div className="title-container flex justify-center items-center">
            <h5 className="text-lg font-medium row-span-1">
              {item.productName}
            </h5>
          </div>
          <div
            className="flex flex-col gap-2 items-center justify-center group-hover:hidden
		 	row-span-2 
		  "
          >
            <p className="text-sm font-medium text-blue-500">
              {item.incentive}
            </p>
            <p className="text-sm font-normal">{item.offer}</p>
          </div>
          <div
            className="hidden group-hover:flex w-full  items-center justify-center
		 	group-hover:row-span-2 
		  "
          >
            <Button className=" w-fit">{item.button.title}</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

/**
 *
 * @param item
 * This is a main image component
 * It is used to display the main image in the grid with
 * text section as a footer
 *  it has a space between the image and the text sections
 */
const MainImage3: React.FC<{ item: GridItem }> = ({ item }) => {
  return (
    <Card
      className="group bg-gray-200 cursor-pointer row-span-2 col-span-2
	  grid grid-rows-7
  "
    >
      <CardHeader className="row-span-1">
        {item.new && (
          <span className="rounded-lg py-1 px-2 border-box text-xs bg-blue-500 text-white w-fit">
            New
          </span>
        )}
      </CardHeader>
      <CardContent className={`row-span-4`}>
        <div
          className="image-container h-full w-full grid grid-cols-2 gap-1 items-center justify-center
		"
        >
          <div
            className={`${
              (item.offerImages?.length as number) > 1
                ? "col-span-2"
                : "col-span-1"
            } `}
          >
            <Image
              src={item.image}
              alt={item.productName}
              width={100}
              height={150}
            />
          </div>
          {item.offerImages?.map((image, index) => (
            <div key={index} className="col-span-1">
              <Image
                src={image}
                alt={item.productName}
                width={100}
                height={150}
              />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="row-span-2">
        <div className="grid grid-rows-3 w-full items-center jutify-center ">
          <div className="title-container flex justify-center items-center">
            <h5 className="text-lg font-medium row-span-1">
              {item.productName}
            </h5>
          </div>
          <div
            className="flex flex-col gap-2 items-center justify-center group-hover:hidden
		   row-span-2 
		"
          >
            <p className="text-sm font-medium text-blue-500">
              {item.incentive}
            </p>
            <p className="text-sm font-normal">{item.offer}</p>
          </div>
          <div
            className="hidden group-hover:flex w-full  items-center justify-center
		   group-hover:row-span-2 
		"
          >
            <Button className=" w-fit">{item.button.title}</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

const MainImage4: React.FC<{ item: GridItem }> = ({ item }) => {
  return (
    <Card className="group bg-gray-200 cursor-pointer row-span-2 col-span-2">
      <CardHeader>
        {item.new && (
          <span className="rounded-lg py-1 px-2 border-box text-xs bg-blue-500 text-white w-fit">
            New
          </span>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Image
            src={item.image}
            alt={item.productName}
            width={150}
            height={150}
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col w-full items-center jutify-center">
          <div className="flex flex-col gap-4 items-center justify-center group-hover:hidden">
            <p className="text-sm font-medium text-blue-500">
              {item.incentive}
            </p>
            <p className="text-sm font-normal">{item.offer}</p>
          </div>
          <Button className="hidden group-hover:block w-fit">
            {item.button.title}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
