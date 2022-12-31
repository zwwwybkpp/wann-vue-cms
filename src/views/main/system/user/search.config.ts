import type { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      label: '真实姓名',
      type: 'input',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      label: '手机号',
      type: 'input',
      placeholder: '请输入手机号'
    },
    {
      field: 'enable',
      label: '状态',
      type: 'select',
      placeholder: '请选择状态',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ]
    },
    {
      field: 'createAt',
      label: '创建时间',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间 ',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '90px',
  itemStyle: {
    padding: '5px 40px'
  }
}
