import { CFooter } from "@/modules/common/components/footer";
import { CMainNavigationMenu } from "@/modules/common/components/main-navigation";
import { CNotificationBar } from "@/modules/common/components/notification-bar";
import { Header } from "@/modules/menu-bars/header";
import { ProductDetail } from "@/modules/products-initial/detail";

export default function ProducDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <CNotificationBar content="This is a notification" type="info" />
      <CMainNavigationMenu />
      <ProductDetail params={params} />
      <CFooter />
    </div>
  );
}
