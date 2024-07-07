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
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <ProductDetail params={params} />
    </div>
  );
}
