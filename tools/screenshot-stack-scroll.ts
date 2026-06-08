import { chromium } from "playwright";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";

const target = process.argv[2];
if (!target) {
  console.error("usage: bun run screenshot-stack-scroll.ts <path-to-html>");
  process.exit(1);
}

const fileUrl = "file://" + resolve(target);
const outDir = resolve(target, "..", "screenshots");
mkdirSync(outDir, { recursive: true });

const width = 1440;
const height = 900;
const progressPoints = [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1.0];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width, height } });
const page = await ctx.newPage();
await page.goto(fileUrl);
await page.waitForLoadState("networkidle");

for (const p of progressPoints) {
  await page.evaluate((progress) => {
    const region = document.querySelector<HTMLElement>(".stack-region");
    if (!region) return;
    const rect = region.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const total = region.offsetHeight - window.innerHeight + 200;
    window.scrollTo(0, top - 50 + total * progress);
  }, p);
  await page.waitForTimeout(200);
  const label = String(Math.round(p * 100)).padStart(3, "0");
  const out = resolve(outDir, `stack-${label}.png`);
  await page.screenshot({ path: out, fullPage: false });
  console.log(out);
}

await ctx.close();
await browser.close();
