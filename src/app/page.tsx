import { ProductCard } from "@/components/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { CategoryScroll } from "@/components/CategoryScroll";
import { FeaturedBanner } from "@/components/FeaturedBanner";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="px-4 pt-4 pb-20">
      <h1 className="text-2xl font-bold mb-4">MobileShop</h1>
      <SearchBar />
      
      <section className="my-6">
        <FeaturedBanner />
      </section>
      
      <section className="my-6">
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <CategoryScroll />
      </section>
      
      <section className="my-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Featured Products</h2>
          <a href="/products" className="text-primary text-sm">View all</a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      <section className="my-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">New Arrivals</h2>
          <a href="/products" className="text-primary text-sm">View all</a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.slice(2, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}