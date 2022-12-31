export const contentConfig = {
  title: '角色列表',
  opt: '新建角色',
  showIndexColumn: true,
  showSelection: true,
  tableColumns: [
    {
      prop: 'name',
      label: '角色名',
      slotName: 'name',
      'min-width': '10'
    },
    {
      prop: 'intro',
      label: '介绍',
      slotName: 'intro',
      'min-width': '10'
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
