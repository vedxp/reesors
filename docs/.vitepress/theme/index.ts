import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

import ReloadPrompt from './components/ReloadPrompt.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'layout-bottom': () => h(ReloadPrompt),
    })
  },
}

