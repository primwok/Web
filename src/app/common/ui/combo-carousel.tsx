"use client";

import {
  IGridItem,
  MainImageCard1,
  MainImageCard3,
  MainImageCard4,
  SimpleImageCard,
} from "./grid-images";
import { PageWidth } from "./page-width";
import React from "react";

interface PageData {
  title: string;
  type: "grid-simple" | "grid-type-1";
  items: IGridItem[];
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

const GridItem: React.FC<{ item: IGridItem }> = ({ item }) => {
  switch (item.type) {
    case "simple":
      return <SimpleImageCard item={item} />;
    case "main-image-1":
      return <MainImageCard1 item={item} border />;
    case "main-image-2":
      return <MainImageCard1 item={item} />;
    case "main-image-3":
      return <MainImageCard3 item={item} />;
    case "main-image-4":
      return <MainImageCard4 item={item} />;
    default:
      return null;
  }
};
