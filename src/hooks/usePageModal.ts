import { ref } from 'vue'
import type PageModal from '@/components/page-modal/page-modal.vue'
type callBackFn = () => void
export function usePageModal(newcb?: callBackFn, editcb?: callBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultFormData = ref({})
  const handleNewClick = () => {
    defaultFormData.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.showDialog()
    }
    newcb && newcb()
  }
  const handleEditClick = (v: any) => {
    defaultFormData.value = { ...v }
    if (pageModalRef.value) {
      pageModalRef.value?.showDialog()
    }
    editcb && editcb()
  }
  return { pageModalRef, defaultFormData, handleNewClick, handleEditClick }
}
