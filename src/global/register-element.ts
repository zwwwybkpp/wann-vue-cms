import type { App } from 'vue';
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElAside
} from 'element-plus';
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElRadio,
  ElAlert,
  ElAside
];
export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
