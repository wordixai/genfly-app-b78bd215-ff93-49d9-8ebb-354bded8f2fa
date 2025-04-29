import Image from "next/image";
import { products } from "@/data/products";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGallery } from "@/components/ProductGallery";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id) || products[0];
  
  return (
    <div className="pb-20">
      <div className="relative h-72 w-full">
        <ProductGallery images={product.images} />
      </div>
      
      <div className="px-4 py-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-muted-foreground">{product.brand}</p>
          </div>
          <div className="text-xl font-bold text-primary">${product.price.toFixed(2)}</div>
        </div>
        
        <div className="flex items-center mt-2">
          <div className="flex text-accent">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < product.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-muted-foreground">({product.reviews} reviews)</span>
        </div>
        
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-muted-foreground">{product.description}</p>
        </div>
        
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Specifications</h2>
          <ul className="space-y-2">
            {product.specs.map((spec, index) => (
              <li key={index} className="flex justify-between">
                <span className="text-muted-foreground">{spec.name}</span>
                <span>{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}