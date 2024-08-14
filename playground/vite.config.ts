import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

const _dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [Vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': path.resolve(_dirname, './src'),
    },
  },
})
