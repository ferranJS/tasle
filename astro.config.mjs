import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://ferranJS.github.io",
  base: "/astro-tailwind-landing-page",
  integrations: [tailwind()],
})
