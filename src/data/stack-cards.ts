export interface StackCardData {
  title: string;
  body: string;
  examples: string;
  imgColor: string;
}

export const stackCards: StackCardData[] = [
  {
    title: "Sites & Landing Pages",
    body: "Créez une présence web claire, moderne et crédible avec une page ou un site pensé pour présenter votre activité, rassurer vos visiteurs et générer des contacts.",
    examples:
      "Landing page, site vitrine, page de vente, site one-page, portfolio, site pour consultant, site d'artisan, site événementiel, page de capture, site multilingue simple.",
    imgColor: "linear-gradient(135deg, #d4bf95 0%, #a88860 100%)",
  },
  {
    title: "E-commerce",
    body: "Lancez une boutique en ligne professionnelle pour présenter vos produits, simplifier l'achat, encaisser les paiements et transformer vos visiteurs en clients.",
    examples:
      "Boutique Shopify, WooCommerce, catalogue produit, fiche produit, tunnel de commande, paiement en ligne, panier, codes promo, click & collect, produits digitaux, abonnements, espace client, suivi de commandes.",
    imgColor: "linear-gradient(135deg, #c79188 0%, #94504a 100%)",
  },
  {
    title: "Applications Web",
    body: "Transformez une idée, un service ou un besoin métier en plateforme web sur mesure, avec espace connecté, fonctionnalités interactives et parcours utilisateur complet.",
    examples:
      "Application SaaS, MVP, plateforme de réservation, espace membre, portail client, marketplace légère, plateforme de formation, outil collaboratif, système d'inscription, gestion d'utilisateurs, abonnement, paiement intégré.",
    imgColor: "linear-gradient(135deg, #6f8fa8 0%, #3c5d80 100%)",
  },
  {
    title: "Dashboards & Admin",
    body: "Centralisez vos données et pilotez votre activité avec des tableaux de bord, panels admin et interfaces de gestion simples, visuelles et adaptées à votre organisation.",
    examples:
      "Dashboard commercial, panel admin, CRM interne, suivi des ventes, gestion clients, gestion commandes, reporting marketing, statistiques utilisateurs, suivi de leads, gestion de projets, export PDF ou CSV, rôles utilisateurs.",
    imgColor: "linear-gradient(135deg, #9685b3 0%, #5e4d7c 100%)",
  },
  {
    title: "Outils sur mesure",
    body: "Remplacez les tâches manuelles, fichiers bricolés et process répétitifs par des outils web conçus exactement pour votre façon de travailler.",
    examples:
      "Calculateur de prix, générateur de devis, configurateur produit, simulateur, formulaire avancé, quiz de qualification, générateur PDF, outil métier interne, import/export de données, workflow personnalisé, outil de réservation spécifique.",
    imgColor: "linear-gradient(135deg, #d6a577 0%, #a36a3c 100%)",
  },
  {
    title: "Automatisations & IA",
    body: "Gagnez du temps chaque semaine grâce à des automatisations, des connexions entre outils, des relances intelligentes et des assistants IA intégrés à vos process.",
    examples:
      "Automatisation Make, Zapier, n8n, connexion formulaire vers CRM, relance automatique, chatbot IA, assistant FAQ, qualification de leads, génération de documents, reporting automatique, synchronisation Notion, Airtable, Google Sheets ou CRM.",
    imgColor: "linear-gradient(135deg, #7fb0a8 0%, #3f7a72 100%)",
  },
  {
    title: "SEO & Conversion",
    body: "Attirez plus de visiteurs qualifiés, mesurez vos performances et améliorez vos pages pour transformer davantage de trafic en demandes, ventes ou rendez-vous.",
    examples:
      "Audit SEO, optimisation Google, SEO local, recherche de mots-clés, tracking conversions, Google Analytics, Google Tag Manager, landing page Ads, optimisation CTA, heatmaps, tunnel de conversion, reporting mensuel, amélioration du taux de conversion.",
    imgColor: "linear-gradient(135deg, #87a892 0%, #4e7560 100%)",
  },
  {
    title: "Maintenance & Évolution",
    body: "Gardez un site rapide, sécurisé et fiable dans le temps avec un accompagnement technique continu, des sauvegardes, des corrections et des améliorations régulières.",
    examples:
      "Maintenance WordPress, mises à jour, sauvegardes, sécurité, monitoring, correction de bugs, hébergement, SSL, optimisation vitesse, protection anti-spam, nettoyage malware, support technique, ajout de contenu, évolutions mensuelles.",
    imgColor: "linear-gradient(135deg, #8a96a6 0%, #4d5867 100%)",
  },
];
