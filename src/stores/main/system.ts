import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  getPageListData,
  deletePageDataById
} from '@/service/main/system/system'
export const useSystemStore = defineStore('system', () => {
  const systemState: Record<string, any> = ref({
    queryInfo: {},
    userList: [],
    userCount: 0,
    roleList: [],
    roleCount: 0,
    departmentList: [],
    departmentCount: []
  })
  async function getPageListAction(pageName: string, queryInfo: any) {
    const url = `/${pageName}/list`
    systemState.value.queryInfo = queryInfo
    const pageList = await getPageListData(url, queryInfo)
    const { list, totalCount } = await pageList.data
    systemState.value[`${pageName}List`] = list
    systemState.value[`${pageName}Count`] = totalCount
  }

  async function deletePageDataAction(pageName: string, id: string) {
    const pageUrl = `/${pageName}/${id}`
    await deletePageDataById(pageUrl)
    await getPageListAction(pageName, systemState.value.queryInfo)
  }
  return {
    systemState,
    getPageListAction,
    deletePageDataAction
  }
})
