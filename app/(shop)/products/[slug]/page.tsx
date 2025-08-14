// app/(shop)/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import ProductGallery from "@/components/shop/ProductImageGallery";
import RatingStars from "@/components/shop/RatingStars";
import SelectColor from "@/components/shop/SelectColor";
import SelectSize from "@/components/shop/SelectSize";
import QtyStepper from "@/components/shop/QtyStepper";
import AddToCartButton from "@/components/shop/AddToCartButton";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { getProductBySlug, getProductSlugs } from "@/lib/products";
import BreadcrumbComponent from "@/components/BreadCrumb";

export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProductSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
      {/*       <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>›</span>
        <Link href="/products" className="hover:underline">
          Shop
        </Link>
        <span>›</span>
        <span className="text-foreground">{product.title}</span>
      </nav> */}
      <BreadcrumbComponent />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <section className="min-w-0">
          <div className="rounded-3xl border bg-card p-4 sm:p-6">
            <ProductGallery
              images={product.images ?? [product.image]}
              thumbPosition="left"
            />
          </div>
        </section>

        <section className="min-w-0">
          <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.02em] uppercase">
            {product.title}
          </h1>
          <div className="mt-3 flex items-center gap-3">
            <RatingStars rating={product.rating} />
            <span className="text-sm text-muted-foreground">
              {product.rating.toFixed(1)}/5
            </span>
          </div>
          <div className="mt-4 text-3xl font-bold">${product.price}</div>
          <p className="mt-4 max-w-prose text-muted-foreground">
            {product.description}
          </p>

          <Separator className="my-6" />
          {product.colors && (
            <>
              <p className="text-sm font-medium">Select Colors</p>
              <SelectColor colors={product.colors} />
              <Separator className="my-6" />
            </>
          )}
          {product.sizes && (
            <>
              <p className="text-sm font-medium">Choose Size</p>
              <SelectSize sizes={product.sizes} />
              <Separator className="my-6" />
            </>
          )}

          <div className="flex flex-col items-stretch gap-4 sm:flex-row">
            <QtyStepper />
            <AddToCartButton productId={product.id} className="flex-1" />
          </div>
        </section>
      </div>
      <div>
        <Separator className="my-8" />
        <h2 className="text-2xl font-bold">Product Details</h2>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>{product.details}</p>
        </div>
      </div>
    </div>
  );
}
