import { Home, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border safe-bottom z-10">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-around py-2">
          <NavItem href="/" icon={<Home />} label="Home" />
          <NavItem href="/products" icon={<Search />} label="Search" />
          <NavItem href="/cart" icon={<ShoppingBag />} label="Cart" />
          <NavItem href="/profile" icon={<User />} label="Profile" />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link href={href} className="flex flex-col items-center">
      <div className={`p-1 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
        {icon}
      </div>
      <span className={`text-xs ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
        {label}
      </span>
    </Link>
  );
}