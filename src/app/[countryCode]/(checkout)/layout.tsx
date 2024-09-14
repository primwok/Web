import { CFooter } from "@/modules/common/components/footer";
import { CNotificationBar } from "@/modules/common/components/notification-bar";
import React from "react";

const CheckoutLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <CNotificationBar content="This is a notification" type="info" />
      {/* <CMainNavigationMenu /> */}
      {children}
      <CFooter />
    </div>
  );
};

export default CheckoutLayout;
