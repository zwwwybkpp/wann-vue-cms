<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @reset-click="handleResetClick"
      @search-click="handleSearchClick"
    >
    </page-search>
    <page-content
      page-name="users"
      :content-config="contentConfig"
      @new-btn-click="handleNewClick"
      @edit-btn-click="handleEditClick"
      ref="pageContentRef"
    >
    </page-content>
    <page-modal
      :modal-config="modalConfigRef"
      ref="pageModalRef"
      :default-form-data="defaultFormData"
    ></page-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'
import { searchFormConfig } from './search.config'
import { contentConfig } from './content.config'
import { modalConfig } from './modal.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import appStore from '@/stores'
const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch()

//pageModal的hook逻辑
const newCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    item => item.field === 'password'
  )
  passwordItem!.isHidden = false
}
const editCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    item => item.field === 'password'
  )
  passwordItem!.isHidden = true
}

const { useLoginStore } = appStore
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find(
    item => item.field === 'departmentId'
  )
  departmentItem!.options = useLoginStore.loginState.entireDdepartment.map(
    (item: any) => {
      return { label: item.name, value: item.id }
    }
  )
  const roleItem = modalConfig.formItems.find(item => item.field === 'roleId')
  roleItem!.options = useLoginStore.loginState.entireRole.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  return modalConfig
})

const { pageModalRef, defaultFormData, handleNewClick, handleEditClick } =
  usePageModal(newCallBack, editCallBack)
</script>

<style scoped lang="scss"></style>
