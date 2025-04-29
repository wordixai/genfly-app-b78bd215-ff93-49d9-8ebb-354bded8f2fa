import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "phone-1",
    name: "Galaxy S23 Ultra",
    brand: "Samsung",
    price: 1199.99,
    description: "Experience the ultimate smartphone with the Galaxy S23 Ultra. Featuring a stunning 6.8-inch Dynamic AMOLED display, powerful Snapdragon 8 Gen 2 processor, and an incredible 200MP camera system.",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610945264685-aa5cc24f76c4?q=80&w=800&auto=format&fit=crop"
    ],
    category: "smartphones",
    rating: 4.8,
    reviews: 245,
    specs: [
      { name: "Display", value: "6.8\" Dynamic AMOLED" },
      { name: "Processor", value: "Snapdragon 8 Gen 2" },
      { name: "RAM", value: "12GB" },
      { name: "Storage", value: "256GB" },
      { name: "Battery", value: "5000mAh" }
    ]
  },
  {
    id: "phone-2",
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 999.99,
    description: "The iPhone 15 Pro features Apple's latest A17 Pro chip, a stunning Super Retina XDR display, and a professional camera system with 48MP main camera. With its titanium design, it's both durable and lightweight.",
    images: [
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592286927505-1def25115558?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop"
    ],
    category: "smartphones",
    rating: 4.9,
    reviews: 312,
    specs: [
      { name: "Display", value: "6.1\" Super Retina XDR" },
      { name: "Processor", value: "A17 Pro" },
      { name: "RAM", value: "8GB" },
      { name: "Storage", value: "256GB" },
      { name: "Battery", value: "3200mAh" }
    ]
  },
  {
    id: "phone-3",
    name: "Pixel 8 Pro",
    brand: "Google",
    price: 899.99,
    description: "The Google Pixel 8 Pro delivers the best of Google AI with a powerful Tensor G3 chip. Its advanced camera system with computational photography features ensures stunning photos in any lighting condition.",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598327105740-820e4b3f3c8c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598327105854-29e5e1c4357f?q=80&w=800&auto=format&fit=crop"
    ],
    category: "smartphones",
    rating: 4.7,
    reviews: 178,
    specs: [
      { name: "Display", value: "6.7\" LTPO OLED" },
      { name: "Processor", value: "Google Tensor G3" },
      { name: "RAM", value: "12GB" },
      { name: "Storage", value: "128GB" },
      { name: "Battery", value: "5050mAh" }
    ]
  },
  {
    id: "accessory-1",
    name: "AirPods Pro 2",
    brand: "Apple",
    price: 249.99,
    description: "Experience immersive sound with active noise cancellation and adaptive transparency. The AirPods Pro 2 feature personalized spatial audio and improved battery life for all-day listening.",
    images: [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?q=80&w=800&auto=format&fit=crop"
    ],
    category: "accessories",
    rating: 4.8,
    reviews: 426,
    specs: [
      { name: "Connectivity", value: "Bluetooth 5.3" },
      { name: "Battery Life", value: "Up to 6 hours" },
      { name: "Charging", value: "Wireless" },
      { name: "Water Resistance", value: "IPX4" },
      { name: "Features", value: "Active Noise Cancellation" }
    ]
  },
  {
    id: "accessory-2",
    name: "Galaxy Watch 6",
    brand: "Samsung",
    price: 299.99,
    description: "Track your health and fitness with the advanced sensors of the Galaxy Watch 6. With its sleek design and vibrant display, it's the perfect companion for your active lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?q=80&w=800&auto=format&fit=crop"
    ],
    category: "wearables",
    rating: 4.6,
    reviews: 189,
    specs: [
      { name: "Display", value: "1.4\" Super AMOLED" },
      { name: "Processor", value: "Exynos W930" },
      { name: "Storage", value: "16GB" },
      { name: "Battery", value: "425mAh" },
      { name: "Water Resistance", value: "5ATM + IP68" }
    ]
  }
];