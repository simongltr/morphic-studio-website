import { chromium } from "playwright";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";

const target = process.argv[2];
if (!target) {
  console.error("usage: bun run screenshot-scroll.ts <path-to-html>");
  process.exit(1);
}

const fileUrl = "file://" + resolve(target);
const outDir = resolve(target, "..", "screenshots");
mkdirSync(outDir, { recursive: true });

const width = 1440;
const height = 900;
const progressPoints = [0, 0.25, 0.5, 0.75, 1.0];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width, height } });
const page = await ctx.newPage();
await page.goto(fileUrl);
await page.waitForLoadState("networkidle");

for (const p of progressPoints) {
  await page.evaluate((progress) => {
    const stage = document.querySelector<HTMLElement>(".hero-stage");
    const range = stage
      ? Math.max(0, stage.offsetHeight - window.innerHeight)
      : Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo(0, range * progress);
  }, p);
  // Let rAF + lerp settle.
  await page.waitForTimeout(250);
  const label = String(Math.round(p * 100)).padStart(3, "0");
  const out = resolve(outDir, `scroll-${label}.png`);
  await page.screenshot({ path: out, fullPage: false });
  console.log(out);
}

await ctx.close();
await browser.close();
