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
      {filtered.map((p) => (
        <Link
          key={p.id}
          href={`/products/${p.slug}`}
          className="border rounded-xl p-3"
        >
          <img src={p.images[0]} alt={p.name} className="rounded-lg mb-2" />
          <div className="font-medium">{p.name}</div>
          <div className="opacity-70">{(p.price / 100).toFixed(2)} Ft</div>
        </Link>
      ))}
    </div>
  );
}
