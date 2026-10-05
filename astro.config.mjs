// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://boda-araceli-y-enrique-2026.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});