export declare interface IResponse<T> {
  code: number,
  msg: string,
  count?: number | null,
  data: T
}

export declare interface IMenu {
  id: number,
  typeName: string
}

export declare interface LoginForm {
  loginAccount: string,
  password: string
}

export declare interface UserInfo {
  userName: string,
  loginAccount: string,
  pic: string,
  status: number,
  token: string
}