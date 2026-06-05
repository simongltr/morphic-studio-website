import { chromium } from "playwright";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";

const target = process.argv[2];
if (!target) {
  console.error("usage: bun run screenshot-header-hover.ts <path-to-html>");
  process.exit(1);
}

const fileUrl = "file://" + resolve(target);
const outDir = resolve(target, "..", "screenshots");
mkdirSync(outDir, { recursive: true });

const width = 1440;
const height = 900;

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width, height } });
const page = await ctx.newPage();
await page.goto(fileUrl);
await page.waitForLoadState("networkidle");

const cases = [
  { name: "header-hover-work", selector: '.site-header__nav a[href="#work"]' },
  { name: "header-hover-services", selector: '.site-header__nav a[href="#services"]' },
  { name: "header-hover-left", selector: ".site-header__left" },
];

for (const c of cases) {
  await page.hover(c.selector);
  await page.waitForTimeout(450);
  const out = resolve(outDir, `${c.name}.png`);
  await page.screenshot({
    path: out,
    fullPage: false,
    clip: { x: 0, y: 0, width, height: 90 },
  });
  console.log(out);
}

await ctx.close();
await browser.close();
