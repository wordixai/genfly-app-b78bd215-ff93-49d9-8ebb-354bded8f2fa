import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";

export function CategoryScroll() {
  return (
    <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar">
      {categories.map((category) => (
        <Link 
          key={category.id} 
          href={`/products?category=${category.id}`}
          className="flex-shrink-0 flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-1 relative overflow-hidden">
            <Image 
              src={category.image} 
              alt={category.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <span className="text-xs text-center">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}