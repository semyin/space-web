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
import axios from "axios";
import cookie from 'cookie'

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
  // const cookie = context.ctx.req?.headers.cookie
  console.log('current route is', route)
  console.log(context.router)
  console.log(context.router)
  console.log('执行了')
  const res= await axios.get('http://localhost:4000/api/web/articleTypes')
  const res2= await axios.get('http://localhost:4000/api/admin/articles',{
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyYW5kb21LZXkiOiJiOTQzdmkiLCJzdWIiOiI3NGMxMGZlMDExYWYxMWVhODQwNWJiODJhYTk5Nzc1NiIsImV4cCI6MTYzODM0NjMxOSwiaWF0IjoxNjM3NzQxNTE5fQ.3sKCP91p753vL_Hx712PV9WrVvYyeh4f0JKBJv---VP07od0Zxjf1-C28xoDm18D_zr0pE7B0l95kVes-lCAdQ'
    }
  })
  console.log(res2.data)
  console.log(res.data.data)
  context.ctx.res?.setHeader('semyin', 'yes')
console.log('headers',context.ctx.req?.headers.cookie)
  console.log(cookie.parse(context.ctx.req?.headers.cookie || ''))
  // const res = await getMenuList()
  // http://localhost:4000
  // const menuList = res?.data?.data || []
  // console.log(menuList)
  // fetch('/api/web/articleTypes')
  return {
    menu: res.data.data,
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
