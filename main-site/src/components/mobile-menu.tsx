"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type MobileMenuItem = {
  href: string;
  label: string;
};

export function MobileMenu({
  items,
}: {
  items: ReadonlyArray<MobileMenuItem>;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <details ref={detailsRef} className="mobile-menu">
      <summary aria-label="Open navigation">Menu</summary>
      <div>
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
