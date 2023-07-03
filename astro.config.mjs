import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

export const base = "/astro-tailwind-landing-0"

// https://astro.build/config
export default defineConfig({
  site: "https://ferranJS.github.io",
  base,
  integrations: [tailwind()],
})
