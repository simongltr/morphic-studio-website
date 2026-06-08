import { chromium } from "playwright";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";

const target = process.argv[2];
if (!target) {
  console.error("usage: bun run screenshot-parallax.ts <path-to-html>");
  process.exit(1);
}

const fileUrl = "file://" + resolve(target);
const outDir = resolve(target, "..", "screenshots");
mkdirSync(outDir, { recursive: true });

const width = 1440;
const height = 900;
const positions = [
  { name: "parallax-center", x: width / 2, y: height / 2 },
  { name: "parallax-top-left", x: width * 0.15, y: height * 0.15 },
  { name: "parallax-bottom-right", x: width * 0.85, y: height * 0.85 },
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width, height } });
const page = await ctx.newPage();
await page.goto(fileUrl);
await page.waitForLoadState("networkidle");

for (const p of positions) {
  await page.mouse.move(p.x, p.y);
  // Wait for rAF lerp to settle.
  await page.waitForTimeout(800);
  const out = resolve(outDir, `${p.name}.png`);
  await page.screenshot({ path: out, fullPage: false });
  console.log(out);
}

await ctx.close();
await browser.close();
