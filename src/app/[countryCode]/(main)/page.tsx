import { CMainNavigationMenu } from "@/modules/common/components/main-navigation";
import { SimpleCarousel } from "@/modules/common/components/simple-carousel";
import { ImageTextBlock } from "@/modules/common/components/image-text-block";
import { CText } from "@/modules/common/components/text-block";
import { CNotificationBar } from "@/modules/common/components/notification-bar";
import { ComboCarousel } from "@/modules/common/components/combo-carousel";
import { ContentOverlayCarousel } from "@/modules/common/components/content-overlay-carousel";
import { CFooter } from "@/modules/common/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <CNotificationBar content="This is a notification" type="info" />
      <CMainNavigationMenu /> */}
      <SimpleCarousel />
      <ImageTextBlock
        title="The Primwok collection"
        subtitle="SOME COOL TEXT"
        image={"undefined"}
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
      {/* <CFooter /> */}
    </div>
  );
}
