import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import localCache from '../utils/localCache'
import appStore from '@/stores'
import { firstMenuPath } from '@/utils/map-menus'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/MainView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
router.beforeEach(async (to, _, next) => {
  const token = localCache.getCache('token')
  if (token) {
    const { useLoginStore } = appStore
    const { addRouteMenus, loginState, getInitialDataAction } = useLoginStore

    if (loginState.isAddRoutes) {
      if (to.path == '/main') next(firstMenuPath)
      else next()
    } else {
      await addRouteMenus(loginState.userMenus)
      getInitialDataAction()
      next({
        path: to.path,
        replace: true
      })
    }
  } else {
    if (to.path == '/login') {
      next()
    } else next('/login')
  }
})

export default router

// const { useLoginStore } = appStore
// const { addRouteMenus, loginState } = useLoginStore
// console.log(to)
// else {
//   if (loginState.isAddRoutes) {
//     console.log(firstMenuPath)
//     return next()
//   } else {
//     await addRouteMenus(loginState.userMenus)
//     next({
//       path: to.path,
//       replace: true
//     })
//   }
// }
