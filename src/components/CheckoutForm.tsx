export function CheckoutForm() {
  return (
    <form className="space-y-6">
      <section>
        <h2 className="text-lg font-semibold mb-3">Shipping Information</h2>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 bg-secondary rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 bg-secondary rounded-md"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-secondary rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="address" className="block text-sm mb-1">Address</label>
            <input
              type="text"
              id="address"
              className="w-full px-3 py-2 bg-secondary rounded-md"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="city" className="block text-sm mb-1">City</label>
              <input
                type="text"
                id="city"
                className="w-full px-3 py-2 bg-secondary rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm mb-1">ZIP Code</label>
              <input
                type="text"
                id="zipCode"
                className="w-full px-3 py-2 bg-secondary rounded-md"
                required
              />
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-lg font-semibold mb-3">Payment Method</h2>
        <div className="space-y-3">
          <div>
            <label htmlFor="cardNumber" className="block text-sm mb-1">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="w-full px-3 py-2 bg-secondary rounded-md"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="expiryDate" className="block text-sm mb-1">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                className="w-full px-3 py-2 bg-secondary rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm mb-1">CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                className="w-full px-3 py-2 bg-secondary rounded-md"
                required
              />
            </div>
          </div>
        </div>
      </section>
      
      <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium mt-6">
        Place Order
      </button>
    </form>
  );
}