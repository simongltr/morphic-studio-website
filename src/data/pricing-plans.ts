export interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  priceSuffix?: string;
  priceNote?: string;
  categories: string[];
  duration?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Lancement",
    tagline: "Une page professionnelle en ligne rapidement.",
    price: "500 €",
    priceSuffix: "/ projet",
    categories: ["Landing page", "Page de présentation", "Site one-page"],
    duration: "3 à 5 jours",
    features: [
      "1 page responsive",
      "Formulaire de contact",
      "Hébergement inclus, sans abonnement*",
      "Mise en ligne incluse",
      "1 cycle de révision",
      "30 jours de correction des dysfonctionnements",
    ],
    cta: "Choisir ce forfait",
    ctaHref: "#contact",
  },
  {
    name: "Vitrine",
    tagline: "Un site simple et crédible pour présenter votre activité.",
    price: "1 500 €",
    priceSuffix: "/ projet",
    categories: [
      "Indépendant",
      "Petite entreprise",
      "Artisan",
      "Consultant",
      "Portfolio",
    ],
    duration: "1 à 3 semaines",
    features: [
      "Jusqu'à 3 pages",
      "Design responsive",
      "Hébergement inclus, sans abonnement*",
      "SEO de base",
      "Support email pendant 30 jours",
      "2 cycles de révision",
      "30 jours de correction des dysfonctionnements",
    ],
    cta: "Choisir ce forfait",
    ctaHref: "#contact",
  },
  {
    name: "Croissance",
    tagline: "Un site complet pour vendre, convertir ou automatiser.",
    price: "À partir de 3 000 €",
    priceSuffix: "/ projet",
    priceNote: "Périmètre défini ensemble lors d'un premier échange gratuit.",
    categories: [
      "Site avancé",
      "E-commerce simple",
      "Dashboard",
      "Outil interne",
    ],
    duration: "3 à 8 semaines",
    features: [
      "Jusqu'à 10 pages",
      "Fonctionnalités avancées",
      "SEO avancé",
      "Analytics et suivi",
      "Maintenance incluse pendant 3 mois",
      "Support prioritaire",
      "3 cycles de révision",
      "30 jours de correction des dysfonctionnements",
    ],
    cta: "Choisir ce forfait",
    ctaHref: "#contact",
    popular: true,
  },
  {
    name: "Signature",
    tagline: "Une solution sur mesure pour les projets ambitieux.",
    price: "Sur devis",
    priceSuffix: "cadrage gratuit",
    categories: [
      "Application web",
      "E-commerce avancé",
      "Dashboard métier",
      "Outil sur mesure",
      "Conseil & accompagnement",
    ],
    duration: "À cadrer ensemble",
    features: [
      "Cadrage gratuit",
      "Devis détaillé",
      "Développement sur mesure",
      "Accompagnement dédié",
      "Solution adaptée aux besoins du projet",
    ],
    cta: "Demander un cadrage",
    ctaHref: "#contact",
  },
];
