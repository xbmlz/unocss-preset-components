import { defineConfig, presetIcons, presetUno } from 'unocss'
import { presetComponents } from 'unocss-preset-components'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.3,
    }),
    presetComponents(),
  ],
})
