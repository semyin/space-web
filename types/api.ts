/**
 * @author semyin
 * @description api types
 */

export declare interface IResponse<T> {
  code: number,
  msg: string,
  count?: number | null,
  data: T
}

export declare interface IPage {
  currentPage: number,
  pageSize: number
}

export declare interface IArticlesBaseQuery {
  title?: string,
  articleType?: number,
  status?: number,
  userId?: string
}

export declare type IArticlesQuery = IPage & IArticlesBaseQuery
