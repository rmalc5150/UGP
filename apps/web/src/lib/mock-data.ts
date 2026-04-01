export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  bg: string;
  rating: number;
  reviewCount: number;
  images: string[];
};

export type Category = {
  slug: string;
  name: string;
  bg: string;
  count: number;
};

export type Order = {
  id: string;
  date: string;
  status: string;
  total: number;
  items: number;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Tee',
    price: 29,
    category: 'clothing',
    description:
      'A timeless essential for any wardrobe. Cut from premium cotton with a relaxed, versatile fit.',
    bg: 'bg-stone-200',
    rating: 4.5,
    reviewCount: 128,
    images: ['/1.png', '/2.png', '/3.png'],
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    price: 79,
    category: 'clothing',
    description: 'Modern slim fit crafted from premium stretch denim for comfort and style.',
    bg: 'bg-blue-200',
    rating: 4.3,
    reviewCount: 94,
    images: ['/2.png', '/3.png', '/4.png'],
  },
  {
    id: '3',
    name: 'Leather Sneakers',
    price: 129,
    category: 'footwear',
    description:
      'Handcrafted full-grain leather upper with cushioned footbed and durable rubber sole.',
    bg: 'bg-amber-100',
    rating: 4.7,
    reviewCount: 213,
    images: ['/3.png', '/4.png', '/5.png'],
  },
  {
    id: '4',
    name: 'Canvas Backpack',
    price: 89,
    category: 'accessories',
    description: 'Durable waxed canvas with padded laptop compartment and adjustable straps.',
    bg: 'bg-green-100',
    rating: 4.4,
    reviewCount: 76,
    images: ['/4.png', '/5.png', '/1.png'],
  },
  {
    id: '5',
    name: 'Wool Sweater',
    price: 99,
    category: 'clothing',
    description: 'Soft merino wool blend, perfect for cooler days. Ribbed cuffs and hem.',
    bg: 'bg-orange-100',
    rating: 4.6,
    reviewCount: 157,
    images: ['/5.png', '/1.png', '/2.png'],
  },
  {
    id: '6',
    name: 'Running Shorts',
    price: 45,
    category: 'clothing',
    description: 'Lightweight and breathable performance shorts with built-in liner.',
    bg: 'bg-indigo-100',
    rating: 4.2,
    reviewCount: 89,
    images: ['/1.png', '/3.png', '/5.png'],
  },
  {
    id: '7',
    name: 'Crossbody Bag',
    price: 119,
    category: 'accessories',
    description: 'Compact and stylish with an adjustable strap and zip closure.',
    bg: 'bg-rose-100',
    rating: 4.5,
    reviewCount: 102,
    images: ['/2.jpg', '/4.jpg', '/1.jpg'],
  },
  {
    id: '8',
    name: 'Structured Cap',
    price: 35,
    category: 'accessories',
    description: 'Clean six-panel silhouette with embroidered logo and adjustable clasp.',
    bg: 'bg-yellow-100',
    rating: 4.1,
    reviewCount: 63,
    images: ['/3.png', '/5.png', '/2.png'],
  },
];

export const categories: Category[] = [
  { slug: 'all', name: 'All', bg: 'bg-stone-100', count: 4 },
  { slug: 'underwear', name: 'Underwear', bg: 'bg-amber-100', count: 1 },
  { slug: 'accessories', name: 'Accessories', bg: 'bg-green-100', count: 3 },
];

export const orders: Order[] = [
  { id: 'ORD-1001', date: '2026-03-15', status: 'Delivered', total: 208, items: 3 },
  { id: 'ORD-1002', date: '2026-03-22', status: 'In Transit', total: 129, items: 1 },
  { id: 'ORD-1003', date: '2026-03-29', status: 'Processing', total: 79, items: 1 },
];
