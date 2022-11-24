import type { App } from 'vue'
import {
  ElAlert,
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRadio,
  ElScrollbar,
  ElSubMenu,
  ElTabPane,
  ElTabs
} from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const components = [
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
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElScrollbar,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu
]
export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
