import '../styles/globals.scss'
import type {ReactElement, ReactNode} from "react";
import type {AppProps} from 'next/app'
import type {NextPage} from "next";

import doConsoleEnv from "@/utils/doConsoleEnv";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {AppContext} from "next/dist/pages/_app";
import {IInitData, IMenu, IUserInfo} from "@/types";
import request from "@/plugins/request";
import {CookiesProvider, useCookies} from "react-cookie";
import {parseCookies} from "@/utils/parseCookies";
import {cookiePrefix} from "@/config/constant";
import {getToken} from "@/utils/auth";
import {api} from "@/api";

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

  const [modalStatus, setModalStatus] = useState<boolean>(false)

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [])

  const getLayout = Component.getLayout ?? ((page: ReactElement, initData: IInitData) => page)

  return getLayout(
    (
      <CookiesProvider>
        {
          modalStatus ? (
            <div>test</div>
          ): ''
        }
        <Component {...pageProps} initData={initData} showLoginModal={setModalStatus}/>
      </CookiesProvider>
    ),
    initData
  )

}

async function getMenuList() {
  try {
    const res = await request.get(api.menu)
    return res.data.data || []
  } catch (e) {
    console.log(e)
  }
}

MyApp.getInitialProps = async (context: AppContext) => {
  // const menuList = await getMenuList()
  // const token = getToken(context.ctx.req)
  // const loginStatus = !!token
  return {
    initData: {
      menu: [],
      loginStatus: false
    }
  }
}

export default MyApp
