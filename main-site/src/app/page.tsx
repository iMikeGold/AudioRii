import Image from "next/image";
import Link from "next/link";
import { products } from "@/content/site-content";

const featuredSlugs = ["riisign", "riilinr", "riispace", "riipulsiv"];

export default function HomePage() {
  const featured = products.filter((product) =>
    featuredSlugs.includes(product.slug),
  );

  return (
    <main>
      <section className="home-hero">
        <div className="signal-field" aria-hidden="true">
          <span className="signal-line signal-line-one" />
          <span className="signal-line signal-line-two" />
          <span className="signal-line signal-line-three" />
          <span className="signal-node signal-node-one" />
          <span className="signal-node signal-node-two" />
        </div>

        <div className="home-hero-copy">
          <p className="eyebrow">Audio intelligence systems</p>
          <h1>
            Signal in.
            <span>Intelligence transforms.</span>
            Signal out.
          </h1>
          <p>
            AudioRii brings signal, sound and interface design together across
            plug-ins, virtual instruments, sound systems and physical products.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/products">
              Explore products <span>→</span>
            </Link>
            <Link className="text-button" href="/technology">
              Discover Rii
            </Link>
          </div>
        </div>

        <div className="hero-product">
          <div className="product-glow" />
          <Image
            src="/assets/RiiSign.png"
            alt="Conceptual RiiSign sine and signal instrument"
            width={1536}
            height={1024}
            priority
          />
          <div className="hero-product-label">
            <span>01</span>
            <div>
              <b>RiiSign</b>
              <small>Sine + signal instrument</small>
            </div>
          </div>
        </div>
      </section>

      <nav className="product-rail" aria-label="AudioRii products">
        {products.map((product, index) => (
          <Link key={product.slug} href={`/products/${product.slug}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {product.name}
          </Link>
        ))}
      </nav>

      <section className="product-introduction">
        <div>
          <p className="eyebrow">The AudioRii range</p>
          <h2>Audio tools built around what sound does.</h2>
        </div>
        <p>
          Frequency, signal movement, channel relationships, space, form, pulse
          and sampling become distinct instruments with their own controls,
          sound and identity.
        </p>
      </section>

      <section className="featured-products">
        {featured.map((product, index) => (
          <article
            className={`featured-product accent-${product.accent}`}
            key={product.slug}
          >
            <div className="featured-product-copy">
              <p className="eyebrow">
                {String(index + 1).padStart(2, "0")} · {product.category}
              </p>
              <h2>{product.name}</h2>
              <p>{product.statement}</p>
              <Link href={`/products/${product.slug}`}>
                Explore {product.name} <span>→</span>
              </Link>
            </div>
            <div className="featured-product-media">
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

      <section className="complete-family">
        <div className="complete-family-heading">
          <p className="eyebrow">Seven AudioRii products</p>
          <h2>A different way into every relationship in sound.</h2>
        </div>
        <div className="family-grid">
          {products.map((product, index) => (
            <Link
              className={`family-item accent-${product.accent}`}
              href={`/products/${product.slug}`}
              key={product.slug}
            >
              <div className="family-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <small>{product.category}</small>
                <h3>{product.name}</h3>
                <p>{product.statement}</p>
              </div>
              <span>↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="engine-section">
        <div className="engine-copy">
          <p className="eyebrow">Rii</p>
          <h2>The Rii Engine</h2>
          <p>
            The Rii Engine carries AudioRii knowledge across frequency, routing,
            space, form, pulse and sampling. As products evolve, each can expand
            into broader systems or sharpen into more focused instruments
            without losing its identity.
          </p>
          <Link className="primary-button" href="/technology">
            Explore the technology <span>→</span>
          </Link>
        </div>
        <div className="engine-visual">
          <Image
            src="/assets/FlowArch-Flat.png"
            alt="AudioRii Flow Arc visual language"
            width={1536}
            height={1024}
          />
        </div>
      </section>

      <section className="supporting-layer">
        <div>
          <p className="eyebrow">AudioRii Soundbase</p>
          <h2>A sound library, discovery space and marketplace.</h2>
        </div>
        <div>
          <p>
            Browse samples, playable instruments, sound packs, source
            recordings and sound profiles. Hear them, license them and
            RiiSampl them.
          </p>
          <Link href="/soundbase">
            Explore Soundbase <span>→</span>
          </Link>
        </div>
      </section>

      <section className="beta-callout">
        <div className="beta-copy">
          <p className="eyebrow">AudioRii Beta</p>
          <h2>Get inside the next AudioRii release.</h2>
          <p>
            Apply to test products, access private builds, read release notes
            and send focused feedback from the AudioRii beta portal.
          </p>
          <Link className="primary-button" href="/beta">
            Beta access <span>→</span>
          </Link>
        </div>
        <Image
          src="/assets/FlowArch-Box.png"
          alt="Conceptual AudioRii product packaging"
          width={1536}
          height={1024}
        />
      </section>
    </main>
  );
}
