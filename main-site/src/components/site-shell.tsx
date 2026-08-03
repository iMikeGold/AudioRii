import Image from "next/image";
import Link from "next/link";
import { primaryNavigation, utilityNavigation } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="AudioRii home">
        <Image
          src="/assets/brand/logo/audiorii-flow-arc.svg"
          alt="AudioRii"
          width={190}
          height={72}
          priority
        />
      </Link>

      <nav className="primary-nav" aria-label="Primary navigation">
        {primaryNavigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <nav className="utility-nav" aria-label="Utility navigation">
        {utilityNavigation.map((item) => (
          <Link
            className={item.href === "/beta" ? "beta-link" : undefined}
            key={item.href}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <div>
          {[...primaryNavigation, ...utilityNavigation].map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </details>
    </header>
  );
}

const footerGroups = [
  {
    title: "Products",
    links: [
      ["RiiSign", "/products/riisign"],
      ["RiiLinr", "/products/riilinr"],
      ["RiiMix", "/products/riimix"],
      ["RiiSpace", "/products/riispace"],
      ["RiiForm", "/products/riiform"],
      ["RiiPulsiv", "/products/riipulsiv"],
      ["RiiSamplr", "/products/riisamplr"],
    ],
  },
  {
    title: "AudioRii",
    links: [
      ["Technology", "/technology"],
      ["Soundbase", "/soundbase"],
      ["About", "/about"],
      ["Beta access", "/beta"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Documentation", "/documentation"],
      ["Licensing", "/licensing"],
      ["Research", "/research"],
      ["Developers", "/developers"],
      ["Provenance", "/provenance"],
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Image
          src="/assets/brand/logo/audiorii-flow-arc.svg"
          alt=""
          width={220}
          height={84}
        />
        <p>Signal never teleports. It always follows a route.</p>
      </div>

      <div className="footer-groups">
        {footerGroups.map((group) => (
          <div key={group.title}>
            <b>{group.title}</b>
            {group.links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-base">
        <small>© {new Date().getFullYear()} AudioRii.</small>
        <small>Reimagined audio instruments.</small>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  statement,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  statement?: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro">{intro}</p>
      </div>
      {statement ? <p className="page-statement">{statement}</p> : null}
    </section>
  );
}
