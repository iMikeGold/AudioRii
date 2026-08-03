import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site-shell";
import { products } from "@/content/site-content";

export const metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="AudioRii products"
        title="Seven instruments. Different ways into sound."
        intro="Explore signal, routing, mixing relationships, space, form, pulse and sampling through seven focused AudioRii products."
        statement="Each product speaks through its own controls, sound and response."
      />

      <section className="products-showcase">
        {products.map((product, index) => (
          <article
            className={`product-showcase accent-${product.accent}`}
            key={product.slug}
          >
            <div className="product-showcase-copy">
              <p className="eyebrow">
                {String(index + 1).padStart(2, "0")} · {product.status}
              </p>
              <small>{product.category}</small>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <Link href={`/products/${product.slug}`}>
                Explore {product.name} <span>→</span>
              </Link>
            </div>

            <div className="product-showcase-media">
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={1536}
                height={1024}
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
