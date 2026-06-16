import { chromium } from "playwright";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";

const target = process.argv[2] ?? "http://localhost:4321/morphic-studio-website/";
const fileUrl = target.startsWith("http") ? target : "file://" + resolve(target);
const outDir = resolve(import.meta.dir, "..", "dist", "screenshots");
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(fileUrl);
await page.waitForLoadState("networkidle");
const out = resolve(outDir, `hero-mobile.png`);
await page.screenshot({ path: out, fullPage: false });
console.log(out);
await ctx.close();
await browser.close();
