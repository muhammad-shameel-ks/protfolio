// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://shameel.barchy.online',
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false
    }
  },
  integrations: [react()]
});
