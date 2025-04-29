import { categories } from "@/data/categories";

export function CategoryFilter() {
  return (
    <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
      <button className="px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-sm whitespace-nowrap">
        All
      </button>
      {categories.map((category) => (
        <button 
          key={category.id}
          className="px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm whitespace-nowrap"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}