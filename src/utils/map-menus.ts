import type { IBreadcrumb } from './../base-ui/breadcrumb/src/type'
import type { RouteRecordRaw } from 'vue-router'
let firstMenuPath: string = ''
export async function mapMenusToRoutes(userMenus: any[]) {
  const routes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = import.meta.glob('../router/main/**/*.ts')
  for (const key in routeFiles) {
    await routeFiles[key]().then((res: any) => {
      allRoutes.push(res.default)
    })
  }
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type == 2) {
        const route = allRoutes.find(v => v.path === menu.url)
        if (route) {
          routes.push(route)
          if (!firstMenuPath) firstMenuPath = route.path
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}

export function pathMapBreadcrumb(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
) {
  for (const menu of userMenus) {
    if (menu.type == 1) {
      const findMenu: any = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name, path: '' })
        breadcrumbs?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type == 2 && menu.url == currentPath) {
      return menu
    }
  }
}
export { firstMenuPath }

export function mapMenusToPermission(userMenus: any[]) {
  const permission: string[] = []
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else {
        permission.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permission
}
