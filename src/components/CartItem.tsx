import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartProduct } from "@/types";

export function CartItem({ item }: { item: CartProduct }) {
  return (
    <div className="flex gap-3 py-3 border-b border-border">
      <div className="relative h-20 w-20 flex-shrink-0 bg-secondary rounded-md overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium line-clamp-1">{item.name}</h3>
          <button className="text-muted-foreground">
            <Trash2 size={18} />
          </button>
        </div>
        
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center border border-border rounded-md">
            <button className="px-2 py-1">
              <Minus size={16} />
            </button>
            <span className="px-3 py-1 border-x border-border">{item.quantity}</span>
            <button className="px-2 py-1">
              <Plus size={16} />
            </button>
          </div>
          
          <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}