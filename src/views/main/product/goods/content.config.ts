export const contentConfig = {
  title: '商品列表',
  opt: '添加商品',
  showIndexColumn: true,
  showSelection: true,
  tableColumns: [
    {
      prop: 'name',
      label: '商品名称',
      slotName: 'name',
      'min-width': '10'
    },
    {
      prop: 'oldPrice',
      label: '原价格',
      slotName: 'oldPrice',
      'min-width': '6'
    },
    {
      prop: 'newPrice',
      label: '新价格',
      slotName: 'newPrice',
      'min-width': '6'
    },
    {
      prop: 'status',
      label: '状态',
      slotName: 'status',
      'min-width': '5'
    },
    {
      prop: 'imgUrl',
      label: '图片',
      slotName: 'imgUrl',
      'min-width': '10'
    },
    {
      prop: 'inventoryCount',
      label: '库存',
      slotName: 'inventoryCount',
      'min-width': '8'
    },
    {
      prop: 'saleCount',
      label: '销量',
      slotName: 'saleCount',
      'min-width': '8'
    },
    {
      prop: 'favorCount',
      label: '收藏',
      slotName: 'favorCount',
      'min-width': '8'
    },
    {
      prop: 'address',
      label: '地址',
      slotName: 'address',
      'min-width': '8'
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
    }
  ],
  tableStyle: {
    border: true
  }
}
