// @ts-check
import { defineConfig } from 'astro/config';
import vtbot from 'astro-vtbot';

// https://astro.build/config
export default defineConfig({
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
  integrations: [vtbot()],
});
