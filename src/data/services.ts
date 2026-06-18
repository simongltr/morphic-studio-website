export interface GalleryItem {
  caption: string;
  image: string | null;
}

export interface Service {
  title: string;
  body: string;
  examples: string;
  icon: string;
  gallery: GalleryItem[];
  proof?: {
    points: {
      icon: string;
      title: string;
      text: string;
    }[];
  };
}

export const services: Service[] = [
  {
    title: "Sites & Landing Pages",
    body: "Créez une présence web claire, moderne et crédible avec une page ou un site pensé pour présenter votre activité, rassurer vos visiteurs et générer des contacts.",
    examples:
      "Landing page, site vitrine, page de vente, site one-page, portfolio, site pour consultant, site d'artisan, site événementiel, page de capture, site multilingue simple.",
    icon: "lucide:layout",
    gallery: [
      {
        caption: "Landing page d'un atelier de céramique à Lyon",
        image: "/services/1-1.webp",
      },
      {
        caption: "Site vitrine d'un cabinet d'architecte indépendant",
        image: "/services/1-2.webp",
      },
      {
        caption: "Page de vente pour un coach professionnel certifié",
        image: null,
      },
      {
        caption: "Portfolio d'un photographe spécialisé en mariage",
        image: null,
      },
    ],
  },
  {
    title: "E-commerce",
    body: "Lancez une boutique en ligne professionnelle pour présenter vos produits, simplifier l'achat, encaisser les paiements et transformer vos visiteurs en clients.",
    examples:
      "Boutique Shopify, WooCommerce, catalogue produit, fiche produit, tunnel de commande, paiement en ligne, panier, codes promo, click & collect, produits digitaux, abonnements, espace client, suivi de commandes.",
    icon: "lucide:shopping-bag",
    gallery: [
      {
        caption: "Boutique Shopify d'un torréfacteur artisanal",
        image: "/services/2-1.webp",
      },
      {
        caption: "Catalogue produit d'une marque de cosmétique bio",
        image: "/services/2-2.webp",
      },
      {
        caption: "Tunnel de commande d'un éditeur de jeux de société",
        image: "/services/2-3.webp",
      },
      {
        caption: "Espace client d'une marque de prêt-à-porter responsable",
        image: null,
      },
    ],
  },
  {
    title: "Applications Web",
    body: "Transformez une idée, un service ou un besoin métier en plateforme web sur mesure, avec espace connecté, fonctionnalités interactives et parcours utilisateur complet.",
    examples:
      "Application SaaS, MVP, plateforme de réservation, espace membre, portail client, marketplace légère, plateforme de formation, outil collaboratif, système d'inscription, gestion d'utilisateurs, abonnement, paiement intégré.",
    icon: "lucide:app-window",
    gallery: [
      {
        caption: "SaaS de gestion pour studios de yoga indépendants",
        image: "/services/3-1.webp",
      },
      {
        caption: "MVP d'une plateforme de mise en relation freelances",
        image: null,
      },
      {
        caption: "Espace membre d'une école de formation en ligne",
        image: null,
      },
      { caption: "Marketplace B2B pour fournisseurs locaux", image: null },
    ],
  },
  {
    title: "Dashboards & Admin",
    body: "Centralisez vos données et pilotez votre activité avec des tableaux de bord, panels admin et interfaces de gestion simples, visuelles et adaptées à votre organisation.",
    examples:
      "Dashboard commercial, panel admin, CRM interne, suivi des ventes, gestion clients, gestion commandes, reporting marketing, statistiques utilisateurs, suivi de leads, gestion de projets, export PDF ou CSV, rôles utilisateurs.",
    icon: "lucide:layout-dashboard",
    gallery: [
      { caption: "Dashboard commercial d'une agence immobilière", image: null },
      {
        caption: "CRM interne sur-mesure pour un cabinet de conseil RH",
        image: "/services/4-2.webp",
      },
      { caption: "Suivi des ventes d'une PME industrielle", image: null },
      { caption: "Panel admin d'une plateforme de réservation", image: null },
    ],
  },
  {
    title: "Outils sur mesure",
    body: "Remplacez les tâches manuelles, fichiers bricolés et process répétitifs par des outils web conçus exactement pour votre façon de travailler.",
    examples:
      "Calculateur de prix, générateur de devis, configurateur produit, simulateur, formulaire avancé, quiz de qualification, générateur PDF, outil métier interne, import/export de données, workflow personnalisé, outil de réservation spécifique.",
    icon: "lucide:wrench",
    gallery: [
      {
        caption: "Configurateur de menuiseries pour un fabricant régional",
        image: "/services/5-1.webp",
      },
      { caption: "Calculateur de devis pour un paysagiste", image: null },
      {
        caption: "Générateur de PDF contractuels pour un notaire",
        image: null,
      },
      {
        caption: "Outil de planification pour une école de musique",
        image: null,
      },
    ],
  },
];
