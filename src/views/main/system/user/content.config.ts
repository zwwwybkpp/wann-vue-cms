export const contentConfig = {
  title: '用户列表',
  opt: '新建用户',
  showIndexColumn: true,
  showSelection: true,
  tableColumns: [
    {
      prop: 'name',
      label: '用户名',
      slotName: 'name',
      'min-width': '10'
    },
    {
      prop: 'realname',
      label: '姓名',
      slotName: 'relaname',
      'min-width': '10'
    },
    {
      prop: 'cellphone',
      label: '手机号',
      slotName: 'cellphone',
      'min-width': '10'
    },
    {
      prop: 'enable',
      label: '状态',
      slotName: 'enable',
      'min-width': '6'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      slotName: 'createAt',
      'min-width': '15'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt',
      'min-width': '15'
    },
    {
      label: '操作',
      slotName: 'operation',
      'min-width': '12'
    }
  ],
  tableStyle: {
    border: true
  }
}
