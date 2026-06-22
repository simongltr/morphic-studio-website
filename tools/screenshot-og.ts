// Renders an OG-image HTML mockup to a 1200×630 PNG (retina, DPR 2).
// Usage: bun tools/screenshot-og.ts [tools/og-image.html]
import { chromium } from "playwright";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";

const target = process.argv[2] ?? resolve(import.meta.dir, "og-image.html");
const fileUrl = target.startsWith("http") ? target : "file://" + resolve(target);
const outDir = resolve(import.meta.dir, "..", "dist", "screenshots");
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(fileUrl);
await page.waitForLoadState("networkidle");
await page.evaluate(() => document.fonts.ready);
const el = await page.$(".og");
const out = resolve(outDir, "og-image.png");
await (el ?? page).screenshot({ path: out });
console.log(out);
await ctx.close();
await browser.close();
