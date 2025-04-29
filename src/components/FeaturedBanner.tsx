import Image from "next/image";
import Link from "next/link";

export function FeaturedBanner() {
  return (
    <Link href="/products/phone-1">
      <div className="relative h-40 w-full rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=800&auto=format&fit=crop"
          alt="Special offer on latest smartphones"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-6">
          <h3 className="text-white text-xl font-bold mb-1">Summer Sale</h3>
          <p className="text-white/90 text-sm mb-2">Up to 40% off on selected phones</p>
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium w-fit">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
}