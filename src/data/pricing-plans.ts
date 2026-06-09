export interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Vitrine",
    tagline: "Pour les indépendants et les petites structures qui veulent une présence en ligne soignée.",
    price: "1 500 €",
    priceSuffix: "/ projet",
    features: [
      "Site vitrine jusqu'à 3 pages",
      "Design responsive sur mesure",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Hébergement 1 an inclus",
      "Support email",
    ],
    cta: "Choisir ce forfait",
    ctaHref: "#contact",
  },
  {
    name: "Sur mesure",
    tagline: "Pour les entreprises qui veulent un site de référence, pensé pour durer.",
    price: "4 900 €",
    priceSuffix: "/ projet",
    features: [
      "Site jusqu'à 10 pages",
      "Design premium et identité visuelle",
      "SEO avancé et SEO IA",
      "Blog intégré",
      "Analytics et intégrations",
      "Maintenance 1 an incluse",
      "Support prioritaire",
    ],
    cta: "Choisir ce forfait",
    ctaHref: "#contact",
    popular: true,
  },
  {
    name: "Application",
    tagline: "Pour les projets sur mesure : applications web et mobile, e-commerce, dashboards.",
    price: "Sur devis",
    features: [
      "Application web ou mobile complète",
      "E-commerce avancé",
      "Intégrations API",
      "Dashboard personnalisé",
      "SLA et garanties contractuelles",
      "Support dédié",
      "Formation incluse",
    ],
    cta: "Demander un devis",
    ctaHref: "#contact",
  },
];
