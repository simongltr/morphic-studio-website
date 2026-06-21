import { chromium } from "playwright";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";

// Screenshot a single section across resolutions (16:9), to check how its
// layout holds up at different widths. No mobile.
// Usage: bun tools/screenshot-section-sizes.ts [selector] [url-or-html-path]
const selector = process.argv[2] ?? "#services";
const target = process.argv[3] ?? "http://localhost:4321/";
const fileUrl = target.startsWith("http") ? target : "file://" + resolve(target);

const label = selector.replace(/[^a-z0-9]+/gi, "") || "section";
const outDir = resolve(
  import.meta.dir,
  "..",
  "dist",
  "screenshots",
  "section-sizes",
);
mkdirSync(outDir, { recursive: true });

// All 16:9, ordered small → large.
const sizes = [
  { w: 1280, h: 720 },
  { w: 1600, h: 900 },
  { w: 1920, h: 1080 },
  { w: 2560, h: 1440 },
  { w: 3200, h: 1800 },
  { w: 3840, h: 2160 },
];

const browser = await chromium.launch();
for (const { w, h } of sizes) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  await page.goto(fileUrl);
  await page.waitForLoadState("networkidle");

  const section = page.locator(selector).first();
  await section.scrollIntoViewIfNeeded();
  const out = resolve(outDir, `${label}-${w}x${h}.png`);
  await section.screenshot({ path: out });
  console.log(out);
  await ctx.close();
}
await browser.close();
