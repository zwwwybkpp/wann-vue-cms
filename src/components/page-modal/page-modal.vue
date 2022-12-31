<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="添加用户"
      width="30%"
      center
      destroy-on-close
    >
      <wa-form v-bind="modalConfig" v-model="formData"></wa-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleSaveData"> 确 定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import WaForm from '@/base-ui/form'
import { modalConfig } from '@/views/main/system/user/modal.config'

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultFormData: {
    type: Object,
    default: () => {}
  }
})
const formData = ref<any>({})
watch(
  () => props.defaultFormData,
  (newValue: any) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)
const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = !dialogVisible.value
}
const handleSaveData = () => {
  dialogVisible.value = false
  if (Object.keys(props.defaultFormData).length) {
    console.log('edit')
  } else {
    console.log('new')
  }
}
defineExpose({ showDialog })
</script>

<style scoped lang="scss"></style>
