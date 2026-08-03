import { notFound } from "next/navigation";
import { PageHero } from "@/components/site-shell";
import {
  secondarySections,
  type SecondarySectionSlug,
} from "@/content/site-content";

export function generateStaticParams() {
  return Object.keys(secondarySections).map((section) => ({ section }));
}

export default async function SecondarySectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = secondarySections[section as SecondarySectionSlug];

  if (!data) {
    notFound();
  }

  return (
    <main>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.intro}
        statement={data.statement}
      />

      <section className="secondary-detail-grid">
        {data.items.map(([title, text], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
