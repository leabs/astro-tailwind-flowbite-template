import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const owner = "astrojs";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});
