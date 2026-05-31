import { chromium } from "playwright";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";

const target = process.argv[2];
if (!target) {
  console.error("usage: bun run screenshot-sections.ts <path-to-html>");
  process.exit(1);
}

const fileUrl = "file://" + resolve(target);
const outDir = resolve(target, "..", "screenshots");
mkdirSync(outDir, { recursive: true });

const sections = [
  { name: "01-hero", scrollTo: 0 },
  { name: "02-manifesto", selector: ".manifesto" },
  { name: "03-cas-usage", selector: ".bullet-list" },
  { name: "04-services", selector: "#services" },
  { name: "05-methode", selector: "#methode" },
  { name: "06-about", selector: ".about" },
  { name: "07-included", selector: ".included" },
  { name: "08-pricing", selector: "#tarifs" },
  { name: "09-launch", selector: ".launch" },
  { name: "10-faq", selector: "#faq" },
  { name: "11-final-cta", selector: ".final-cta" },
  { name: "12-footer", selector: ".footer" },
];

const viewport = { width: 1440, height: 900 };

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport });
const page = await ctx.newPage();
await page.goto(fileUrl);
await page.waitForLoadState("networkidle");
await page.evaluate(() => (document as any).fonts.ready);
await page.waitForTimeout(500);

for (const s of sections) {
  if ("scrollTo" in s) {
    await page.evaluate((y) => window.scrollTo(0, y as number), s.scrollTo);
  } else if ("selector" in s && s.selector) {
    await page.evaluate((sel) => {
      const el = document.querySelector(sel as string);
      if (el) el.scrollIntoView({ block: "start", behavior: "instant" as ScrollBehavior });
    }, s.selector);
  }
  await page.waitForTimeout(250);
  const out = resolve(outDir, `${s.name}.png`);
  await page.screenshot({ path: out, fullPage: false });
  console.log(out);
}

await browser.close();
