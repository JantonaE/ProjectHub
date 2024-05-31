import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";
import basicSsl from '@vitejs/plugin-basic-ssl'


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  }
});