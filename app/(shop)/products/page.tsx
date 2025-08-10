import Link from "next/link";
import { products } from "@/data/data";

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { cat?: string };
}) {
  const cat = searchParams?.cat ?? "men-clothes";
  const filtered = products.filter(
    (p) => (p.category ?? "") === cat || cat === "all"
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      asd
    </div>
  );
}
