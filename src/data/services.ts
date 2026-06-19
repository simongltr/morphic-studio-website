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
}

export const services: Service[] = [
  {
    title: "Sites & Landing Pages",
    body: "Créez une page ou un site qui explique clairement votre offre, rassure vos prospects et transforme les visiteurs interesses en demandes de contact.",
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
    body: "Lancez une boutique en ligne professionnelle: catalogue, paiement, tunnel de commande et suivi client adaptes a votre volume et a votre maniere de travailler.",
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
    body: "Une plateforme web sur mesure pour un service que vous voulez lancer, ou un besoin métier qu'aucun outil du marché ne couvre vraiment.",
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
    body: "Regroupez vos chiffres, clients, commandes ou leads dans une interface claire pour piloter l'activite sans courir apres les infos.",
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
    body: "Un outil web taillé pour votre métier, qui remplace les fichiers bricolés, les copier-coller et les processus répétitifs par une solution simple, fiable et adaptée à votre façon de travailler.",
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
