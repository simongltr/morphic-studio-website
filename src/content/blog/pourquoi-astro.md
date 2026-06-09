---
title: "Pourquoi on a choisi Astro pour ce site"
description: "Sites vitrines, blogs, landing pages : pourquoi Astro nous semble être le meilleur choix par défaut en 2026."
pubDate: 2026-06-08
heroImage: "/blog/astro.svg"
heroAlt: "Étoiles sur fond sombre évoquant une constellation"
tags: ["technos", "astro"]
---

On a construit ce site avec [Astro](https://astro.build). C'est aussi le framework qu'on recommande désormais par défaut pour les sites vitrines, les blogs, et toutes les pages où il n'y a pas un état applicatif riche à gérer.

## Ce qu'Astro fait bien

- **Statique par défaut.** Le site sort en HTML pur. Pas de runtime serveur. Pas de coût d'hébergement.
- **Composants familiers.** La syntaxe `.astro` ressemble à du JSX, on importe des composants React si on en a besoin (ici, on n'en a pas eu besoin).
- **Hydratation à la carte.** Si une partie de la page doit être interactive, on l'hydrate. Sinon, zéro JavaScript envoyé au client.
- **Content Collections.** Pour un blog comme celui-ci, les `.md` deviennent typés automatiquement. Pas de CMS à héberger.

## Quand on ne le recommande pas

Si l'application a un état riche (édition collaborative, dashboard temps réel, etc.), on part plutôt sur Next.js ou Remix. Astro est conçu pour des sites où le contenu est roi, pas pour des apps métier.

## Et le déploiement ?

GitHub Pages. C'est gratuit, c'est rapide, et le pipeline tient en un fichier YAML. Pour un site de studio comme le nôtre, c'est largement suffisant.
