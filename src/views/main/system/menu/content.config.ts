export const contentConfig = {
  title: '菜单列表',
  opt: '添加菜单',
  showIndexColumn: false,
  showSelection: false,
  showFooter: false,
  tableColumns: [
    {
      prop: 'name',
      label: '菜单名称',
      slotName: 'name',
      'min-width': '10'
    },
    {
      prop: 'type',
      label: '类型',
      slotName: 'type',
      'min-width': '5'
    },
    {
      prop: 'url',
      label: '菜单url',
      slotName: 'url',
      'min-width': '10'
    },
    {
      prop: 'icon',
      label: '菜单icon',
      slotName: 'icon',
      'min-width': '10'
    },
    {
      prop: 'permission',
      label: '按钮权限',
      slotName: 'permission',
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
  childrenProps: {
    'row-key': 'id',
    treeProps: {
      children: 'children'
    }
  },
  tableStyle: {
    border: true
  }
}
