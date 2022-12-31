import type { IDataType } from '@/service/type'
import wRequest from '@/service'

/**
 * url /users/list
 * @param url
 * @param queryInfo
 * @returns
 */
export function getPageListData(url: string, queryInfo: any) {
  return wRequest.post<IDataType>({
    url: url,
    data: queryInfo,
    showLoading: true
  })
}
/**
 * url /users/id
 * @param url
 * @returns
 */
export function deletePageDataById(url: string) {
  return wRequest.delete<IDataType>({
    url: url
  })
}
