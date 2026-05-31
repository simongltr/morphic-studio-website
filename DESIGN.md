# Design decisions — Morphic Studio site

## Direction

Clean modern editorial. Near-white background, confident modern grotesque display, generous vertical rhythm, strong asymmetric anchoring, mono numerals as section markers (01, 02, …). The four logo colors are used as sparse accents, not as a palette to be evenly distributed.

The site must *breathe*. Whitespace is content. Sections are tall, line-heights are generous, type is large, decoration is sparing.

## Type

- **Display:** Space Grotesk (free, Google Fonts). Modern geometric grotesque with character — used for H1/H2/H3 and key wordmarks. Weight 500 at display sizes; italic 500 for emphasized words.
- **Body / UI:** Inter (free, Google Fonts). Workhorse modern sans for body, sublines, supporting copy. Weights 400 / 500 / 600.
- **Mono / markers:** JetBrains Mono (free, Google Fonts). Used small (11–14px), uppercase, tracked out, for section numbers (`01 — CONSTAT`), eyebrow labels, prices, and small metadata.

Body size on desktop is 17px (1.0625rem). Display sizes use `clamp()` for fluid scaling. Display letter-spacing tightens to ~-0.022em; tighter (~-0.04em) on large oversized numerals.

## Color

Drawn directly from the logo. Navy is the primary ink; coral is the primary accent; sage and ochre are tertiary moments.

| Token       | Value     | Use                                    |
|-------------|-----------|----------------------------------------|
| `--ink`     | `#132e54` | Body text, primary ink                 |
| `--coral`   | `#fa5c47` | Primary accent — CTAs, key emphasis    |
| `--sage`    | `#869e8b` | Soft tint, dividers, secondary moments |
| `--ochre`   | `#e49c25` | Tertiary accent, numbers, small hits   |
| `--paper`   | `#fafaf8` | Default near-white background          |
| `--paper-2` | `#ffffff` | Lighter card / contrast background     |
| `--rule`    | `rgba(19,46,84,0.12)` | Hairline dividers              |

## Spacing & rhythm

- Section vertical padding: `clamp(96px, 16vw, 200px)`. Sections are tall.
- Content max-width: 1280px for grids, ~880px for prose, ~1400px for hero.
- Generous internal margins: heading-to-body gap of at least 32–48px.
- Hairline rules between sub-blocks rather than boxes; cards used sparingly.

## Layout

- Asymmetric grid: 4fr / 7fr two-column on desktop. Section marker (`01 — CONSTAT`) and heading sit in the narrower left column; supporting copy in the wider right column.
- Service blocks stack vertically with a large coral number (01, 02, 03), not in a card row.
- Method steps use a 180px / 1fr split: large coral number + small mono label on the left, headline + body on the right.
- Pricing is a typographic table — no boxes, just rules, with mono prices right-aligned.
- FAQ uses native `<details>` with a `+`/`−` mono indicator in coral.
- One full-bleed dark navy block (the Launch programme section) provides vertical rhythm and contrast against the near-white pages.

## Motion

CSS-only. One orchestrated entrance on the hero (staggered fade-up). Subtle hover transitions on links and CTAs. No scroll animations — earn them later.

## French typography

Non-breaking space (`&nbsp;`) inserted automatically before `?` `:` `!` to avoid orphans. Non-breaking hyphen (`&#8209;`) used where a compound word must not split (e.g. `Parlons-en` in display emphasis).

## Voice

Already locked in `CONTENT.md`. The design must not overwrite the content's calm confidence — no exclamation marks, no badges, no "trusted by" logos.
