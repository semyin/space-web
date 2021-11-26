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
import {IInitData, IMenu, IUserInfo} from "@/types";
import request from "@/plugins/request";
import {serverApi} from "@/api";
import {CookiesProvider, useCookies} from "react-cookie";
import {parseCookies} from "@/utils/parseCookies";
import {cookiePrefix} from "@/config/constant";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  initData: IInitData
}

function MyApp({Component, pageProps, initData, ...other}: AppPropsWithLayout) {

  doConsoleEnv()

  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [])

  const getLayout = Component.getLayout ?? ((page: ReactElement, initData: IInitData) => page)

  return getLayout(
    (
      <CookiesProvider>
        <Component {...pageProps}/>
      </CookiesProvider>
    ),
    initData
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
  const parsedCookie = parseCookies(context)
  const userInfo = parsedCookie[cookiePrefix]
  let token: any
  try {
    token = JSON.parse(userInfo).token
  } catch (e) {
    token = null
  }
  const loginStatus = !!token
  return {
    initData: {
      menu: menuList,
      loginStatus
    }
  }
}

export default MyApp
