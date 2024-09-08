import { CMainNavigationMenu } from "@/app/common/ui/main-navigation-menu";
import { CNotificationBar } from "@/app/common/ui/notification-bar";
import { Header } from "@/app/feat/menu-bars/header";
import { ProductDetail } from "@/app/feat/products/detail";

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
    </div>
  );
}
