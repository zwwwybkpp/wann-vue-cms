import { useSystemStore } from '@/stores/main/system'
import { useLoginStore } from '@/stores/login/login'

interface IAppStore {
  useLoginStore: ReturnType<typeof useLoginStore>
  useSystemStore: ReturnType<typeof useSystemStore>
}

const appStore: IAppStore = {} as IAppStore

export const registerStore = () => {
  appStore.useLoginStore = useLoginStore()
  appStore.useSystemStore = useSystemStore()
}

export const setupStore = () => {
  appStore.useLoginStore.loadLocalLogin()
}

export default appStore
