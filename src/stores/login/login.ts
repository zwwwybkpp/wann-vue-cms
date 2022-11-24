import { defineStore } from 'pinia'
import type { LoginStore } from '@/stores/login/type'
import { ref } from 'vue'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/service/login/type'
import localCache from '@/utils/localCache'
import router from '@/router'

export const useLoginStore = defineStore('login', () => {
  const loginStore = ref<LoginStore>({
    token: '',
    userInfo: {},
    userMenus: []
  })

  async function accountLoginAction(payload: IAccount) {
    //实现登录逻辑
    const loginResult = await accountLoginRequest(payload)
    const { id, token } = loginResult.data
    loginStore.value.token = token
    localCache.setCache('token', token)

    //请求用户信息
    const userInfoResult = await requestUserInfoById(id)
    const { data: userInfo } = userInfoResult
    loginStore.value.userInfo = userInfo
    localCache.setCache('userInfo', userInfo)
    //请求用户菜单
    const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
    const { data: userMenus } = userMenusResult
    loginStore.value.userMenus = userMenus
    localCache.setCache('userMenus', userMenus)

    // 跳到首页
    await router.push('/main')
  }

  function loadLocalLogin() {
    const token = localCache.getCache('token')
    if (token) {
      loginStore.value.token = token
    }
    const userInfo = localCache.getCache('userInfo')
    if (userInfo) {
      loginStore.value.userInfo = userInfo
    }
    const userMenus = localCache.getCache('userMenus')
    if (userMenus) {
      loginStore.value.userMenus = userMenus
    }
  }

  return { loginStore, accountLoginAction, loadLocalLogin }
})
