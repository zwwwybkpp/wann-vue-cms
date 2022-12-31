import type { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名',
      type: 'input',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      label: '介绍',
      type: 'input',
      placeholder: '请输入介绍'
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
