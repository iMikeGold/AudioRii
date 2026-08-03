import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 · Route unresolved</p>
      <h1>Signal not found.</h1>
      <p>The requested path does not connect to an AudioRii surface.</p>
      <Link className="primary-button" href="/">
        Return home <span>→</span>
      </Link>
    </main>
  );
}
