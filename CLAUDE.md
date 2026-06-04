# Morphic Studio Website

Repo for designing the Morphic Studio web agency site.

## Files

- `CONTENT.md` — finalized site copy. Source of truth for text.
- `DESIGN.md` — in-progress design decisions. Iterate here.
- `logo.svg` — brand logo.
- `iterations/` — numbered versions of the site (see workflow below).
- `screenshot.ts` — Playwright helper to render an iteration at desktop + mobile widths.

## Iteration workflow

**Never edit a previous iteration in place.** Each change starts a new numbered copy.

1. Find the latest version under `iterations/` (e.g. `v6/`).
2. Copy it whole to the next number: `cp -r iterations/v6 iterations/v7`.
   - If no version exists yet, create `iterations/v1/` from scratch.
3. Make all modifications inside the new folder only.
4. If the iteration uses Tailwind (see below), build the CSS before screenshotting:
   ```
   bunx @tailwindcss/cli -i iterations/v7/input.css -o iterations/v7/output.css --minify
   ```
5. Render and self-review with Playwright:
   ```
   bun run screenshot.ts iterations/v7/index.html
   ```
   Open the PNGs in `iterations/v7/screenshots/` (desktop + mobile), compare to intent, fix issues, re-render. Iterate until the screenshots look right. Screenshots are gitignored (`iterations/*/screenshots/`) — they're local-only artifacts, re-rendered on demand. Do not commit them.
6. Add a one-line entry at the top of `iterations/LOG.md`: `v7 — <date> — <what changed and why>`.
7. Commit the new version on its own: `git add iterations/v7 iterations/LOG.md && git commit -m "iteration v7: <summary>"`. One commit per iteration. The compiled `output.css` **is committed** alongside `input.css` so checking out the iteration renders without a build step — but always rebuild before screenshotting locally so the diff reflects the source.

Rules:
- Previous iterations are immutable history — do not touch them.
- Always screenshot the changes and look at the result before declaring an iteration done.
- Always log and commit.

## Tailwind CSS (from v7 onward)

Iterations from v7 use Tailwind v4 compiled locally with the `@tailwindcss/cli` (installed at the repo root, `bun add -D tailwindcss @tailwindcss/cli`).

Per-iteration layout:
- `iterations/vN/input.css` — `@import "tailwindcss";` + `@theme { … }` tokens (logo colors, fonts, breakpoints) + `@layer components { … }` for `.shell`, `.cta`, `.card`, `.services-pin`, etc.
- `iterations/vN/index.html` — Tailwind utility classes in the markup; declares `<link rel="stylesheet" href="output.css">`.
- `iterations/vN/output.css` — compiled bundle, committed.

Build:
```
bunx @tailwindcss/cli -i iterations/vN/input.css -o iterations/vN/output.css --minify
```

The `@source "./index.html"` directive in `input.css` tells Tailwind to scan that file for class names. Add more `@source` lines if a future iteration splits markup across files.

Iconify icons are loaded via the `iconify-icon` web component from the Iconify CDN (set via `<script src="https://code.iconify.design/iconify-icon/3.0.1/iconify-icon.min.js"></script>`); use any icon set (e.g. `<iconify-icon icon="lucide:clipboard-list">`).

## Playwright tooling

Small, single-purpose scripts at the repo root. If a script's behavior changes or a new one is added/removed, **update this list in the same commit**.

- `screenshot.ts` — renders an HTML file at desktop (1440×900) and mobile (390×844), saves full-page PNGs to `<iteration>/screenshots/`. Usage: `bun run screenshot.ts iterations/vN/index.html`.
- `screenshot-sections.ts` — viewport-only (1440×900) screenshots scrolled to each major section anchor. Use when full-page captures are too compressed to evaluate detail. Usage: `bun run screenshot-sections.ts iterations/vN/index.html`.
- `screenshot-services-scroll.ts` — captures three viewport-only frames at progress 0/0.5/1 through the services pinned horizontal-scroll section, named `04a/b/c-services-cardN.png`. Use when an iteration has the pinned scroll services pattern. Usage: `bun run screenshot-services-scroll.ts iterations/vN/index.html`.
- `screenshot-parallax.ts` — captures three viewport-only frames (cursor centered, top-left, bottom-right) at 1440×900 to verify a mouse-driven parallax effect, named `parallax-center.png`, `parallax-top-left.png`, `parallax-bottom-right.png`. Use when an iteration uses mouse-position parallax. Usage: `bun run screenshot-parallax.ts iterations/vN/index.html`.
- `screenshot-scroll.ts` — captures five viewport-only frames at scroll progress 0 / 25% / 50% / 75% / 100% through the first `.hero-stage` element (falls back to whole document), named `scroll-000.png` … `scroll-100.png`. Use when an iteration has a scroll-driven hero transition. Usage: `bun run screenshot-scroll.ts iterations/vN/index.html`.

If you need to inspect something the current scripts can't show — a scrolled section, a hover/focus state, an open menu, a specific viewport, an interaction flow, an animation frame, console errors, computed styles — write a new script (e.g. `screenshot-hover.ts`, `inspect-console.ts`) or extend an existing one. Keep helpers small and single-purpose; commit them alongside the iteration that needed them and add a line to the list above.
