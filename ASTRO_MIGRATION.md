# Plan de migration vers Astro

Document de travail. À supprimer une fois la migration terminée.

## 1. Astro + Bun : compatible ?

**Oui, totalement.** Astro est agnostique du gestionnaire de paquets et son CLI tourne aussi bien sous Node que sous Bun.

- Astro peut être installé comme dépendance de dev classique avec `bun add -D astro`.
- `bun run astro dev` / `bun run astro build` fonctionnent nativement.
- Sortie de `astro build` = HTML/CSS/JS statique dans `dist/`. Aucun runtime requis côté hébergement → GitHub Pages OK.
- Aucune dépendance à Node en production puisqu'on n'utilise que la sortie statique.

## 2. Installation

Deux options.

### Option A — repartir d'un scaffold officiel (recommandé)

```
bun create astro@latest
```

Réponses à donner :
- **Where should we create your project?** → `.` (racine du repo)
- **How would you like to start?** → *Empty project*
- **Install dependencies?** → Yes
- **TypeScript?** → Yes (strict ou standard, peu importe)
- **Git repo?** → No (déjà initialisé)

Le scaffold crée `package.json` / `astro.config.mjs` / `tsconfig.json` / `src/pages/index.astro` etc. On va ensuite **remplacer** ces stubs par notre code migré.

### Option B — installation manuelle

Si on veut garder le contrôle total :

```
bun add -D astro @astrojs/check typescript
```

Et créer à la main : `astro.config.mjs`, `src/pages/index.astro`, etc.

→ **Recommandation : Option A**, on gagne du temps, on adopte les conventions, et on garde uniquement ce qu'on a besoin.

## 3. Structure cible

```
.
├── ASTRO_MIGRATION.md          ← ce fichier (à supprimer après migration)
├── CLAUDE.md                   ← à mettre à jour (workflow Astro)
├── CONTENT.md                  ← backup, inchangé
├── AGENTS.md                   ← inchangé
├── README.md                   ← optionnel, instructions dev/build
├── astro.config.mjs            ← config Astro (site, base, etc.)
├── package.json                ← astro + playwright (dev deps)
├── tsconfig.json               ← config TS générée par Astro
├── public/                     ← assets servis tels quels
│   ├── hero-background.webp
│   ├── hero-couple.webp
│   └── favicon.ico (optionnel)
├── src/
│   ├── pages/
│   │   └── index.astro         ← page racine, assemble les composants
│   ├── layouts/
│   │   └── BaseLayout.astro    ← <html>, <head>, fonts, global CSS
│   ├── components/
│   │   ├── Logo.astro          ← SVG inline réutilisable
│   │   ├── Header.astro        ← pill + nav + sliding highlight (+ JS scoped)
│   │   ├── Hero.astro          ← hero-stage + parallax/scroll (+ JS scoped)
│   │   ├── StackSection.astro  ← section 01 (intro + region)
│   │   ├── StackCard.astro     ← une carte de la pile
│   │   └── AfterStack.astro    ← section 02 placeholder
│   ├── data/
│   │   └── stack-cards.ts      ← données des cartes (titre, body, couleur)
│   └── styles/
│       └── global.css          ← reset, body, vars communes
├── tools/                      ← inchangé (scripts screenshot)
│   └── …
└── dist/                       ← (généré, gitignored)
```

## 4. Découpage en composants

### `BaseLayout.astro`
- `<html lang="fr">`, `<head>` (meta, preconnect fonts, Google Fonts link), `<body>`.
- Slot pour le contenu de la page.
- Importe `global.css` une seule fois.

### `Logo.astro`
- Le `<svg>` du logo Morphic (les 6 `<path>` actuels). Pas de logique.
- Props éventuelles : `class` pour positionnement contextuel.

### `Header.astro`
- Markup du `.site-header__pill` avec `<Logo />`, nom, `<nav>`.
- `<style>` scopé : tout ce qui touche `.site-header*` dans les `<style>` actuels.
- `<script>` (scoped, exécuté côté client) : la logique de sliding highlight (lignes 599–637 de `src/index.html`).
- Note : Astro bundle les scripts inline et les hydrate au chargement → c'est exactement le comportement actuel.

### `Hero.astro`
- Markup de `.hero-stage > .hero` (bg, couple img, wash, masthead).
- `<style>` scopé : `.hero-stage`, `.hero`, `.hero__*`.
- `<script>` (scoped) : la grosse IIFE de scroll/parallax (lignes 485–596).
- Image `hero-couple.webp` référencée via `/hero-couple.webp` (depuis `public/`) ou via `import` Astro (avec optim auto).

### `StackSection.astro`
- Importe `StackCard` et la donnée `stack-cards.ts`.
- Boucle sur les cartes : `{cards.map((c, i) => <StackCard {...c} idx={i} />)}`.
- Markup `.stack-intro` (eyebrow, titre, body).
- `<style>` scopé pour `.stack-section`, `.stack-intro`, `.stack-region`.

### `StackCard.astro`
- Props : `title`, `body`, `imgColor` (gradient), `idx`.
- Markup `<article class="stack-card">` avec `style={`--idx: ${idx}; --img-color: ${imgColor}`}`.
- `<style>` scopé pour `.stack-card*`.

### `AfterStack.astro`
- Section 02 simple, deux paragraphes placeholder.
- `<style>` scopé.

### `stack-cards.ts`
```ts
export const stackCards = [
  {
    title: "Sites & landing pages",
    body: "Pages d'atterrissage, sites vitrines, portfolios — pour faire bonne impression dès la première seconde.",
    imgColor: "linear-gradient(135deg, #d4bf95 0%, #a88860 100%)",
  },
  // … 4 autres
];
```

