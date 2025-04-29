import { CheckoutForm } from "@/components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="px-4 pt-4 pb-20">
      <div className="flex items-center mb-6">
        <a href="/cart" className="mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </a>
        <h1 className="text-2xl font-bold">Checkout</h1>
      </div>
      
      <div className="mb-6 p-4 bg-card rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        <div className="flex justify-between mb-1">
          <span className="text-muted-foreground">Subtotal</span>
          <span id="checkout-subtotal">$0.00</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-muted-foreground">Shipping</span>
          <span>$4.99</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-muted-foreground">Tax</span>
          <span id="checkout-tax">$0.00</span>
        </div>
        <div className="flex justify-between font-semibold mt-2 pt-2 border-t border-border">
          <span>Total</span>
          <span id="checkout-total">$0.00</span>
        </div>
      </div>
      
      <CheckoutForm />
    </div>
  );
}