import Image from "next/image";
import { AuthPopup } from "@/app/feat/auth/auth-popup";
import { Regions } from "./feat/regions/regions";
import { Header } from "./feat/menu-bars/header";
import { ProductList } from "./feat/products/list";
import { PageWidth } from "./common/ui/page-width";
import { Button } from "@/components/ui/button";
import introImg from "../../public/intro-2.jpeg";
import { CMainNavigationMenu } from "@/app/common/ui/main-navigation-menu";
import { SimpleCarousel } from "./common/ui/simple-carousel";
import { ImageTextBlock } from "./common/ui/image-text-block";
import { CText } from "./common/ui/text-block";
import { CNotificationBar } from "./common/ui/notification-bar";
import { ComboCarousel } from "./common/ui/combo-carousel";
import { ContentOverlayCarousel } from "./common/ui/content-overlay-carousel";
import { CFooter } from "./common/ui/footer";

export default function Home() {
  return (
    // <div className="flex min-h-screen w-full flex-col">
    //   <main className="">
    //  <Header />
    // <section className="w-full h-full h-[40vw]">
    //   <PageWidth>
    //     <div className="big-screen-intro h-full w-full relative">
    //       <Image
    //         src={introImg}
    //         alt="intro"
    //         layout="fill"
    //         objectFit="cover"
    //         placeholder="blur"
    //         quality={100}
    //         fill
    //         sizes="100vw"
    //         style={{
    //           objectFit: "cover",
    //           objectPosition: "center",
    //         }}
    //       />
    //       <div className="h-full w-full flex flex-col justify-between p-12 absolute top-0 left-0 z-1 text-white">
    //         <div className="w-full flex flex-col gap-4 text-right mt-12">
    //           <h2 className="text-4xl font-bold">The Primwok collection</h2>
    //           <h1 className="text-7xl font-bold">SOME COOL TEXT</h1>
    //           <h2 className="text-4xl font-medium">by Text</h2>
    //         </div>
    //         <div className="flex justify-between items-center">
    //           <div className="bg-white p-3 text-black">
    //             <h4 className="font-bold text-xl">FEATURED</h4>
    //             <h5 className="font-normal text-sm">Apple</h5>
    //             <h5 className="font-normal text-sm">Microsoft</h5>
    //             <h5 className="font-normal text-sm">New Arrivals</h5>
    //           </div>

    //           <div className="flex flex-col gap-4">
    //             <h3>PRIMWOK QUALITY DELIVERS, AND YOU ENJOY</h3>
    //             <div className="flex justify-between">
    //               <Button>SHOP NOW</Button>
    //               <Button>LEARN MORE</Button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </PageWidth>
    // </section>
    // <PageWidth width="1920px">
    //   <section className="collections sm:grid sm:grid-cols-2 md:grid-cols-3">
    //     <div className="flex flex-col items-end justify-center w-full h-full bg-black text-white p-12 min-h-[250px]">
    //       <h2 className="text-4xl font-bold">The Primwok collection</h2>
    //       <h1 className="text-7xl font-bold">SOME COOL TEXT</h1>
    //       <h2 className="text-4xl font-medium">by Text</h2>
    //       <Button>SHOP NOW</Button>
    //     </div>
    //   </section>
    // </PageWidth>
    // <ProductList />
    //   </main>
    // </div>
    <div className="flex flex-col min-h-screen">
      <CNotificationBar content="This is a notification" type="info" />
      <CMainNavigationMenu />
      <SimpleCarousel />
      <ImageTextBlock
        title="The Primwok collection"
        subtitle="SOME COOL TEXT"
        image={introImg.src}
        buttonTitle="SHOP NOW"
        direction="right"
        description="Primwok quality delivers, and you enjoy"
      />
      <div className="offers my-5">
        <CText
          tag="h2"
          content="Shop all latest offers and innovations
"
          spacingT="1x"
          type="text"
        />
        <CText tag="h5" content="View all" spacingT="1x" type="link" />
        <ComboCarousel />
      </div>
      <div className="my-5">
        <ContentOverlayCarousel
          data={[
            {
              title: "Category 1",
              type: "simple",
              item: {
                productName: "Item 1",
                image:
                  "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  "https://images.unsplash.com/photo-1512429234305-12fe5b0b0f07?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              title: "Category 3",
              type: "simple",
              item: {
                productName: "Item 3",
                image:
                  "https://images.unsplash.com/photo-1546868871-08b8ebc35c09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8g",
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
                  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              title: "Category 5",
              type: "simple",
              item: {
                productName: "Item 1",
                image:
                  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          ]}
        />
        <ContentOverlayCarousel
          data={[
            {
              title: "Category 1",
              type: "simple",
              item: {
                productName: "Item 1",
                image:
                  "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              title: "Category 2",
              type: "image-background",
              item: {
                productName: "Item 2",
                image:
                  "https://images.unsplash.com/photo-1512429234305-12fe5b0b0f07?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  "https://images.unsplash.com/photo-1546868871-08b8ebc35c09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8g",
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
              title: "Category 4",
              type: "image-background",
              item: {
                productName: "Item 4",
                image:
                  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          ]}
        />
      </div>
      <CFooter />
    </div>
  );
}
