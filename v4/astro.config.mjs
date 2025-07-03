// @ts-check
import { defineConfig } from 'astro/config';
import vtbot from 'astro-vtbot';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [vtbot(), sitemap()],
  site: 'https://raray.com',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['mixed-decls'],
        },
      },
    }
  },
});
