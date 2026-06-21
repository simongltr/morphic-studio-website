# Morphic Studio Website

Repo for designing the Morphic Studio web agency site. Built with **Astro** as a static site, deployable on GitHub Pages.

## Files

- `src/pages/` — Astro routes. `index.astro` is the home page.
- `src/layouts/` — page shells (e.g. `BaseLayout.astro`).
- `src/components/` — reusable components (`Header`, `Hero`, `Logo`, `StackSection`, `StackCard`, `AfterStack`, …).
- `src/data/` — static data consumed by components (e.g. `stack-cards.ts`).
- `src/styles/` — global stylesheets imported once by the layout (`global.css`).
- `src/utils/` — small helpers (`url.ts` prefixes asset paths with `import.meta.env.BASE_URL`).
- `public/` — static assets served as-is (`hero-background.webp`, `hero-couple.webp`, …). Reference them as `/asset.ext` from markup, or `withBase("/asset.ext")` from TS.
- `dist/` — build output (gitignored).
- `astro.config.mjs` — Astro config (site, base, build format).
- `tools/` — helper scripts the agent runs **only on user request**.
- `CONTENT.md` — backup of earlier copy. **Not** the source of truth; do not pull text from it unless the user explicitly references it.

## Workflow

Edit components directly under `src/`. Astro reloads in dev, no manual rebuild needed during iteration.

Common commands (Bun runs the Astro CLI natively):

```
bun install            # first-time deps install
bun run dev            # dev server at http://localhost:4321
bun run build          # static build → dist/
bun run preview        # serve the built site locally
```

When the user asks for a change:
1. Edit the relevant components / styles / data under `src/`.
2. If the change spans multiple components or affects layout, run `bun run build` once to confirm the static build still succeeds.
3. **Do not** automatically run screenshot scripts — those tools exist for when the user wants visual feedback, not as a default self-check.
4. Commit only when the user asks.

Important rules:
- Never run `rm` command when `git rm` can be used, clearly ask confirmation for non recoverable destructive actions
- Plans are written to markdown files at the root of the repo, never commit them. Names are folowing "PLAN-*.md"

### Component conventions

- One concern per `.astro` file: markup + scoped `<style>` + scoped `<script>` for that component's behavior.
- Shared CSS goes in `src/styles/global.css`. Anything component-specific stays scoped.
- CSS custom properties (`--foo`) cascade naturally across scoped styles — use them when a child component needs a value from its parent (see `StackSection` / `StackCard`).
- Assets in `public/` are referenced with `withBase("/path")` so the site works both at the root and under a project subpath on GitHub Pages.

## Tools the agent can use on request

These live under `tools/`. Run them only when the user asks for a screenshot, an inspection, or a visual check — not preemptively. They take an HTML file path; with Astro, point them at `dist/index.html` after `bun run build`.

- `tools/screenshot.ts` — desktop (1440×900) + mobile (390×844), full-page PNGs.
- `tools/screenshot-sections.ts` — viewport-only shots scrolled to each major section anchor.
- `tools/screenshot-services-scroll.ts` — three frames at 0 / 0.5 / 1 through a pinned horizontal-scroll services section.
- `tools/screenshot-parallax.ts` — three frames (cursor centered, top-left, bottom-right) for mouse-driven parallax effects.
- `tools/screenshot-scroll.ts` — five frames at 0 / 25 / 50 / 75 / 100% scroll through the first `.hero-stage` element.
- `tools/screenshot-header-hover.ts` — hovers each header pill target and captures the top 90px strip.
- `tools/screenshot-stack-scroll.ts` — frames through the sticky card-stack section.
- `tools/screenshot-hero.ts` — hero viewport screenshot at 1440×900 (defaults to dev server URL).
- `tools/screenshot-hero-mobile.ts` — same hero viewport at 390×844 with 2× DPR.
- `tools/screenshot-hero-sizes.ts` — hero at a single aspect ratio (16:9) across resolutions (1280×720 → 3840×2160), one PNG per size in `dist/screenshots/hero-sizes/`.
- `tools/screenshot-section-sizes.ts` — a given section (selector arg, default `#services`) captured across the same 16:9 resolutions, one PNG per size in `dist/screenshots/section-sizes/`.

Output PNGs land in `<input-dir>/screenshots/` (gitignored).

If a needed inspection isn't covered (a specific hover state, a different viewport, an interaction flow, console errors, computed styles), write a new small single-purpose script under `tools/` and add it to the list above in the same commit.

## Deployment

The site is intended to be hosted on **GitHub Pages**. `astro build` produces a fully static `dist/` — no server runtime required. Deployment config (`site`, `base` in `astro.config.mjs`, and the GitHub Actions workflow) is set up separately; ask the user about domain / subpath before changing it.
