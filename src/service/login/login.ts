import wRequest from '@/service'
import type { IAccount, ILoginResult } from '@/service/login/type'
import type { IDataType } from '../type'
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
export function accountLoginRequest(account: IAccount) {
  return wRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return wRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}
export function requestUserMenusByRoleId(id: number) {
  return wRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
