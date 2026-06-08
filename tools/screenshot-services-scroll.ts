import { chromium } from "playwright";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";

const target = process.argv[2];
if (!target) {
  console.error("usage: bun run screenshot-services-scroll.ts <path-to-html>");
  process.exit(1);
}

const fileUrl = "file://" + resolve(target);
const outDir = resolve(target, "..", "screenshots");
mkdirSync(outDir, { recursive: true });

const viewport = { width: 1440, height: 900 };
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport });
const page = await ctx.newPage();
await page.goto(fileUrl);
await page.waitForLoadState("networkidle");
await page.evaluate(() => (document as any).fonts.ready);
await page.waitForTimeout(800);

const pinTop = await page.evaluate(() => {
  const el = document.querySelector(".services-pin-wrap") as HTMLElement;
  return el ? el.getBoundingClientRect().top + window.scrollY : 0;
});
const pinHeight = await page.evaluate(() => {
  const el = document.querySelector(".services-pin-wrap") as HTMLElement;
  return el ? el.offsetHeight - window.innerHeight : 0;
});

const states = [
  { name: "04a-services-card1", progress: 0.0 },
  { name: "04b-services-card2", progress: 0.5 },
  { name: "04c-services-card3", progress: 1.0 },
];

for (const s of states) {
  const y = pinTop + s.progress * pinHeight;
  await page.evaluate((y) => window.scrollTo({ top: y as number, behavior: "instant" as ScrollBehavior }), y);
  await page.waitForTimeout(300);
  const out = resolve(outDir, `${s.name}.png`);
  await page.screenshot({ path: out, fullPage: false });
  console.log(out);
}

await browser.close();
