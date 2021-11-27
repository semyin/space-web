import {Authorization, cookiePrefix} from "@/config/constant";
import {IncomingMessage} from "http";
import cookie from "cookie";
import {IUserInfo} from "@/types";

interface IAuthHeader {
  [Authorization]?: string
}

type Req = IncomingMessage | undefined

export function getRequestAuthHeader(req: Req): IAuthHeader {

  const token = getToken(req)

  let header: object = {}

  if (token) {
    header = {
      [Authorization]: 'Bearer ' + token
    }
  }

  return header
}

export function getUserInfo(req: Req): IUserInfo {

  const parsedCookie = cookie.parse(req ? req.headers.cookie || '' : document.cookie)

  const userInfoRaw = parsedCookie[cookiePrefix]

  let userInfo: IUserInfo = {
    userName: '',
    loginAccount: '',
    token: '',
    status: 1,
    pic: ''
  }

  try {
    const parsedUserInfo = JSON.parse(userInfoRaw)
    const {userName, loginAccount, token, status, pic} = parsedUserInfo
    userInfo = {
      userName, loginAccount, token, status, pic
    }
  } catch (e) {
    console.log('json parse error')
  }

  return userInfo
}

export function getToken(req: Req): string {
  return getUserInfo(req).token
}

