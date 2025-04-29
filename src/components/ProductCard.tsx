import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-36 w-full">
          <Image 
            src={product.images[0]} 
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-3">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{product.brand}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="font-bold">${product.price.toFixed(2)}</span>
            <button 
              className="w-8 h-8 flex items-center justify-center bg-primary rounded-full text-primary-foreground"
              aria-label="Add to cart"
            >
              <ShoppingCart size={16} />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}