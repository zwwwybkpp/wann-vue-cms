import registerElement from './register-element'
import type { App } from 'vue'

export default function (app: App) {
  app.use(registerElement)
}
