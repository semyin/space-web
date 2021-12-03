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

export declare interface IMenu {
  id: number,
  typeName: string
}

export declare interface ILoginForm {
  loginAccount: string,
  password: string
}

export declare interface IUserInfo {
  userName: string,
  loginAccount: string,
  pic: string,
  status: number,
  token: string
}

export declare interface IInitData {
  menu: IMenu[],
  loginStatus: boolean
}

export declare interface ITagList {
  id: string
  tagId: number
  tagName: string
  targetId: string
}

export declare interface IArticle {
  articleType: number
  brief: string
  coverImg: string
  createdAt: number
  detail: any
  id: string
  status: number
  tagList: ITagList[]
  title: string
  updatedAt: number
  userId: string
  viewNum: number,
  commentNum: number
}

export declare interface IHotArticle {
  id: string,
  title: string,
  coverImg: string,
  viewNum: number,
}
