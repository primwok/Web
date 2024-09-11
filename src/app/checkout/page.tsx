import { CFooter } from "../common/ui/footer";
import { CMainNavigationMenu } from "../common/ui/main-navigation-menu";
import { CNotificationBar } from "../common/ui/notification-bar";
import { CheckoutForms } from "../feat/checkout/checkout";

const CheckoutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <CNotificationBar content="This is a notification" type="info" />
      <CMainNavigationMenu />
      <CheckoutForms />
      <CFooter />
    </div>
  );
};

export default CheckoutPage;
