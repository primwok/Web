"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CMainNavigationMenu } from "../common/ui/main-navigation-menu";
import { CNotificationBar } from "../common/ui/notification-bar";
import { PageWidth } from "../common/ui/page-width";
import { SimpleCarousel } from "../common/ui/simple-carousel";
import { CText } from "../common/ui/text-block";
import Link from "next/link";
import { COverlayBanner } from "../common/ui/overlay-banner";
import { CImageCardGrid } from "../common/ui/image-card-grid";
import { CFooter } from "../common/ui/footer";
import { ImageTextBlock } from "../common/ui/image-text-block";

const CollectionsPage: React.FC = () => {
  return (
    <>
      <CNotificationBar content="This is a notification bar" type="info" />
      <CMainNavigationMenu />
      <PageWidth>
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <CText content="Collections" tag="h5" type="text" />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </PageWidth>
      <SimpleCarousel />
      <COverlayBanner />
      <CImageCardGrid />
      <ImageTextBlock
        title="The Primwok collection"
        subtitle="SOME COOL TEXT"
        image={"https://source.unsplash.com/random/300×300"}
        buttonTitle="SHOP NOW"
        direction="right"
        description="primwok quality delivers, and you enjoy"
      />
      <CFooter />
    </>
  );
};

export default CollectionsPage;
