import appStore from '@/stores'
const { useLoginStore } = appStore
const loginState = useLoginStore.loginState
export function usePermission(pageName: string, handleName: string) {
  const permission = `system:${pageName}:${handleName}`
  return !!loginState.permission.find((item: string) => item === permission)
}
