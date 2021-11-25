import '../styles/globals.scss'
import type {ReactElement, ReactNode} from "react";
import type {AppProps} from 'next/app'
import type {NextPage} from "next";

import doConsoleEnv from "@/utils/doConsoleEnv";
import {useRouter} from "next/router";
import {useEffect} from "react";

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {AppContext} from "next/dist/pages/_app";
import UserContext from "@/store/user";
import {IMenu, UserInfo} from "@/types";
import cookie from 'cookie'
import request from "@/plugins/request";
import {serverApi} from "@/api";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  menu: Array<IMenu>,
  userInfo: UserInfo
}

function MyApp({Component, pageProps, menu = [], userInfo, ...other}: AppPropsWithLayout) {

  doConsoleEnv()

  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [])

  const getLayout = Component.getLayout ?? ((page: ReactElement, menu: Array<IMenu>) => page)

  return getLayout(
    (
      <UserContext.Provider value={userInfo}>
        <Component {...pageProps} />
      </UserContext.Provider>
    ),
    menu
  )

}

async function getMenuList() {
  try {
    const res = await request.get(serverApi.menu)
    return res.data.data || []
  } catch (e) {
    console.log(e)
  }
}

MyApp.getInitialProps = async (context: AppContext) => {
  const menuList = await getMenuList()
  const parsedCookie = cookie.parse(context.ctx.req?.headers.cookie || '')
  const {token, userName, loginAccount, pic, status} = parsedCookie
  return {
    menu: menuList,
    userInfo: {
      token, userName, loginAccount, pic, status
    }
  }
}

export default MyApp
