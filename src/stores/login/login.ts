import { defineStore } from 'pinia'
import type { loginState } from '@/stores/login/type'
import { ref } from 'vue'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/service/login/type'
import localCache from '@/utils/localCache'
import router from '@/router'
import { getPageListData } from '@/service/main/system/system'
import { mapMenusToRoutes, mapMenusToPermission } from '@/utils/map-menus'
export const useLoginStore = defineStore('login', () => {
  const loginState = ref<loginState>({
    token: '',
    userInfo: {},
    userMenus: [],
    isAddRoutes: false,
    permission: [],
    entireDdepartment: [],
    entireRole: []
  })

  async function accountLoginAction(payload: IAccount) {
    //实现登录逻辑
    const loginResult = await accountLoginRequest(payload)
    const { id, token } = loginResult.data
    // loginState.value.token = token
    localCache.setCache('token', token)

    //请求用户信息
    const userInfoResult = await requestUserInfoById(id)
    const { data: userInfo } = userInfoResult
    // loginState.value.userInfo = userInfo
    localCache.setCache('userInfo', userInfo)
    //请求用户菜单
    const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
    const { data: userMenus } = userMenusResult
    // loginState.value.userMenus = userMenus
    localCache.setCache('userMenus', userMenus)
    addRouteMenus(userMenus)
    loadLocalLogin()
    // 跳到首页
    await router.push('/main')
  }
  /**
   * 数据持久化
   */
  async function loadLocalLogin() {
    const token = localCache.getCache('token')
    if (token) {
      loginState.value.token = token
    }
    const userInfo = localCache.getCache('userInfo')
    if (userInfo) {
      loginState.value.userInfo = userInfo
    }
    const userMenus = localCache.getCache('userMenus')
    if (userMenus) {
      loginState.value.userMenus = userMenus
      loginState.value.permission = mapMenusToPermission(userMenus)
    }
  }
  /**
   * 注册路由
   * @param userMenus 菜单
   */
  async function addRouteMenus(userMenus: any) {
    await mapMenusToRoutes(userMenus).then(routes => {
      routes.forEach(route => {
        router.addRoute('main', route)
      })
      console.log('注册路由')
    })
    loginState.value.isAddRoutes = true
  }
  async function getInitialDataAction() {
    const departmentResult = await getPageListData('/department/list', {
      offset: 0,
      size: 1000
    })
    const { list: departmentList } = departmentResult.data
    const roleResult = await getPageListData('/role/list', {
      offset: 0,
      size: 1000
    })
    const { list: roleList } = roleResult.data
    loginState.value.entireDdepartment = departmentList
    loginState.value.entireRole = roleList
  }
  return {
    loginState,
    accountLoginAction,
    loadLocalLogin,
    addRouteMenus,
    getInitialDataAction
  }
})
