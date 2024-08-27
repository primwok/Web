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
          "https://image-us.samsung.com/us/smartphones/galaxy-z-fold6/gallery/01-Q6-Black-1600x1200.jpg?$product-card-small-jpg$",
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
          "https://image-us.samsung.com/SamsungUS/home/home-appliances/washers/all-in-one-washer-dryer-combo/wd53dba900hza1/gallery/WD53DBA900HZA1_01_Dark_Steel_SCOM.jpg?$product-card-small-jpg$",
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
          "https://image-us.samsung.com/SamsungUS/home/mobile/audio/headphones/buds3-gallery/SCOMB6Q6-887-SM-R630_001_Front_Silver_RGB-1600x1200.jpg?$product-card-small-jpg$",
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
          "https://image-us.samsung.com/us/smartphones/galaxy-z-flip6/gallery/01-B6-CraftedBlack-1600x1200.jpg?$product-card-small-jpg$",
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
          "https://image-us.samsung.com/us/tablets/galaxy-tab-s9/products/tab-s9plus/gallery-images/graphite/new/1.jpg?$product-card-small-jpg$",
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
          "https://image-us.samsung.com/SamsungUS/home/computing/galaxy-books/gp4-16-360-pro/GB4_Pro_360_16_US_Copilot_Moonstone-Gray_001_Front-1600x1200.jpg?$product-card-small-jpg$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08212024/SDSAC-7985-Q-Series-Soundbar-Small_Tile_DT_160x160.png?$160_160_PNG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08202024/SDSAC-7961-Flip6-HP-MM-LargeTile-DT-684x684.jpg?$684_684_JPG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08212024/SDSAC-7985-Q-Series-Soundbar-Small_Tile_DT_160x160.png?$160_160_PNG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08212024/SDSAC-7985-Freestyle-Small_Tile_DT_160x160.png?$160_160_PNG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08202024/SDSAC-7961-Q80C-HP-MM-SmallTile-DT-160x160.png?$160_160_PNG$",
        type: "simple",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
      },
      // {
      //   productName: "Item 6",
      //   image:
      //     "https://images.samsung.com/is/image/samsung/assets/us/home/08202024/SDSAC-7961-QN90D-HP-MM-SmallTile-DT-160x160.png?$160_160_PNG$",
      //   type: "simple",
      //   new: true,
      //   button: {
      //     title: "Shop Now",
      //     url: "#",
      //   },
      //   incentive: null,
      //   offer: "Buy 1 get 1 free",
      // },
    ],
  },
  {
    title: "Category 3",
    type: "grid-type-1",
    items: [
      {
        productName: "Item 1",
        image:
          "https://images.samsung.com/is/image/samsung/assets/us/home/08022024/HOME_Q6-OnlineExclusive_Merchandising_684x684_pc.jpg?$684_684_JPG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/07292024/SDSAC-7742_S24U_ETI_MM_Small_Tile_DT_160x160.png?$160_160_PNG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08162024/Product-Tile-Chiefs-DT.png?$160_160_PNG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/2407/homepage/Scom_HP_CO05-Mobile_Card-4_WatchUltra-pc-latest.jpg?$330_330_JPG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/2407/homepage/Scom_HP_CO05-Mobile_Card-5_BudsPro-pc-latest.jpg?$330_330_JPG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08162024/SDSAC-7919-QE1D-HP-MM-LargeTile-DT-684x684.jpg?$684_684_JPG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08162024/SDSAC-7919-Q80C-HP-MM-SmallTile-DT-160x160.png?$160_160_PNG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08162024/SDSAC-7919-QNX1D-HP-MM-SmallTile-DT-160x160.png?$160_160_PNG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08162024/SDSAC-7919-QN90C-HP-MM-SmallTile-DT-160x160.png?$160_160_PNG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08162024/SDSAC-7906-S800D-HP-MM-SmallTile-DT-160x160.png?$160_160_PNG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08212024/SDSAC-7485-RF23DB9900QD-HP-MM-LargeTile-DT-684x684.jpg?$684_684_JPG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08212024/SDSAC-7485-WD53DBA900HZA1-HP-MM-SmallTile-DT-330x330.jpg?$330_330_JPG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/06142024-2/NSE6DB850012AA-desktop.jpg?$330_330_JPG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08212024/8900-LDY-MM-DT.jpg?$330_330_JPG$",
        type: "main-image-3",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
        offerImages: [
          "https://images.samsung.com/is/image/samsung/assets/us/home/08142024/RF29BB8600QL-LDY-MM-DT.jpg?$330_330_JPG$",
          "https://images.samsung.com/is/image/samsung/assets/us/home/08212024/SDSAC-7485-RF23DB9900QD-HP-MM-LargeTile-DT-684x684.jpg?$684_684_JPG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08162024/SDSAC-7814-LS57CG952NNXZA-HP-MM-LargeTile-DT-684x684.jpg?$684_684_JPG$",
        type: "main-image-3",
        new: true,
        button: {
          title: "Shop Now",
          url: "#",
        },
        incentive: null,
        offer: "Buy 1 get 1 free",
        offerImages: [
          "https://images.samsung.com/is/image/samsung/assets/us/home/08162024/SDSAC-7898-Tab-S9FE-HP-MM-SmallTile-DT-160x160.png?$160_160_PNG$",
          "https://images.samsung.com/is/image/samsung/assets/us/home/08162024/SDSAC-7740-04-LS27C900PANXZA-HP-MM-SmallTile-DT-160x160.png?$160_160_PNG$",
        ],
      },
      {
        productName: "Item 3",
        image:
          "https://images.samsung.com/is/image/samsung/assets/us/home/07262024/SDSAC-7816_GB4_Ultra_GB4_Pro_360_Tab_S9FE_MM_Small_Tile_DT_160x160.png?$160_160_PNG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08092024/SDSAC-7832-LS49CG954SNXZA-HP-MM-SmallTile-DT-160x160.png?$160_160_PNG$",
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
          "https://images.samsung.com/is/image/samsung/assets/us/home/08092024/SDSAC-7832-LS49CG954SNXZA-HP-MM-SmallTile-DT-160x160.png?$160_160_PNG$",
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
      className={`control cursor-pointer font-medium ${
        active === index ? "text-blue-500" : "text-black"
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
          className="controls flex gap-8 overflow-x-scroll
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
  const gridColumns =
    type === "grid-simple"
      ? "grid-cols-2 md:grid-cols-3"
      : "grid-cols-2 md:grid-cols-4";
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
