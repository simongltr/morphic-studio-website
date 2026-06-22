// Renders the business-card recto/verso to print-resolution PNGs.
// 910×610 CSS px (10px/mm, 85×55mm + 3mm bleed) at DPR 3 ≈ 762 DPI.
import { chromium } from "playwright";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";

const target = resolve(import.meta.dir, "business-card.html");
const outDir = resolve(import.meta.dir, "..", "dist", "screenshots");
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 3 });
const page = await ctx.newPage();
await page.goto("file://" + target);
await page.waitForLoadState("networkidle");
await page.evaluate(() => document.fonts.ready);
await page
  .waitForFunction(() => document.documentElement.dataset.rendered === "1", { timeout: 8000 })
  .catch(() => {});

for (const id of ["recto", "verso"]) {
  const el = await page.$("#" + id);
  const out = resolve(outDir, `card-${id}.png`);
  await el!.screenshot({ path: out });
  console.log(out);
}
await ctx.close();
await browser.close();
