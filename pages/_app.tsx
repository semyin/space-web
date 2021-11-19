import '../styles/globals.scss'
import type {ReactElement, ReactNode} from "react";
import type {AppProps} from 'next/app'
import type {GetServerSideProps, NextPage} from "next";

import doConsoleEnv from "@/utils/doConsoleEnv";
import {useRouter} from "next/router";
import {useEffect} from "react";

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  text: string
}

function MyApp({Component, pageProps, text}: AppPropsWithLayout) {

  doConsoleEnv()

  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [])

  console.log(pageProps, text)

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} text={text}/>)

}

MyApp.getInitialProps = async () => {
  console.log(1)
  return {
    text: '1'
  }
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log(1)
//   return {
//     props: {
//       text: '1'
//     }
//   }
// }

export default MyApp
