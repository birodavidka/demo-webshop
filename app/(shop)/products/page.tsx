// app/(shop)/products/page.tsx
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

type SearchParams = {
  q?: string;
  category?: string;
  color?: string;
  min?: string; // price min
  max?: string; // price max
  sort?: "popular" | "price-asc" | "price-desc" | "rating";
  page?: string;
};

type Product = {
  id: string;
  slug: string;
  title: string;
  price: number;
  oldPrice?: number;
  discountPct?: number;
  rating: number; // 0..5
  image: string; // public/image path or remote loader
  tag?: string; // e.g. "New", "Sale"
  category: string;
  colors: string[];
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const page = Number(searchParams.page ?? 1);
  const pageSize = 12;

  const data = await getProducts(searchParams);
  const total = data.length;
  const paged = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-6">
      {/* fejléc és rendezés */}
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Casual</h1>
          <p className="text-sm text-muted-foreground">
            Showing {(page - 1) * pageSize + 1}-
            {Math.min(page * pageSize, total)} of {total} products
          </p>
        </div>

        <form action="/shop/products" className="flex items-center gap-2">
          <Select name="sort" defaultValue={searchParams.sort ?? "popular"}>
            <SelectTrigger className="w-[190px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
            </SelectContent>
          </Select>
          {/* keresés (opcionális) */}
          {/* <Input type="search" name="q" placeholder="Search products…" defaultValue={searchParams.q ?? ""} /> */}
        </form>
      </div>

      {/* termék grid */}
      <Suspense fallback={<GridSkeleton />}>
        <ul
          className="
            grid gap-5 
            sm:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-4
          "
        >
          {paged.map((p) => (
            <li key={p.id}>
              <Card className="group h-full overflow-hidden">
                <Link href={`/shop/products/${p.slug}`} className="block">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted/40">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
                        priority={false}
                      />
                      {p.tag && (
                        <Badge className="absolute left-2 top-2">{p.tag}</Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-1 p-4">
                    <h3 className="line-clamp-1 text-sm font-medium">
                      {p.title}
                    </h3>

                    <div className="flex items-center gap-1 text-muted-foreground">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.round(p.rating)
                              ? "fill-current"
                              : "opacity-30"
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-xs">
                        {p.rating.toFixed(1)}/5
                      </span>
                    </div>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-base font-semibold">
                        ${p.price}
                      </span>
                      {p.oldPrice && (
                        <>
                          <span className="text-sm text-muted-foreground line-through">
                            ${p.oldPrice}
                          </span>
                          {p.discountPct && (
                            <Badge variant="secondary" className="text-xs">
                              -{p.discountPct}%
                            </Badge>
                          )}
                        </>
                      )}
                    </div>
                  </CardFooter>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </Suspense>

      {/* egyszerű lapozó – később cserélhető shadcn Paginationre */}
      <Pagination
        page={page}
        pageSize={pageSize}
        total={total}
        basePath="/shop/products"
        searchParams={searchParams}
      />
    </div>
  );
}

/* ------------------------- Helpers & Mock Data ------------------------- */

async function getProducts(params: SearchParams): Promise<Product[]> {
  // Itt cseréld le valós adatforrásra (DB/API). A szűrések példaként működnek.
  const all: Product[] = demoProducts;

  let filtered = all;

  if (params.q) {
    const q = params.q.toLowerCase();
    filtered = filtered.filter((p) => p.title.toLowerCase().includes(q));
  }
  if (params.category) {
    filtered = filtered.filter((p) => p.category === params.category);
  }
  if (params.color) {
    filtered = filtered.filter((p) => p.colors.includes(params.color!));
  }
  const min = params.min ? Number(params.min) : undefined;
  const max = params.max ? Number(params.max) : undefined;
  if (min != null || max != null) {
    filtered = filtered.filter((p) => {
      const okMin = min == null || p.price >= min;
      const okMax = max == null || p.price <= max;
      return okMin && okMax;
    });
  }

  switch (params.sort) {
    case "price-asc":
      filtered = filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered = filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered = filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // "popular" – itt maradhat az eredeti sorrend vagy használj popularity mezőt
      break;
  }

  return filtered;
}

function GridSkeleton() {
  return (
    <div
      className="
        grid gap-5 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4
      "
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <CardContent className="p-0">
            <Skeleton className="aspect-[4/5] w-full" />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2 p-4">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function Pagination({
  page,
  pageSize,
  total,
  basePath,
  searchParams,
}: {
  page: number;
  pageSize: number;
  total: number;
  basePath: string;
  searchParams: SearchParams;
}) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const sp = new URLSearchParams(
    Object.entries(searchParams).filter(([k]) => k !== "page") as [
      string,
      string
    ][]
  );
  const href = (p: number) => {
    const s = new URLSearchParams(sp);
    s.set("page", String(p));
    return `${basePath}?${s.toString()}`;
  };

  return (
    <div className="mt-2 flex items-center justify-center gap-2">
      <Link
        className="text-sm text-muted-foreground underline-offset-4 hover:underline aria-disabled:opacity-50"
        aria-disabled={page <= 1}
        href={page <= 1 ? href(1) : href(page - 1)}
      >
        Previous
      </Link>
      <span className="text-sm text-muted-foreground">
        Page {page} of {pages}
      </span>
      <Link
        className="text-sm text-muted-foreground underline-offset-4 hover:underline aria-disabled:opacity-50"
        aria-disabled={page >= pages}
        href={page >= pages ? href(pages) : href(page + 1)}
      >
        Next
      </Link>
    </div>
  );
}

/* ------------------------------ Demo data ------------------------------ */
// Cseréld le saját képekre / CDN-re
const demoProducts: Product[] = [
  {
    id: "1",
    slug: "gradient-graphic-tshirt",
    title: "Gradient Graphic T‑shirt",
    price: 145,
    rating: 3.5,
    image: "/images/products/tee-gradient.jpg",
    tag: "New",
    category: "t-shirts",
    colors: ["white", "pink", "blue"],
  },
  {
    id: "2",
    slug: "polo-tipping-details",
    title: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "/images/products/polo-red.jpg",
    category: "shirts",
    colors: ["red", "white"],
  },
  {
    id: "3",
    slug: "black-striped-tshirt",
    title: "Black Striped T‑shirt",
    price: 105,
    oldPrice: 150,
    discountPct: 30,
    rating: 5,
    image: "/images/products/tee-striped.jpg",
    tag: "Sale",
    category: "t-shirts",
    colors: ["black", "white"],
  },
  // ...töltsd fel további termékekkel
];
