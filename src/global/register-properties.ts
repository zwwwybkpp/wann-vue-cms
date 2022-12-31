import type { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'
export default function registerPropertites(app: App) {
  app.config.globalProperties.$filters = {
    formatTime: (value: string) => {
      return formatUtcString(value)
    }
  }
}