### `pages/index.astro`
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Header from "../components/Header.astro";
import Hero from "../components/Hero.astro";
import StackSection from "../components/StackSection.astro";
import AfterStack from "../components/AfterStack.astro";
---
<BaseLayout title="Morphic Studio">
  <Header />
  <Hero />
  <main class="site">
    <StackSection />
    <AfterStack />
  </main>
</BaseLayout>
```

## 5. Découpage des styles

Le `<style>` actuel (lignes 12–361) se découpe ainsi :

| Bloc CSS actuel | Destination |
| --- | --- |
| `*`, `html`, `body`, reset | `src/styles/global.css` |
| `.site-header*` (incl. highlight) | `<style>` de `Header.astro` |
| `.hero-stage`, `.hero*` | `<style>` de `Hero.astro` |
| `.site`, `.section`, `.section__*` | `global.css` (utilitaires partagés) |
| `.stack-section`, `.stack-intro*`, `.stack-region` | `<style>` de `StackSection.astro` |
| `.stack-card*` | `<style>` de `StackCard.astro` |
| `.after-stack*` | `<style>` de `AfterStack.astro` |
| Media queries `@media` | rester avec le composant concerné |

Les styles scopés Astro ajoutent automatiquement un attribut unique → pas de conflit entre composants.

## 6. Assets

- `hero-background.webp`, `hero-couple.webp` → `public/`. Référencés en chemin absolu (`/hero-couple.webp`) qui marche en dev et en prod.
- `logo.svg` du `src/` actuel : à supprimer si non utilisé (le HTML inline le SVG). Sinon → `public/logo.svg`.
- Fonts Google : restent en `<link>` dans `BaseLayout.astro`.

## 7. Build & déploiement GitHub Pages

### Config Astro
`astro.config.mjs` :

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://<username>.github.io",          // ou domaine custom
  base: "/morphic-studio-website",                // si publié sur le path du repo
  // base: "/"                                    // si domaine custom ou repo "<user>.github.io"
  build: { format: "directory" },
});
```

### GitHub Actions
Créer `.github/workflows/deploy.yml` :

```yaml
name: Deploy Astro to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install --frozen-lockfile
      - run: bun run astro build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Côté GitHub : **Settings → Pages → Source = "GitHub Actions"**.

## 8. Impact sur les outils existants

### `tools/screenshot*.ts`
Tous prennent un chemin `.html` en argument. Après build, l'output est `dist/index.html`. Deux choix :

- **Option simple** : pointer sur le build → `bun run astro build && bun run tools/screenshot.ts dist/index.html`.
- **Option dev server** : ajouter une variante qui charge `http://localhost:4321` pendant `astro dev`. Plus rapide pour itérer, demande de modifier les scripts pour accepter une URL.

Recommandation initiale : garder les scripts tels quels, lancer `astro build` avant capture. On optimisera si nécessaire.

### `CLAUDE.md`
À mettre à jour après migration :
- Section "Files" : décrire `src/pages/`, `src/components/`, `src/layouts/`, `public/`, `dist/`.
- Section "Workflow" : ajouter `bun run dev` (Astro dev server) et `bun run build` avant screenshots.
- Section "Tools" : préciser que les scripts pointent maintenant sur `dist/index.html`.

### `.gitignore`
Ajouter :
```
dist/
.astro/
```

## 9. Étapes d'exécution (ordre proposé)

Chaque étape = un commit.

1. **`chore: scaffold Astro project`**
   Lancer `bun create astro@latest .`, sélectionner Empty project. Adapter `.gitignore` (`dist/`, `.astro/`). Supprimer les stubs de page par défaut.

2. **`feat: migrate base layout, global styles, page shell`**
   Créer `BaseLayout.astro`, `global.css`, `pages/index.astro` vide. Bouger les fonts, reset, body.

3. **`feat: migrate Logo and Header components`**
   `Logo.astro` + `Header.astro` (markup + style + script du highlight). Vérifier visuellement.

4. **`feat: migrate Hero component`**
   `Hero.astro` avec le markup, le CSS et le script scroll/parallax. Déplacer les `.webp` dans `public/`.

5. **`feat: migrate stack section (data, card, section)`**
   `stack-cards.ts`, `StackCard.astro`, `StackSection.astro`.

6. **`feat: migrate after-stack placeholder`**
   `AfterStack.astro` + intégration dans `index.astro`.

7. **`chore: remove legacy src/index.html and assets`**
   Une fois la migration validée, supprimer l'ancien monolithe `src/index.html` et `src/logo.svg` s'il est inutilisé. Les `.webp` ont déjà migré vers `public/`.

8. **`ci: add GitHub Pages deploy workflow`**
   `.github/workflows/deploy.yml`. Activer Pages dans Settings.

9. **`docs: update CLAUDE.md for Astro workflow`**
   Adapter les instructions au nouveau projet.

10. **`chore: drop ASTRO_MIGRATION.md`**
    Ce fichier disparaît une fois tout en place.

## 10. Points de validation

À chaque étape, vérifier :
- `bun run astro dev` charge sans erreur.
- Le rendu visuel est identique à l'ancien `src/index.html` (utiliser un screenshot avant/après).
- Le script de scroll Hero fonctionne (mouvement parallax + zoom).
- Le sliding highlight du header fonctionne sur hover.
- Le sticky stack des cartes empile correctement au scroll.
- `bun run astro build` produit un `dist/` qui s'ouvre directement dans un navigateur.

## 11. Rollback

Tout est en commits séparés. En cas de blocage, `git revert` ou `git reset --hard <commit avant scaffold>` ramène à l'état actuel. Aucune perte de contenu : `CONTENT.md` reste, `tools/` reste, `dist/` est généré.
