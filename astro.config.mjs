import { defineConfig } from "astro/config";

// Deployed as a GitHub Pages project site:
//   https://simongltr.github.io/morphic-studio-website/
export default defineConfig({
  site: "https://simongltr.github.io",
  base: "/morphic-studio-website",
  build: { format: "directory" },
});
