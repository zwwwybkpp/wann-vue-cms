import type { App } from 'vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElAside,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink
} from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElRadio,
  ElAlert,
  ElAside,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink
]
export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
