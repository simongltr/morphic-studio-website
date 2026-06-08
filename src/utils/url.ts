// Prefix a path with the configured Astro base so links and assets work
// both at the site root (dev, custom domain) and under a subpath (GitHub
// Pages project site).
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const trimmedPath = path.startsWith("/") ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}`;
}
