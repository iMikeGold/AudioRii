export const siteConfig = {
  name: "AudioRii",
  title: "AudioRii — Reimagined Audio Instruments",
  description:
    "AudioRii: reimagined plug-ins, virtual instruments and sound systems for signal, routing, space, form, pulse and sampling.",
  url: "https://audiorii.com",
} as const;

export const primaryNavigation = [
  { href: "/products", label: "Products" },
  { href: "/technology", label: "Technology" },
  { href: "/soundbase", label: "Soundbase" },
  { href: "/about", label: "About" },
] as const;

export const utilityNavigation = [
  { href: "/documentation", label: "Docs" },
  { href: "/beta", label: "Beta access" },
] as const;
