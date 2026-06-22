export interface PricingFeature {
  label: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  priceSuffix?: string;
  priceNote?: string;
  categories: string[];
  duration?: string;
  features: PricingFeature[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Lancement",
    tagline: "Une page professionnelle pour exister sur le web sans attendre.",
    price: "500 €",
    priceSuffix: "/ projet",
    categories: ["Landing page", "Page de présentation", "Site one-page"],
    duration: "3 à 5 jours",
    features: [
      { label: "1 page responsive", icon: "lucide:file" },
      { label: "Formulaire de contact", icon: "lucide:mail" },
      {
        label: "Hébergement inclus, sans abonnement*",
        icon: "lucide:server",
      },
      { label: "Mise en ligne incluse", icon: "lucide:rocket" },
      { label: "1 cycle de révision", icon: "lucide:repeat" },
      {
        label: "30 jours de correction des dysfonctionnements",
        icon: "lucide:shield-check",
      },
    ],
    cta: "Choisir ce forfait",
    ctaHref: "#contact",
  },
  {
    name: "Vitrine",
    tagline: "Un site soigné pour présenter votre activité et déclencher des contacts.",
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
      { label: "Jusqu'à 3 pages", icon: "lucide:files" },
      { label: "Design responsive", icon: "lucide:smartphone" },
      {
        label: "Hébergement inclus, sans abonnement*",
        icon: "lucide:server",
      },
      { label: "SEO de base", icon: "lucide:search" },
      { label: "Support email pendant 30 jours", icon: "lucide:mail" },
      { label: "2 cycles de révision", icon: "lucide:repeat" },
      {
        label: "30 jours de correction des dysfonctionnements",
        icon: "lucide:shield-check",
      },
    ],
    cta: "Choisir ce forfait",
    ctaHref: "#contact",
    popular: true,
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
      { label: "Jusqu'à 10 pages", icon: "lucide:layout-grid" },
      {
        label: "Fonctionnalités avancées",
        icon: "lucide:sliders-horizontal",
      },
      { label: "SEO avancé", icon: "lucide:search" },
      { label: "Analytics et suivi", icon: "lucide:bar-chart-3" },
      {
        label: "Maintenance incluse pendant 3 mois",
        icon: "lucide:wrench",
      },
      { label: "Support prioritaire", icon: "lucide:headphones" },
      { label: "3 cycles de révision", icon: "lucide:repeat" },
      {
        label: "30 jours de correction des dysfonctionnements",
        icon: "lucide:shield-check",
      },
    ],
    cta: "Choisir ce forfait",
    ctaHref: "#contact",
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
      "Consulting",
      "Automatisation",
      "IA",
    ],
    duration: "À cadrer ensemble",
    features: [
      { label: "Cadrage gratuit", icon: "lucide:compass" },
      { label: "Devis détaillé", icon: "lucide:file-text" },
      { label: "Développement sur mesure", icon: "lucide:code-2" },
      { label: "Accompagnement dédié", icon: "lucide:hand-heart" },
      {
        label: "Solution adaptée aux besoins du projet",
        icon: "lucide:puzzle",
      },
    ],
    cta: "Demander un cadrage",
    ctaHref: "#contact",
  },
];
