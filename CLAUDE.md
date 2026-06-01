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

1. Find the latest version under `iterations/` (e.g. `v3/`).
2. Copy it whole to the next number: `cp -r iterations/v3 iterations/v4`.
   - If no version exists yet, create `iterations/v1/` from scratch.
3. Make all modifications inside the new folder only.
4. Render and self-review with Playwright before committing:
   ```
   bun run screenshot.ts iterations/v4/index.html
   ```
   Open the PNGs in `iterations/v4/screenshots/` (desktop + mobile), compare to intent, fix issues, re-render. Iterate until the screenshots look right. Screenshots are gitignored (`iterations/*/screenshots/`) — they're local-only artifacts, re-rendered on demand. Do not commit them.
5. Add a one-line entry at the top of `iterations/LOG.md`: `v4 — <date> — <what changed and why>`.
6. Commit the new version on its own: `git add iterations/v4 iterations/LOG.md && git commit -m "iteration v4: <summary>"`. One commit per iteration.

Rules:
- Previous iterations are immutable history — do not touch them.
- Always screenshot the changes and look at the result before declaring an iteration done.
- Always log and commit.

## Playwright tooling

Small, single-purpose scripts at the repo root. If a script's behavior changes or a new one is added/removed, **update this list in the same commit**.

- `screenshot.ts` — renders an HTML file at desktop (1440×900) and mobile (390×844), saves full-page PNGs to `<iteration>/screenshots/`. Usage: `bun run screenshot.ts iterations/vN/index.html`.
- `screenshot-sections.ts` — viewport-only (1440×900) screenshots scrolled to each major section anchor. Use when full-page captures are too compressed to evaluate detail. Usage: `bun run screenshot-sections.ts iterations/vN/index.html`.
- `screenshot-services-scroll.ts` — captures three viewport-only frames at progress 0/0.5/1 through the services pinned horizontal-scroll section, named `04a/b/c-services-cardN.png`. Use when an iteration has the pinned scroll services pattern. Usage: `bun run screenshot-services-scroll.ts iterations/vN/index.html`.

If you need to inspect something the current scripts can't show — a scrolled section, a hover/focus state, an open menu, a specific viewport, an interaction flow, an animation frame, console errors, computed styles — write a new script (e.g. `screenshot-hover.ts`, `inspect-console.ts`) or extend an existing one. Keep helpers small and single-purpose; commit them alongside the iteration that needed them and add a line to the list above.
