export interface StackCardData {
  title: string;
  body: string;
  imgColor: string;
}

export const stackCards: StackCardData[] = [
  {
    title: "Sites & landing pages",
    body: "Pages d'atterrissage, sites vitrines, portfolios — pour faire bonne impression dès la première seconde.",
    imgColor: "linear-gradient(135deg, #d4bf95 0%, #a88860 100%)",
  },
  {
    title: "Applications web",
    body: "Outils internes, plateformes SaaS, espaces clients — des interfaces qui rendent le complexe simple à utiliser.",
    imgColor: "linear-gradient(135deg, #6f8fa8 0%, #3c5d80 100%)",
  },
  {
    title: "Dashboards & admin",
    body: "Tableaux de bord, espaces d'administration, BI — la donnée transformée en décisions claires et actionnables.",
    imgColor: "linear-gradient(135deg, #9685b3 0%, #5e4d7c 100%)",
  },
  {
    title: "Produits client & serveur",
    body: "APIs, bases de données, infra cloud — la mécanique invisible qui fait tourner votre produit, jour après jour.",
    imgColor: "linear-gradient(135deg, #87a892 0%, #4e7560 100%)",
  },
  {
    title: "Outils sur-mesure",
    body: "Bots, automatisations, scripts — quand un produit existant ne fait pas exactement ce dont vous avez besoin.",
    imgColor: "linear-gradient(135deg, #c79188 0%, #94504a 100%)",
  },
];
