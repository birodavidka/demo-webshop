// app/(shop)/products/page.tsx

import { products } from "@/data/data"; // ahogy nálad van

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string | string[] }>;
}) {
  const sp = await searchParams;
  const catParam = Array.isArray(sp.cat) ? sp.cat[0] : sp.cat;
  const cat = catParam ?? "men-clothes";

  const filtered = products.filter(
    (p) => (p.category ?? "") === cat || cat === "all"
  );

  return <div>{/* rendereld a filtered listát */}</div>;
}
