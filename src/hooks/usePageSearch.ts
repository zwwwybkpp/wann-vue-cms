import { ref } from 'vue'
import type PageContent from '@/components/page-content/page-content.vue'
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleSearchClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return { pageContentRef, handleResetClick, handleSearchClick }
}
