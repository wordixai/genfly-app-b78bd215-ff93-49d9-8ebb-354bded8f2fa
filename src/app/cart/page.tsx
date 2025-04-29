import { CartItem } from "@/components/CartItem";
import { CheckoutButton } from "@/components/CheckoutButton";

export default function CartPage() {
  return (
    <div className="px-4 pt-4 pb-32">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      
      <div className="cart-items-container">
        <div className="cart-items-list space-y-4" id="cart-items">
          {/* Cart items will be rendered here by client component */}
        </div>
        
        <div className="mt-8 pt-4 border-t border-border">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="font-semibold" id="subtotal">$0.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span className="font-semibold">$4.99</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Tax</span>
            <span className="font-semibold" id="tax">$0.00</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span id="total">$0.00</span>
          </div>
          
          <div className="mt-6">
            <CheckoutButton />
          </div>
        </div>
      </div>
      
      <div className="hidden flex-col items-center justify-center py-12" id="empty-cart">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground mb-4">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
        <a href="/" className="bg-primary text-primary-foreground px-6 py-2 rounded-md">Start Shopping</a>
      </div>
    </div>
  );
}