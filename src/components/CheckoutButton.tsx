import Link from "next/link";

export function CheckoutButton() {
  return (
    <Link href="/checkout" className="block w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium text-center">
      Proceed to Checkout
    </Link>
  );
}