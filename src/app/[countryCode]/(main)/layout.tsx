import { Metadata } from "next";

import Footer from "@/modules/layout/templates/footer";
import Nav from "@/modules/layout/templates/nav";
import { CMainNavigationMenu } from "@/modules/common/components/main-navigation";
import { CNotificationBar } from "@/modules/common/components/notification-bar";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
};

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <CNotificationBar content="Welcome to primwok" type="info" />
      <CMainNavigationMenu />
      {props.children}
      <Footer />
    </>
  );
}
