import Products from "./components/Products";
export const metadata = {
  title: "Products",
};
export const dynamic = "force-dynamic";
export const getProducts = async () => {
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "force-cache",
  });
  const data = res.json();
  return data;
};
export default async function AllProducts() {
  const products = await getProducts();
  return (
    <div className="flex justify-center items-center">
      <Products products={products} />
    </div>
  );
}
