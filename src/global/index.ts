import registerElement from './register-element'
import registerPropertites from './register-properties'
import type { App } from 'vue'
export default function (app: App) {
  app.use(registerElement)
  app.use(registerPropertites)
}
