import { CFooter } from "@/modules/common/components/footer";
import { CMainNavigationMenu } from "@/modules/common/components/main-navigation";
import { CNotificationBar } from "@/modules/common/components/notification-bar";
import { SimpleCarousel } from "@/modules/common/components/simple-carousel";
import ProductList from "@/modules/products-initial/list";

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
