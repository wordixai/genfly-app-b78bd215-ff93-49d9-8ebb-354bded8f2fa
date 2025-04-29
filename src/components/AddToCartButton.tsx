import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";

export function AddToCartButton({ product }: { product: Product }) {
  return (
    <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium flex items-center justify-center">
      <ShoppingCart size={20} className="mr-2" />
      Add to Cart
    </button>
  );
}