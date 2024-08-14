import type { Preset } from 'unocss'
import { definePreset } from 'unocss'
import type { Theme } from 'unocss/preset-mini'

/**
 * @public
 */
export interface ComponentOptions {

  /**
   * The prefix to use for the generated class names.
   *
   * @default "uc"
   */
  prefix?: string
}

export const presetComponents = definePreset((options?: ComponentOptions): Preset<Theme> => {
  const prefix = options?.prefix || 'uc'

  return {
    name: 'unocss-preset-components',
    enforce: 'post',
    preflights: [],
    rules: [],
    shortcuts: {
      btn: 'bg-black',
    },
  }
})

export default presetComponents
