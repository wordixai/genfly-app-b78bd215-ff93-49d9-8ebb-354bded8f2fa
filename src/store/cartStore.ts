import { create } from 'zustand';
import { CartProduct } from '@/types';

interface CartState {
  items: CartProduct[];
  addItem: (product: CartProduct) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: () => number;
  tax: () => number;
  total: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  
  addItem: (product) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id);
    
    if (existingItem) {
      return {
        items: state.items.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      };
    }
    
    return { items: [...state.items, { ...product, quantity: 1 }] };
  }),
  
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
  
  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, quantity) } 
        : item
    )
  })),
  
  clearCart: () => set({ items: [] }),
  
  subtotal: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  tax: () => {
    return get().subtotal() * 0.08; // 8% tax rate
  },
  
  total: () => {
    return get().subtotal() + get().tax() + 4.99; // Adding shipping cost
  }
}));