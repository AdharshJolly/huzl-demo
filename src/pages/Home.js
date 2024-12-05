import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import { useProduct } from "../context";

export default function Home() {
  const { products } = useProduct();

  const data = products.filter((product) => product.stock > 0);

  return (
    <div className="bg-gray-100 relative">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        {products.length > 0 ? <ProductFeed products={data} /> : ""}
      </main>
    </div>
  );
}
