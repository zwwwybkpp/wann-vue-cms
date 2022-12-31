import type { IForm } from '@/base-ui/form/src/type'
export const modalConfig: IForm = {
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
      field: 'password',
      label: '密码',
      type: 'input',
      placeholder: '请输入密码',
      isHidden: false
    },
    {
      field: 'cellphone',
      label: '手机号',
      type: 'input',
      placeholder: '请输入手机号'
    },
    {
      field: 'departmentId',
      label: '选择部门',
      type: 'select',
      placeholder: '请选择部门',
      options: []
    },
    {
      field: 'roleId',
      label: '选择角色',
      type: 'select',
      placeholder: '请选择角色',
      options: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
