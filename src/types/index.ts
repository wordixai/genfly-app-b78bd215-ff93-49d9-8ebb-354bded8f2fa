export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  specs: {
    name: string;
    value: string;
  }[];
}

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered";
  items: number;
  total: number;
}