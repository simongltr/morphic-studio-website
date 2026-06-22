// FAQ content shared between the rendered FAQ section and the FAQPage
// structured data (JSON-LD), so the two never drift apart.

export interface FaqItem {
  icon: string;
  q: string;
  a: string;
}

export const faqItems: FaqItem[] = [
  {
    icon: "lucide:code",
    q: "Quelles technologies utilisez-vous ?",
    a: "Par défaut, on fait des choix modernes et largement adoptés, comme Astro, Next.js, React ou TypeScript : performants, durables et faciles à reprendre. Pour gérer vos contenus, on privilégie des CMS souples comme Strapi, sans fermer la porte à WordPress si c'est le bon outil pour vous. Et si votre projet demande autre chose, on s'adapte.",
  },
  {
    icon: "lucide:file-text",
    q: "Qu'est-ce qui est inclus dans le prix ?",
    a: "Cadrage, design responsive, développement, mise en ligne, formation, accès et fichiers. Ce qui n'est pas inclus par défaut est listé clairement au devis.",
  },
  {
    icon: "lucide:arrow-left-right",
    q: "Que se passe-t-il si le périmètre change ?",
    a: "Si une demande sort du cadre validé, nous vous proposons un avenant chiffré avant de l'engager. Pas de dérive silencieuse, pas de surprise sur la facture finale.",
  },
  {
    icon: "lucide:clock",
    q: "Combien de temps prend un projet ?",
    a: "La majorité des projets se livrent en moins de deux semaines, et quelques jours pour les plus simples. Les applications plus complexes demandent davantage, mais le délai est ferme dès le cadrage.",
  },
  {
    icon: "lucide:life-buoy",
    q: "Et une fois le site en ligne, qui assure le suivi ?",
    a: "Trente jours de suivi sont inclus après la mise en ligne. Au-delà, on propose un contrat de maintenance si vous le souhaitez. Et comme le code et les accès restent les vôtres, vous n'êtes jamais enfermé chez nous.",
  },
  {
    icon: "lucide:key",
    q: "Suis-je propriétaire du site ou de l'application ?",
    a: "Oui. À la livraison, vous récupérez les accès, le code source et les fichiers prévus. Vous n'êtes jamais dépendant de nous par défaut.",
  },
];
