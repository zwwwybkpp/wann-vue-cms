import { useLoginStore } from '@/stores/login/login'

interface IAppStore {
  useLoginStore: ReturnType<typeof useLoginStore>
}
const appStore: IAppStore = {} as IAppStore

export const registerStore = () => {
  appStore.useLoginStore = useLoginStore()
}
export default appStore

export const setupStore = () => {
  appStore.useLoginStore.loadLocalLogin()
}
