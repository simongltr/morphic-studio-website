// Central source of truth for site-wide identity, used by SEO meta tags,
// JSON-LD structured data, the RSS feed and the sitemap.

export const site = {
  name: "Morphic Studio",
  url: "https://morphicstudio.fr",
  // Default social/share image (relative to the site root).
  defaultImage: "/hero-team.webp",
  description:
    "Morphic Studio, studio web indépendant basé à Angers et intervenant partout en France, sur place ou à distance. Sites vitrines, applications et conseil au forfait.",
  // Short tagline used as the homepage title suffix.
  tagline: "Création de sites et d'applications web à Angers",
  email: "contact@morphicstudio.fr",
  phone: "+33695660726",
  phoneDisplay: "06 95 66 07 26",
  areaServed: ["Angers", "Pays de la Loire", "France"],
  locale: "fr_FR",
  lang: "fr",
  // Social profiles — fill in to strengthen the entity signal (schema sameAs).
  sameAs: [] as string[],
};

/** Build an absolute URL from a site-root-relative path. */
export function absoluteUrl(path: string): string {
  return new URL(path, site.url).href;
}
