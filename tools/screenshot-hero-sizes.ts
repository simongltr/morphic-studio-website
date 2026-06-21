import { chromium } from "playwright";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";

// Hero screenshot at a single aspect ratio (16:9, the dominant desktop
// ratio) across multiple resolutions. No mobile.
// Usage: bun tools/screenshot-hero-sizes.ts [url-or-html-path]
const target = process.argv[2] ?? "http://localhost:4321/";
const fileUrl = target.startsWith("http") ? target : "file://" + resolve(target);
const outDir = resolve(import.meta.dir, "..", "dist", "screenshots", "hero-sizes");
mkdirSync(outDir, { recursive: true });

// All 16:9, ordered small → large.
const sizes = [
  { w: 1280, h: 720 },
  { w: 1600, h: 900 },
  { w: 1920, h: 1080 }, // Full HD — most common desktop
  { w: 2560, h: 1440 }, // QHD
  { w: 3200, h: 1800 },
  { w: 3840, h: 2160 }, // 4K UHD
];

const browser = await chromium.launch();
for (const { w, h } of sizes) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  await page.goto(fileUrl);
  await page.waitForLoadState("networkidle");

  // Viewport-only — the first screenful, i.e. the hero exactly as a
  // visitor sees it at this resolution.
  const out = resolve(outDir, `hero-${w}x${h}.png`);
  await page.screenshot({ path: out, fullPage: false });
  console.log(out);
  await ctx.close();
}
await browser.close();
