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
import {getMenuList} from "@/api";

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

MyApp.getInitialProps = async (context: AppContext) => {
  const { route } = context.router
  const cookie = context.ctx.req?.headers.cookie
  console.log('current route is', route)
  const res = await getMenuList()
  const menuList = res?.data?.data || []
  return {
    menu: menuList,
    userInfo: {
      userName: 'semyin',
      loginAccount: '',
      pic: '',
      status: 1,
      token: ''
    }

  }
}

export default MyApp
