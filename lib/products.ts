// lib/products.ts
export type Product = {
  id: string;
  slug: string;
  title: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  images?: string[];
  colors?: { key: string; hex: string }[];
  sizes?: string[];
  tag?: string;
  category?: string;
  oldPrice?: number;
  discountPct?: number;
};

const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "gradient-graphic-tshirt",
    title: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    description:
      "Soft, breathable fabric for everyday wear. Graphic print on the front.",
    image: "/images/products/tee-gradient.jpg",
    images: ["/images/products/tee-gradient.jpg"],
    colors: [
      { key: "white", hex: "#ffffff" },
      { key: "pink", hex: "#f472b6" },
      { key: "blue", hex: "#60a5fa" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    tag: "New",
    category: "t-shirts",
  },
  {
    id: "2",
    slug: "polo-tipping-details",
    title: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    description:
      "Classic polo with contrast tipping. Superior comfort and style.",
    image: "/images/products/polo-red.jpg",
    images: [
      "/images/products/polo-red.jpg",
      "/images/products/tee-gradient.jpg",
      "/images/products/tee-striped.jpg",
    ],
    colors: [
      { key: "olive", hex: "#5e533b" },
      { key: "teal", hex: "#2b5c55" },
      { key: "navy", hex: "#2d2b41" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    category: "shirts",
  },
  {
    id: "3",
    slug: "black-striped-tshirt",
    title: "Black Striped T-shirt",
    price: 105,
    oldPrice: 150,
    discountPct: 30,
    rating: 5,
    description: "Breathable cotton tee with slim stripes.",
    image: "/images/products/tee-striped.jpg",
    images: ["/images/products/tee-striped.jpg"],
    colors: [
      { key: "black", hex: "#111827" },
      { key: "white", hex: "#ffffff" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    tag: "Sale",
    category: "t-shirts",
  },
];

export async function getProducts() {
  return PRODUCTS;
}

export async function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export async function getProductSlugs() {
  return PRODUCTS.map((p) => p.slug);
}
