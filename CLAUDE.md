# Morphic Studio Website

Repo for designing the Morphic Studio web agency site.

## Files

- `src/` — current working version of the site. Edit here.
- `logo.svg` — brand logo.
- `tools/` — small helper scripts (Playwright captures, etc.) the agent can run **when the user asks**.
- `CONTENT.md` — kept as a backup of earlier copy. **Not** the source of truth; do not pull text from it unless the user explicitly references it.

## Workflow

Iterate directly inside `src/`. No numbered copies, no per-change folders — git history is the record of what changed.

When the user asks for a change:
1. Edit the relevant files under `src/`.
2. Stop and report. Do **not** automatically run screenshot scripts to "verify" the change — those tools exist for when the user wants visual feedback, not as a default self-check.
3. Commit only when the user asks (or when it clearly closes a change they requested).

## Tools the agent can use on request

These live under `tools/`. Run them only when the user asks for a screenshot, an inspection, or a visual check — not preemptively.

- `tools/screenshot.ts` — renders an HTML file at desktop (1440×900) and mobile (390×844), full-page PNGs. Usage: `bun run tools/screenshot.ts src/index.html`.
- `tools/screenshot-sections.ts` — viewport-only (1440×900) shots scrolled to each major section anchor. Use when full-page captures are too compressed.
- `tools/screenshot-services-scroll.ts` — three viewport frames at 0 / 0.5 / 1 through a pinned horizontal-scroll services section.
- `tools/screenshot-parallax.ts` — three frames (cursor centered, top-left, bottom-right) for mouse-driven parallax effects.
- `tools/screenshot-scroll.ts` — five frames at 0 / 25 / 50 / 75 / 100% scroll through the first `.hero-stage` element.
- `tools/screenshot-header-hover.ts` — hovers each header pill target and captures the top 90px strip so the sliding hover highlight is visible.
- `tools/screenshot-stack-scroll.ts` — frames through the sticky card-stack section.

Output PNGs land in `src/screenshots/` (gitignored — local artifacts only).

If a needed inspection isn't covered (a specific hover state, a different viewport, an interaction flow, console errors, computed styles), write a new small single-purpose script under `tools/` and add it to the list above in the same commit.
