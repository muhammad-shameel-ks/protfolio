// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site: 'https://shameel.barchy.online',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: import.meta.env.PROD ? {
        'react-dom/server': 'react-dom/server.edge',
      } : {},
    },
    build: {
      sourcemap: false
    }
  },
  integrations: [react()]
});
