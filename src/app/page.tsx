import Image from "next/image";
import { AuthPopup } from "@/app/feat/auth/auth-popup";
import { Regions } from "./feat/regions/regions";
import { Header } from "./feat/menu-bars/header";
import { ProductList } from "./feat/products/list";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4">
        <Header />
        <ProductList />
      </main>
    </div>
  );
}
