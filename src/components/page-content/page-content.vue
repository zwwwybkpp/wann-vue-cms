<template>
  <div class="page-content">
    <wa-table
      v-bind="contentConfig"
      :list-data="listData"
      :list-Count="listCount"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <div class="header-btns">
          <el-button v-if="isCreate" type="primary" @click="handleNewClick">
            {{ contentConfig.opt }}
          </el-button>
          <!-- <el-button circle>
            <el-icon><Refresh /></el-icon>
          </el-button> -->
        </div>
      </template>
      <template #enable="{ row }">
        <el-tag :type="row.enable == 1 ? 'success' : 'danger'">
          {{ row.enable == 1 ? '启用' : '禁用' }}
        </el-tag>
      </template>
      <template #createAt="{ row }">
        {{ $filters.formatTime(row.createAt) }}
      </template>
      <template #updateAt="{ row }">
        {{ $filters.formatTime(row.update) }}
      </template>
      <template #operation="{ row }">
        <div class="op-btns">
          <el-button
            v-if="isUpdate"
            link
            type="primary"
            @click="handleEditClick(row)"
          >
            <el-icon><Edit /></el-icon>
            <span>编辑</span>
          </el-button>
          <el-button
            v-if="isDelete"
            link
            type="danger"
            @click="handleDeleteClick(row)"
          >
            <el-icon><Delete /></el-icon>
            <span>删除</span>
          </el-button>
        </div>
      </template>
      <template
        v-for="item in otherPropslotName"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </wa-table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import WaTable from '@/base-ui/table'
import appStore from '@/stores'
import { usePermission } from '@/hooks/usePermission'
const props = defineProps({
  contentConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['newBtnClick', 'editBtnClick'])
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')

const { useSystemStore } = appStore
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(pageInfo, () => getPageData())
const getPageData = (queryInfo: any = {}) => {
  if (!isQuery) return
  useSystemStore.getPageListAction(props.pageName, {
    offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
    size: pageInfo.value.pageSize,
    ...queryInfo
  })
}
getPageData()

const listData = computed(
  () => useSystemStore.systemState[`${props.pageName}List`]
)
const listCount = computed(
  () => useSystemStore.systemState[`${props.pageName}Count`]
)
const otherPropslotName = props.contentConfig.tableColumns.filter(
  (item: any) => {
    if (item.slotName === 'status') return false
    if (item.slotName === 'createAt') return false
    if (item.slotName === 'updateAt') return false
    if (item.slotName === 'operation') return false
    return true
  }
)
/**
 * 删除
 * @param item
 */
const handleDeleteClick = (item: any) => {
  console.log(item)
  useSystemStore.deletePageDataAction(props.pageName, item.id)
}

const handleNewClick = () => {
  emits('newBtnClick')
}
const handleEditClick = (item: any) => {
  emits('editBtnClick', item)
}
defineExpose({ getPageData })
</script>

<style scoped lang="scss">
.wa-table {
  border-top: 18px solid #f0f2f5;
}
</style>
