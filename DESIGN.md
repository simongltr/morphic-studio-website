# Design decisions — Morphic Studio site

## Direction

Editorial minimalism. Closer to a design magazine than a typical agency site: warm paper background, generous vertical rhythm, strong asymmetric anchoring, a high-contrast display serif paired with a clean modern grotesque, mono numerals as section markers (01, 02, …). The four logo colors are used as sparse accents, not as a palette to be evenly distributed.

The site must *breathe*. Whitespace is content. Sections are tall, line-heights are generous, type is large, decoration is sparing.

## Type

- **Display:** Instrument Serif (free, Google Fonts). High-contrast editorial serif with a beautiful italic. Used for H1/H2 and key emphasis. Italic only for single-word accents.
- **Body / UI:** Hanken Grotesk (free, Google Fonts). Clean, neutral, under-used. Sizes 400 / 500 / 600.
- **Mono / markers:** JetBrains Mono (free, Google Fonts). Used small (12–14px), uppercase, tracked out, for section numbers (`01 — CONSTAT`) and eyebrow labels.

Body size on desktop is 17px (1.0625rem) for that editorial weight. Display sizes use `clamp()` for fluid scaling.

## Color

Drawn directly from the logo. Navy is the primary ink; coral is the primary accent; sage and ochre are tertiary moments.

| Token       | Value     | Use                                    |
|-------------|-----------|----------------------------------------|
| `--ink`     | `#132e54` | Body text, primary ink                 |
| `--coral`   | `#fa5c47` | Primary accent — CTAs, key emphasis    |
| `--sage`    | `#869e8b` | Soft tint, dividers, secondary moments |
| `--ochre`   | `#e49c25` | Tertiary accent, numbers, small hits   |
| `--paper`   | `#f4ede0` | Default warm background                |
| `--paper-2` | `#fbf7ef` | Lighter card / contrast background     |
| `--rule`    | `rgba(19,46,84,0.14)` | Hairline dividers              |

## Spacing & rhythm

- Section vertical padding: `clamp(120px, 18vw, 220px)`. Sections are tall.
- Content max-width: 1200px for grids, ~880px for prose, ~1400px for hero.
- Generous internal margins: heading-to-body gap of at least 32–48px.
- Hairline rules between sub-blocks rather than boxes; cards used sparingly.

## Layout

- Asymmetric grid: 12 columns on desktop. Headings often pulled to a narrower column with body offset.
- Section markers (`01 — CONSTAT`) sit in a left "gutter" on desktop, above the heading on mobile.
- Service blocks stack vertically with a numbered marker, not in a card row.
- Pricing is a typographic table — no boxes, just rules.
- FAQ uses native `<details>` with custom chevrons.

## Motion (v1)

CSS-only. One orchestrated entrance on the hero (staggered fade-up). Subtle hover transitions on links and CTAs. No scroll animations in v1 — earn them later.

## Voice

Already locked in `CONTENT.md`. The design must not overwrite the content's calm confidence — no exclamation marks, no badges, no "trusted by" logos in v1.
