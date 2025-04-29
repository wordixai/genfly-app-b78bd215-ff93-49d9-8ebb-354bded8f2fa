import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={18} className="text-muted-foreground" />
      </div>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}