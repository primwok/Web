import { CFooter } from "@/app/common/ui/footer";
import { CMainNavigationMenu } from "@/app/common/ui/main-navigation-menu";
import { CNotificationBar } from "@/app/common/ui/notification-bar";
import { SimpleCarousel } from "@/app/common/ui/simple-carousel";
import ProductList from "@/app/feat/products/list";

export default function ProductListPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <CNotificationBar content="This is a notification" type="info" />
      <CMainNavigationMenu />
      {/* <SimpleCarousel /> */}
      <ProductList />
      <CFooter />
    </div>
  );
}
