import ProductList from "@/app/feat/products/list";

export default function ProductListPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Product List
      </h1>
      <ProductList />
    </div>
  );
}
