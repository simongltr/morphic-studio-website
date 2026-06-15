export interface CaseStudy {
  tier: string;
  tierLabel: string;
  client: string;
  sector: string;
  problem: string;
  delivered: string;
  result: string;
  accent: string;
}

export const caseStudies: CaseStudy[] = [
  {
    tier: "Vitrine",
    tierLabel: "TPE / Indépendants",
    client: "Atelier Bréval",
    sector: "Menuiserie d'art, Bourgogne",
    problem:
      "Pas de site, une page Facebook désertée. Les prospects locaux ne trouvaient pas l'atelier — et appelaient des concurrents mieux référencés.",
    delivered:
      "Vitrine 3 pages, SEO local optimisé pour les requêtes \"menuisier + ville\", formulaire de devis relié à la boîte mail.",
    result:
      "L'atelier reçoit désormais ses demandes de devis directement par formulaire, depuis des prospects qui ont déjà vu le travail. Le téléphone ne sonne plus pour rien.",
    accent: "#2a3a3a",
  },
  {
    tier: "Sur mesure",
    tierLabel: "PME établies",
    client: "Lavoisier & Cie",
    sector: "Conseil RH, 15 salariés",
    problem:
      "Site daté qui ne reflétait plus le positionnement. Aucun contenu pour attirer les dirigeants en recherche. Conversion proche de zéro.",
    delivered:
      "Site 10 pages, identité visuelle refondue, blog éditorial relié à une stratégie SEO et SEO IA, analytics et suivi des leads.",
    result:
      "Le cabinet a repris la main sur sa communication : son équipe publie en direct depuis le blog, et les prospects arrivent avec une idée claire du positionnement avant le premier rendez-vous.",
    accent: "#1f2a3a",
  },
  {
    tier: "Application",
    tierLabel: "Projets ambitieux",
    client: "Forgeline",
    sector: "Marketplace B2B, sidérurgie",
    problem:
      "Une intuition produit forte, un budget cadré, six mois pour valider le marché. Aucun outil existant pour gérer fournisseurs et commandes.",
    delivered:
      "MVP web : catalogue fournisseurs, dashboard commandes, paiement Stripe Connect, onboarding guidé. Livré en 4 mois.",
    result:
      "Le fondateur a pu valider son marché avec un produit en main, présenter une démo fonctionnelle aux investisseurs et itérer sur des retours fournisseurs réels — pas sur des hypothèses.",
    accent: "#3a2a1f",
  },
];
