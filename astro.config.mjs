import { defineConfig } from "astro/config";

// Deployment config (site, base) will be set when we wire up GitHub Pages.
export default defineConfig({
  build: { format: "directory" },
});
