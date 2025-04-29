import { SearchBar } from "@/components/SearchBar";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { CategoryFilter } from "@/components/CategoryFilter";

export default function ProductsPage() {
  return (
    <div className="px-4 pt-4 pb-20">
      <div className="flex items-center mb-4">
        <a href="/" className="mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </a>
        <h1 className="text-2xl font-bold">All Products</h1>
      </div>
      
      <SearchBar />
      
      <section className="my-4">
        <CategoryFilter />
      </section>
      
      <section className="my-6">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}