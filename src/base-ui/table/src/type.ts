export interface ITableColumn {
  prop?: string
  label: string
  slotName?: string
  width?: string
  'min-width'?: string
}
export interface TableStyle {
  border?: boolean
  stripe?: boolean
  height?: number
}
export interface ITable {
  title?: string
  showIndexColumn?: boolean
  showSelection?: boolean
  tableColumns: ITableColumn[]
  tableStyle?: object | TableStyle
}
