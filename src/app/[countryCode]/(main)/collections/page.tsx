"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CMainNavigationMenu } from "../../../../modules/common/components/main-navigation";
import { CNotificationBar } from "../../../../modules/common/components/notification-bar";
import { PageWidth } from "../../../../modules/common/components/page-width";
import { SimpleCarousel } from "../../../../modules/common/components/simple-carousel";
import { CText } from "../../../../modules/common/components/text-block";
import Link from "next/link";
import { COverlayBanner } from "../../../../modules/common/components/overlay-banner";
import { CImageCardGrid } from "../../../../modules/common/components/image-card-grid";
import { CFooter } from "../../../../modules/common/components/footer";
import { ImageTextBlock } from "../../../../modules/common/components/image-text-block";

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
