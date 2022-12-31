type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: FormRules[]
  placeholder?: string
  options?: ISelectOptions[]
  otherOptions?: any
  isHidden?: boolean
}
interface ISelectOptions {
  label: string
  value: string | number
}
interface FormRules {
  required?: boolean
  message?: string
  trigger?: string | string[]
  pattern?: any
  enum?: any[]
  validator?: Function
}
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: object
  colLayout?: object
}
