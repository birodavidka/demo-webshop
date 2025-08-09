// data/products.ts
export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  category?: string;
  tags?: string[];
  stock?: number;
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "classic-tshirt",
    name: "Classic T‑Shirt",
    price: 6990,
    images: ["/images/tshirt-1.jpg"],
    description: "Puhapuha pamut póló.",
    category: "apparel",
    stock: 12,
  },
  // ...
];

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug) ?? null;
}
