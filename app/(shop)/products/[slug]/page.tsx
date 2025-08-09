// app/(shop)/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/data";

type Props = { params: { slug: string } };

// (SSG) – előre legeneráljuk a slugokat
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// (SEO) – dinamikus meta
export function generateMetadata({ params }: Props) {
  const prod = getProductBySlug(params.slug);
  if (!prod) return { title: "Termék nem található" };
  return { title: `${prod.name} – Webshop`, description: prod.description };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <main className="container mx-auto p-6 grid gap-6 lg:grid-cols-2">
      <div>
        {/* képgaléria */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="rounded-xl w-full"
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold mb-3">{product.name}</h1>
        <div className="text-xl mb-4">
          {(product.price / 100).toFixed(2)} Ft
        </div>
        <p className="mb-6 opacity-80">{product.description}</p>
        {/* Add to cart gomb */}
        {/* <AddToCart productId={product.id} /> */}
      </div>
    </main>
  );
}
