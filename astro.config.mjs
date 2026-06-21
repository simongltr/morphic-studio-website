import { defineConfig } from "astro/config";
import icon from "astro-icon";

// Deployed on GitHub Pages under the custom domain morphicstudio.fr,
// so the site serves at the domain root (no base path).
export default defineConfig({
  site: "https://morphicstudio.fr",
  build: { format: "directory" },
  integrations: [icon()],
});
