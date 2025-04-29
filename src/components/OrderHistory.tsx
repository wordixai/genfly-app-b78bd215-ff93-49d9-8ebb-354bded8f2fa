import { orders } from "@/data/orders";

export function OrderHistory() {
  return (
    <div className="space-y-4">
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="border border-border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-sm text-muted-foreground">Order #{order.id}</span>
                <h3 className="font-medium">{new Date(order.date).toLocaleDateString()}</h3>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {order.status}
              </span>
            </div>
            
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <div>
                <span className="text-sm text-muted-foreground">{order.items} items</span>
                <p className="font-semibold">${order.total.toFixed(2)}</p>
              </div>
              <button className="text-primary text-sm">View Details</button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No orders yet</p>
        </div>
      )}
    </div>
  );
}