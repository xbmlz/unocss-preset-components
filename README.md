# unocss-preset-components

A preset for [UnoCSS](https://github.com/antfu/unocss) that includes a set of components for common UI elements.

## Usage

Install the preset:

```bash
npm i -D unocss unocss-preset-components
```

Add the preset to your `unocss.config.js`:

```js
import { defineConfig } from 'unocss'
import presetComponents from 'unocss-preset-components'

export default defineConfig({
  presets: [
    presetComponents()
  ]
})
```
