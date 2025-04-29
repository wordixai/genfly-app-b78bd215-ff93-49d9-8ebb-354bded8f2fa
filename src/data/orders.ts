import { Order } from "@/types";

export const orders: Order[] = [
  {
    id: "ORD-2023-1234",
    date: "2023-10-15T10:30:00Z",
    status: "Delivered",
    items: 3,
    total: 1549.97
  },
  {
    id: "ORD-2023-1235",
    date: "2023-11-02T14:45:00Z",
    status: "Shipped",
    items: 1,
    total: 249.99
  },
  {
    id: "ORD-2023-1236",
    date: "2023-11-20T09:15:00Z",
    status: "Processing",
    items: 2,
    total: 1199.98
  }
];