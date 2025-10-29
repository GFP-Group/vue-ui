import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig(({ command }) => {
  // Dev mode: serve playground
  if (command === 'serve') {
    return {
      plugins: [vue(), tailwindcss()],
      root: '.',
      server: {
        open: true,
      },
    }
  }

  // Build mode: build library
  return {
    plugins: [vue()],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'GfpVueUI',
        fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: ['vue', /^vue-icons-plus/],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
      sourcemap: true,
    },
  }
})
