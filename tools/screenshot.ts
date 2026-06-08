import { chromium } from "playwright";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";

const target = process.argv[2];
if (!target) {
  console.error("usage: bun run screenshot.ts <path-to-html>");
  process.exit(1);
}

const fileUrl = "file://" + resolve(target);
const outDir = resolve(target, "..", "screenshots");
mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await ctx.newPage();
  await page.goto(fileUrl);
  await page.waitForLoadState("networkidle");
  const out = resolve(outDir, `${vp.name}.png`);
  await page.screenshot({ path: out, fullPage: true });
  console.log(out);
  await ctx.close();
}
await browser.close();
