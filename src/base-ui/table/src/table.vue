<template>
  <div class="wa-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      style="width: 100%"
      v-bind="{ ...tableStyle, ...childrenProps }"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelection"
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="#"
        align="center"
      ></el-table-column>
      <template v-for="tableColum of tableColumns" :key="tableColum.label">
        <el-table-column
          v-bind="tableColum"
          align="center"
          show-overflow-tooltip
        >
          <template #default="scope">
            <slot :name="tableColum.slotName" :row="scope.row">
              {{ scope.row[`${tableColum.prop}`] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <div class="pagination">
        <el-pagination
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[2, 10, 20, 30]"
          background
          layout="total, prev, pager, next, sizes"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ITableColumn } from './type'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelection: {
    type: Boolean,
    default: false
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  listData: {
    type: Array
  },
  listCount: {
    type: Number,
    default: 0
  },
  tableColumns: {
    type: Array as PropType<ITableColumn[]>
  },
  tableStyle: {
    type: Object,
    default: () => ({
      border: true
    })
  },
  childrenProps: {
    type: Object
  },
  page: {
    type: Object,
    default: () => ({
      currentPage: 1,
      pageSize: 10
    })
  }
})
const emits = defineEmits(['selectionChange', 'update:page'])
const handleSelectionChange = (value: any) => {
  console.log(value)
  emits('selectionChange', value)
}
const handleSizeChange = (pageSize: number) => {
  emits('update:page', { ...props.page, pageSize })
}
const handleCurrentChange = (currentPage: number) => {
  emits('update:page', { ...props.page, currentPage })
}
</script>

<style lang="scss">
.wa-table {
  .el-table .el-table__cell {
    z-index: auto;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    .title {
      text-align: left;

      font-weight: 600;
      font-size: larger;
    }
    .handler {
      text-align: right;
    }
  }
  .footer {
    padding: 10px;
    display: flex;
    justify-content: right;
    .el-input {
      width: 100px;
      font-size: 14px;
    }
  }
}
.el-select-dropdown__item {
  font-size: 14px;
  padding-left: 15px;
}
</style>
