import { defineConfig, loadEnv } from 'vite'
import autoprefixer from 'autoprefixer'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
          about: 'about.html',
        },
      },
    },
    css: {
      devSourcemap: true,
      postcss: {
        plugins: [autoprefixer],
      },
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['mixed-decls'],
        },
      },
    },
    plugins: [
      mkcert(),
      {
        name: 'reload',
        configureServer(server) {
          const {
            ws,
            watcher
          } = server;
          watcher.on('change', file => {
            if (file.endsWith('.html')) {
              ws.send({
                type: 'full-reload',
              });
            }
          });
        },
      },
    ],
    server: {
      https: true,
      strictPort: true,
      port: 5177,
      cors: {
        origin: '*',
      }
    },
  }
})
