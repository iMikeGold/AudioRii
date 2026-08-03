import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/content/site-content";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  const descriptionLabel =
    product.slug === "riisamplr" ? "The instrument" : "The plug-in";

  return (
    <main>
      <section className={`product-hero accent-${product.accent}`}>
        <div className="product-hero-copy">
          <p className="eyebrow">
            {product.category} · {product.status}
          </p>
          <h1>{product.name}</h1>
          <p>{product.statement}</p>
          <div className="product-hero-actions">
            <Link className="primary-button" href="/beta">
              Beta access <span>→</span>
            </Link>
            <Link className="text-button" href="/documentation">
              Product documentation
            </Link>
          </div>
        </div>

        <div className="product-hero-media">
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={1536}
            height={1024}
            priority
          />
        </div>
      </section>

      <section className="product-description">
        <p className="eyebrow">{descriptionLabel}</p>
        <p>{product.description}</p>
      </section>

      <section className="product-detail-columns">
        <div>
          <p className="eyebrow">What it gives you</p>
          {product.features.map((feature, index) => (
            <article key={feature}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{feature}</h2>
            </article>
          ))}
        </div>

        <div>
          <p className="eyebrow">Controls</p>
          {product.controls.map((control) => (
            <article key={control}>
              <h2>{control}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="related-products">
        <p className="eyebrow">Explore more AudioRii products</p>
        <div>
          {relatedProducts.map((item) => (
            <Link href={`/products/${item.slug}`} key={item.slug}>
              <small>{item.category}</small>
              <h2>{item.name}</h2>
              <span>↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
